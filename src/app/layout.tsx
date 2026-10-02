import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-student-hub-two.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "rSq0YdmKxqOo1ugdPF3P-f8rXDabREhg7jgkYNeBJFU",
  },

  title: {
    default: "AI Student Hub | AI Tools for College Students",
    template: "%s | AI Student Hub",
  },

  description:
    "Discover practical AI tools for college students across studying, presentations, research, writing, and academic productivity.",

  keywords: [
    "AI tools for college students",
    "AI study tools for students",
    "AI tools for research papers",
    "AI presentation tools for students",
    "student productivity tools",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "AI Student Hub | AI Tools for College Students",
    description:
      "Discover practical AI tools for studying, presentations, research, writing, and college productivity.",
    url: siteUrl,
    siteName: "AI Student Hub",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Student Hub | AI Tools for College Students",
    description:
      "Discover practical AI tools for studying, presentations, research, writing, and college productivity.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="rSq0YdmKxqOo1ugdPF3P-f8rXDabREhg7jgkYNeBJFU"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}