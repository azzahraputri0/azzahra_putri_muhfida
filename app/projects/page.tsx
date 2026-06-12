import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetailSection from "@/components/ProjectDetailSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#163b2f] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Navbar */}
      <Header />
      <ProjectDetailSection />
      <Footer />
    </main>
  );
}