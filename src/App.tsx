import { useState } from 'react';
import heroBg from './assets/hero-bg.png';
import integrityImg from './assets/integrity.png';
import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';
import cctv1Img from './assets/cctv1.jpg';
import cctv2Img from './assets/cctv2.jpg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>

{/* TopNavBar (From JSON) */}
<nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ease-in-out">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
<div className="flex items-center gap-4">
<a className="font-headline-md text-headline-md font-bold tracking-tight text-primary dark:text-on-primary-fixed" href="#">
                    Hangil Logic
                </a>
</div>
<div className="hidden md:flex items-center gap-gutter font-label-md text-label-md">
<a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors duration-200" href="#about">About</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors duration-200" href="#services">Services</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors duration-200" href="#projects">Projects</a>
<a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors duration-200" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center">
<a className="bg-primary text-on-primary px-6 py-2 rounded font-label-md text-label-md hover:bg-primary/90 transition-colors" href="#contact">
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
  <div className="bg-surface dark:bg-surface px-margin-mobile py-6 flex flex-col gap-6 font-label-md text-label-md">
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
    <a className="text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary-fixed transition-colors" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
    <a className="bg-primary text-on-primary px-6 py-3 rounded text-center mt-2 hover:bg-primary/90 transition-colors" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
      Get in Touch
    </a>
  </div>
</div>
</nav>
{/* Hero Section */}
<section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-inverse-surface text-on-primary" style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-primary/70"></div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
<div className="max-w-2xl">
<h1 className="font-display-lg text-display-lg text-surface-container-lowest mb-6">오직 기술, 한 길만 걷는 뚝심 - 한길로직</h1>
<p className="font-body-lg text-body-lg text-surface-variant mb-8">앱, 웹, 기계, 하드웨어까지. 완성도 높은 솔루션을 위해 타협하지 않는 엔지니어들의 집단입니다.</p>
<a className="inline-flex items-center justify-center bg-surface-container-lowest text-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-surface-variant transition-colors border border-surface-container-lowest" href="#services">
                    솔루션 알아보기
                </a>
</div>
</div>
</section>
{/* About Section */}
<section className="py-24 bg-surface-container-lowest border-b border-outline-variant/30" id="about">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<img alt="한길로직 로고" className="w-48 mb-8 object-contain" src="data:image/png;base64,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"/>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">엔지니어링의 본질을 향한 '한 길'</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                        '한길로직(Hangil Logic)'은 이름 그대로 기술 개발의 단 하나의 길, 즉 정도(正道)를 걷겠다는 뚝심을 의미합니다. 트렌드에 휩쓸리기보다는 견고한 아키텍처, 효율적인 코드, 그리고 안정적인 하드웨어 설계를 최우선으로 생각합니다.
                    </p>
<p className="font-body-md text-body-md text-on-surface-variant">
                        우리는 타협하지 않습니다. 클라이언트의 비즈니스가 흔들림 없이 성장할 수 있도록, 기초부터 탄탄한 기술적 토대를 제공하는 것이 우리의 사명입니다.
                    </p>
