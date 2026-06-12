import { ArrowRight } from "lucide-react";

const studyData = [
  {
    year: "Agustus 2025 - present",
    level: "Bachelor’s Degree in Information System",
    education: "Brawijaya University,Malang, Indonesia",    
  },
  {
    year: "Juli 2022 - Mei 2025",
    level: "Senior High School in Science (IPA)",    
    education: "SMAN 2 Lumajang, Lumajang, Indonesia",
},
  {
    year: "Juli 2019 - Mei 2022",
    level: "Junior High School",
    education: "SMPN 1 Lumajang, Lumajang, Indonesia",
  },
];

export default function StudySection() {
  return (
    <section id="study" className="bg-[#ffffdbd] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 md:grid-cols-2 md:items-end md:justify-items-center">
          <div>
            <h2 className="mb-14 text-4xl font-bold leading-tight md:text-5xl">
                <span className="italic text-[#f5a800]">
                    My Education
                </span>
                <br />
                Background
            </h2>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl ]">
          <div className="hidden grid-cols-[1fr_1.5fr_2fr] border-b border-[#f5a800]/10 bg-[#f5a800] px-6 py-4 text-lg font-semibold md:grid">
            <div>Year</div>
            <div>Level</div>
            <div>Education</div>
          </div>

          {studyData.map((item, index) => (
            <div
              key={index}
              className="grid gap-3 border-b px-6 py-5 text-lg last:border-b-0 md:grid-cols-[1fr_1.5fr_2fr]"
            >
              <div className="font-bold">{item.year}</div>
              <div className="font-bold">{item.level}</div>
              <div className="font-bold">{item.education}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}