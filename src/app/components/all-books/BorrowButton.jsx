"use client";

import { useState } from "react";
import Link from "next/link";
import { BookCheck } from "lucide-react";
import { useSession } from "@/app/lib/auth-client";

export default function BorrowButton() {
  const [message, setMessage] = useState("");
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <span className="loading loading-spinner loading-md" />;
  }

  if (!session?.user) {
    return (
      <Link href="/login" className="btn btn-primary text-white">
        Login to Borrow
      </Link>
    );
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        className="btn btn-primary text-white"
        onClick={() => setMessage("Borrow request confirmed.")}
      >
        <BookCheck size={18} />
        Borrow This Book
      </button>
      {message && (
        <div className="alert alert-success max-w-md py-3 text-sm">
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
