"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Search } from "lucide-react";
import { signIn } from "@/app/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const { error: authError } = await signIn.email({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message || "Login failed. Check your credentials.");
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    setError("");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
      errorCallbackURL: "/login",
    });
  };

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

      <form onSubmit={handleEmailLogin} className="mt-6 grid gap-4">
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            placeholder="Minimum 6 characters"
            className="input input-bordered w-full"
          />
        </label>
        {error && (
          <div className="alert alert-error py-3 text-sm">
            <span>{error}</span>
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary text-white"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="divider">OR</div>
      <button type="button" onClick={handleGoogleLogin} className="btn btn-outline w-full">
        <Search size={18} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-base-content/65">
        New here?{" "}
        <Link href="/register" className="font-bold text-primary">
          Register
        </Link>
      </p>
    </div>
  );
}
