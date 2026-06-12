import { ArrowRight, Camera, Clapperboard, PenTool, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    title: "Graphic Design",
    description:
      "Creating visual designs for branding, social media, posters, and promotional materials.",
    icon: Palette,
  },
  {
    title: "Photography",
    description:
      "Producing product photos, portraits, events, and visual content with interesting compositions.",
    icon: Camera,
  },
  {
    title: "Content & Director Writing",
    description:
      "Creating content concepts, scripts, storytelling, and creative direction for digital needs.",
    icon: PenTool,
  },
  {
    title: "Video Editing",
    description:
      "Editing promotional videos, reels, cinematic content, and visual needs for social media.",
    icon: Clapperboard,
  },
];

export default function SkillSection() {
  return (
    <section id="services" className="bg-[#c0c0c] px-6 py-24 text-[#163b2f] font-poppin">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between text-white">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#C8F04B]">
              — Experience
            </p>

            <h2 className="text-4xl font-bold text-[#C8F04B]">
              <span className="italic text-[#C8F04B]">Skills /</span> Experience
            </h2>
          </div>

          {/* <Button className="w-fit rounded-full bg-[#163b2f] px-6 text-white hover:bg-[#0f2d23]">
            View All Skills
            <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5a800] text-[#163b2f]">
              <ArrowRight size={16} />
            </span>
          </Button> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="rounded-3xl bg-[#C8F04B] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#163b2f] shadow-sm">
                  <Icon className="h-7 w-7 text-[#C8F04B]" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {skill.title}
                </h3>

                <p className="mb-5 text-md leading-6 text-[#0c0c0c]">
                  {skill.description}
                </p>

                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#163b2f] hover:text-[#f5a800]"
                >
                  Learn more
                  <ArrowRight size={16} className="text-[#f5a800]" />
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}