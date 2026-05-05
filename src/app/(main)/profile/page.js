import Image from "next/image";
import Link from "next/link";
import { Mail, Pencil, ShieldCheck, UserRound } from "lucide-react";
import { mockUser } from "@/app/lib/mockAuth";

export const metadata = {
  title: "My Profile | Cloud Library",
};

export default function ProfilePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <div className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="w-24 rounded-full border border-base-300">
                <Image
                  src={mockUser.image}
                  alt={mockUser.name}
                  width={96}
                  height={96}
                />
              </div>
            </div>
            <div>
              <p className="badge badge-primary text-white">Private Route UI</p>
              <h1 className="mt-3 text-3xl font-black">{mockUser.name}</h1>
              <p className="text-base-content/60">{mockUser.email}</p>
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
            <p className="font-bold">{mockUser.name}</p>
          </div>
          <div className="rounded-lg bg-base-200 p-5">
            <Mail className="text-primary" />
            <p className="mt-4 text-sm text-base-content/55">Email</p>
            <p className="font-bold">{mockUser.email}</p>
          </div>
          <div className="rounded-lg bg-base-200 p-5">
            <ShieldCheck className="text-primary" />
            <p className="mt-4 text-sm text-base-content/55">Status</p>
            <p className="font-bold">Authenticated placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
