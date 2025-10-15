import { useState } from 'react';
import { Button, BottomSheet } from '../components/ui';

const HomePage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleCTA = () => {
    window.location.href = 'https://www.reebonz.co.kr/page/vintage-service';
  };

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-mobile mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 font-sans">
            잠자고 있는 명품,<br />
            <span className="text-[var(--primary)]">돈이 된다고?</span>
          </h1>
          <p className="text-base text-gray-600 mb-6 font-sans">
            삼쩜삼 고객님을 위한 특별한 기회,<br />
            리본즈에서 명품을 안전하게 판매하세요!
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-mobile mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-2 font-sans">
            왜 삼쩜삼-리본즈일까요?
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm font-sans">
            삼쩜삼이 신뢰하는 명품 거래 파트너
          </p>

          <div className="space-y-3">
            {/* Feature 1 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">간편한 판매</h3>
                  <p className="text-sm text-gray-600 font-sans">
                    사진 등록부터 판매까지 클릭 몇 번으로 완료
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">전문 감정</h3>
                  <p className="text-sm text-gray-600 font-sans">
                    리본즈 전문가의 정확한 가치 평가
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">안전한 거래</h3>
                  <p className="text-sm text-gray-600 font-sans">
                    삼쩜삼이 검증한 믿을 수 있는 플랫폼
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border-2 border-gray-100 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">투명한 정산</h3>
                  <p className="text-sm text-gray-600 font-sans">
                    명확한 프로세스와 빠른 대금 정산
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
            삼쩜삼과 리본즈가 함께하는<br />안전하고 간편한 명품 판매
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-mobile mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 font-sans">삼쩜삼 x 리본즈</h3>
            <p className="text-gray-400 text-sm font-sans">
              빈티지 명품 판매의 새로운 기준
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-bold mb-2 text-sm font-sans">문의</h4>
            <p className="text-gray-400 text-sm mb-2 font-sans">Person@email.com</p>
            <a
              href="https://www.reebonz.co.kr/page/vintage-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-sans"
            >
              리본즈 서비스 →
            </a>
          </div>
          <div className="border-t border-gray-800 pt-4 text-center">
            <p className="text-gray-400 text-xs font-sans">&copy; 2025 삼쩜삼 x 리본즈. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-30">
        <div className="max-w-mobile mx-auto">
          <Button size="large" onClick={handleOpenBottomSheet} fullWidth>
            명품 판매 시작하기
          </Button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
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
            <Button size="large" onClick={handleCTA} fullWidth>
              네, 준비됐어요!
            </Button>
            <Button
              size="large"
              variant="outline-gray"
              onClick={handleCloseBottomSheet}
              fullWidth
            >
              아직이요
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-6 font-sans">
            💡 TIP: 명품의 전체 모습과 브랜드 로고가<br />잘 보이는 사진을 준비해주세요
          </p>
        </div>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
