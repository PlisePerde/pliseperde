import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, city, district, product, note } = await req.json();

  if (!name || !phone || !city || !district || !product) {
    return NextResponse.json(
      { ok: false, error: "İsim, telefon, il, ilçe ve ürün seçimi zorunludur." },
      { status: 400 }
    );
  }

  if (name.length < 2 || name.length > 60) {
    return NextResponse.json(
      { ok: false, error: "Geçerli bir isim giriniz." },
      { status: 400 }
    );
  }

  const spamKeywords = ["http", "www", ".com", ".net", "viagra", "casino", "loan", "click here"];
  const checkText = `${name} ${note || ""}`.toLowerCase();
  if (spamKeywords.some((kw) => checkText.includes(kw))) {
    return NextResponse.json(
      { ok: false, error: "Mesajınız uygun değil." },
      { status: 400 }
    );
  }

  const phoneRegex = /^0?\d{10,11}$/;
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  if (!phoneRegex.test(cleanPhone)) {
    return NextResponse.json(
      { ok: false, error: "Geçerli bir telefon numarası giriniz." },
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
      subject: `Siz Biz Arayalım — ${name} — ${cleanPhone}`,
      text: `Yeni geri arama talebi\n\nAd Soyad: ${name}\nTelefon: ${cleanPhone}\nİl: ${city}\nİlçe: ${district}\nİlgilendiği Ürün: ${product}\nNot: ${note || "-"}\n\nKaynak: Ana sayfa hero formu`,
      html: `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#eef1f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef1f4;padding:24px 12px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border:1px solid #dde1e6;">

        <!-- Header -->
        <tr>
          <td style="background:#5a9d57;padding:20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-size:18px;font-weight:bold;color:#ffffff;">Plise Perde</td>
                <td align="right" style="font-size:12px;color:#ffffff;font-weight:normal;">Siz Biz Arayalım</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 20px;font-size:14px;color:#333333;line-height:1.5;">Ana sayfa hero formundan yeni bir geri arama talebi alındı.</p>

            <!-- Info Rows -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">

              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">Ad Soyad</td>
                      <td style="padding:10px 14px;font-size:14px;color:#333;font-weight:bold;">${name}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">Telefon</td>
                      <td style="padding:10px 14px;font-size:14px;color:#5a9d57;font-weight:bold;"><a href="tel:${cleanPhone}" style="color:#5a9d57;text-decoration:none;">${cleanPhone}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">İl</td>
                      <td style="padding:10px 14px;font-size:14px;color:#333;font-weight:bold;">${city}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">İlçe</td>
                      <td style="padding:10px 14px;font-size:14px;color:#333;font-weight:bold;">${district}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">Ürün</td>
                      <td style="padding:10px 14px;font-size:14px;color:#333;font-weight:bold;">${product}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              ${note ? `
              <tr>
                <td style="padding:0 0 12px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8f9;border:1px solid #e4e7ea;border-left:3px solid #5a9d57;">
                    <tr>
                      <td style="padding:10px 14px;width:120px;font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;">Not</td>
                      <td style="padding:10px 14px;font-size:14px;color:#333;line-height:1.5;">${note.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
                    </tr>
                  </table>
                </td>
              </tr>` : ""}

            </table>

            <!-- Call Button -->
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background:#5a9d57;">
                  <a href="tel:${cleanPhone}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">Müşteriyi Ara: ${cleanPhone}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f7f8f9;border-top:1px solid #e4e7ea;padding:16px 24px;">
            <p style="margin:0;font-size:12px;color:#666;line-height:1.5;">
              <strong style="color:#333;">Plise Perde</strong> — Özel Ölçü Üretim<br>
              Esenyalı, Edebali Cd. No:13/C, Pendik/İstanbul<br>
              <a href="tel:+905403363873" style="color:#5a9d57;text-decoration:none;font-weight:bold;">0 540 336 38 73</a> ·
              <a href="https://pliseperde.com" style="color:#5a9d57;text-decoration:none;font-weight:bold;">pliseperde.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ ok: true, message: "Talebiniz alındı. En kısa sürede sizi arayacağız." });
  } catch (err) {
    console.error("Callback mail error:", err);
    return NextResponse.json(
      { ok: false, error: "Talep gönderilemedi. Lütfen WhatsApp'tan yazın." },
      { status: 500 }
    );
  }
}
