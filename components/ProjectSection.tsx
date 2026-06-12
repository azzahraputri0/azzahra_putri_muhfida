"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

const portfolios = [
  {
    title: "Brawijaya Film Festival 2026",
    category: "Photography",
    year: "2026",
    description:
      "Mini-dokumenter tentang kehidupan pedagang kaki lima di kawasan Kota Lama Surabaya.",
    role: "Videographer, Editor, Color Grading",
    tools: "Sony A7III, Adobe Premiere Pro, DaVinci Resolve",
    type: "image",
    cover: "/azzahra_putri_muhfida/project/Brawijaya Film Festival 2026/nyoba masking-0197.jpg",
    // video: "/portfolio/kota-lama.mp4",
    media: [
      "/azzahra_putri_muhfida/project/Brawijaya Film Festival 2026/nyoba masking-0197.jpg",
      "/azzahra_putri_muhfida/project/Brawijaya Film Festival 2026/nyoba masking-0200.jpg",
    ],
  },
  {
    title: "We Cup 2026",
    category: "Photography",
    year: "2026",
    description:
      "Desain logo, color palette, packaging, dan brand guideline untuk kafe lokal.",
    // role: "Graphic Designer",
    // tools: "Figma, Adobe Illustrator, Photoshop",
    type: "image",
    cover: "/azzahra_putri_muhfida/project/We Cup 2026/IMG_9567.JPG",
    media: [
      "/azzahra_putri_muhfida/project/We Cup 2026/IMG_9567.JPG",
      "/azzahra_putri_muhfida/project/We Cup 2026/IMG_9575.JPG",
      "/azzahra_putri_muhfida/project/We Cup 2026/IMG_9311.JPG",
      "/azzahra_putri_muhfida/project/We Cup 2026/IMG_9090.JPG",
    ],
  },
];

export default function PortfolioMediaSection() {
  const [selected, setSelected] = useState<(typeof portfolios)[0] | null>(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const openModal = (project: (typeof portfolios)[0]) => {
    setSelected(project);
    setActiveMedia(0);
  };

  const nextMedia = () => {
    if (!selected) return;
    setActiveMedia((prev) =>
      prev === selected.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    if (!selected) return;
    setActiveMedia((prev) =>
      prev === 0 ? selected.media.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="bg-[#c0c0c] px-5 py-20 text-[#C8F04B] font-poppin">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#C8F04B]">
            / Portfolio
          </p>
          <h2 className="text-4xl font-bold text-[#C8F04B] mb-3">
            Selected <span className="text-lime-400">Works</span>
          </h2>
          <Button asChild className="rounded-full bg-[#014a97] px-6 text-[#C8F04B] hover:bg-[#c8f04b] hover:text-black border-2 borderfont-bold">
              <Link href="/projects">
                  View My Portfolio
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#c8f04b] text-[#163b2f]">
                <ArrowRight size={16} />
              </span>
              </Link>
            </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolios.map((project) => (
            <button
              key={project.title}
              onClick={() => openModal(project)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#014a97] text-left transition hover:border-lime-400/60"
            >
              <div className="relative h-90 overflow-hidden bg-[#014a97]">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />

                <Badge className="absolute left-5 top-5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1 text-lime-400 text-md">
                  {project.category}
                </Badge>

                {project.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#014a97]">
                      <Play className="ml-1 h-7 w-7 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold">
                  {project.title}
                </h3>

                {/* <p className="mt-3 text-sm leading-6 text-white/50">
                  {project.description}
                </p> */}

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-white/50">{project.year}</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lime-400 transition group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="w-[95vw] max-w-6xl! overflow-y-auto rounded-2xl border-white/10 bg-[#014a97] p-0 text-white">
          {selected && (
            <div className="relative p-6 md:p-8">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-20 text-[#014a97]"
              >
                <X size={22} />
              </button>

              <Badge className="mb-4 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1 text-lime-400 text-md">
                {selected.category}
              </Badge>

              <DialogTitle className="mb-2 font-serif text-3xl font-bold">
                {selected.title}
              </DialogTitle>

              <p className="mb-6 text-sm text-white/50">{selected.year}</p>

              <div className="grid w-full max-w-full gap-6 p-4 sm:p-6 lg:grid-cols-[1.5fr_0.8fr] lg:p-8">
                <div>
                  <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-xl border border-white/10 bg-black">
                    (
                      <img
                        src={selected.media[activeMedia]}
                        alt={selected.title}
                        className="block aspect-video w-full object-cover"
                      />
                    )
                  </div>

                  <div className="mt-4 flex w-full max-w-full items-center gap-3 overflow-hidden">
                    <button
                      onClick={prevMedia}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-lime-400 hover:text-lime-400"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <div className="grid w-full max-w-[300px] grid-cols-2 gap-3 pb-2 sm:max-w-[360px] lg:flex lg:max-w-full lg:overflow-x-auto">
                      {selected.media.map((media, index) => (
                        <button
                          key={media}
                          onClick={() => setActiveMedia(index)}
                          className={`mr-6 h-20 w-28 shrink-0 overflow-hidden rounded-lg border ${
                            activeMedia === index
                              ? "border-lime-400"
                              : "border-white/10"
                          }`}
                        >
                          <img
                            src={media}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={nextMedia}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-lime-400 hover:text-lime-400"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* <div className="border-b border-white/10 pb-5">
                    <h4 className="mb-3 font-serif text-lg font-bold">
                      Tentang Proyek
                    </h4>
                    <p className="text-sm leading-7 text-white/55">
                      {selected.description}
                    </p>
                  </div> */}

                  {/* <div className="border-b border-white/10 pb-5">
                    <h4 className="mb-3 font-serif text-lg font-bold">
                      Peran Saya
                    </h4>
                    <p className="text-sm text-white/55">{selected.role}</p>
                  </div>

                  <div className="border-b border-white/10 pb-5">
                    <h4 className="mb-3 font-serif text-lg font-bold">Tools</h4>
                    <p className="text-sm text-white/55">{selected.tools}</p>
                  </div> */}

                  <div>
                    <h4 className="mb-3 font-serif text-lg font-bold">Tahun</h4>
                    <p className="text-sm text-white/55">{selected.year}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
