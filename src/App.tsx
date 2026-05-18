import { useEffect, useState } from 'react';
import heroBg from './assets/hero-bg.png';
import integrityImg from './assets/integrity.png';
import project2Img from './assets/project2.png';
import cctv1Img from './assets/cctv1.jpg';
import cctv2Img from './assets/cctv2.jpg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const robotMessages = [
    '안녕하세요, 저는 한길로직의 안내 로봇입니다.',
    '웹, 앱, AI 비전까지 한 번에 연결해드릴게요.',
    '프로젝트 아이디어가 있으면 아래로 내려 문의해주세요.',
    '마우스를 움직이면 제가 따라볼게요.',
  ];
  const [robotMessageIndex, setRobotMessageIndex] = useState(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setRobotMessageIndex((currentIndex) => (currentIndex + 1) % robotMessages.length);
    }, 3600);

    return () => window.clearInterval(messageTimer);
  }, [robotMessages.length]);

  const robotTiltX = pointer.y * -12;
  const robotTiltY = pointer.x * 18;
  const robotShiftX = pointer.x * 24;
  const robotShiftY = pointer.y * 18;
  const robotEyeX = pointer.x * 10;
  const robotEyeY = pointer.y * 7;

  return (
    <>

{/* TopNavBar (From JSON) */}
<nav className="fixed top-0 w-full z-50 bg-white/75 dark:bg-white/75 backdrop-blur-xl border-b border-white/40 shadow-sm transition-all duration-300 ease-in-out">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
<div className="flex items-center gap-4">
<a className="font-headline-md text-headline-md font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-fuchsia-600 via-blue-600 to-emerald-500" href="#">
                    Hangil Logic
                </a>
</div>
<div className="hidden md:flex items-center gap-gutter font-label-md text-label-md">
<a className="text-slate-600 hover:text-fuchsia-600 transition-colors duration-200" href="#about">About</a>
<a className="text-slate-600 hover:text-blue-600 transition-colors duration-200" href="#services">Services</a>
<a className="text-slate-600 hover:text-emerald-600 transition-colors duration-200" href="#projects">Projects</a>
<a className="text-slate-600 hover:text-orange-500 transition-colors duration-200" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center">
<a className="bg-linear-to-r from-fuchsia-600 via-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full font-label-md text-label-md shadow-lg shadow-blue-500/20 hover:scale-[1.03] transition-transform" href="#contact">
                    Get in Touch
                </a>
</div>
{/* Mobile Menu Button */}
<button 
  className="md:hidden flex items-center justify-center p-2 text-primary dark:text-on-primary-fixed"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-label="Toggle menu"
>
  <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>
    {isMobileMenuOpen ? 'close' : 'menu'}
  </span>
</button>
</div>

{/* Mobile Menu Dropdown */}
<div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 border-t border-outline-variant/30' : 'max-h-0'}`}>
  <div className="bg-white px-margin-mobile py-6 flex flex-col gap-6 font-label-md text-label-md shadow-xl">
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
    <a className="bg-linear-to-r from-fuchsia-600 via-blue-600 to-emerald-500 text-white px-6 py-3 rounded-full text-center mt-2 shadow-lg" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
      Get in Touch
    </a>
  </div>
</div>
</nav>
{/* Hero Section */}
<section className="relative w-full h-[86vh] min-h-[640px] flex items-center overflow-hidden bg-[#101828] text-white" style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-linear-to-br from-fuchsia-600/85 via-blue-600/75 to-emerald-500/75"></div>
<div className="absolute inset-0 opacity-25" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
<div className="hero-circuit-flow absolute inset-0 opacity-40"></div>
<div className="hero-particles absolute inset-0">
<span className="left-[12%] top-[24%] h-2 w-2 animation-delay-0"></span>
<span className="left-[24%] top-[72%] h-3 w-3 animation-delay-700"></span>
<span className="left-[48%] top-[18%] h-2.5 w-2.5 animation-delay-1400"></span>
<span className="left-[68%] top-[64%] h-2 w-2 animation-delay-2100"></span>
<span className="left-[84%] top-[30%] h-3.5 w-3.5 animation-delay-2800"></span>
<span className="left-[92%] top-[78%] h-2 w-2 animation-delay-3500"></span>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md mb-6">
<span className="material-symbols-outlined text-base">bolt</span>
Full-stack Product Engineering Studio
</div>
<h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] text-white mb-6 drop-shadow-lg">아이디어를 제품으로, 제품을 성장하는 시스템으로.</h1>
<p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-2xl">한길로직은 웹, 앱, 하드웨어, AI 비전을 하나의 완성도 높은 사용자 경험으로 연결하는 기술 제작 파트너입니다.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center bg-white text-slate-950 px-8 py-4 rounded-full font-label-md text-label-md shadow-xl hover:scale-[1.03] transition-transform" href="#services">
                    솔루션 알아보기
                </a>
