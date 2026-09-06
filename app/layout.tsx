import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qijackson1.github.io"),
  title: "Jason Qi · 戚凯杰 | 机器人与具身智能",
  description: "戚凯杰（Jason Qi）的个人主页，聚焦强化学习、模仿学习、外骨骼机器人、具身运动控制与电机控制。",
  icons: { icon: "/avatar.jpg", apple: "/avatar.jpg" },
  openGraph: {
    title: "Jason Qi · 戚凯杰 | 机器人与具身智能",
    description: "强化学习、模仿学习、外骨骼机器人、具身运动控制与电机控制。",
    url: "https://qijackson1.github.io/",
    siteName: "Jason Qi",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jason Qi - Robotics, Embodied AI and Motor Control" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Qi · 戚凯杰 | 机器人与具身智能",
    description: "强化学习、模仿学习、外骨骼机器人、具身运动控制与电机控制。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
