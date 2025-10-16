# 삼쩜삼 x 리본즈 명품 공유 서비스 랜딩 페이지

> **잠자고 있는 명품, 돈이 된다고?**
> 삼쩜삼 고객을 위한 새로운 가치 제안 - 리본즈 공유로 명품을 공유하고 수익을 창출하세요

## 📊 Google Analytics 이벤트

### 추적 중인 이벤트 (2개)

1. **reebonz_landing_pv**
   - 랜딩 페이지 로드 시 자동 추적
   - Parameters: 없음

2. **reebonz_landing_cta_click**
   - "숨은 자산 찾기" 버튼 클릭 시
   - 리본즈 빈티지 서비스 페이지로 이동할 때
   - Parameters:
     ```json
     {
       "button_location": "fixed_bottom",
       "button_text": "숨은 자산 찾기"
     }
     ```

**GA 측정 ID**: `G-3VY48K6TPQ`

---

## 📋 프로젝트 개요

본 프로젝트는 삼쩜삼 고객들에게 명품 공유라는 새로운 가치를 제공하기 위한 랜딩 페이지입니다. 리본즈의 명품 커머스 전문성을 통해 고객들이 안전하고 간편하게 명품을 공유하고 수익을 창출할 수 있도록 연결합니다.

### 🎯 주요 목표
- 삼쩜삼 고객들에게 명품 공유라는 새로운 가치 제공
- 안 쓰는 명품을 공유하고 평균 30% 수익률 제공
- 리본즈 명품 공유 서비스로의 자연스러운 전환 유도

## 🤝 삼쩜삼 x 리본즈 협업 가치

| 삼쩜삼 | 리본즈 |
|--------|--------|
| 고객에게 새로운 수익 창출 기회 제공 | 전문적인 명품 감정 및 보관 |
| 신뢰할 수 있는 서비스 연결 | 안전하고 투명한 공유 플랫폼 |

## ✨ 서비스 특장점

### 1️⃣ 무료 감정
전문가의 정확한 가치 평가를 무료로 제공

### 2️⃣ 평균 30% 수익률
안정적이고 높은 수익을 기대할 수 있어요

### 3️⃣ 안전한 보관
리본즈에서 책임지고 안전하게 보관 관리

## 📱 페이지 구성

### 1. 메인 배너/헤더
**헤드라인**: "잠자고 있는 명품, 돈이 된다고?"
**서브 헤드라인**: "삼쩜삼 고객님을 위한 특별한 기회, 리본즈에서 명품을 안전하게 판매하세요!"

### 2. 서비스 소개
왜 삼쩜삼-리본즈 빈티지 서비스일까요?
- 삼쩜삼이 신뢰하는 명품 거래 파트너
- 간편한 판매 프로세스
- 전문가 감정 서비스
- 안전하고 투명한 거래 보장

### 3. 서비스 이용 절차

```
1단계: 판매 신청
   └─> 랜딩 페이지에서 간단한 정보 입력

2단계: 리본즈 회원가입 및 명품 등록
   └─> 명품 사진 및 상세 정보 등록

3단계: 전문가 감정
   └─> 리본즈 전문가의 정확한 가치 평가

4단계: 판매 완료 및 정산
   └─> 빠르고 투명한 대금 정산
```

### 4. 고객 설문 (선택 사항)
- 명품 판매 경험 여부
- 명품 판매 시 가장 중요하게 고려하는 요소 (판매 가격, 편리성, 신뢰도 등)
- 서비스 이용 의향
- 기타 의견

### 5. FAQ (자주 묻는 질문)
- Q: 어떤 명품을 판매할 수 있나요?
- Q: 감정은 어떻게 이루어지나요?
- Q: 판매 대금은 언제 정산되나요?
- Q: 수수료는 어떻게 되나요?

## 🔗 서비스 연결

**리본즈 빈티지 서비스**: [https://www.reebonz.co.kr/page/vintage-service](https://www.reebonz.co.kr/page/vintage-service)

### 삼쩜삼 앱 연동
삼쩜삼 WebView 환경에서는 자동으로 환경별 딥링크를 사용합니다:
- **Dev**: `szsappdev://3o3.co.kr?type=WEB&style=BROWSER&landing=https://www.reebonz.co.kr/page/vintage-service`
- **Stage**: `szsappstage://3o3.co.kr?type=WEB&style=BROWSER&landing=https://www.reebonz.co.kr/page/vintage-service`
- **Prod**: `szsapp://3o3.co.kr?type=WEB&style=BROWSER&landing=https://www.reebonz.co.kr/page/vintage-service`

일반 웹/모바일 웹에서는 직접 URL로 이동합니다.

## 🚀 시작하기

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 🛠️ 기술 스택

- **React** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **React Router** - 라우팅
- **Lottie** - 애니메이션
- **Google Analytics** - 이벤트 트래킹
- **SZS WebView Bridge** - 삼쩜삼 앱 연동

## 📂 폴더 구조

```
reebonz_quick/
├── src/
│   ├── components/      # 재사용 컴포넌트
│   │   └── ui/         # UI 컴포넌트 (Button, BottomSheet 등)
│   ├── pages/          # 페이지 컴포넌트
│   │   └── HomePage.tsx
│   ├── utils/          # 유틸리티 함수
│   │   ├── analytics.ts       # GA 이벤트 트래킹
│   │   └── szsWebViewBridge.ts # 삼쩜삼 WebView 연동
│   ├── config/         # 설정 파일
│   │   └── links.ts    # 외부 링크 설정
│   ├── assets/         # 정적 리소스
│   │   └── images/     # 이미지 및 Lottie 애니메이션
│   ├── styles/         # 스타일 파일
│   └── App.tsx         # 메인 앱
├── public/             # 정적 파일
├── .env                # 환경변수 (GA ID 등)
└── index.html          # HTML 엔트리포인트 (GA 스크립트 포함)
```

## 📊 기대 효과

1. 삼쩜삼 고객에게 명품 공유를 통한 새로운 수익 창출 기회 제공
2. 평균 30% 수익률로 고객 자산 활용도 증대
3. 리본즈 공유 플랫폼으로의 신규 고객 유입 증대
4. 명품 공유 경제 시장 활성화 기여

## 🎨 주요 기능

### Lottie 애니메이션
- Hero 섹션에 명품 가방 애니메이션 적용
- 자동 재생 + 무한 루프
- 생동감 있는 첫인상 제공

### 삼쩜삼 앱 연동
- WebView Bridge를 통한 자동 환경 감지
- 환경별 딥링크 자동 분기 (dev/stage/prod)
- 일반 웹에서는 직접 URL 이동

### Google Analytics
- 페이지 로드 자동 추적
- CTA 버튼 클릭 추적
- 사용자 행동 데이터 수집

## 📞 문의

**이메일**: Person@email.com

## 📄 라이선스

이 프로젝트는 삼쩜삼과 리본즈의 협업 프로젝트입니다.
