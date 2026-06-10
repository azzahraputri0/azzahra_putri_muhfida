"use client";

import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Graphic Design Brand Campaign",
    description:
      "Project desain visual untuk kebutuhan branding, media sosial, dan promosi digital.",
    image: "/project/project_1/images (1).jpg",
    tags: ["Graphic Design", "Branding", "Social Media"],
    detail:
      "Project ini berfokus pada pembuatan identitas visual yang konsisten untuk kebutuhan promosi digital. Desain dibuat dengan pendekatan modern, clean, dan mudah diterapkan di berbagai platform.",
    images: [
      "/project/project_1/images (1).jpg",
      "/project/project_1/images (3).jpg",
      "/project/project_1/images (4).jpg",
    ],
  },
  {
    title: "Photography Product Showcase",
    description:
      "Project fotografi produk dengan konsep visual yang clean dan profesional.",
    image: "/projects/project-2.jpg",
    tags: ["Photography", "Product", "Creative"],
    detail:
      "Project ini menampilkan hasil fotografi produk yang digunakan untuk katalog, media sosial, dan kebutuhan promosi brand.",
    images: [
      "/projects/project-2.jpg",
      "/projects/project-3.jpg",
      "/projects/project-4.jpg",
    ],
  },
  {
    title: "Content Direction Campaign",
    description:
      "Perancangan konsep konten, script, moodboard, dan arahan visual.",
    image: "/projects/project-3.jpg",
    tags: ["Content Writing", "Director", "Campaign"],
    detail:
      "Project ini mencakup proses penyusunan ide, penulisan naskah, penentuan tone visual, hingga arahan produksi konten.",
    images: [
      "/projects/project-3.jpg",
      "/projects/project-1.jpg",
      "/projects/project-4.jpg",
    ],
  },
  {
    title: "Video Editing Social Media",
    description:
      "Editing video pendek untuk kebutuhan reels, ads, dan konten promosi.",
    image: "/projects/project-4.jpg",
    tags: ["Video Editing", "Reels", "Ads"],
    detail:
      "Project ini berfokus pada penyuntingan video dengan alur cerita singkat, transisi dinamis, color grading, dan sound design sederhana.",
    images: [
      "/projects/project-4.jpg",
      "/projects/project-1.jpg",
      "/projects/project-2.jpg",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="bg-[#f7f7f7] px-6 py-24 text-[#163b2f]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#f5a800]">
              — My Portfolio
            </p>

            <h2 className="text-4xl font-bold">
              My Latest{" "}
              <span className="italic text-[#f5a800]">Projects</span>
            </h2>
          </div>

          <Button className="w-fit rounded-full bg-[#014a97] px-6 text-white hover:bg-[#163b2f]">
            View All Projects
            <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5a800] text-[#163b2f]">
              <ArrowRight size={16} />
            </span>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-5 h-72 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full bg-[#014a97] text-white hover:bg-[#f5a800]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>

                <button
                  onClick={() => openModal(project)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#014a97] text-[#f5a800] transition hover:bg-[#f5a800] hover:text-[#163b2f]"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="w-[95vw] max-w-6xl rounded-3xl p-0">
          {selectedProject && (
            <div className="overflow-hidden rounded-3xl bg-white">
              <div className="relative h-105 bg-gray-100">
                <img
                  src={selectedProject.images[activeImage]}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#163b2f] shadow"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#163b2f] shadow"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div className="p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-[#163b2f]">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full bg-[#f5a800] text-[#163b2f]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="mt-5 leading-7 text-gray-500">
                  {selectedProject.detail}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}