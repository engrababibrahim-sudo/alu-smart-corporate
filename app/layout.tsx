import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALU SMART | Premium Aluminum Solutions",
  description:
    "ALU SMART — Premium aluminum solutions, products, projects and architectural systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
