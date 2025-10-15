/**
 * 로그 설계 규칙 기반 Analytics 유틸리티
 * 
 * 기본 형식: [그룹]_[대상]_[액션]
 * 
 * 규칙:
 * 1. [그룹]_을 Prefix로 붙일 것
 * 2. 어떤 UI가 노출되었을 때는 _view 사용
 * 3. 어떤 화면이 page_view는 GA 기본 함수 그대로 사용
 * 4. 무언가를 클릭했을 때는 _click 사용
 * 5. 그룹핑은 서비스마다 다르게 정의
 */

// GA4 측정 ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// 이벤트 추적
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // 개발 모드에서는 콘솔에 로그 출력
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', {
      event: eventName,
      parameters: parameters,
      gaId: GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID 없음',
      timestamp: new Date().toISOString()
    })
    return
  }

  // GA ID가 없으면 경고
  if (!GA_MEASUREMENT_ID) {
    console.warn('VITE_GA_MEASUREMENT_ID가 설정되지 않았습니다.')
    return
  }

  // Google Analytics가 로드되었는지 확인
  if (typeof window.gtag === 'function') {
    // 기본 매개변수 추가
    const eventData = {
      ...parameters,
      page_title: document.title,
      page_location: window.location.href,
      timestamp: Date.now()
    }

    window.gtag('event', eventName, eventData)
  } else {
    console.warn('Google Analytics가 로드되지 않았습니다.')
  }
}

// 페이지 뷰 추적
export const trackPageView = (path: string) => {
  // 개발 모드에서는 콘솔에 로그 출력
  if (import.meta.env.DEV) {
    console.log('📊 Page View:', {
      path: path,
      gaId: GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID 없음',
      timestamp: new Date().toISOString()
    })
    return
  }

  // GA ID가 없으면 경고
  if (!GA_MEASUREMENT_ID) {
    console.warn('VITE_GA_MEASUREMENT_ID가 설정되지 않았습니다.')
    return
  }

  // Google Analytics가 로드되었는지 확인
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    })
  } else {
    console.warn('Google Analytics가 로드되지 않았습니다.')
  }
}

// useAnalytics 훅 (호환성을 위해)
export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView,
  }
} 