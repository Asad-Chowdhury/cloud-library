import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <h2 className="text-2xl font-black">Cloud Library</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-content/70">
            A modern digital library for discovering, filtering, and borrowing
            books across story, technology, and science collections.
          </p>
          <div className="mt-5 flex gap-3">
            <Link href="https://facebook.com" className="btn btn-circle btn-sm">
              Fb
            </Link>
            <Link href="https://instagram.com" className="btn btn-circle btn-sm">
              Ig
            </Link>
            <Link href="https://github.com" className="btn btn-circle btn-sm">
              Gh
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <nav className="mt-4 grid gap-2 text-sm text-neutral-content/75">
            <Link href="/">Home</Link>
            <Link href="/all-books">All Books</Link>
            <Link href="/profile">My Profile</Link>
            <Link href="/login">Login</Link>
          </nav>
        </div>

        <div>
          <h3 className="font-bold">Contact Us</h3>
          <div className="mt-4 grid gap-3 text-sm text-neutral-content/75">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              hello@cloudlibrary.dev
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              +880 1711 000 000
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-content/60">
        Copyright 2026 Cloud Library. All rights reserved.
      </div>
    </footer>
  );
}
