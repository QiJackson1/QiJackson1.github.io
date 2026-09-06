import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qijackson1.github.io"),
  title: "Jason Qi | Robotics & Embodied Intelligence",
  description: "Jason Qi's personal website, featuring research in reinforcement learning, imitation learning, exoskeleton robotics, embodied motion control, and motor control.",
  icons: { icon: "/github-mark.svg" },
  openGraph: {
    title: "Jason Qi | Robotics & Embodied Intelligence",
    description: "Research in reinforcement learning, imitation learning, exoskeleton robotics, embodied motion control, and motor control.",
    url: "https://qijackson1.github.io/",
    siteName: "Jason Qi",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jason Qi - Robotics, Embodied AI and Motor Control" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Qi | Robotics & Embodied Intelligence",
    description: "Research in reinforcement learning, imitation learning, exoskeleton robotics, embodied motion control, and motor control.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
