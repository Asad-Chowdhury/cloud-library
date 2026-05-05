import Link from "next/link";
import { LockKeyhole, Search } from "lucide-react";

export const metadata = {
  title: "Login | Cloud Library",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl">
      <div className="text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-lg bg-primary text-white">
          <LockKeyhole size={22} />
        </div>
        <h1 className="mt-5 text-3xl font-black">Login</h1>
        <p className="mt-2 text-sm text-base-content/60">
          Access your digital library profile.
        </p>
      </div>

      <form className="mt-6 grid gap-4">
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
        <Link href="/" className="btn btn-primary text-white">
          Login
        </Link>
      </form>

      <div className="divider">OR</div>
      <Link href="/" className="btn btn-outline w-full">
        <Search size={18} />
        Continue with Google
      </Link>

      <p className="mt-6 text-center text-sm text-base-content/65">
        New here?{" "}
        <Link href="/register" className="font-bold text-primary">
          Register
        </Link>
      </p>
    </div>
  );
}
