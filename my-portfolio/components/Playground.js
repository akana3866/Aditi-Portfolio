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
    <div id="playground" className="px-12 py-9 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-3xl font-medium">My Playground</h2>
            <div className="transition-background-color duration-500">
              <svg 
                width="33" 
                height="32" 
                viewBox="0 0 33 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-foreground"
              >
                <path 
                  d="M15.3597 0.840218C15.7172 -0.101328 17.2628 -0.101329 17.6203 0.840217C18.6837 3.64049 20.4479 7.53723 22.7003 9.78966C24.9528 12.0421 28.8495 13.8063 31.6498 14.8697C32.5913 15.2272 32.5913 16.7728 31.6498 17.1303C28.8495 18.1937 24.9528 19.9579 22.7003 22.2103C20.4479 24.4628 18.6837 28.3595 17.6203 31.1598C17.2628 32.1013 15.7172 32.1013 15.3597 31.1598C14.2963 28.3595 12.5321 24.4628 10.2797 22.2103C8.02722 19.9579 4.13049 18.1937 1.33022 17.1303C0.388669 16.7728 0.388669 15.2272 1.33021 14.8697C4.13049 13.8063 8.02722 12.0421 10.2797 9.78966C12.5321 7.53723 14.2963 3.64049 15.3597 0.840218Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
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
