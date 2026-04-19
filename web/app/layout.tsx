import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "한이룸의 네이버 트렌드 마법사 1.0",
  description: "네이버 쇼핑인사이트 월간 인기검색어를 간단하게 수집하고 확인하는 한이룸 전용 트렌드 도구",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-icon.svg", rel: "apple-touch-icon", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
