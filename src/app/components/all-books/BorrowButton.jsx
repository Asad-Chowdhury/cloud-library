"use client";

import Link from "next/link";
import { BookCheck } from "lucide-react";
import { toast } from "react-toastify";
import { useSession } from "@/app/lib/auth-client";

export default function BorrowButton() {
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
    <button
      type="button"
      className="btn btn-primary text-white"
      onClick={() => toast.success("Borrow request confirmed.")}
    >
      <BookCheck size={18} />
      Borrow This Book
    </button>
  );
}
