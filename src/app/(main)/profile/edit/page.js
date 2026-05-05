/* eslint-disable @next/next/no-img-element */

import { headers } from "next/headers";
import { redirect } from "next/navigation";
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
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <div className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl md:p-8">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-18 rounded-full border border-base-300">
              {user.image ? (
                <img src={user.image} alt={user.name} />
              ) : (
                <div className="grid h-full place-items-center bg-primary text-xl font-bold text-white">
                  {user.name?.slice(0, 1).toUpperCase() || "U"}
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              BetterAuth Profile
            </p>
            <h1 className="mt-2 text-3xl font-black">Update Information</h1>
          </div>
        </div>

        <ProfileUpdateForm user={user} />
      </div>
    </section>
  );
}
