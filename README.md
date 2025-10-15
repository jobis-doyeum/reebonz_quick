# Web 보일러플레이트 (Web Boilerplate)

## ⚡ 1분 만에 개발 시작

### 🎯 단 1개 명령어로 끝

```bash
# 1. 프로젝트 클론
git clone [repository-url] my-project
cd my-project

# 2. 자동 설정 (2개 정보 입력)
./setup.sh "서비스명" "서비스 설명"

# 완료! 바로 개발 시작
npm run dev
```

**또는 대화형으로:**
```bash
./setup.sh
# > 1단계: 서비스명을 입력하세요
# > 내 서비스명
# > 2단계: 서비스 설명을 입력하세요 (예: 혁신적인 웹 서비스)
# > 혁신적인 웹 서비스
```

## 🛠️ 포함된 것들

- **React + TypeScript + Vite + Tailwind CSS** - 타입 안전한 모던 개발 환경
- **타입 안전성** - TypeScript로 개발 시 오류 사전 방지
- **Vercel 배포** - 배포 설정 완료  
- **FOUC 방지** - 깜빡임 없는 로딩
- **로그 시스템** - 체계적인 분석 도구
- **SEO 최적화** - 검색엔진 최적화
- **Google Analytics** - 상세한 사용자 행동 분석


## ⚠️ 주의사항

- **Vercel 배포**: GitHub 연동은 Vercel 홈페이지에서 직접 설정
- **AI/DB 연동**: 선택사항이며 `docs/optional-integrations.md` 가이드 참고

## 📁 폴더 구조
```
web_boilerplate/
├── src/
│   ├── components/
│   │   └── common/          # 재사용 컴포넌트
│   │       ├── ConsentForm.tsx
│   │       └── PrivacyNotice.tsx
│   ├── pages/
│   │   ├── HomePage.tsx     # 홈 페이지
│   │   └── AboutPage.tsx    # 어바웃 페이지
│   ├── types/
│   │   └── global.d.ts      # 전역 타입 정의
│   ├── utils/
│   │   ├── analytics.ts     # 로그 설계 규칙 기반 분석 도구
│   │   └── privacy.ts       # 개인정보 및 쿠키 관리
│   ├── styles/
│   │   └── globals.css      # 글로벌 스타일
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 앱 진입점
│   └── vite-env.d.ts        # Vite 환경 타입 정의
├── public/
│   ├── robots.txt           # SEO 크롤러 설정
│   └── sitemap.xml          # 사이트맵
├── docs/                    # 📖 가이드 문서들
│   ├── analytics-rules.md   # 로그 설계 규칙 (핵심!)
│   ├── post-development.md  # GA, SEO, 애드센스 가이드
│   ├── optional-integrations.md  # Gemini, Supabase 연동
│   └── advanced-features.md # PWA, 삼쩜삼 브릿지, 로딩 스펙
├── env.example             # 환경변수 템플릿
├── index.html              # HTML 엔트리 포인트
├── vite.config.ts          # Vite 설정
├── tsconfig.json           # TypeScript 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── postcss.config.js       # PostCSS 설정
└── package.json            # 프로젝트 설정 및 의존성
```

## 🚀 자동 설정

**setup.sh가 해주는 것:**
- **package.json** - 프로젝트명, 설명, 개발자명 변경
- **index.html** - 타이틀, 메타태그, SEO 설정 변경
- **.env 파일** - 환경변수 파일 생성
- **npm install** - 의존성 자동 설치
- **Git 초기화** - 새 저장소 생성 (선택)

## 📖 문서

- **analytics-rules.md** - 로그 시스템 가이드
- **post-development.md** - GA4, SEO, 애드센스 설정
- **optional-integrations.md** - Gemini, Supabase 연동
- **advanced-features.md** - 브릿지 등 고급 기능

## 💡 사용 시나리오

### **1단계: 루틴 작업 (자동화)**
```bash
./setup.sh "서비스명" "서비스 설명" "개발자명"
npm run dev
```
- 프로젝트 설정, 의존성 설치, SEO 메타태그 설정
- Vercel GitHub 연동 (홈페이지에서 직접)

### **2단계: 창의적 작업 (개발)**
- 핵심 비즈니스 로직 구현
- 사용자 경험 설계
- **선택사항**: AI/DB 연동 (`docs/optional-integrations.md` 참고)

### **3단계: 마케팅 루틴 작업 (자동화 지원)**
- GA4, SEO, 애드센스 설정 (`docs/post-development.md` 참고)
- **SEO 기획은 직접 수행**

---

**이제 개발하세요. 더 이상 설정에 시간 낭비하지 마세요.**