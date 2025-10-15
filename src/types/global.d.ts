// Global type definitions

// Vite environment variables
interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Google Analytics gtag types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date | 'update',
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

export {}