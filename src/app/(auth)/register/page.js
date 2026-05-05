import Link from "next/link";
import { LockKeyhole, Search } from "lucide-react";

export const metadata = {
  title: "Register | Cloud Library",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl">
      <div className="text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-lg bg-primary text-white">
          <LockKeyhole size={22} />
        </div>
        <h1 className="mt-5 text-3xl font-black">Create Account</h1>
        <p className="mt-2 text-sm text-base-content/60">
          Register for your Cloud Library account.
        </p>
      </div>

      <form className="mt-6 grid gap-4">
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Name</span>
          <input
            type="text"
            required
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Photo URL</span>
          <input
            type="url"
            required
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Email</span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Password</span>
          <input
            type="password"
            required
            minLength={6}
            placeholder="Minimum 6 characters"
            className="input input-bordered w-full"
          />
        </label>
        <Link href="/login" className="btn btn-primary text-white">
          Register
        </Link>
      </form>

      <div className="divider">OR</div>
      <Link href="/" className="btn btn-outline w-full">
        <Search size={18} />
        Continue with Google
      </Link>

      <p className="mt-6 text-center text-sm text-base-content/65">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
