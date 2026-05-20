import React, { useState } from 'react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToHome: () => void;
}

// 관리자 로그인(패스코드 인증) 컴포넌트
export default function AdminLogin({ onLoginSuccess, onBackToHome }: AdminLoginProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 환경 변수에서 패스코드를 가져오거나 기본값 사용
  const ADMIN_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'hangil1234';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // 패스코드 유효성 검사 (0.5초 대기 효과로 고급스러운 UX 제공)
    setTimeout(() => {
      if (passcode === ADMIN_PASSCODE) {
        onLoginSuccess();
      } else {
        setError('올바르지 않은 패스코드입니다. 다시 확인해주세요.');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090d16] text-white p-4 relative overflow-hidden font-sans">
      {/* 백그라운드 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-radial-[at_top_right,_var(--tw-gradient-stops)] from-fuchsia-900/30 via-[#090d16]/90 to-[#090d16] z-0"></div>
      <div className="absolute inset-0 bg-radial-[at_bottom_left,_var(--tw-gradient-stops)] from-blue-900/20 via-transparent to-transparent z-0"></div>
      
      {/* 장식용 은은한 빛 방울 */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl z-0"></div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl z-10 relative">
        {/* 상단 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-tr from-fuchsia-500 via-blue-500 to-emerald-400 p-[1px] mb-4 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-[#0d1321] rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-transparent bg-clip-text bg-linear-to-tr from-fuchsia-400 to-blue-400 text-3xl">
                admin_panel_settings
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 via-blue-400 to-emerald-300">
            Hangil Logic Admin
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            관리자 대시보드 접근을 위해 패스코드를 입력해주세요.
          </p>
        </div>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Passcode
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500">
                <span className="material-symbols-outlined text-xl">lock</span>
              </span>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono tracking-widest text-center text-lg"
              />
            </div>
            {error && (
              <p className="text-rose-400 text-xs mt-2 flex items-center gap-1.5 animate-pulse">
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-fuchsia-600 via-blue-600 to-emerald-500 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>인증 확인 중...</span>
              </>
            ) : (
              <>
                <span>대시보드 입장</span>
                <span className="material-symbols-outlined text-lg">login</span>
              </>
            )}
          </button>
        </form>

        {/* 푸터 버튼 */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <button
            onClick={onBackToHome}
            className="text-xs text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            메인 사이트로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
