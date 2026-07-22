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
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_FROM_ADDRESS,
      cc: process.env.MAIL_USERNAME,
      replyTo: email,
      subject: `İletişim Formu — ${subject} — ${name}`,
      text: `Yeni iletişim formu mesajı\n\nAd Soyad: ${name}\nFirma/Şirket: ${company || "-"}\nTelefon: ${phone}\nE-Posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      html: `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f6f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#83bd81 0%,#6ba869 100%);padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">Plise Perde</td>
                <td align="right" style="font-size:12px;color:rgba(255,255,255,0.85);font-weight:500;">İletişim Formu</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Subject Bar -->
        <tr>
          <td style="background:#f0f9f0;border-bottom:1px solid #e2e5e9;padding:16px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#5a6878;font-weight:500;">Konu</td>
                <td align="right" style="font-size:14px;color:#404e5e;font-weight:700;">${subject}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;font-size:15px;color:#404e5e;line-height:1.6;">Web sitesi üzerinden yeni bir iletişim mesajı alındı. Müşteri bilgileri aşağıdadır.</p>

            <!-- Info Cards -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td width="50%" style="padding:0 8px 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7;border-radius:10px;border:1px solid #e2e5e9;">
                    <tr><td style="padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;color:#5a6878;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Ad Soyad</p>
                      <p style="margin:0;font-size:14px;color:#404e5e;font-weight:600;">${name}</p>
                    </td></tr>
                  </table>
                </td>
                <td width="50%" style="padding:0 0 12px 8px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7;border-radius:10px;border:1px solid #e2e5e9;">
                    <tr><td style="padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;color:#5a6878;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Firma / Şirket</p>
                      <p style="margin:0;font-size:14px;color:#404e5e;font-weight:600;">${company || "—"}</p>
                    </td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:0 8px 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7;border-radius:10px;border:1px solid #e2e5e9;">
                    <tr><td style="padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;color:#5a6878;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Telefon</p>
                      <p style="margin:0;font-size:14px;color:#404e5e;font-weight:600;">${phone}</p>
                    </td></tr>
                  </table>
                </td>
                <td width="50%" style="padding:0 0 12px 8px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7;border-radius:10px;border:1px solid #e2e5e9;">
                    <tr><td style="padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;color:#5a6878;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">E-Posta</p>
                      <p style="margin:0;font-size:14px;color:#83bd81;font-weight:600;">${email}</p>
                    </td></tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9faf9;border-left:3px solid #83bd81;border-radius:0 10px 10px 0;">
              <tr><td style="padding:18px 20px;">
                <p style="margin:0 0 8px;font-size:11px;color:#5a6878;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Mesaj</p>
                <p style="margin:0;font-size:14px;color:#404e5e;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </td></tr>
            </table>
          </td>
        </tr>

        <!-- Reply Button -->
        <tr>
          <td style="padding:0 32px 28px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#83bd81;border-radius:10px;">
                  <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Müşteriye Yanıt Ver</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5f6f7;border-top:1px solid #e2e5e9;padding:20px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:12px;color:#5a6878;line-height:1.5;">
                  <strong style="color:#404e5e;">Plise Perde</strong> — Özel Ölçü Üretim<br>
                  Esenyalı, Edebali Cd. No:13/C, Pendik/İstanbul<br>
                  <a href="tel:+905403363873" style="color:#83bd81;text-decoration:none;font-weight:600;">0 540 336 38 73</a> ·
                  <a href="https://pliseperde.com" style="color:#83bd81;text-decoration:none;font-weight:600;">pliseperde.com</a>
                </td>
                <td align="right" valign="top" style="font-size:11px;color:#5a6878;">Bu e-posta otomatik<br>oluşturulmuştur.</td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
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
