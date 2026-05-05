import FastMarquee from "react-fast-marquee";
import { books } from "@/app/data/books";

export default function Marquee() {
  const newArrivals = books.slice(0, 5).map((book) => book.title);

  return (
    <section className="my-5 cursor-pointer overflow-hidden border-y border-base-300 bg-primary py-3 text-primary-content">
      <FastMarquee pauseOnHover={true} speed={55} gradient={false}>
        <span className="mx-5 text-sm font-bold uppercase tracking-[0.16em]">
          New Arrivals: {newArrivals.join(" | ")}
        </span>
        <span className="mx-5 text-sm font-bold uppercase tracking-[0.16em]">
          Special Discount on Memberships
        </span>
        <span className="mx-5 text-sm font-bold uppercase tracking-[0.16em]">
          Borrow smarter with Cloud Library
        </span>
      </FastMarquee>
    </section>
  );
}
