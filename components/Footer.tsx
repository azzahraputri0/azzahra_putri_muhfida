import {  ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";

const navigation = ["Home", "Services", "About", "Projects", "Blogs", "FAQs"];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pt-20 text-[#163b2f]">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="mb-10 flex flex-col gap-6 border-b pb-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-bold md:text-5xl">
            Let’s <span className="italic text-[#f5a800]">Connect</span> there
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 pb-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5a800] font-bold">
                A
              </div>
              <h3 className="text-2xl font-bold">Azzahra Putri.</h3>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-500">
              Saya adalah kreator visual yang berfokus pada graphic design,
              photography, content writing, directing, dan video editing.
            </p>

            <div className="flex gap-3">
              {[FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a800] text-[#163b2f] transition hover:bg-[#163b2f] hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
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
            <h4 className="mb-5 font-bold text-[#f5a800]">Contact</h4>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>+62 812-3456-7890</li>
              <li>www.example.com</li>
              <li>example@gmail.com</li>
              <li>
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#014a97] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © 2026{" "}
            <span className="text-[#f5a800]">Azzahra Putri.</span> Portfolio Website
          </p>
        </div>
      </div>
    </footer>
  );
}