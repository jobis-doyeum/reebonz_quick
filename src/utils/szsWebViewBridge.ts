/**
 * 삼쩜삼 WebView Bridge 유틸리티
 */

// SZS WebView Bridge 타입 정의
declare global {
  interface Window {
    FlutterWebViewBridge?: {
      postMessage: (message: string) => void;
      getUserInfo?: () => Promise<{ userId?: string }>;
    };
  }
}

/**
 * 삼쩜삼 웹뷰 환경 감지
 */
export function isSzsWebView(): boolean {
  return typeof window !== 'undefined' && !!window.FlutterWebViewBridge;
}

/**
 * 삼쩜삼 앱 환경 타입 감지 (dev/stage/prod)
 */
export function getSzsEnvironment(): 'dev' | 'stage' | 'prod' | null {
  if (typeof window === 'undefined') return null;

  const userAgent = navigator.userAgent || '';

  if (/SzsAppDev/i.test(userAgent)) return 'dev';
  if (/SzsAppStage/i.test(userAgent)) return 'stage';
  if (/SzsApp/i.test(userAgent)) return 'prod';

  return null;
}

/**
 * 삼쩜삼 브릿지 준비 대기
 */
export async function waitForSzsBridge(timeout = 1000): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (window.FlutterWebViewBridge) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  return false;
}
