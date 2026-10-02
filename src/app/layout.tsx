import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI Student Hub | AI Tools for College Students",
    template: "%s | AI Student Hub",
  },
  description:
    "Discover practical AI tools for college students across studying, presentations, research, and academic productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}