import { BookOpenCheck } from "lucide-react";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-base-100 px-4">
      <div className="text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-lg bg-primary text-white">
          <BookOpenCheck size={34} />
        </div>
        <h1 className="mt-5 text-2xl font-black">Loading Cloud Library</h1>
        <p className="mt-2 text-sm text-base-content/60">
          Preparing your digital shelf.
        </p>
        <span className="loading loading-spinner loading-lg mt-6 text-primary" />
      </div>
    </main>
  );
}
