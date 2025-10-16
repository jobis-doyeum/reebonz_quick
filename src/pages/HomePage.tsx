import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Button, BottomSheet } from "../components/ui";
import { trackEvent } from "../utils/analytics";
import { isSzsWebView, getSzsEnvironment } from "../utils/szsWebViewBridge";
import { LANDING_LINKS } from "../config/links";
import luxuryAnimation from "../assets/images/ani_Luxury-landing.json";

const HomePage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 페이지 로드 시 페이지뷰 추적
  useEffect(() => {
    trackEvent("reebonz_landing_pv");
  }, []);

  const handleCTA = () => {
    // 리본즈 이동 클릭 추적
    trackEvent("reebonz_landing_cta_click", {
      button_location: "bottom_sheet",
      button_text: "네, 준비됐어요!",
    });

    // 삼쩜삼 웹뷰 환경인지 확인
    if (isSzsWebView()) {
      // 삼쩜삼 앱에서 실행 중 - 환경별 딥링크 사용
      const env = getSzsEnvironment();
      let deepLink: string;

      if (env === 'dev') {
        deepLink = LANDING_LINKS.SZS_DEV;
      } else if (env === 'stage') {
        deepLink = LANDING_LINKS.SZS_STAGE;
      } else {
        deepLink = LANDING_LINKS.SZS_PROD;
      }

      window.location.href = deepLink;
    } else {
      // 일반 웹/모바일 웹 - 직접 이동
      window.location.href = LANDING_LINKS.REEBONZ_SHARING;
    }
  };

  const handleOpenBottomSheet = () => {
    // 바텀시트 열기 추적
    trackEvent("reebonz_landing_bottomsheet_view", {
      trigger: "fixed_bottom_button",
    });
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-mobile mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3 font-sans">
            잠자고 있는 명품,
            <br />
            <span className="text-[var(--primary)]">돈이 된다고?</span>
          </h1>
          <p className="text-base text-gray-600 mb-6 font-sans">
            무료 감정을 받을 수 있어요
          </p>
          {/* Lottie Animation */}
          <div className="w-full max-w-xs mx-auto mb-6">
            <Lottie
              animationData={luxuryAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </section>

      {/* Value Highlights*/}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-mobile mx-auto space-y-2.5">
          {/* Value 1 */}
          <div className="flex items-center gap-2">
            <span className="text-[var(--primary)] text-lg font-bold">✓</span>
            <p className="text-base text-gray-700 font-sans">
              쓰지 않는 명품을 공유하고
            </p>
          </div>

          {/* Value 2*/}
          <div className="flex items-center gap-2">
            <span className="text-[var(--primary)] text-lg font-bold">✓</span>
            <p className="text-base text-gray-700 font-sans">평균 30% 수익율을 받아보세요</p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-mobile mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-2 font-sans">
            왜 리본즈 공유일까요?
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm font-sans">
            안전하고 수익성 높은 명품 공유 플랫폼
          </p>

          <div className="space-y-3">
            {/* Feature 1 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">
                    무료 감정
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">
                    전문가의 정확한 가치 평가를 무료로 제공
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">
                    평균 30% 수익률
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">
                    안정적이고 높은 수익을 기대할 수 있어요
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">
                    안전한 보관
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">
                    리본즈에서 책임지고 안전하게 보관 관리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-[var(--primary)] to-blue-600">
        <div className="max-w-mobile mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3 font-sans">
            지금 바로 시작하세요!
          </h2>
          <p className="text-sm text-white mb-6 font-sans">
            삼쩜삼과 리본즈가 함께하는
            <br />
            안전하고 간편한 명품 판매
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-mobile mx-auto text-center">
          <h3 className="text-lg font-bold mb-2 font-sans">삼쩜삼 x 리본즈</h3>
          <p className="text-gray-400 text-sm mb-6 font-sans">
            빈티지 명품 판매의 새로운 기준
          </p>
          <p className="text-gray-400 text-xs font-sans">
            &copy; 2025 삼쩜삼 x 리본즈. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-30">
        <div className="max-w-mobile mx-auto">
          <Button size="large" onClick={handleOpenBottomSheet} fullWidth>
            명품 공유하고 수익 내기
          </Button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
              잠시만요!
            </h3>
            <p className="text-base text-gray-600 mb-6 font-sans">
              명품 사진이 준비되었나요?
            </p>
          </div>

          <div className="space-y-3">
            <Button
              size="large"
              variant="outline-gray"
              onClick={handleCloseBottomSheet}
              fullWidth
            >
              아직이요
            </Button>
            <Button size="large" onClick={handleCTA} fullWidth>
              네, 준비됐어요!
            </Button>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
