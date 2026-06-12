import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import RunningText from "@/components/RunningText";
import Header from "@/components/Header";
import SkillSection from "@/components/SkillSection";
import AboutSection from "@/components/AboutSection";
import ToolSection from "@/components/ToolSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#163b2f] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Navbar */}
      <Header />
      {/* Hero */}
      <section className="relative mx-auto grid w-[90%] max-w-6xl items-center gap-10 py-20 md:grid-cols-2 font-poppin">
        <div>
          <div className="mb-5 inline-block rounded-sm border border-[#014a97] px-3 py-1 text-xl text-white">
            Hello There!
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl text-white">
            I’m{" "}
            <span className="italic text-[#c8f04b] underline decoration-[#f5a800]/40">
              Zara,
            </span>{" "}
            Visual Creator.
          </h1>

          <p className="mt-6 max-w-md text-xl leading-6 text-white">
           A visual creator with 4 years of experience focused in
          graphic design, photography, content & director writing, and video editing.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button asChild className="rounded-full bg-[#014a97] px-6 text-white hover:bg-[#c8f04b] hover:text-black border-2 borderfont-bold">
              <Link href="/projects">
                  View My Portfolio
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#c8f04b] text-[#163b2f]">
                <ArrowRight size={16} />
              </span>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-[#014a97] px-12 text-[#163b2f] text-md font-bold"
            >
              <Link href="/abouts">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative flex justify-center">
          <div className="absolute top-10 h-72 w-72 rounded-full bg-[#f5a800]" />

          <div className="relative z-10 h-120 w-[320px] overflow-hidden rounded-b-full">
            <img
              src="/profile.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-6 top-20 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-[#014a97] text-white shadow-lg">
            <Star className="text-[#f5a800]" />
          </div>

          <div className="absolute bottom-24 left-8 z-20 rounded-full bg-[#014a97] px-5 py-2 text-sm font-medium text-white shadow">
            Graphic Designer
          </div>

          <div className="absolute bottom-36 right-4 z-20 rounded-full bg-[#f5a800] px-5 py-2 text-sm font-medium text-[#163b2f] shadow">
            Photographer
          </div>
        </div>
      </section>

      <RunningText />
      <SkillSection />
      <AboutSection />
      <ToolSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
