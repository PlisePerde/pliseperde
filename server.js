require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10),
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  name: process.env.MAIL_EHLO_DOMAIN,
});

app.post("/api/contact", async (req, res) => {
  const { name, company, phone, email, subject, message } = req.body;

  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Tüm zorunlu alanlar doldurulmalıdır." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: "Geçerli bir e-posta adresi giriniz." });
  }

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

    return res.json({ ok: true, message: "Mesajınız başarıyla gönderildi." });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ ok: false, error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." });
  }
});

app.use(express.static(path.join(__dirname, "out"), { dotfiles: "allow" }));

app.get("/{*path}", (req, res) => {
  const reqPath = Array.isArray(req.params.path) ? req.params.path.join("/") : req.params.path;
  const fs = require("fs");

  const htmlPath = path.join(__dirname, "out", reqPath, "index.html");
  try {
    if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
      return res.sendFile(htmlPath, { root: __dirname });
    }
  } catch {}

  if (reqPath.startsWith("_next/") || reqPath.includes(".")) {
    return res.status(404).send("Not found");
  }

  const notFoundPath = path.join(__dirname, "out", "404.html");
  try {
    if (fs.existsSync(notFoundPath) && fs.statSync(notFoundPath).isFile()) {
      let html = fs.readFileSync(notFoundPath, "utf8");

      const oldTitle = "Plise Perde | Özel Ölçü Üretim | Hızlı Teslimat - 2 Yıl Garanti";
      const oldDesc = "Plise Perde özel ölçü üretim, ücretsiz keşif, ücretsiz ölçülendirme ve ücretsiz montaj hizmetiyle FENETRE kalitesini yaşam alanlarınıza taşır.";
      const newTitle = "404 — Sayfa Bulunamadı | Plise Perde";
      const newDesc = "Aradığınız sayfa bulunamadı. Plise Perde ürün ve hizmetlerine göz atın, ücretsiz keşif için iletişime geçin.";

      html = html.split(oldTitle).join(newTitle);
      html = html.split(oldDesc).join(newDesc);

      html = html.replace(
        /<meta name="robots" content="index, follow"\s*\/?>/g,
        '<meta name="robots" content="noindex, follow"/>'
      );
      html = html.replace(
        /<meta name="googlebot" content="index, follow[^"]*"\s*\/?>/g,
        '<meta name="googlebot" content="noindex, follow"/>'
      );

      html = html.replace(
        /<link rel="canonical" href="[^"]*"\s*\/?>/g,
        ''
      );
      html = html.replace(
        /<link rel="alternate" hrefLang="tr-TR" href="[^"]*"\s*\/?>/g,
        ''
      );

      html = html.replace(
        /<meta property="og:url" content="[^"]*"\s*\/?>/g,
        ''
      );

      return res.status(404).send(html);
    }
  } catch {}

  res.status(404).send("404 — Sayfa Bulunamadı");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
