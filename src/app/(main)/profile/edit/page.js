import Image from "next/image";
import { mockUser } from "@/app/lib/mockAuth";

export const metadata = {
  title: "Update Profile | Cloud Library",
};

export default function EditProfilePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8">
      <div className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl md:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={mockUser.image}
            alt={mockUser.name}
            width={72}
            height={72}
            className="rounded-full border border-base-300"
          />
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              BetterAuth Ready
            </p>
            <h1 className="mt-2 text-3xl font-black">Update Information</h1>
          </div>
        </div>

        <form className="mt-8 grid gap-5">
          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Name</span>
            <input
              type="text"
              defaultValue={mockUser.name}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <span className="label-text mb-2 font-semibold">Image</span>
            <input
              type="url"
              defaultValue={mockUser.image}
              className="input input-bordered w-full"
            />
          </label>
          <button type="button" className="btn btn-primary text-white">
            Update Information
          </button>
        </form>
      </div>
    </section>
  );
}
