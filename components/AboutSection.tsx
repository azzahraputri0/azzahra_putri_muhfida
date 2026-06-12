import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "Graphic Design",
  "Photography",
  "Content Writing",
  "Director Writing",
  "Video Editing",
];

const stats = [
  {
    value: "25+",
    label: "Project Completed",
  },
  {
    value: "10+",
    label: "Client Worked",
  },
  {
    value: "2+",
    label: "Years Experience",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#c0c0c] px-6 py-24 text-[#C8F04B] font-poppin"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Image Area */}
        <div className="relative flex justify-center">
          <div className="absolute h-90 w-90 rounded-full bg-[#C8F04B]" />

          <div className="relative z-10 h-90 w-90 overflow-hidden rounded-full">
            <img
              src="/azzahra_putri_muhfida/profile.jpeg"
              alt="About"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Skill Tags */}
          <div className="absolute bottom-16 z-20 flex max-w-90 flex-wrap justify-center gap-2 px-4">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`rounded-full px-4 py-2 text-xs font-bold shadow-md ${
                  index % 2 === 0
                    ? "bg-[#014a97] text-white"
                    : "bg-[#014a97] text-white"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div>
          <p className="mb-4 text-sm font-semibold text-[#C8F04B]">
            — About Me
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-[#C8F04B]">
            Who is{" "}
            <span className="italic text-[#C8F04B]">
              Zara?
            </span>
          </h2>

          <p className="mb-8 max-w-xl leading-7 text-white">
            I am a visual creator with interests in graphic design, photography, content writing, directing, and video editing.
            I enjoy transforming ideas into engaging, communicative, and brand-aligned visual content.
          </p>

          {/* <div className="mb-10 grid gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-bold text-[#f5a800]">
                  {item.value}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div> */}

          <div className="flex flex-wrap items-center gap-6">
            {/* <Button className="rounded-full border border-[#f5a800] bg-transparent px-6 py-6 text-white hover:bg-[#f5a800] hover:text-[#1f4b34]">
              Download CV
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5a800] text-[#1f4b34]">
                <ArrowRight size={16} />
              </span>
            </Button> */}

            <p className="font-serif text-3xl italic text-[#f5a800]">
              Zara
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
