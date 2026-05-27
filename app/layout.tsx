import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KT Portfolio",
  description: "Engineering lab for Docker, Spring Boot, Web, and Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
