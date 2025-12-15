"use client";
import Image from "next/image";

export default function Playground() {
  const projects = [
    {
      img: "/images/hims.png",
    },
    {
      img: "/images/smartzer.png",
    },
    {
      img: "/images/bolt.png",
    },
    {
      img: "/images/checkout.png",
    },
  ];

  return (
    <div id="playground" className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 flex flex-col gap-8 sm:gap-10 md:gap-12">
      {/* Section Header */}
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-medium">My Playground</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 ${
              i % 2 === 1 ? "md:mt-8" : ""
            }`}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={proj.img}
                alt="Project Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
