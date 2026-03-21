import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이용광 | Data Engineer & AI Agent Developer",
  description:
    "SK쉴더스 4년차 데이터 엔지니어. Databricks, LangGraph, AWS 기반 데이터 플랫폼 및 AI 에이전트 개발.",
  openGraph: {
    title: "이용광 포트폴리오",
    description: "Data Engineer & AI Agent Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
