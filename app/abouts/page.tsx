import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import ProjectSection from "@/components/ProjectSection";

const socials = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/628525985187",
    label: "WhatsApp",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/@4jeux",
    label: "Instagram",
  },
  {
    icon: FaEnvelope,
    href: "mailto:azzahramuhfida@gmail.com",
    label: "Email",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/azzahramuhfida",
    label: "LinkedIn",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#163b2f] overflow-hidden font-poppin animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Header />
      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 md:grid-cols-[1fr_1.1fr_0.8fr]">
        {/* Left Content */}
        <div className="z-10">
          <div className="mb-12 h-2 w-28 rounded-full" />

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl text-white">
            I’m{" "}
            <span className="italic text-[#C8F04B] underline decoration-[#f5a800]/40">
              Zara,
            </span>{" "}
            Visual Creator.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white text-md">
            I am a visual creator with interests in graphic design, photography, content writing, directing, and video editing. I enjoy transforming ideas into engaging, communicative, and brand-aligned visual content.
          </p>
        </div>

        {/* Center Image */}
        <div className="relative z-0 h-120 flex items-end justify-center">
          <img
            src="/azzahra_putri_muhfida/profile.png"
            alt="Profile"
            className="max-h-180 w-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="z-10 space-y-10">
          <div className="border-b border-white/10 pb-8">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#C8F04B]">
              About Me
            </h3>

            <p className="mb-8 leading-5 text-white text-md">
              I am an Information Systems student at Brawijaya University with a strong passion for technology, particularly in innovation development and management. Beyond academics, I actively pursue my creative interests. As the project director, I learned how to manage a team, organize schedules, and bring original ideas to life through film.
              I also have a deep interest in digital graphic design, which led me to start freelancing as a creative media. Though I don’t yet have a personal brand, I’ve successfully completed multiple paid design projects. Pursuing a degree in Information Systems is the right path for me to grow the dream business I envision and prepare myself to become a future leader in a tech-focused company.
              In my free time, I enjoy listening to music and playing the piano, helping me maintain a healthy balance between academics and personal life.

            </p>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#C8F04B]">
              Follow Me
            </h3>

            <div className="flex items-center gap-5">
              {socials.map((item) => {
                const Icon = item.icon 
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a800] text-[#163b2f] transition hover:bg-[#163b2f] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              );
              })}
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
