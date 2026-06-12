const tools = [
  {
    name: "Canva",
    value: "95%",
    logo: "/tools/canva-icon.png",
  },
{
    name: "Figma",
    value: "98%",
    logo: "/tools/figma-icon.png",
  },
  {
    name: "Premiere Pro",
    value: "85%",
    logo: "/tools/premiere-icon.png",
  },
  {
    name: "Lightroom",
    value: "88%",
    logo: "/tools/lightroom-icon.png",
  },
  {
    name: "CapCut",
    value: "92%",
    logo: "/tools/capcut-icon.png",
  },
  
];

export default function ToolsSection() {
  return (
    <section id="tools" className="bg-[#c0c0c] px-6 py-24 text-[#163b2f] font-poppin">
      <div className="mx-auto max-w-6xl text-center">
        {/* <p className="mb-3 text-sm font-semibold text-[#f5a800]">
          — My Favorite Tools
        </p> */}

        <h2 className="mb-14 text-4xl font-bold leading-tight md:text-5xl text-[#C8F04B]">
          <span className="italic">
            Exploring the Tools
          </span>
          <br />
          Behind My Designs
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool.name} className="text-center">
              <div className="mx-auto mb-5 flex h-44 w-32 flex-col items-center justify-center rounded-full bg-[#C8F04B] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-md">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full  shadow-sm">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#222]">
                  {tool.value}
                </h3>
              </div>

              <p className="text-xl font-semibold text-[#C8F04B]">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
