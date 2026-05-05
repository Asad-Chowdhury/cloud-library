import { books } from "@/app/data/books";

export default function Marquee() {
  const text = `New Arrivals: ${books
    .slice(0, 5)
    .map((book) => book.title)
    .join(" | ")} | Special Discount on Memberships | Borrow smarter with Cloud Library`;

  return (
    <section className="overflow-hidden border-y border-base-300 bg-primary py-3 text-primary-content">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.16em]">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  );
}
