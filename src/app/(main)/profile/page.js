/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  BookMarked,
  CalendarClock,
  Mail,
  Pencil,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { auth } from "@/app/lib/auth";

export const metadata = {
  title: "My Profile",
  description:
    "View your Cloud Library reader profile, account status, and borrowing dashboard.",
};

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { user } = session;
  const createdAt = user.createdAt
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(user.createdAt))
    : "Recently";

  return (
    <section className="bg-base-200 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-xl">
          <div className="bg-neutral px-6 py-8 text-neutral-content md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="avatar">
                  <div className="w-28 rounded-lg border border-white/20 bg-white/10">
                    {user.image ? (
                      <img src={user.image} alt={user.name} />
                    ) : (
                      <div className="grid h-full place-items-center bg-primary text-4xl font-black text-white">
                        {user.name?.slice(0, 1).toUpperCase() || "U"}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="badge badge-primary text-white">
                    Library Member
                  </div>
                  <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                    {user.name}
                  </h1>
                  <p className="mt-2 flex items-center gap-2 text-neutral-content/70">
                    <Mail size={16} />
                    {user.email}
                  </p>
                </div>
              </div>
              <Link href="/profile/edit" className="btn btn-primary text-white">
                <Pencil size={18} />
                Update Information
              </Link>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
            <div>
              <h2 className="text-2xl font-black">Account Overview</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: UserRound,
                    label: "Name",
                    value: user.name,
                  },
                  {
                    icon: ShieldCheck,
                    label: "Status",
                    value: user.emailVerified ? "Verified" : "Authenticated",
                  },
                  {
                    icon: CalendarClock,
                    label: "Member Since",
                    value: createdAt,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-base-300 bg-base-200 p-5"
                  >
                    <item.icon className="text-primary" size={24} />
                    <p className="mt-5 text-sm font-semibold text-base-content/55">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words font-bold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-base-300 p-5">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <BookMarked className="text-primary" size={22} />
                  Borrowing Activity
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-black">0</p>
                    <p className="text-sm text-base-content/60">
                      Active borrows
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">0</p>
                    <p className="text-sm text-base-content/60">Due soon</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">12</p>
                    <p className="text-sm text-base-content/60">
                      Books available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-lg border border-base-300 bg-base-200 p-6">
              <h2 className="text-xl font-black">Reader Quick Actions</h2>
              <div className="mt-5 grid gap-3">
                <Link href="/all-books" className="btn btn-outline justify-start">
                  Browse Catalog
                </Link>
                <Link
                  href="/profile/edit"
                  className="btn btn-outline justify-start"
                >
                  Edit Profile
                </Link>
              </div>
              <div className="mt-6 rounded-lg bg-base-100 p-5">
                <p className="font-bold">Borrowing Tip</p>
                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  Open any book details page to confirm availability and borrow
                  from your authenticated account.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
