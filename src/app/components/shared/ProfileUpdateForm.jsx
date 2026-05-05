"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUser } from "@/app/lib/auth-client";

export default function ProfileUpdateForm({ user }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const { error: authError } = await updateUser({
      name: formData.get("name"),
      image: formData.get("image"),
    });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message || "Could not update profile.");
      return;
    }

    setSuccess("Profile updated.");
    router.refresh();
  };

  return (
    <form onSubmit={handleUpdate} className="mt-8 grid gap-5">
      <label className="form-control">
        <span className="label-text mb-2 font-semibold">Name</span>
        <input
          name="name"
          type="text"
          defaultValue={user.name}
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control">
        <span className="label-text mb-2 font-semibold">Image</span>
        <input
          name="image"
          type="url"
          defaultValue={user.image || ""}
          className="input input-bordered w-full"
        />
      </label>
      {error && (
        <div className="alert alert-error py-3 text-sm">
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="alert alert-success py-3 text-sm">
          <span>{success}</span>
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary text-white"
      >
        {isSubmitting ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
