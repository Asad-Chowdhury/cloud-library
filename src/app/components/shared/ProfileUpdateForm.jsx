"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateUser } from "@/app/lib/auth-client";

export default function ProfileUpdateForm({ user }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError("");
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

    toast.success("Profile updated successfully.");
    router.refresh();
  };

  return (
    <form onSubmit={handleUpdate} className="mt-8 grid gap-5">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Name</legend>
        <input
          name="name"
          type="text"
          defaultValue={user.name}
          className="input input-bordered w-full"
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Image URL</legend>
        <input
          name="image"
          type="url"
          defaultValue={user.image || ""}
          className="input input-bordered w-full"
        />
      </fieldset>
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
        {isSubmitting ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
