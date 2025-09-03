
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          GET IN <span className="text-primary">TOUCH</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          For bookings, collaborations, or just to say hi — reach out to Karla
          Lara and her team.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:bg-primary/80 transition"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