</div>
<div className="relative h-[400px] rounded-xl border border-outline-variant/30 overflow-hidden flex items-center justify-center shadow-lg group" style={{backgroundImage: `url(${integrityImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/50 to-primary-container/90 transition-opacity duration-300 group-hover:opacity-85"></div>
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
<section className="py-24 bg-surface" id="services">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Core Competencies</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">소프트웨어에서 하드웨어까지, 완벽한 통합 솔루션을 제공합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Service 1 */}
<div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary transition-colors group">
<div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>code_blocks</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Web Solutions</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">확장 가능하고 안전한 엔터프라이즈급 웹 애플리케이션 및 백엔드 시스템 구축.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-secondary">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Microservices Architecture</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> High-Availability Systems</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Cloud Infrastructure</li>
</ul>
</div>
{/* Service 2 */}
<div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary transition-colors group">
<div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>smartphone</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">App Development</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">사용자 경험을 최우선으로 하는 네이티브 및 크로스 플랫폼 모바일 애플리케이션 개발.</p>
<ul className="space-y-2 font-code-sm text-code-sm text-secondary">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> iOS &amp; Android Native</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> React Native / Flutter</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Performance Optimization</li>
</ul>
</div>
{/* Service 3 */}
<div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary transition-colors group">
<div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>memory</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Hardware/Embedded</h3>
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
<section className="py-24 bg-surface-container-lowest border-y border-outline-variant/30" id="projects">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">프로젝트 소개</h2>
<p className="font-body-md text-body-md text-on-surface-variant">한길로직의 기술력이 담긴 주요 포트폴리오입니다.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
{/* Project Card 1 */}
<div className="border border-outline-variant/50 rounded overflow-hidden bg-surface group hover:shadow-lg transition-shadow">
<div className="h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(${project1Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-surface-variant/40 group-hover:bg-surface-variant/10 transition-colors duration-300"></div>
<span className="material-symbols-outlined text-display-lg text-white drop-shadow-md z-10 opacity-90">smart_toy</span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">Hardware</span>
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">Embedded</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">스마트 팩토리 자동화 모듈 제어기</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">산업용 로봇 팔의 정밀 제어를 위한 커스텀 PCB 설계 및 실시간 운영체제(RTOS) 기반 펌웨어 개발. 응답 속도 20% 향상 달성.</p>
</div>
</div>
{/* Project Card 2 */}
<div className="border border-outline-variant/50 rounded overflow-hidden bg-surface group hover:shadow-lg transition-shadow">
<div className="h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(${project2Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-surface-variant/40 group-hover:bg-surface-variant/10 transition-colors duration-300"></div>
<span className="material-symbols-outlined text-display-lg text-white drop-shadow-md z-10 opacity-90">database</span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">Web</span>
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">Cloud</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">대용량 데이터 처리 물류 관리 시스템</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">초당 수만 건의 트랜잭션을 처리하는 마이크로서비스 아키텍처 기반의 백엔드 시스템 구축 및 실시간 대시보드 웹 애플리케이션 개발.</p>
</div>
</div>
{/* Project Card 3 */}
<div className="border border-outline-variant/50 rounded overflow-hidden bg-surface group hover:shadow-lg transition-shadow">
<div className="h-64 relative overflow-hidden flex transition-transform duration-500 group-hover:scale-105">
<div className="w-1/2 h-full" style={{backgroundImage: `url(${cctv1Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="w-1/2 h-full border-l border-outline-variant/30" style={{backgroundImage: `url(${cctv2Img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-surface-variant/40 group-hover:bg-surface-variant/10 transition-colors duration-300"></div>
<span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-display-lg text-white drop-shadow-md z-10 opacity-90">videocam</span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">AI Vision</span>
<span className="px-2 py-1 bg-surface-container-highest text-primary font-code-sm text-code-sm rounded">Safety</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">지능형 AI 안전 감시 CCTV</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">딥러닝 기반 실시간 영상 분석 시스템 구축. 산업 현장의 <strong>안전모 착용 여부 판별</strong>, <strong>불꽃/화재 감지</strong>, <strong>작업자 쓰러짐(이상 행동) 감지</strong> 기능을 통해 빈틈없는 재해 예방 솔루션을 제공합니다.</p>
</div>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-24 bg-surface" id="contact">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">프로젝트 의뢰 및 문의</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">한길로직과 함께 안정적이고 완성도 높은 기술 솔루션을 구축하십시오. 아래 양식을 작성해 주시면 담당 엔지니어가 신속하게 회신해 드립니다.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">location_on</span>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Office</h4>
<p className="font-body-md text-body-md text-on-surface-variant">경남 창원시 마산회원구</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">mail</span>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Email</h4>
<p className="font-body-md text-body-md text-on-surface-variant">wonname@naver.com</p>
<p className="font-body-md text-body-md text-on-surface-variant">010-8308-0882</p>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/50">
<form className="space-y-6">
<div>
<label className="block font-label-md text-label-md text-primary mb-2">이름 / 회사명</label>
<input className="w-full bg-surface border border-outline-variant/50 rounded px-4 py-2 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2">이메일</label>
<input className="w-full bg-surface border border-outline-variant/50 rounded px-4 py-2 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2">문의 내용</label>
<textarea className="w-full bg-surface border border-outline-variant/50 rounded px-4 py-2 font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" rows={4}></textarea>
</div>
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded hover:bg-primary/90 transition-colors" type="button">
                            문의하기
                        </button>
</form>
</div>
</div>
</div>
</section>
{/* Footer (From JSON) */}
<footer className="w-full border-t border-outline-variant bg-surface dark:bg-primary-container">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter">
<div className="font-headline-md text-headline-md font-bold text-primary dark:text-on-primary-fixed">
                Hangil Logic
            </div>
<div className="font-body-md text-body-md text-on-secondary-container dark:text-on-primary-container text-center md:text-left">
                © 2026 Hangil Logic. Engineering Integrity, Technical Persistence.
            </div>
<div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-body-md text-body-md mt-6 md:mt-0">
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">Privacy Policy</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">Terms of Service</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">LinkedIn</a>
<a className="text-on-secondary-container dark:text-on-primary-container hover:text-primary dark:hover:text-on-primary-fixed underline decoration-1 opacity-100 hover:opacity-80 transition-opacity" href="#">GitHub</a>
</div>
</div>
</footer>

    </>
  );
}

export default App;
