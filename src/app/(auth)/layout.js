export default function AuthLayout({ children }) {
  return (
    <main className="grid min-h-screen place-items-center bg-base-200 px-4 py-10">
      {children}
    </main>
  );
}
