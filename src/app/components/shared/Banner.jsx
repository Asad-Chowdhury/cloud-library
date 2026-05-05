import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-neutral text-neutral-content">
      <Image
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2000"
        alt="Modern library shelves"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/85 to-neutral/35" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <div className="badge badge-primary badge-lg text-white">
            Digital borrowing made simple
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            Find Your Next Read
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-content/75">
            Explore curated story, tech, and science titles from a responsive
            library experience built for fast discovery and secure borrowing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/all-books" className="btn btn-primary btn-lg text-white">
              Browse Now
              <ArrowRight size={20} />
            </Link>
            <Link href="/login" className="btn btn-outline btn-lg text-white">
              Login
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <div className="flex items-center gap-4 rounded-lg bg-neutral/60 p-4">
            <Search className="text-primary" size={28} />
            <div>
              <p className="font-bold">Search by title</p>
              <p className="text-sm text-neutral-content/65">
                Quickly narrow the catalog by book name.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-neutral/60 p-4">
            <ShieldCheck className="text-secondary" size={28} />
            <div>
              <p className="font-bold">Private route ready</p>
              <p className="text-sm text-neutral-content/65">
                Details and profile pages are prepared for BetterAuth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
