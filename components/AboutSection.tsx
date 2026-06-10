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
      className="relative overflow-hidden bg-[#014a97] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Image Area */}
        <div className="relative flex justify-center">
          <div className="absolute h-90 w-90 rounded-full bg-[#f5a800]" />

          <div className="relative z-10 h-90 w-90 overflow-hidden rounded-full">
            <img
              src="/about-profile.png"
              alt="About profile"
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
          <p className="mb-4 text-sm font-semibold text-[#f5a800]">
            — About Me
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Who is{" "}
            <span className="italic text-[#f5a800]">
              Azzahra Putri?
            </span>
          </h2>

          <p className="mb-8 max-w-xl leading-7 text-white/70">
            Saya adalah kreator visual yang memiliki ketertarikan pada graphic
            design, photography, content writing, directing, dan video editing.
            Saya senang mengubah ide menjadi konten visual yang menarik,
            komunikatif, dan sesuai dengan kebutuhan brand.
          </p>

          <div className="mb-10 grid gap-6 sm:grid-cols-3">
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
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button className="rounded-full border border-[#f5a800] bg-transparent px-6 py-6 text-white hover:bg-[#f5a800] hover:text-[#1f4b34]">
              Download CV
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5a800] text-[#1f4b34]">
                <ArrowRight size={16} />
              </span>
            </Button>

            <p className="font-serif text-3xl italic text-[#f5a800]">
              Azzahra Putri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}