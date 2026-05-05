/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, UserRound } from "lucide-react";
import ProfileUpdateForm from "@/app/components/shared/ProfileUpdateForm";
import { auth } from "@/app/lib/auth";

export const metadata = {
  title: "Update Profile | Cloud Library",
};

export const dynamic = "force-dynamic";

export default async function EditProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <section className="bg-base-200 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/profile" className="btn btn-ghost mb-6">
          <ArrowLeft size={18} />
          Back to Profile
        </Link>

        <div className="overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-xl">
          <div className="bg-neutral px-6 py-8 text-neutral-content md:px-8">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-24 rounded-lg border border-white/20 bg-white/10">
                  {user.image ? (
                    <img src={user.image} alt={user.name} />
                  ) : (
                    <div className="grid h-full place-items-center bg-primary text-3xl font-black text-white">
                      {user.name?.slice(0, 1).toUpperCase() || "U"}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-primary">
                  <UserRound size={18} />
                  Account Settings
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-4xl">
                  Update Profile
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="max-w-2xl leading-7 text-base-content/70">
              Keep your reader identity current. The name and image here are
              used across the navbar, profile page, and authenticated library
              actions.
            </p>
            <ProfileUpdateForm user={user} />
          </div>
        </div>
      </div>
    </section>
  );
}
