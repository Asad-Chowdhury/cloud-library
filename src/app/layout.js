import "./globals.css";

export const metadata = {
  title: "Cloud Library | Home",
  description: "Find Your Next Literary Escape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}
