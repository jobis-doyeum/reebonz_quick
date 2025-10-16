# 디자인 가이드

삼쩜삼 x 리본즈 빈티지 명품 판매 서비스 랜딩 페이지 디자인 시스템

---

## 🎨 컬러 시스템

### Primary Colors
```css
--primary: #237AF2          /* 메인 블루 */
--primary-hover: #1a5fd9    /* 호버 상태 */
--primary-pressed: #0d4bc2  /* 클릭 상태 */
--primary-disabled: #DADEE3 /* 비활성화 */
```

**사용 예시**:
- 주요 CTA 버튼
- 아이콘 강조 색상
- 중요 텍스트 강조

### Semantic Colors
```css
--info: #3B82F6      /* 정보성 메시지 */
--success: #10B981   /* 성공 메시지 */
--warning: #F59E0B   /* 경고 메시지 */
--error: #EF4444     /* 에러 메시지 */
```

### Gray Scale
```css
--white: #FFFFFF       /* 배경, 카드 */
--black: #141618       /* 주요 텍스트 */
--gray60: #606A76      /* 보조 텍스트 */
--gray: #8A8F95        /* 비활성 텍스트 */
--gray-light: #DADEE3  /* 구분선, 테두리 */
--gray-bg: #F2F4F6     /* 섹션 배경 */
```

---

## 📝 타이포그래피

### 폰트
- **Primary Font**: Pretendard
- **Fallback**: -apple-system, BlinkMacSystemFont, system-ui, sans-serif

### 폰트 크기 및 용도

| 크기 | 용도 | 예시 |
|------|------|------|
| `text-3xl` (30px) | Hero 헤드라인 | "잠자고 있는 명품, 돈이 된다고?" |
| `text-2xl` (24px) | 섹션 타이틀 | "지금 바로 시작하세요!" |
| `text-xl` (20px) | 서브 헤드라인 | "왜 삼쩜삼-리본즈일까요?" |
| `text-lg` (18px) | 버튼 텍스트 (Large) | CTA 버튼 |
| `text-base` (16px) | 카드 타이틀, 본문 | 기능 설명 제목 |
| `text-sm` (14px) | 본문, 설명 | 기능 상세 설명 |
| `text-xs` (12px) | 캡션, Footer | 저작권 정보 |

### 폰트 굵기
- **Bold** (`font-bold`): 제목, 강조 텍스트
- **Semibold** (`font-semibold`): 버튼 텍스트
- **Normal** (`font-normal`): 본문

---

## 🔘 버튼 시스템

### Button 컴포넌트

#### Size Variants
```tsx
<Button size="xsmall">  // 32px height
<Button size="small">   // 40px height
<Button size="medium">  // 48px height
<Button size="large">   // 56px height (기본값)
```

#### Style Variants
```tsx
// Default (Primary)
<Button variant="default">
  /* 배경: --primary, 텍스트: white */

// Outline
<Button variant="outline">
  /* 배경: white, 테두리: --primary, 텍스트: --primary */

// Outline Gray
<Button variant="outline-gray">
  /* 배경: white, 테두리: gray, 텍스트: gray */
```

#### States
- **Default**: 기본 상태
- **Hover**: 호버 시 배경색 변경 + 그림자 증가
- **Active**: 클릭 시 배경색 더 어둡게
- **Disabled**: 투명도 60%, 커서 변경

#### 사용 예시
```tsx
// 주요 CTA
<Button size="large" onClick={handleCTA} fullWidth>
  내 명품 가치 확인하고 판매하기 →
</Button>

// 보조 액션
<Button size="large" variant="outline-gray" onClick={handleClose} fullWidth>
  아직이요
</Button>
```

---

## 📐 레이아웃

### 모바일 최적화
```css
max-width: 480px  /* .max-w-mobile */
```

- 모든 콘텐츠는 `max-w-mobile` 클래스로 중앙 정렬
- 좌우 패딩: `px-4` (16px)

### 섹션 간격
```css
py-12  /* 48px (상하) - 일반 섹션 */
py-16  /* 64px (상하) - 강조 섹션 */
```

### 컴포넌트 간격
```css
mb-3   /* 12px - 제목-부제목 간격 */
mb-6   /* 24px - 부제목-콘텐츠 간격 */
mb-8   /* 32px - 콘텐츠-CTA 간격 */
mb-12  /* 48px - 대제목-콘텐츠 간격 */

space-y-3  /* 리스트 아이템 간격 (12px) */
space-y-4  /* 카드 간격 (16px) */
```

---

## 🎴 카드 디자인

