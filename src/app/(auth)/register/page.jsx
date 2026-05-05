"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LockKeyhole, Search } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async ({ name, email, image, password }) => {
    setAuthError("");
    setIsSubmitting(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    setIsSubmitting(false);

    if (error) {
      setAuthError(error.message || "Registration failed.");
      return;
    }

    await authClient.signOut();
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    await authClient.signIn.social({
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

      <div className="divider" />

      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
            })}
          />
          {errors.name && (
            <p className="text-sm text-error">{errors.name.message}</p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="url"
            className="input input-bordered w-full"
            placeholder="https://example.com/photo.jpg"
            {...register("image", {
              required: "Photo URL is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Photo URL must start with http:// or https://",
              },
            })}
          />
          {errors.image && (
            <p className="text-sm text-error">{errors.image.message}</p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Address</legend>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email here"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailPattern,
                message:
                  "Email must be valid and include at least 2 characters after the dot.",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-error">{errors.email.message}</p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full pr-12"
              placeholder="Enter password"
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least 1 uppercase letter",
                  hasNumber: (value) =>
                    /[0-9]/.test(value) ||
                    "Password must contain at least 1 number",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/55"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-error">{errors.password.message}</p>
          )}
        </fieldset>

        <div className="rounded-lg border border-base-300 bg-base-200 p-4 text-sm text-base-content/70">
          <p className="font-bold text-base-content">Password requirements</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Minimum 8 characters</li>
            <li>At least one capital letter</li>
            <li>At least one numeric value</li>
          </ul>
        </div>

        {authError && (
          <div className="alert alert-error py-3 text-sm">
            <span>{authError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full text-white"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="divider">OR</div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full"
      >
        <Search size={18} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-base-content/65">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-primary underline">
          Login
        </Link>
      </p>
    </div>
  );
}
