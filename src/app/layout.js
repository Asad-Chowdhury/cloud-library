import "./globals.css";
import ToastProvider from "./components/shared/ToastProvider";

export const metadata = {
  metadataBase: new URL(
    process.env.BETTER_AUTH_URL || "https://cloud-library.vercel.app"
  ),
  title: {
    default: "Cloud Library | Digital Book Borrowing Platform",
    template: "%s | Cloud Library",
  },
  description:
    "Explore real books, filter by category, and borrow titles digitally with Cloud Library.",
  keywords: [
    "Cloud Library",
    "digital library",
    "book borrowing",
    "online books",
    "Next.js library app",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Cloud Library",
    description:
      "A secure and responsive digital book borrowing platform powered by Next.js, BetterAuth, and MongoDB.",
    url: "/",
    siteName: "Cloud Library",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cloud Library",
    description:
      "Browse, filter, and borrow books from a modern digital library.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
