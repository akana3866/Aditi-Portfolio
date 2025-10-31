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
    <div className="px-12 py-9 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-3xl font-medium">My Playground</h2>
            <div className="w-4 h-4 rounded-sm"></div>
          </div>
          <p className="text-lg">
            Just some fun projects because I truly love designing and learning!
          </p>
        </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
