const items = [
  "Graphic Design",
  "Photography",
  "Content & Director Writing",
  "Video Editing",
];

export default function RunningText() {
  return (
    <section className="relative -mx-4 overflow-hidden bg-[#f5a800] py-4 text-[#163b2f]">
      <div className="flex w-max animate-running-text items-center gap-8 whitespace-nowrap text-xl font-bold">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span>{item}</span>
            <span>*</span>
          </div>
        ))}
      </div>
    </section>
  );
}