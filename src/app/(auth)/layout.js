import Navbar from "../components/shared/NavBar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[calc(100vh-72px)] place-items-center bg-base-200 px-4 py-10">
        {children}
      </main>
    </>
  );
}
