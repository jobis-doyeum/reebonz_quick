// 랜딩 링크 설정

const REEBONZ_VINTAGE_URL = 'https://www.reebonz.co.kr/page/vintage-service?utm_source=jobis&utm_medium=affiliate&utm_campaign=vs_affiliate_vip';

export const LANDING_LINKS = {
  // 일반 웹/모바일 웹
  REEBONZ_SHARING: REEBONZ_VINTAGE_URL,

  // 삼쩜삼 앱 딥링크
  SZS_DEV: `szsappdev://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_VINTAGE_URL)}`,
  SZS_STAGE: `szsappstage://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_VINTAGE_URL)}`,
  SZS_PROD: `szsapp://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_VINTAGE_URL)}`,
} as const;