<a className="inline-flex items-center justify-center border border-white/40 bg-white/10 px-8 py-4 rounded-full font-label-md text-label-md text-white backdrop-blur-md hover:bg-white/20 transition-colors" href="#projects">
                    프로젝트 보기
                </a>
</div>
<div className="grid grid-cols-3 gap-3 max-w-xl">
<div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
<div className="text-2xl font-bold">Web</div>
<div className="text-sm text-white/75">Cloud systems</div>
</div>
<div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
<div className="text-2xl font-bold">App</div>
<div className="text-sm text-white/75">Mobile UX</div>
</div>
<div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-md">
<div className="text-2xl font-bold">AI</div>
<div className="text-sm text-white/75">Vision tech</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-10 right-[8%] z-10 hidden h-[420px] w-[360px] lg:block" aria-hidden="true">
<div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>
<div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"></div>
<div className="absolute -left-36 -top-2 max-w-[220px] rounded-[1.5rem] border border-white/40 bg-white/90 px-5 py-4 text-slate-950 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
<div className="font-label-md text-label-md font-bold text-fuchsia-600">Hangil Bot</div>
<p className="mt-1 font-body-md text-body-md text-slate-700">{robotMessages[robotMessageIndex]}</p>
<div className="absolute -right-2 bottom-5 h-5 w-5 rotate-45 border-r border-t border-white/40 bg-white/90"></div>
</div>
<div className="relative mx-auto flex h-full w-full items-center justify-center" style={{transform: `translate3d(${robotShiftX}px, ${robotShiftY}px, 0) rotateX(${robotTiltX}deg) rotateY(${robotTiltY}deg)`, transition: 'transform 120ms ease-out', transformStyle: 'preserve-3d'}}>
<div className="absolute top-3 h-10 w-1 rounded-full bg-white/70"></div>
<div className="absolute top-0 h-5 w-5 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/60"></div>
<div className="absolute top-12 h-40 w-48 rounded-[3rem] border border-white/50 bg-white shadow-2xl shadow-fuchsia-900/20">
<div className="absolute inset-3 rounded-[2.4rem] bg-linear-to-br from-slate-100 via-white to-sky-100"></div>
<div className="absolute left-1/2 top-12 flex -translate-x-1/2 gap-8">
<div className="relative h-11 w-11 rounded-full bg-slate-950 shadow-inner">
<span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/80" style={{transform: `translate(calc(-50% + ${robotEyeX}px), calc(-50% + ${robotEyeY}px))`}}></span>
</div>
<div className="relative h-11 w-11 rounded-full bg-slate-950 shadow-inner">
<span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/80" style={{transform: `translate(calc(-50% + ${robotEyeX}px), calc(-50% + ${robotEyeY}px))`}}></span>
</div>
</div>
<div className="absolute bottom-9 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900/80">
<div className="mx-auto mt-1 h-1.5 w-12 rounded-full bg-rose-300/90"></div>
</div>
</div>
<div className="absolute top-48 h-36 w-44 rounded-[2.5rem] border border-white/50 bg-white/90 shadow-2xl shadow-blue-900/20">
<div className="absolute left-1/2 top-5 h-14 w-24 -translate-x-1/2 rounded-2xl bg-linear-to-r from-fuchsia-500 via-blue-500 to-emerald-400 p-1">
<div className="flex h-full items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">HELLO</div>
</div>
<div className="absolute bottom-5 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-200"></div>
</div>
<div className="absolute left-16 top-56 h-24 w-8 origin-top rounded-full bg-white/90 shadow-lg" style={{transform: `rotate(${pointer.x * -22 - 16}deg)`}}></div>
<div className="absolute right-16 top-56 h-24 w-8 origin-top rounded-full bg-white/90 shadow-lg" style={{transform: `rotate(${pointer.x * -22 + 16}deg)`}}></div>
<div className="absolute bottom-8 left-[120px] h-20 w-10 rounded-full bg-white/90 shadow-lg"></div>
<div className="absolute bottom-8 right-[120px] h-20 w-10 rounded-full bg-white/90 shadow-lg"></div>
</div>
</div>
</section>
{/* About Section */}
<section className="py-24 bg-white border-b border-slate-200/70" id="about">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<img alt="한길로직 로고" className="w-48 mb-8 object-contain" src="data:image/png;base64,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"/>
<h2 className="font-headline-lg text-headline-lg text-slate-950 mb-6">엔지니어링의 본질을 향한 '한 길'</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                        '한길로직(Hangil Logic)'은 이름 그대로 기술 개발의 단 하나의 길, 즉 정도(正道)를 걷겠다는 뚝심을 의미합니다. 트렌드에 휩쓸리기보다는 견고한 아키텍처, 효율적인 코드, 그리고 안정적인 하드웨어 설계를 최우선으로 생각합니다.
                    </p>
