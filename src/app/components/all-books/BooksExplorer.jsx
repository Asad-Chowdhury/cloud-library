"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { books, categories } from "@/app/data/books";
import BookCard from "./BookCard";

export default function BooksExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory = category === "All" || book.category === category;
      const matchesQuery = book.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit">
        <h2 className="text-lg font-bold">Categories</h2>
        <div className="mt-4 grid gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`btn justify-start ${
                category === item ? "btn-primary text-white" : "btn-ghost"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section>
        <label className="input input-lg w-full border-base-300 shadow-sm">
          <Search size={20} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search books by title"
            aria-label="Search books by title"
          />
        </label>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-base-content/70">
            Showing {filteredBooks.length} book
            {filteredBooks.length === 1 ? "" : "s"}
          </p>
          <p className="badge badge-outline">{category}</p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="mt-10 rounded-lg border border-dashed border-base-300 p-10 text-center">
            <h3 className="text-xl font-bold">No books found</h3>
            <p className="mt-2 text-base-content/60">
              Try another title or category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
