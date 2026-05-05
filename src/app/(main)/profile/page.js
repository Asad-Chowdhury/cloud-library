/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Mail, Pencil, ShieldCheck, UserRound } from "lucide-react";
import { auth } from "@/app/lib/auth";

export const metadata = {
  title: "My Profile | Cloud Library",
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

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <div className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="w-24 rounded-full border border-base-300">
                {user.image ? (
                  <img src={user.image} alt={user.name} />
                ) : (
                  <div className="grid h-full place-items-center bg-primary text-3xl font-bold text-white">
                    {user.name?.slice(0, 1).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="badge badge-primary text-white">Private Route</p>
              <h1 className="mt-3 text-3xl font-black">{user.name}</h1>
              <p className="text-base-content/60">{user.email}</p>
            </div>
          </div>
          <Link href="/profile/edit" className="btn btn-primary text-white">
            <Pencil size={18} />
            Update Information
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-base-200 p-5">
            <UserRound className="text-primary" />
            <p className="mt-4 text-sm text-base-content/55">Name</p>
            <p className="font-bold">{user.name}</p>
          </div>
          <div className="rounded-lg bg-base-200 p-5">
            <Mail className="text-primary" />
            <p className="mt-4 text-sm text-base-content/55">Email</p>
            <p className="font-bold">{user.email}</p>
          </div>
          <div className="rounded-lg bg-base-200 p-5">
            <ShieldCheck className="text-primary" />
            <p className="mt-4 text-sm text-base-content/55">Status</p>
            <p className="font-bold">
              {user.emailVerified ? "Verified" : "Authenticated"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
