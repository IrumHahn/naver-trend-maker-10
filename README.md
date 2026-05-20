# Naver Trend Maker 10

한이룸의 `트렌드 분석 조건 입력 -> 데이터 취합 -> 세일즈 트렌드 분석` 관리자 콘솔만 분리한 저장소입니다.

이 프로젝트는 LLM API를 사용하지 않습니다. 네이버 쇼핑인사이트 월별 인기검색어를 수집하고, Cloudflare Worker와 D1에서 캐시/분석합니다.

## 구성

- `web`: `/sourcing/admin` 화면과 루트 리다이렉트
- `edge-api`: Cloudflare Worker 기반 수집/분석 API
- `shared`: 웹과 Worker가 함께 쓰는 타입/상수

## 현재 서비스 구조

- 공용 웹 1개
- 공용 Cloudflare Worker API 1개
- 공용 D1 데이터베이스 1개
- 사용자 로그인 후 `owner_user_id` 기준으로 데이터 분리

즉, 이제는 `각 사용자가 자기 Worker를 따로 연결하는 구조`가 아니라 `하나의 공용 서비스`로 배포하는 전제를 기준으로 동작합니다.

## 로컬 실행

```bash
pnpm install
pnpm --filter @runacademy/shared build
pnpm --filter @runacademy/web dev
```

선택 사항:

- 로컬에서 Worker까지 같이 확인하려면 `npx wrangler dev --config edge-api/wrangler.jsonc`를 함께 실행합니다.
- 프론트는 개발 환경에서 `NEXT_PUBLIC_API_BASE_URL`이 없으면 기본적으로 공용 API `https://naver-trend-maker-api.redpill-han.workers.dev/v1`을 바라봅니다.
- 로컬 Worker를 직접 붙이고 싶다면 `NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8787/v1`로 따로 지정해 주세요.

관리자 화면:

```text
http://localhost:3000/sourcing/admin
```

## 공용 API / D1 셋업

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

배포 후 표시되는 Worker URL 뒤에 `/v1`을 붙여 공용 API 주소로 사용합니다.

```text
https://your-shared-api.your-subdomain.workers.dev/v1
```

### 5. 웹 배포 환경변수 설정

웹 배포 환경변수에 공용 API 주소를 설정합니다.

```env
NEXT_PUBLIC_API_BASE_URL=https://your-shared-api.your-subdomain.workers.dev/v1
```

### 6. 로그인 기반 사용자 분리

- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `GET /v1/auth/google/start`
- `GET /v1/auth/google/callback`
- `GET /v1/auth/session`
- `POST /v1/auth/logout`

트렌드 프로필, 수집 런, 스냅샷 조회는 로그인된 사용자 토큰 기준으로만 접근됩니다. 월별 원본 캐시는 같은 조건이면 재사용될 수 있지만, 화면에 보이는 작업 히스토리와 런 상세는 사용자별로 분리됩니다.

### 7. Google 로그인 활성화

Google 로그인까지 쓰려면 Google Cloud Console에서 OAuth 웹 클라이언트를 만든 뒤 Worker secret을 추가해야 합니다.

승인된 리디렉션 URI 예시:

```text
https://your-worker-name.your-subdomain.workers.dev/v1/auth/google/callback
```

Worker secret 설정:

```bash
pnpm wrangler secret put GOOGLE_OAUTH_CLIENT_ID
pnpm wrangler secret put GOOGLE_OAUTH_CLIENT_SECRET
```

선택 환경변수:

```text
AUTH_ALLOWED_RETURN_ORIGINS=https://your-pages-domain.pages.dev,https://*.your-pages-domain.pages.dev,http://localhost:3000,http://127.0.0.1:3000
```

별도 설정이 없더라도 기본적으로 아래 주소는 허용됩니다.

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `https://hanirum-sourcing-maker-10.pages.dev`
- `https://*.hanirum-sourcing-maker-10.pages.dev`

## 참고 문서

- Cloudflare Wrangler: https://developers.cloudflare.com/workers/wrangler/
- Cloudflare D1 시작하기: https://developers.cloudflare.com/d1/get-started/
- D1 Wrangler 명령어: https://developers.cloudflare.com/d1/wrangler-commands/
- Wrangler 설정: https://developers.cloudflare.com/workers/wrangler/configuration/
