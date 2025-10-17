import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import './styles/globals.css'

// Google Analytics는 index.html에서 이미 로드됨
// 개발 환경에서만 로그 출력
if (import.meta.env.DEV) {
  console.log('🔧 개발 환경: Google Analytics 비활성화 (콘솔 로그만)')
} else if (import.meta.env.PROD) {
  console.log('📊 Google Analytics 활성화:', import.meta.env.VITE_GA_MEASUREMENT_ID)
}

// React 앱 마운트
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <App />
      <Analytics />
    </>
  )
} 