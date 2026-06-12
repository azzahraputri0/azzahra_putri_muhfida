import {  ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";

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
const navigation = ["Home", "Services", "About", "Projects", "Blogs", "FAQs"];

export default function Footer() {
  return (
    <footer className="bg-[#c0c0c] px-6 pt-20 text-[#163b2f] font-poppin">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="mb-10 flex flex-col gap-6 border-b pb-10 md:flex-row md:items-center md:justify-between text-[#C8F04B]">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let’s <span className="italic text-[#C8F04B]">Connect</span> there
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 pb-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-[#C8F04B]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163b2f] font-bold">
                Z
              </div>
              <h3 className="text-2xl font-bold">Zara.</h3>
            </div>

            <p className="mb-6 text-md leading-6 text-white">
              I am a visual creator with interests in graphic design, photography, content writing, directing, and video editing.
              I enjoy transforming ideas into engaging, communicative, and brand-aligned visual content.
            </p>

            <div className="flex gap-3">
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

          {/* Navigation */}
          {/* <div>
            <h4 className="mb-5 font-bold text-[#f5a800]">Navigation</h4>

            <ul className="space-y-3 text-sm text-gray-500">
              {navigation.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#f5a800]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-bold text-[#C8F04B]">Contact</h4>

            <ul className="space-y-3 text-xl text-white">
              <li>+62 852-5985-5187</li>
              <li>azzahramuhfida@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#014a97] px-6 py-5 text-[#C8F04B]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © 2026{" "}
            <span className="text-[#C8F04B]">Azzahra Putri.</span> Portfolio Website
          </p>
        </div>
      </div>
    </footer>
  );
}