"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Search } from "lucide-react";
import { signIn, signOut, signUp } from "@/app/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getPasswordErrors = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push("minimum 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("at least one capital letter");
    }

    if (!/\d/.test(password)) {
      errors.push("at least one numeric value");
    }

    return errors;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const passwordErrors = getPasswordErrors(password);

    if (passwordErrors.length > 0) {
      setError(`Password must include ${passwordErrors.join(", ")}.`);
      setIsSubmitting(false);
      return;
    }

    const { error: authError } = await signUp.email({
      name: formData.get("name"),
      email: formData.get("email"),
      password,
      image: formData.get("image"),
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message || "Registration failed.");
      return;
    }

    await signOut();
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    setError("");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
      errorCallbackURL: "/register",
    });
  };

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

      <form onSubmit={handleRegister} className="mt-6 grid gap-4">
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-2 font-semibold">Photo URL</span>
          <input
            name="image"
            type="url"
            required
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full"
          />
        </label>
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
            minLength={8}
            pattern="(?=.*[A-Z])(?=.*\d).{8,}"
            placeholder="Minimum 8 characters"
            className="input input-bordered w-full"
          />
        </label>
        <div className="rounded-lg border border-base-300 bg-base-200 p-4 text-sm text-base-content/70">
          <p className="font-bold text-base-content">Password requirements</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Minimum 8 characters</li>
            <li>At least one capital letter</li>
            <li>At least one numeric value</li>
          </ul>
        </div>
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
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="divider">OR</div>
      <button type="button" onClick={handleGoogleLogin} className="btn btn-outline w-full">
        <Search size={18} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-base-content/65">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
