import BooksExplorer from "@/app/components/all-books/BooksExplorer";

export const metadata = {
  title: "All Books | Cloud Library",
  description: "Search and filter the Cloud Library catalog.",
};

export default function AllBooksPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-bold uppercase tracking-[0.2em] text-primary">
          Catalog
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">All Books</h1>
        <p className="mt-4 leading-7 text-base-content/70">
          Search by title or use the category sidebar to filter Story, Tech,
          and Science books.
        </p>
      </div>
      <BooksExplorer />
    </section>
  );
}
