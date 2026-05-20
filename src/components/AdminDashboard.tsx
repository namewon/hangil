import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, today: 0 });

  // 데이터 로드 함수
  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        setContacts(data);
        setFilteredContacts(data);
        calculateStats(data);
      }
    } catch (err) {
      console.error('데이터 조회 오류:', err);
      alert('문의 내역을 가져오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 통계 계산 함수
  const calculateStats = (data: Contact[]) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayCount = data.filter((item) => {
      const itemDate = new Date(item.created_at).toISOString().split('T')[0];
      return itemDate === todayStr;
    }).length;

    setStats({
      total: data.length,
      today: todayCount,
    });
  };

  // 삭제 처리 함수
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 상세 보기 방지
    if (!confirm('정말로 이 문의 내역을 삭제하시겠습니까? 복구할 수 없습니다.')) return;

    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // 로컬 상태 즉시 반영
      const updatedContacts = contacts.filter((item) => item.id !== id);
      setContacts(updatedContacts);
      calculateStats(updatedContacts);
      
      // 만약 상세 보기가 켜진 상태에서 삭제했다면 모달 닫기
      if (selectedContact?.id === id) {
        setSelectedContact(null);
      }
      
      alert('성공적으로 삭제되었습니다.');
    } catch (err) {
      console.error('데이터 삭제 오류:', err);
      alert('삭제에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  // 검색 필터 적용
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredContacts(contacts);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.email.toLowerCase().includes(query) ||
        c.message.toLowerCase().includes(query)
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts]);

  // 첫 마운트 시 호출
  useEffect(() => {
    fetchContacts();
  }, []);

  // 이메일 클립보드 복사
  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    alert('이메일 주소가 클립보드에 복사되었습니다.');
  };

  // 한국 시간 포맷 변환 함수
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans pb-16">
      {/* 백그라운드 디자인 그라디언트 */}
      <div className="absolute top-0 inset-x-0 h-80 bg-linear-to-b from-fuchsia-950/20 via-blue-950/10 to-transparent pointer-events-none"></div>

      {/* 상단 네비게이션바 */}
      <header className="sticky top-0 z-40 bg-[#070b13]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 via-blue-400 to-emerald-300">
              Hangil Admin Console
            </span>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-white/10 rounded-full text-slate-400 tracking-wider">
              DATABASE CONNECTED
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchContacts}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white cursor-pointer"
              title="새로고침"
            >
              <span className="material-symbols-outlined text-xl flex items-center">refresh</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-rose-600/10 hover:bg-rose-600/25 border border-rose-500/20 text-rose-300 hover:text-white rounded-xl transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10">
        {/* 상단 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">전체 문의 수</p>
              <h3 className="text-3xl font-extrabold text-white">{stats.total} 건</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">오늘 접수된 문의</p>
              <h3 className="text-3xl font-extrabold text-emerald-400">{stats.today} 건</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-2xl">fiber_new</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center justify-between md:col-span-2 lg:col-span-1">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">시스템 상태</p>
              <h3 className="text-lg font-bold text-sky-300 flex items-center gap-1.5 mt-1">
                <span className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-ping"></span>
                <span>정상 작동 중</span>
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
              <span className="material-symbols-outlined text-2xl">dns</span>
            </div>
          </div>
        </div>

        {/* 필터 및 검색 바 */}
        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <span className="material-symbols-outlined text-xl">search</span>
            </span>
            <input
              type="text"
              placeholder="이름, 이메일, 또는 본문 내용으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a101d] border border-white/5 rounded-xl pl-11 pr-4 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="text-xs text-slate-400 self-end md:self-auto font-medium">
            조회 결과: <strong className="text-white">{filteredContacts.length}</strong> / {contacts.length} 건
          </div>
        </div>

        {/* 데이터 리스트 영역 */}
        {isLoading ? (
          <div className="py-24 text-center">
            <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-slate-400 text-sm">문의 내역을 안전하게 불러오는 중입니다...</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="py-24 text-center bg-white/5 border border-white/5 rounded-3xl">
            <span className="material-symbols-outlined text-5xl text-slate-600 mb-3">folder_open</span>
            <p className="text-slate-400 text-sm font-semibold">데이터가 비어 있습니다.</p>
            <p className="text-slate-600 text-xs mt-1">
              {searchQuery ? '검색어와 일치하는 문의 내역이 없습니다.' : '등록된 고객 문의 사항이 아직 없습니다.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContacts.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedContact(item)}
                className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 p-6 rounded-2xl shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        {formatDate(item.created_at)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleDelete(item.id, e)}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
                      title="삭제"
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg w-fit mb-4 hover:bg-white/10 transition-colors" onClick={(e) => handleCopyEmail(item.email, e)}>
                    <span className="material-symbols-outlined text-xs text-slate-400">mail</span>
                    <span className="text-xs text-slate-300 font-mono select-all">{item.email}</span>
                    <span className="material-symbols-outlined text-[10px] text-slate-500 ml-1">content_copy</span>
                  </div>

                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed break-all">
                    {item.message}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>자세히 보기</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 문의 상세 보기 모달 */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b111e] border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-scale-up">
            {/* 모달 헤더 */}
            <div className="bg-linear-to-r from-fuchsia-950/20 via-blue-950/20 to-emerald-950/20 px-6 py-5 border-b border-white/5 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400">chat_bubble</span>
                  <span>문의 내용 상세보기</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">접수 시각: {formatDate(selectedContact.created_at)}</p>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* 모달 본문 */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">보낸이 / 회사</span>
                  <span className="font-bold text-base text-white">{selectedContact.name}</span>
                </div>
                <div
                  className="bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer flex justify-between items-center"
                  onClick={(e) => handleCopyEmail(selectedContact.email, e)}
                >
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">회신 이메일</span>
                    <span className="font-bold text-base text-sky-300 font-mono select-all">{selectedContact.email}</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm">content_copy</span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">문의 상세 메세지</span>
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl text-slate-200 text-sm leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto break-all font-sans select-text">
                  {selectedContact.message}
                </div>
              </div>
            </div>

            {/* 모달 푸터 */}
            <div className="px-6 py-4 border-t border-white/5 bg-slate-900/50 flex justify-between items-center">
              <button
                onClick={(e) => handleDelete(selectedContact.id, e)}
                className="flex items-center gap-1 px-4 py-2.5 text-xs font-bold text-rose-300 hover:text-white bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/20 rounded-xl transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                문의 내역 삭제
              </button>
              <button
                onClick={() => setSelectedContact(null)}
                className="px-6 py-2.5 text-xs font-bold bg-white text-[#0b111e] hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
