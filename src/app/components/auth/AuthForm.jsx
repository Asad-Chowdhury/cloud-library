"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Search } from "lucide-react";

export default function AuthForm({ mode }) {
  const router = useRouter();
  const isLogin = mode === "login";
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (isLogin) {
      router.push("/");
      return;
    }

    router.push("/login");
  };

  const handleGoogle = () => {
    router.push("/");
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-base-300 bg-base-100 p-6 shadow-xl">
      <div className="text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-lg bg-primary text-white">
          <LockKeyhole size={22} />
        </div>
        <h1 className="mt-5 text-3xl font-black">
          {isLogin ? "Login" : "Create Account"}
        </h1>
        <p className="mt-2 text-sm text-base-content/60">
          {isLogin
            ? "Access your digital library profile."
            : "Register for your Cloud Library account."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        {!isLogin && (
          <>
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
          </>
        )}

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

        {error && (
          <div className="alert alert-error py-3 text-sm">
            <span>{error}</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary text-white">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="divider">OR</div>
      <button type="button" onClick={handleGoogle} className="btn btn-outline w-full">
        <Search size={18} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-base-content/65">
        {isLogin ? "New here?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="font-bold text-primary"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </div>
  );
}
