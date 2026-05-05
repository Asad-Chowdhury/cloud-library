import Link from "next/link";
import { BookOpenCheck, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_0.8fr_1fr] md:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-primary text-white">
              <BookOpenCheck size={24} />
            </div>
            <span className="text-2xl font-black">Cloud Library</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-base-content/65">
            Borrow real books from a modern digital shelf. Search the catalog,
            check availability, and manage your reader profile from one place.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="https://facebook.com"
              aria-label="Cloud Library on Facebook"
              className="btn btn-circle btn-outline btn-sm"
            >
              <FaFacebookF size={16} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Cloud Library on Instagram"
              className="btn btn-circle btn-outline btn-sm"
            >
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-base-content/60">
            Explore
          </h3>
          <nav className="mt-5 grid gap-3 text-sm font-medium text-base-content/70">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/all-books" className="hover:text-primary">
              All Books
            </Link>
            <Link href="/profile" className="hover:text-primary">
              My Profile
            </Link>
            <Link href="/login" className="hover:text-primary">
              Login
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-base-content/60">
            Contact Us
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-base-content/70">
            <p className="flex items-center gap-3">
              <Mail size={17} className="text-primary" />
              asad.ami@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={17} className="text-primary" />
              +8801777768700
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-primary" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 px-4 py-4 text-center text-xs font-medium text-base-content/55">
        Copyright 2026 Cloud Library. All rights reserved.
      </div>
    </footer>
  );
}
