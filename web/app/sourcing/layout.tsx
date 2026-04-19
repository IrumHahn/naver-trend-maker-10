import type { ReactNode } from "react";

export const metadata = {
  title: "한이룸의 네이버 트렌드 마법사 1.0",
  description: "네이버 쇼핑인사이트 인기검색어를 조건별로 바로 취합하는 한이룸 전용 도구"
};

export default function SourcingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
