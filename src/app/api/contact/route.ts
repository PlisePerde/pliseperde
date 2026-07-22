import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, company, phone, email, subject, message } = await req.json();

  if (!name || !phone || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Tüm zorunlu alanlar doldurulmalıdır." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Geçerli bir e-posta adresi giriniz." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || "587", 10),
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    name: process.env.MAIL_EHLO_DOMAIN,
  });

  try {
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_FROM_ADDRESS,
      replyTo: email,
      subject: `İletişim Formu — ${subject} — ${name}`,
      text: `Yeni iletişim formu mesajı\n\nAd Soyad: ${name}\nFirma/Şirket: ${company || "-"}\nTelefon: ${phone}\nE-Posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #83bd81;">Yeni İletişim Formu Mesajı</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Ad Soyad:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Firma/Şirket:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company || "-"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">E-Posta:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Konu:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td></tr>
          </table>
          <h3 style="color: #333; margin-top: 20px;">Mesaj:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, message: "Mesajınız başarıyla gönderildi." });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { ok: false, error: "Mesaj gönderilemedi. Lütfen WhatsApp'tan yazın." },
      { status: 500 }
    );
  }
}
