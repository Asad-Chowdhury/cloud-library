import Link from "next/link";
import {
  ArrowRight,
  Bell,
  BookCheck,
  CalendarClock,
  Library,
  RotateCcw,
  Search,
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
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              Borrowing Flow
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Borrow a book in three clear steps
            </h2>
            <p className="mt-4 leading-7 text-base-content/70">
              Cloud Library keeps the journey focused from discovery to checkout
              so readers can quickly find an available title and reserve it.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Search the Shelf",
                text: "Find books by title and narrow the catalog with Story, Tech, or Science filters.",
              },
              {
                icon: Library,
                title: "Check Availability",
                text: "Review details, author information, category, and how many copies are left before borrowing.",
              },
              {
                icon: BookCheck,
                title: "Borrow Instantly",
                text: "Open a private book page, confirm the borrow action, and keep the reader experience simple.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-lg bg-primary text-white">
                    <item.icon size={24} />
                  </div>
                  <span className="text-3xl font-black text-base-content/10">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-base-content/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:px-8">
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-primary">
            Reader Dashboard
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Track borrowed titles without losing context
          </h2>
          <p className="mt-4 leading-7 text-base-content/70">
            A borrowing platform is more than a catalog. Readers need quick
            visibility into active borrows, return timing, and profile details
            that keep the library account accurate.
          </p>
          <Link href="/profile" className="btn btn-primary mt-6 text-white">
            View My Profile
          </Link>
        </div>
        <div className="grid gap-4">
          {[
            {
              icon: CalendarClock,
              title: "Due Date Awareness",
              text: "Make return timing visible so readers know what needs attention next.",
            },
            {
              icon: RotateCcw,
              title: "Return and Borrow Again",
              text: "Support a repeat borrowing loop that feels natural for regular readers.",
            },
            {
              icon: Bell,
              title: "Availability Signals",
              text: "Surface copy counts and confirmation messages before readers commit.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-base-300 bg-base-100 p-5 shadow-sm"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-secondary-content">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
