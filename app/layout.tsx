import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OpenSource Solutions",
    template: "OpenSource Solutions | %s",
  },
  icons: {
    icon: "icon.ico",
  },
  description:
    "Software solutions company available for work March 2024. Scope includes design and development of apps, websites, e-commerce.",
  openGraph: {
    description:
      "Software solutions company available for work March 2024. Scope includes design and development of apps, websites, e-commerce.",
    images: [
      {
        url: "/social.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
