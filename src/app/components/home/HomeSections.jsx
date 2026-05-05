import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { books } from "@/app/data/books";
import BookCard from "@/app/components/all-books/BookCard";

export default function HomeSections() {
  const featuredBooks = books.slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              Featured Books
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Start with reader favorites
            </h2>
          </div>
          <Link href="/all-books" className="btn btn-outline">
            View All
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-base-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-8">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Accounts",
              text: "Prepared for BetterAuth sessions, protected profile routes, and OAuth login.",
            },
            {
              icon: Database,
              title: "MongoDB Ready",
              text: "The UI is structured around data records that can move cleanly into a database.",
            },
            {
              icon: BadgeCheck,
              title: "Fast Borrowing",
              text: "Clear availability states help readers decide what to borrow quickly.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-sm"
            >
              <item.icon className="text-primary" size={30} />
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-base-content/65">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:px-8">
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-primary">
            Reading Plan
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Build a digital shelf that stays organized
          </h2>
          <p className="mt-4 leading-7 text-base-content/70">
            Browse by category, review availability, and move from discovery to
            borrowing without losing context. The profile area is ready for user
            updates once authentication is connected.
          </p>
          <Link href="/all-books" className="btn btn-primary mt-6 text-white">
            Explore Catalog
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Story", "Tech", "Science", "Members"].map((label, index) => (
            <div
              key={label}
              className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-sm"
            >
              <Sparkles className="text-secondary" size={24} />
              <p className="mt-8 text-4xl font-black">
                {index === 3
                  ? "1k+"
                  : books.filter((book) => book.category === label).length}
              </p>
              <p className="mt-2 text-sm font-bold text-base-content/60">
                {label === "Members" ? "Active Readers" : `${label} Books`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
