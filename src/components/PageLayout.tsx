import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import BottomNav from "./BottomNav";
import ServiceWorkerRegister from "./ServiceWorkerRegister";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
      <ServiceWorkerRegister />
    </>
  );
}
