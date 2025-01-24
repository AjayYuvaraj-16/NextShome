import Footer from "@/components/Footer";
import Banner, { HomeSlider } from "@/components/Header/banner";
import Header from "@/components/Header/header";

export default function MainLayout({ children, breadcrumb }: { children: any, breadcrumb: string }) {
    return (
        <div className="min-h-screen wrapper">
            <Header />
            {breadcrumb == 'Home' ? <HomeSlider />
                : <Banner breadcrumb={breadcrumb} />}
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}