### Feature Card
```tsx
<div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
  <div className="flex items-start gap-3">
    {/* 아이콘 */}
    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-[var(--primary)]">...</svg>
    </div>

    {/* 콘텐츠 */}
    <div className="flex-1">
      <h3 className="text-base font-bold text-gray-900 mb-1">제목</h3>
      <p className="text-sm text-gray-600">설명</p>
    </div>
  </div>
</div>
```

**특징**:
- 2px 회색 테두리
- 20px 라운드 코너 (`rounded-2xl`)
- 아이콘: 10px 정사각형, 12px 라운드, 연한 파란 배경
- 호버: 그림자 효과 (`hover:shadow-lg`)

---

## 🎭 애니메이션

### Bottom Sheet
```css
@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
```

### Button Hover
```css
transition-all duration-200
transform hover:scale-105
```

### 기타 트랜지션
```css
transition-colors    /* 색상 변경 */
transition-shadow    /* 그림자 변경 */
transition-all       /* 모든 속성 */
```

---

## 📱 컴포넌트 패턴

### Bottom Sheet
```tsx
<BottomSheet isOpen={isOpen} onClose={onClose}>
  <div className="text-center">
    {/* 아이콘 */}
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-[var(--primary)]">...</svg>
    </div>

    {/* 제목 */}
    <h3 className="text-xl font-bold text-gray-900 mb-2">잠시만요!</h3>

    {/* 설명 */}
    <p className="text-base text-gray-600 mb-6">명품 사진이 준비되었나요?</p>

    {/* 액션 버튼들 */}
    <div className="space-y-3">
      <Button size="large" fullWidth>네, 준비됐어요!</Button>
      <Button size="large" variant="outline-gray" fullWidth>아직이요</Button>
    </div>

    {/* TIP */}
    <p className="text-xs text-gray-500 mt-6">💡 TIP: ...</p>
  </div>
</BottomSheet>
```

### Fixed Bottom Button
```tsx
<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-30">
  <div className="max-w-mobile mx-auto">
    <Button size="large" fullWidth>명품 판매 시작하기</Button>
  </div>
</div>
```

**특징**:
- `z-30`: 다른 요소 위에 표시
- 상단 테두리 + 그림자로 구분
- 모바일 최대 너비 제한

---

## 🎯 섹션별 디자인

### Hero Section
- **배경**: `bg-gradient-to-br from-blue-50 to-white`
- **패딩**: `py-12 px-4`
- **정렬**: `text-center`
- **특징**: 그라데이션 배경으로 시각적 강조

### Feature Section
- **배경**: `bg-white`
- **카드 간격**: `space-y-3` (12px)
- **카드 스타일**: 2px 테두리, 호버 그림자

### CTA Section
- **배경**: `bg-gradient-to-br from-[var(--primary)] to-blue-600`
- **텍스트**: 흰색
- **버튼**: Outline 스타일, 흰색 배경

### Footer
- **배경**: `bg-gray-900`
- **텍스트**: 흰색 / 회색
- **정렬**: `text-center`
- **패딩**: `py-8 px-4`

---

## 🔍 아이콘 가이드

### 아이콘 크기
- **Hero/Feature**: `w-5 h-5` (20px)
- **Bottom Sheet**: `w-8 h-8` (32px)

### 아이콘 색상
- **Primary**: `text-[var(--primary)]`
- **Container**: `bg-blue-100` (연한 파란 배경)

### 아이콘 컨테이너
```tsx
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
  <svg className="w-5 h-5 text-[var(--primary)]">...</svg>
</div>
```

---

## ✅ 디자인 체크리스트

### 모바일 최적화
- [ ] `max-w-mobile` (480px) 적용
- [ ] 터치 영역 충분 (최소 44px)
- [ ] 가독성 확보 (최소 14px 폰트)

### 접근성
- [ ] 명확한 색상 대비
- [ ] 충분한 클릭 영역
- [ ] 의미 있는 버튼 텍스트

### 일관성
- [ ] Pretendard 폰트 사용
- [ ] `reebonz_` 프리픽스 GA 이벤트
- [ ] EzBill 컬러 시스템 준수

### 성능
- [ ] 불필요한 애니메이션 제거
- [ ] 이미지 최적화
- [ ] 폰트 로딩 최적화

---

## 📚 참고 자료

- **디자인 시스템**: EzBill Design System
- **컬러**: `#237AF2` (Primary Blue)
- **폰트**: Pretendard
- **레이아웃**: Mobile-first (max-width: 480px)

---

**마지막 업데이트**: 2025-10-16
