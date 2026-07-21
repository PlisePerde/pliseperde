import PageLayout from "@/components/PageLayout";
import PageHeading from "@/components/PageHeading";
import CTASection from "@/components/CTASection";
import JsonLd, { createBreadcrumbJsonLd, createWebPageSchema } from "@/components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politikalarımız",
  description: "Plise Perde politikaları. İade, ödeme, teslimat, garanti, gizlilik, KVKK politikaları.",
  alternates: { canonical: "/politikalarimiz/" },
};

const policies = [
  { slug: "iade-degisim-ve-cayma-hakki", title: "İade, Değişim ve Cayma Hakkı", desc: "İade koşulları, değişim süreci, cayma hakkı." },
  { slug: "yurt-disi-teslimat-ve-gumruk", title: "Yurt Dışı Teslimat ve Gümrük", desc: "Yurt dışı kargo, gümrük, teslimat koşulları." },
  { slug: "odeme-ve-taksit-secenekleri", title: "Ödeme ve Taksit Seçenekleri", desc: "Nakit, kart, taksit, havale ödeme yöntemleri." },
  { slug: "banka-ve-havale-bilgileri", title: "Banka ve Havale Bilgileri", desc: "Banka hesap bilgileri ve havale yöntemi." },
  { slug: "garanti-ve-satis-sonrasi-destek", title: "Garanti ve Satış Sonrası Destek", desc: "2 yıl ürün, 5 yıl motor garantisi, servis." },
  { slug: "satici-bilgileri", title: "Satıcı Bilgileri", desc: "Şirket bilgileri, adres, iletişim, sicil." },
  { slug: "gizlilik-politikasi", title: "Gizlilik Politikası", desc: "KVKK kapsamında kişisel verilerin korunması." },
  { slug: "cerez-politikasi", title: "Çerez Politikası", desc: "Çerez türleri, amaçları, yönetimi." },
  { slug: "acik-riza-metni", title: "Açık Rıza Metni", desc: "KVKK kapsamında açık rıza metni." },
  { slug: "ticari-elektronik-ileri-onayi", title: "Ticari Elektronik İleti Onayı", desc: "Ticari elektronik ileti izni." },
  { slug: "teslimat-ve-kargo", title: "Teslimat ve Kargo", desc: "Kargo süreci, paketleme, teslimat." },
  { slug: "iade-ve-degisim", title: "İade ve Değişim", desc: "İade ve değişim koşulları." },
  { slug: "kvkk-aydinlatma-metni", title: "KVKK Aydınlatma Metni", desc: "Kişisel verilerin işlenmesine dair aydınlatma." },
  { slug: "kullanim-kosullari", title: "Kullanım Koşulları", desc: "Web sitesi kullanım şartları." },
  { slug: "mesafeli-satis-sozlesmesi", title: "Mesafeli Satış Sözleşmesi", desc: "Mesafeli satış koşulları." },
];

export default function PolitikalarimizPage() {
  return (
    <PageLayout>
      <JsonLd
        schemas={[
          createBreadcrumbJsonLd(["Ana Sayfa", "Politikalarımız"]),
          createWebPageSchema({ name: "Politikalarımız", description: "Plise Perde politikaları.", url: "/politikalarimiz" }),
        ]}
      />
      <PageHeading
        breadcrumb={[{ name: "Ana Sayfa", url: "/" }, { name: "Politikalarımız", url: "/politikalarimiz/" }]}
        title="Politikalarımız"
        description="Plise Perde olarak tüm politikalarımızı şeffaf şekilde sunuyoruz. İade, ödeme, teslimat, garanti, gizlilik ve KVKK politikalarını aşağıda inceleyebilirsiniz."
        highlight="Şeffaf · KVKK uyumlu · Tüketici dostu"
      />
      <div className="mx-auto max-w-[1536px] px-4 md:px-6">
        <div className="py-6 md:py-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map((p) => (
              <article key={p.slug}>
                <Link href={`/${p.slug}/`} className="block p-5 border border-brand-border rounded-lg hover:border-brand transition-colors">
                  <h2 className="text-sm font-semibold text-brand-text mb-2">{p.title}</h2>
                  <p className="text-sm text-brand-text-light leading-relaxed">{p.desc}</p>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
      <CTASection />
    </PageLayout>
  );
}
