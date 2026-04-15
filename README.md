# Hanirum Sourcing Admin

한이룸의 `트렌드 분석 조건 입력 → 데이터 취합 → 세일즈 트렌드 분석` 관리자 콘솔만 따로 분리한 전용 저장소입니다.

## What Lives Here
- `web`: `/sourcing/admin` 운영 화면과 루트 진입 페이지
- `edge-api`: Cloudflare Worker 기반 트렌드 수집/분석 API
- `shared`: 웹과 Worker가 함께 쓰는 공용 타입/상수

## What Was Removed
- `/sourcing` 메인 워크스페이스
- Node 기반 `api`, `worker`
- 소싱 후보 탐색/협상 관련 화면과 서버 코드

## Start
```bash
pnpm install
pnpm --filter @runacademy/shared build
pnpm --filter @runacademy/web dev
```

## Main Route
- Admin console: `http://localhost:3000/sourcing/admin`

## Deploy Notes
- 프론트는 Cloudflare Pages
- 백엔드는 `edge-api/`의 Cloudflare Worker
- Worker 배포 전 `CLOUDFLARE_API_TOKEN` 또는 `wrangler login`이 필요합니다
