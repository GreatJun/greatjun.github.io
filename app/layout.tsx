import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "이준호 | Unity Client Developer";
const description =
  "코어 플레이와 인게임 시스템을 구현하고, 데이터·제작 도구·런타임 최적화·모듈형 프레임워크 R&D로 제품의 확장성과 운영 기반까지 다루는 이준호의 포트폴리오입니다.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatjun.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "이준호",
    "GreatJun",
    "Unity",
    "Unity Client Developer",
    "Unity Runtime Systems",
    "게임 클라이언트 개발자",
    "C#",
    "CoreForge",
    "Unity Framework",
    "게임 포트폴리오",
  ],
  openGraph: {
    type: "website",
    url: "/",
    locale: "ko_KR",
    title,
    description,
    siteName: "이준호 Unity Client Developer Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "이준호 Unity Client Developer 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
