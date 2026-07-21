import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Üyelik Sözleşmesi",
  description: "Plise Perde üyelik sözleşmesi. Web sitesi üyelik şartları, kullanıcı yükümlülükleri.",
  slug: "uyelik-sozlesmesi",
});

export default function UyelikSozlesmesiPage() {
  return (
    <PageTemplate
      title="Üyelik Sözleşmesi"
      description="Plise Perde üyelik sözleşmesi. Web sitesi üyelik şartları, kullanıcı yükümlülükleri."
      slug="uyelik-sozlesmesi"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Sözleşmelerimiz", url: "/sozlesmelerimiz" }, { name: "Üyelik Sözleşmesi", url: "/uyelik-sozlesmesi" }]}
      h1="Üyelik Sözleşmesi"
      intro="Bu üyelik sözleşmesi, pliseperde.com web sitesi üyelik şartlarını ve kullanıcı yükümlülüklerini açıklar. Üye olarak bu sözleşmeyi kabul etmiş sayılırsınız. Sözleşme, üyelik süreci, kullanıcı hakları, yükümlülükler ve fesih koşullarını kapsar."
      schemaType="article"
      schemaData={{ headline: "Üyelik Sözleşmesi", description: "Web sitesi üyelik şartları." }}
      sections={[
        {
          h2: "Üyelik Süreci",
          paragraphs: ["Üyelik <strong>ücretsizdir</strong> ve kullanıcı bilgileri ile yapılır."],
          list: { type: "ol", items: ["Form doldurma — ad, telefon, e-posta", "Onay — SMS veya e-posta doğrulama", "Hesap açma — giriş yapabilirsiniz", "Profil — sipariş ve keşif takibi"] },
        },
        {
          h2: "Kullanıcı Yükümlülükleri",
          paragraphs: ["Üye <strong>şu yükümlülüklere</strong> sahiptir."],
          list: { type: "ul", items: ["Doğru bilgi — gerçek ad ve telefon", "Hesap güvenliği — şifre koruması", "Yasal kullanım — kötüye kullanım yok", "İçerik — telif ihlali yok", "Üçüncü taraf — hesabı paylaşmayın"] },
        },
        {
          h2: "Üyelik Hakları",
          paragraphs: ["Üye <strong>şu haklara</strong> sahiptir."],
          list: { type: "ul", items: ["Sipariş takibi — online", "Keşif randevusu — online", "Fiyat teklifi — hesaptan", "Garanti takibi — servis kaydı", "İletişim — öncelikli destek"] },
        },
        {
          h2: "Veri Güvenliği",
          paragraphs: ["Üye verileri <strong>SSL ile şifrelenir</strong> ve KVKK kapsamında korunur."],
          list: { type: "ol", items: ["SSL 256-bit şifreleme", "KVKK uyumlu — 6698 sayılı kanun", "Erişim kısıtlı — yetkili personel", "Yedekleme — günlük otomatik"] },
        },
        {
          h2: "Fesih",
          paragraphs: ["Üyelik <strong>istediğiniz zaman</strong> feshedilebilir."],
          list: { type: "ul", items: ["Kullanıcı feshi — hesap silme talebi", "Otomatik fesih — 2 yıl hareketsizlik", "Kötüye kullanım — anında fesih", "Veri silme — fesih sonrası 30 gün"] },
        },
      ]}
      faqItems={[
        { question: "Üyelik ücretli mi?", answer: "Hayır, üyelik tamamen ücretsizdir. Sipariş ve keşif takibi için kullanılır." },
        { question: "Üyeliği nasıl feshederim?", answer: "WhatsApp'tan hesap silme talebi gönderebilirsiniz. Fesih sonrası verileriniz 30 gün içinde silinir." },
        { question: "Üyelik verilerim güvende mi?", answer: "Evet, SSL 256-bit şifreleme ile korunur. KVKK kapsamında işlenir ve yetkili personel erişimi sınırlıdır." },
        { question: "Hesabımı başkasıyla paylaşabilir miyim?", answer: "Hayır, hesabınızı üçüncü kişilerle paylaşmayın. Hesap güvenliğinden siz sorumlusunuz." },
        { question: "Üyelik ne zaman otomatik feshedilir?", answer: "2 yıl boyunca hareketsiz kalan hesaplar otomatik feshedilir. Kötüye kullanım durumunda anında fesih yapılır." },
      ]}
    />
  );
}
