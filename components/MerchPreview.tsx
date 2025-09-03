import Link from "next/link";

export default function MerchPreview() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          OFFICIAL <span className="text-primary">MERCH</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Show your support with exclusive Karla Lara merchandise.
          Stylish, sustainable, and designed for true fans.
        </p>
        <Link
          href="/merch"
          className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-primary/80 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
