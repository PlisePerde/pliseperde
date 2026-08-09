import PageTemplate, { generatePageMetadata } from "@/components/PageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Ücretsiz Numune / Kumaş — Plise Perde",
  description:
    "Ücretsiz numune ve kumaş gönderimi. Plise perde kumaş dokusunu, rengini ve ışık geçirgenliğini evinizde görerek karar verin. Türkiye geneli ücretsiz kargo.",
  slug: "numune",
});

export default function NumunePage() {
  return (
    <PageTemplate
      title="Ücretsiz Numune / Kumaş"
      description="Ücretsiz numune ve kumaş gönderimi. Plise perde kumaş dokusunu, rengini ve ışık geçirgenliğini evinizde görerek karar verin."
      slug="numune"
      breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Hizmetlerimiz", url: "/hizmetlerimiz" }, { name: "Ücretsiz Numune / Kumaş", url: "/numune" }]}
      h1="Ücretsiz Numune / Kumaş"
      intro="Ücretsiz numune ve kumaş gönderimi ile plise perde kumaş dokusunu, rengini ve ışık geçirgenliğini evinizde görerek karar verirsiniz. Ekran renkleri gerçeği yansıtmaz — dokunun, ışık altında inceleyin, sonra karar verin. Türkiye geneli ücretsiz kargo ile adresinize gönderilir. Numune talebi için WhatsApp veya telefondan ulaşmanız yeterli. Karar sonrası sipariş vermek zorunda değilsiniz."
      schemaType="service"
      schemaData={{
        name: "Ücretsiz Numune / Kumaş",
        description: "Plise perde için ücretsiz kumaş ve numune gönderimi. Renk, doku ve ışık geçirgenliği evinizde incelenir.",
        serviceType: "Numune Gönderimi",
        areaServed: "Türkiye",
      }}
      sections={[
        {
          h2: "Ücretsiz Numune Nedir?",
          paragraphs: [
            "Ücretsiz numune, seçtiğiniz plise perde <strong>kumaşının küçük bir parçasının</strong> adresinize gönderilmesidir. <em>Dokuyu, rengi ve ışık geçirgenliğini</em> evinizde, kendi pencerenizin önünde incelersiniz.",
            "Ekran renkleri <u>gerçeği yansıtmaz</u>. Monitör ve telefon ekranında farklı görünen renk, evinizin ışığında başka ton verebilir. Numune ile bu belirsizliği ortadan kaldırırsınız.",
          ],
          table: {
            headers: ["Özellik", "Numune İle", "Numune Yoksa"],
            rows: [
              ["Renk", "Ev ışığında görülür", "Ekranda tahmin edilir"],
              ["Doku", "Ellenir, hissedilir", "Sadece fotoğraf"],
              ["Işık geçirgenliği", "Pencerede test edilir", "Tahmin edilir"],
              ["Karar", "Emin, doğru karar", "Riskli karar"],
            ],
          },
        },
        {
          h2: "Numune Süreci",
          paragraphs: [
            "Numune talebi <strong>3 adımda</strong> tamamlanır. Talep verirsiniz, numune gönderilir ve evinizde incelersiniz. Tüm süreç 2-3 gün içinde tamamlanır.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp veya telefondan numune talep edin",
              "İlgilendiğiniz model ve renkleri belirtin",
              "Numune ücretsiz kargo ile adresinize gönderilir",
              "1-2 gün içinde elinize ulaşır",
              "Ev ışığında, pencerenizin önünde inceleyin",
              "Karar verin — sipariş vermek zorunda değilsiniz",
            ],
          },
        },
        {
          h2: "Hangi Kumaşlar İçin Numune Gönderilir?",
          paragraphs: [
            "Tüm plise perde kumaş tipleri için numune gönderilir. <strong>Standart, honeycomb ve düet</strong> kumaşların her biri farklı doku ve ışık geçirgenliği sunar.",
          ],
          table: {
            headers: ["Kumaş Tipi", "Doku", "Işık Geçirgenliği"],
            rows: [
              ["Standart Plise", "İnce, hafif", "Yüksek — filtreli ışık"],
              ["Honeycomb (Petek)", "Çift katmanlı, dolu", "Düşük — yalıtımlı"],
              ["Düet (Gece Gündüz)", "Çift kumaş, iki katman", "Ayarlanabilir"],
              ["Blackout", "Kalın, opak", "Sıfır — tam karartma"],
              ["Desenli", "Dokulu, figürlü", "Orta — dekoratif"],
            ],
          },
        },
        {
          h2: "Numune ile Karar Aşaması",
          paragraphs: [
            "Numune elinize ulaştığında <strong>pencerenizin önünde</strong> inceleyin. Sabah, öğle ve akşam ışığında renk tonunu kontrol edin. Doku ve kalınlığı elinizle hissedin.",
          ],
          list: {
            type: "ul",
            items: [
              "Sabah ışığında renk tonunu kontrol edin",
              "Öğle ışığında ışık geçirgenliğini test edin",
              "Akşam ışığında sıcaklık tonunu görün",
              "Dokuyu elinizle hissedin — yumuşaklık, kalınlık",
              "Mevcut dekorasyonunuzla uyumunu kontrol edin",
              "Karar verin — emin adımla sipariş verin",
            ],
          },
        },
        {
          h2: "Numune Bölgeleri",
          paragraphs: [
            "Numune gönderimi <strong>Türkiye geneli</strong> yapılır. Ücretsiz kargo ile adresinize gönderilir. Kargo süresi şehre göre değişir.",
          ],
          table: {
            headers: ["Bölge", "Kargo Ücreti", "Süre"],
            rows: [
              ["İstanbul", "Ücretsiz", "1-2 gün"],
              ["Ankara, İzmir, Bursa", "Ücretsiz", "2-3 gün"],
              ["Diğer şehirler", "Ücretsiz", "2-4 gün"],
              ["Yurt dışı", "Ücretli", "Ülkeye göre değişir"],
            ],
          },
        },
        {
          h2: "Nasıl Numune Talep Edilir?",
          paragraphs: [
            "Numune talebi için <strong>WhatsApp veya telefon</strong> ile iletişime geçin. İlgilendiğiniz model ve renkleri belirtin. Numune aynı gün kargoya verilir.",
          ],
          list: {
            type: "ol",
            items: [
              "WhatsApp'tan mesaj gönderin — 0540 336 3873",
              "İlgilendiğiniz modeli belirtin (düz, blackout, honeycomb, düet)",
              "Renk tercihlerinizi söyleyin (açık, orta, koyu)",
              "Adresinizi ve iletişim bilginizi iletin",
              "Numune aynı gün kargoya verilir — ücretsiz",
            ],
          },
        },
      ]}
      faqItems={[
        {
          question: "Numune gerçekten ücretsiz mi?",
          answer: "Evet, numune gönderimi ve kargo tamamen ücretsizdir. Türkiye geneli ücretsiz kargo ile adresinize gönderilir. Numune sonrası sipariş vermezseniz hiçbir ücret ödemezsiniz.",
        },
        {
          question: "Numune ne kadar sürede gelir?",
          answer: "İstanbul'da 1-2 gün, diğer büyük şehirlerde 2-3 gün, tüm Türkiye'de 2-4 gün içinde elinize ulaşır. Talep sonrası aynı gün kargoya verilir.",
        },
        {
          question: "Hangi kumaşlar için numune gönderilir?",
          answer: "Standart plise, honeycomb, düet, blackout ve desenli kumaşların tümü için numune gönderilir. İlgilendiğiniz modeli belirtmeniz yeterli.",
        },
        {
          question: "Numune sonrası sipariş vermek zorunda mıyım?",
          answer: "Hayır, sipariş zorunluluğu yoktur. Numune ile karar verirsiniz. Beğenirseniz sipariş verirsiniz, beğenmezseniz hiçbir ücret ödemezsiniz.",
        },
        {
          question: "Birden fazla renk için numune isteyebilir miyim?",
          answer: "Evet, birden fazla renk ve kumaş tipi için numune talep edebilirsiniz. Karşılaştırmak istediğiniz renkleri belirtmeniz yeterli.",
        },
        {
          question: "Numune nasıl talep edilir?",
          answer: "WhatsApp'tan 0540 336 3873 numarasına mesaj gönderin. İlgilendiğiniz modeli, renk tercihlerinizi ve adresinizi belirtin. Numune aynı gün kargoya verilir.",
        },
      ]}
    />
  );
}
