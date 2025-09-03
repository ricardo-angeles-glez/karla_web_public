// components/AboutPreview.tsx
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ABOUT <span className="text-primary">KARLA</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Karla Lara is a singer-songwriter and producer with over 8 years of
          experience in the music industry. Her soulful voice and innovative
          production have captivated audiences worldwide.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-primary/80 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
