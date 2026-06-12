import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetailSection from "@/components/ProjectDetailSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#163b2f] overflow-hidden">
      {/* Navbar */}
      <Header />
      <ProjectDetailSection />
      <Footer />
    </main>
  );
}