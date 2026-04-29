import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawsar Ahmed - Software Engineer",
  description:
    "Language-agnostic software engineer with a front-to-back trajectory, JS-primary and Python-secondary, exploring DevOps. Competitive builder with multiple National Hackathon Championships.",
  openGraph: {
    title: "Kawsar Ahmed - Software Engineer",
    description:
      "Language-agnostic software engineer with a front-to-back trajectory, JS-primary and Python-secondary, exploring DevOps. Competitive builder with multiple National Hackathon Championships.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawsar Ahmed - Software Engineer",
    description:
      "Language-agnostic software engineer with a front-to-back trajectory, JS-primary and Python-secondary, exploring DevOps. Competitive builder with multiple National Hackathon Championships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable}`}
    >
      <body
        style={{ fontFeatureSettings: '"lnum", "pnum"' }}
      >
        {children}
      </body>
    </html>
  );
}
