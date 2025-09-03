import Link from "next/link";

export default function MusicPreview() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          LATEST <span className="text-primary">MUSIC</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Discover Karla Lara’s latest tracks blending soulful vocals with
          innovative production. Dive into her world of Organic and Afro House.
        </p>
        <Link
          href="/music"
          className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-primary/80 transition"
        >
          Listen Now
        </Link>
      </div>
    </section>
  );
}