<p className="font-body-md text-body-md text-on-surface-variant">
                        우리는 타협하지 않습니다. 클라이언트의 비즈니스가 흔들림 없이 성장할 수 있도록, 기초부터 탄탄한 기술적 토대를 제공하는 것이 우리의 사명입니다.
                    </p>
</div>
<div className="relative h-[400px] rounded-3xl border border-white/60 overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-500/20 group" style={{backgroundImage: `url(${integrityImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-linear-to-br from-fuchsia-600/80 via-blue-600/65 to-emerald-500/80 transition-opacity duration-300 group-hover:opacity-85"></div>
<div className="text-center z-10 p-8 flex flex-col items-center">
<span className="material-symbols-outlined text-display-lg text-white mb-4 drop-shadow-md" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
<h3 className="font-headline-md text-headline-md text-white mb-2 drop-shadow-md font-bold tracking-tight">Engineering Integrity</h3>
<p className="font-body-md text-body-md text-white/90 font-medium tracking-wide">기술적 무결성</p>
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-24 bg-linear-to-br from-sky-50 via-white to-fuchsia-50" id="services">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-16">
<p className="font-label-md text-label-md text-fuchsia-600 font-bold mb-3">WHAT WE BUILD</p>
<h2 className="font-headline-lg text-headline-lg text-slate-950 mb-4">Core Competencies</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">소프트웨어에서 하드웨어까지, 완벽한 통합 솔루션을 제공합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Service 1 */}
<div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl shadow-sky-500/10 hover:-translate-y-2 transition-all group">
<div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>code_blocks</span>
</div>
<h3 className="font-headline-md text-headline-md text-slate-950 mb-4">Web Solutions</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">확장 가능하고 안전한 엔터프라이즈급 웹 애플리케이션 및 백엔드 시스템 구축.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-secondary">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Microservices Architecture</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> High-Availability Systems</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Cloud Infrastructure</li>
</ul>
</div>
{/* Service 2 */}
<div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl shadow-fuchsia-500/10 hover:-translate-y-2 transition-all group">
<div className="w-14 h-14 bg-fuchsia-100 rounded-2xl flex items-center justify-center mb-6 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>smartphone</span>
</div>
<h3 className="font-headline-md text-headline-md text-slate-950 mb-4">App Development</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">사용자 경험을 최우선으로 하는 네이티브 및 크로스 플랫폼 모바일 애플리케이션 개발.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-secondary">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> iOS &amp; Android Native</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> React Native / Flutter</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Performance Optimization</li>
</ul>
</div>
{/* Service 3 */}
<div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl shadow-emerald-500/10 hover:-translate-y-2 transition-all group">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>memory</span>
</div>
<h3 className="font-headline-md text-headline-md text-slate-950 mb-4">Hardware/Embedded</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">정밀한 제어와 최적화가 필요한 하드웨어 설계 및 임베디드 소프트웨어 엔지니어링.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-secondary">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> PCB Design</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Firmware Development</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> IoT Integration</li>
</ul>
</div>
</div>
</div>
</section>
{/* Projects Section */}
<section className="py-24 bg-[#111827] text-white border-y border-slate-900" id="projects">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex justify-between items-end mb-12">
<div>
<p className="font-label-md text-label-md text-emerald-300 font-bold mb-3">SELECTED WORK</p>
<h2 className="font-headline-lg text-headline-lg text-white mb-2">프로젝트 소개</h2>
<p className="font-body-md text-body-md text-white/70">한길로직의 기술력이 담긴 주요 포트폴리오입니다.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
{/* Project Card 1 */}
<div className="border border-white/10 rounded-3xl overflow-hidden bg-white/10 group hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
<div className="h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(${project2Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-blue-950/45 group-hover:bg-blue-950/15 transition-colors duration-300"></div>
<span className="material-symbols-outlined text-display-lg text-white drop-shadow-md z-10 opacity-90">database</span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-blue-400/20 text-blue-100 font-code-sm text-code-sm rounded-full">Web</span>
<span className="px-3 py-1 bg-cyan-400/20 text-cyan-100 font-code-sm text-code-sm rounded-full">Cloud</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-2">대용량 데이터 처리 물류 관리 시스템</h3>
<p className="font-body-md text-body-md text-white/70 mb-4">초당 수만 건의 트랜잭션을 처리하는 마이크로서비스 아키텍처 기반의 백엔드 시스템 구축 및 실시간 대시보드 웹 애플리케이션 개발.</p>
</div>
</div>
{/* Project Card 2 */}
<div className="border border-white/10 rounded-3xl overflow-hidden bg-white/10 group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all">
<div className="h-64 relative overflow-hidden flex transition-transform duration-500 group-hover:scale-105">
<div className="w-1/2 h-full" style={{backgroundImage: `url(${cctv1Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="w-1/2 h-full border-l border-outline-variant/30" style={{backgroundImage: `url(${cctv2Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-emerald-950/45 group-hover:bg-emerald-950/15 transition-colors duration-300"></div>
<span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-display-lg text-white drop-shadow-md z-10 opacity-90">videocam</span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-emerald-400/20 text-emerald-100 font-code-sm text-code-sm rounded-full">AI Vision</span>
<span className="px-3 py-1 bg-lime-400/20 text-lime-100 font-code-sm text-code-sm rounded-full">Safety</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-2">지능형 AI 안전 감시 CCTV</h3>
<p className="font-body-md text-body-md text-white/70 mb-4">딥러닝 기반 실시간 영상 분석 시스템 구축. 산업 현장의 <strong>안전모 착용 여부 판별</strong>, <strong>불꽃/화재 감지</strong>, <strong>작업자 쓰러짐(이상 행동) 감지</strong> 기능을 통해 빈틈없는 재해 예방 솔루션을 제공합니다.</p>
</div>
</div>
{/* Project Card 3 */}
<div className="border border-white/10 rounded-3xl overflow-hidden bg-white/10 group hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all">
<div className="h-64 overflow-hidden bg-black p-3 transition-transform duration-500 group-hover:scale-105">
<div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
<img alt="Easyposter template collage" className="col-span-2 row-span-2 h-full w-full rounded object-cover" src="/hangil/easyposter/e.png"/>
<img alt="Easyposter admin dashboard" className="h-full w-full rounded object-cover" src="/hangil/easyposter/e1.png"/>
<div className="grid h-full grid-cols-2 grid-rows-2 gap-2">
<img alt="Easyposter mobile editor" className="h-full w-full rounded object-cover" src="/hangil/easyposter/e2.png"/>
<img alt="Easyposter printed poster" className="h-full w-full rounded object-cover" src="/hangil/easyposter/e3.png"/>
<img alt="Easyposter simple UX flow" className="col-span-2 h-full w-full rounded object-cover" src="/hangil/easyposter/e4.png"/>
</div>
</div>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-100 font-code-sm text-code-sm rounded-full">Web</span>
<span className="px-3 py-1 bg-orange-400/20 text-orange-100 font-code-sm text-code-sm rounded-full">Editor</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-2">Easyposter</h3>
<p className="font-body-md text-body-md text-white/70 mb-4">반려동물 사진을 활용해 매거진, 포스터, SNS형 템플릿을 빠르게 제작하는 모바일 최적화 디자인 플랫폼입니다. 관리자 템플릿 관리와 현장 고해상도 출력까지 연결합니다.</p>
</div>
</div>
{/* Project Card 4 */}
<div className="border border-white/10 rounded-3xl overflow-hidden bg-white/10 group hover:shadow-2xl hover:shadow-rose-500/20 transition-all lg:col-span-3">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="h-80 overflow-hidden bg-[#f8f3ed] p-3 transition-transform duration-500 group-hover:scale-[1.02]">
<div className="grid h-full grid-cols-3 gap-2">
<img alt="BEAUTIS.AI hair catalog" className="col-span-2 h-full w-full rounded-2xl object-cover object-top" src="/hangil/beautis/b1.JPG"/>
<div className="grid h-full grid-rows-2 gap-2">
<img alt="BEAUTIS.AI owner studio" className="h-full w-full rounded-2xl object-cover object-top" src="/hangil/beautis/b2.JPG"/>
<img alt="BEAUTIS.AI franchise studio" className="h-full w-full rounded-2xl object-cover object-top" src="/hangil/beautis/b3.JPG"/>
</div>
</div>
</div>
<div className="p-8 flex flex-col justify-center">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-rose-400/20 text-rose-100 font-code-sm text-code-sm rounded-full">AI</span>
<span className="px-3 py-1 bg-amber-400/20 text-amber-100 font-code-sm text-code-sm rounded-full">Beauty Tech</span>
<span className="px-3 py-1 bg-violet-400/20 text-violet-100 font-code-sm text-code-sm rounded-full">Commerce</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-3">BEAUTIS.AI</h3>
<p className="font-body-md text-body-md text-white/70 mb-5">미용실 사장님과 스탭을 위한 AI 헤어모델 이미지 제작 플랫폼입니다. 촬영, 모델 섭외, 스튜디오 비용 없이 트렌디한 헤어 포트폴리오와 SNS 홍보 콘텐츠를 빠르게 확보하고 상담과 예약 전환까지 연결합니다.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-white/65">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-300 rounded-full"></span> AI 헤어 스타일 생성 및 모델 컬렉션</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-300 rounded-full"></span> SNS, 포스터, 매장 브랜딩 콘텐츠 자동화</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-violet-300 rounded-full"></span> 살롱 현장 상담과 실제 시술 연계</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-24 bg-linear-to-br from-white via-sky-50 to-fuchsia-50" id="contact">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<p className="font-label-md text-label-md text-orange-500 font-bold mb-3">LET'S TALK</p>
<h2 className="font-headline-lg text-headline-lg text-slate-950 mb-6">프로젝트 의뢰 및 문의</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">한길로직과 함께 안정적이고 완성도 높은 기술 솔루션을 구축하십시오. 아래 양식을 작성해 주시면 담당 엔지니어가 신속하게 회신해 드립니다.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 rounded-2xl bg-white/75 p-5 shadow-lg shadow-sky-500/10">
<span className="material-symbols-outlined text-sky-600 mt-1">location_on</span>
<div>
<h4 className="font-label-md text-label-md text-slate-950 mb-1">Office</h4>
<p className="font-body-md text-body-md text-on-surface-variant">경남 창원시 마산회원구</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-2xl bg-white/75 p-5 shadow-lg shadow-fuchsia-500/10">
<span className="material-symbols-outlined text-fuchsia-600 mt-1">mail</span>
<div>
<h4 className="font-label-md text-label-md text-slate-950 mb-1">Email</h4>
<p className="font-body-md text-body-md text-on-surface-variant">wonname@naver.com</p>
<p className="font-body-md text-body-md text-on-surface-variant">010-8308-0882</p>
</div>
</div>
</div>
</div>
<div className="bg-white/85 p-8 rounded-3xl border border-white shadow-2xl shadow-blue-500/15">
<form className="space-y-6">
<div>
<label className="block font-label-md text-label-md text-slate-950 mb-2">이름 / 회사명</label>
<input className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 font-body-md focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-slate-950 mb-2">이메일</label>
<input className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 font-body-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors" type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md text-slate-950 mb-2">문의 내용</label>
<textarea className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 font-body-md focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors" rows={4}></textarea>
</div>
<button className="w-full bg-linear-to-r from-fuchsia-600 via-blue-600 to-emerald-500 text-white font-label-md text-label-md py-4 rounded-full shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform" type="button">
                            문의하기
                        </button>
</form>
</div>
</div>
</div>
</section>
{/* Footer (From JSON) */}
<footer className="w-full border-t border-white/10 bg-slate-950">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter">
<div className="font-headline-md text-headline-md font-bold text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 via-blue-400 to-emerald-300">
                Hangil Logic
            </div>
<div className="font-body-md text-body-md text-white/60 text-center md:text-left">
                © 2026 Hangil Logic. Engineering Integrity, Technical Persistence.
            </div>
<div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-body-md text-body-md mt-6 md:mt-0">
<a className="text-white/60 hover:text-fuchsia-300 underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-blue-300 underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-emerald-300 underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">LinkedIn</a>
<a className="text-white/60 hover:text-orange-300 underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">GitHub</a>
</div>
</div>
</footer>

    </>
  );
}

export default App;
