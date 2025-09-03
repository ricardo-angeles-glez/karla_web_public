import Link from "next/link";

export default function TourPreview() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          UPCOMING <span className="text-primary">TOUR</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Experience Karla Lara live on stage. From intimate venues to
          international festivals, her shows are unforgettable journeys.
        </p>
        <Link
          href="/tour"
          className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-primary/80 transition"
        >
          View Dates
        </Link>
      </div>
    </section>
  );
}
