// 랜딩 링크 설정
const REEBONZ_SHARING_URL = 'https://www.reebonz.co.kr/reebonz_sharing';

export const LANDING_LINKS = {
  // 일반 웹/모바일 웹
  REEBONZ_SHARING: REEBONZ_SHARING_URL,

  // 삼쩜삼 앱 딥링크
  SZS_DEV: `szsappdev://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_SHARING_URL)}`,
  SZS_STAGE: `szsappstage://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_SHARING_URL)}`,
  SZS_PROD: `szsapp://3o3.co.kr?type=WEB&style=BROWSER&landing=${encodeURIComponent(REEBONZ_SHARING_URL)}`,
} as const;
