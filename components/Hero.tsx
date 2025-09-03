"use client";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80"></div>
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          <span className="text-white">KARLA</span>
          <span className="text-primary"> LARA</span>
        </h1>
        <h2 className="text-xl md:text-3xl mb-8">
          <span className="text-primary">&quot;OH YES SHE KNOWS&quot;</span> • Singer • Songwriter • Producer
        </h2>
        <Link
          href="#music"
          className="bg-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all text-lg"
        >
          LISTEN NOW
        </Link>
      </div>
    </section>
  );
};
