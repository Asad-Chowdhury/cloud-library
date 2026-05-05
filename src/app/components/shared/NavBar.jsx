"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LibraryBig,
  LogIn,
  LogOut,
  Menu,
  User as UserIcon,
} from "lucide-react";
import { signOut, useSession } from "@/app/lib/auth-client";

const links = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/profile", label: "My Profile" },
];

function NavLinks() {
  return links.map((link) => (
    <li key={link.href}>
      <Link href={link.href}>{link.label}</Link>
    </li>
  ));
}

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 px-4 shadow-sm backdrop-blur-xl md:px-8">
      <div className="navbar mx-auto max-w-7xl px-0">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-square"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl"
            >
              <NavLinks />
            </ul>
          </div>
          <Link href="/" className="group flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2 text-white transition-transform group-hover:rotate-6">
              <LibraryBig size={21} />
            </div>
            <span className="text-xl font-black tracking-tight">
              Cloud Library
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-bold leading-none">{user.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-base-content/45">
                  {user.email}
                </p>
              </div>
              <div className="dropdown dropdown-end">
                <button
                  type="button"
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar border border-base-300 hover:border-primary"
                  aria-label="Open user menu"
                >
                  <div className="w-10 rounded-full">
                    {user.image ? (
                      <img src={user.image} alt={user.name} />
                    ) : (
                      <div className="grid h-full place-items-center bg-primary text-sm font-bold text-white">
                        {user.name?.slice(0, 1).toUpperCase() || "U"}
                      </div>
                    )}
                  </div>
                </button>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl"
                >
                  <li>
                    <Link href="/profile">
                      <UserIcon size={16} /> Profile
                    </Link>
                  </li>
                  <li>
                    <button type="button" onClick={handleLogout}>
                      <LogOut size={16} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-primary btn-sm rounded-full px-6 text-white md:btn-md"
            >
              <LogIn size={16} className="md:hidden" />
              <span className="hidden md:inline">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
