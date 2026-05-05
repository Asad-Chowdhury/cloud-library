"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LockKeyhole, Search } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async ({ email, password }) => {
    setAuthError("");
    setIsSubmitting(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    setIsSubmitting(false);

    if (error) {
      setAuthError(error.message || "Login failed. Check your credentials.");
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    await authClient.signIn.social({
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
        <h1 className="mt-5 text-3xl font-black">Login Your Account</h1>
        <p className="mt-2 text-sm text-base-content/60">
          Access your digital library profile.
        </p>
      </div>

      <div className="divider" />

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
          {isSubmitting ? "Logging in..." : "Login"}
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
        Do not have an account yet?{" "}
        <Link href="/register" className="font-bold text-primary underline">
          Register Now
        </Link>
      </p>
    </div>
  );
}
