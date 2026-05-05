import Link from "next/link";
import { BookX, Home, Search } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for is not available in Cloud Library.",
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-base-200 px-4 py-12">
      <section className="w-full max-w-2xl rounded-lg border border-base-300 bg-base-100 p-8 text-center shadow-xl">
        <div className="mx-auto grid size-16 place-items-center rounded-lg bg-primary text-white">
          <BookX size={34} />
        </div>
        <p className="mt-6 font-bold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-base-content/65">
          This shelf is empty. The page may have moved, or the book route you
          opened does not exist in the Cloud Library catalog.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary text-white">
            <Home size={18} />
            Go Home
          </Link>
          <Link href="/all-books" className="btn btn-outline">
            <Search size={18} />
            Browse Books
          </Link>
        </div>
      </section>
    </main>
  );
}
