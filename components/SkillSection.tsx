import { ArrowRight, Camera, Clapperboard, PenTool, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    title: "Graphic Design",
    description:
      "Membuat desain visual untuk kebutuhan branding, media sosial, poster, dan materi promosi.",
    icon: Palette,
  },
  {
    title: "Photography",
    description:
      "Menghasilkan foto produk, portrait, event, dan konten visual dengan komposisi menarik.",
    icon: Camera,
  },
  {
    title: "Content & Director Writing",
    description:
      "Menyusun konsep konten, naskah, storytelling, dan arahan kreatif untuk kebutuhan digital.",
    icon: PenTool,
  },
  {
    title: "Video Editing",
    description:
      "Mengedit video promosi, reels, cinematic content, dan kebutuhan visual untuk media sosial.",
    icon: Clapperboard,
  },
];

export default function SkillSection() {
  return (
    <section id="services" className="bg-white px-6 py-24 text-[#163b2f]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#f5a800]">
              — Experience
            </p>

            <h2 className="text-4xl font-bold">
              <span className="italic text-[#f5a800]">Skills /</span> Experience
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
                className="rounded-3xl bg-[#f7f7f7] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className="h-7 w-7 text-[#163b2f]" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {skill.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-500">
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