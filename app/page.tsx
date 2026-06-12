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
          <div className="mb-5 inline-block rounded-sm border border-[#014a97] px-3 py-1 text-xl text-[#C8F04B]">
            Hello There!
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl text-white">
            I’m{" "}
            <span className="italic text-white">
              Zara,
            </span>{" "}
            Visual Creator.
          </h1>

          <p className="mt-6 max-w-md text-xl leading-6 text-white">
           A visual creator with 4 years of experience focused in
          graphic design, photography, content & director writing, and video editing.
          </p>

          <div className="mt-8 flex items-center gap-4]">
            <Button asChild className="rounded-full bg-[#014a97] px-6 text-[#C8F04B] hover:bg-[#c8f04b] hover:text-black border-2 borderfont-bold">
              <Link href="/projects">
                  View My Portfolio
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#c8f04b] text-[#163b2f]">
                <ArrowRight size={16} />
              </span>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-[#014a97] px-12 text-[#163b2f] text-md font-bold bg-[#C8F04B]"
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

          <div className="relative h-120 w-[320px] overflow-hidden ">
            <img
              src="/azzahra_putri_muhfida/profile.jpeg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
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
