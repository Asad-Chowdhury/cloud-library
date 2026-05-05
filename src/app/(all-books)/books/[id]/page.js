import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BorrowButton from "@/app/components/all-books/BorrowButton";
import { getBookById } from "@/app/data/books";
import { auth } from "@/app/lib/auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = getBookById(id);

  return {
    title: book ? `${book.title} | Cloud Library` : "Book | Cloud Library",
  };
}

export default async function BookDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <Link href="/all-books" className="btn btn-ghost mb-8">
        <ArrowLeft size={18} />
        Back to All Books
      </Link>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-base-300 bg-base-200 shadow-xl">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <div className="badge badge-primary text-white">{book.category}</div>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            {book.title}
          </h1>
          <p className="mt-3 text-xl font-semibold text-base-content/70">
            by {book.author}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-base-content/75">
            {book.description}
          </p>
          <div className="mt-8 rounded-lg border border-base-300 bg-base-100 p-5 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-base-content/55">
              Availability
            </p>
            <p className="mt-2 text-3xl font-black">
              {book.available_quantity} copies left
            </p>
          </div>
          <div className="mt-8">
            <BorrowButton />
          </div>
        </div>
      </div>
    </section>
  );
}
