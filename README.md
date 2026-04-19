# Naver Trend Maker 10

한이룸의 `트렌드 분석 조건 입력 -> 데이터 취합 -> 세일즈 트렌드 분석` 관리자 콘솔만 분리한 저장소입니다.

이 프로젝트는 LLM API를 사용하지 않습니다. 네이버 쇼핑인사이트 월별 인기검색어를 수집하고, Cloudflare Worker와 D1에서 캐시/분석합니다.

## 구성

- `web`: `/sourcing/admin` 화면과 루트 리다이렉트
- `edge-api`: Cloudflare Worker 기반 수집/분석 API
- `shared`: 웹과 Worker가 함께 쓰는 타입/상수

## 왜 개인 Worker가 필요한가요?

공용 Worker를 모두가 같이 쓰면 다른 사용자의 작업 결과가 `작업 결과 보기`에 섞일 수 있습니다. 이 저장소는 각 사용자가 자기 Cloudflare Worker와 D1을 배포한 뒤, 화면의 `API 설정`에 본인 API 주소를 저장해서 쓰는 구조를 권장합니다.

## 로컬 실행

```bash
pnpm install
pnpm --filter @runacademy/shared build
pnpm --filter @runacademy/web dev
```

관리자 화면:

```text
http://localhost:3000/sourcing/admin
```

## Cloudflare Worker / D1 셋업

### 1. Cloudflare 로그인

```bash
pnpm install
pnpm wrangler login
```

### 2. D1 데이터베이스 생성

```bash
pnpm wrangler d1 create naver-trend-maker-db
```

명령 결과에 표시되는 `database_id`를 `edge-api/wrangler.jsonc`의 `REPLACE_WITH_YOUR_D1_DATABASE_ID` 자리에 넣습니다.

### 3. D1 스키마 적용

```bash
pnpm wrangler d1 execute naver-trend-maker-db --remote --file edge-api/schema.sql
```

### 4. Worker 배포

```bash
pnpm wrangler deploy --config edge-api/wrangler.jsonc
```

배포 후 표시되는 Worker URL 뒤에 `/v1`을 붙여 API 주소로 사용합니다.

```text
https://your-worker.your-subdomain.workers.dev/v1
```

### 5. 프론트에서 API 주소 연결

두 방법 중 하나를 사용합니다.

- 화면 상단 `API 설정`에 Worker API 주소를 저장합니다.
- 또는 배포 환경변수에 `NEXT_PUBLIC_API_BASE_URL`을 설정합니다.

```env
NEXT_PUBLIC_API_BASE_URL=https://your-worker.your-subdomain.workers.dev/v1
```

## 참고 문서

- Cloudflare Wrangler: https://developers.cloudflare.com/workers/wrangler/
- Cloudflare D1 시작하기: https://developers.cloudflare.com/d1/get-started/
- D1 Wrangler 명령어: https://developers.cloudflare.com/d1/wrangler-commands/
- Wrangler 설정: https://developers.cloudflare.com/workers/wrangler/configuration/
