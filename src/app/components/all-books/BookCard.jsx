import Image from "next/image";
import Link from "next/link";
import { BookOpen, Layers } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <article className="card h-full overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative aspect-[4/3] bg-base-200">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </figure>
      <div className="card-body gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <Layers size={14} />
              {book.category}
            </p>
            <h3 className="mt-2 text-xl font-bold leading-tight">
              {book.title}
            </h3>
            <p className="mt-1 text-sm text-base-content/60">{book.author}</p>
          </div>
          <div className="badge badge-outline whitespace-nowrap">
            {book.available_quantity} left
          </div>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
          {book.description}
        </p>
        <div className="card-actions mt-auto">
          <Link
            href={`/books/${book.id}`}
            className="btn btn-primary btn-block text-white"
          >
            <BookOpen size={17} />
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
