import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">Portfolio</div>
          <div className="flex gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`hover:text-emerald-400 transition-colors ${activeSection === item.id ? 'text-emerald-400' : 'text-zinc-400'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 inline-block px-4 py-1.5 bg-emerald-950 text-emerald-400 text-sm rounded-full border border-emerald-900">
            Available for opportunities
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            안녕하세요,<br />저는 <span className="text-emerald-400">김철수</span>입니다
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            프론트엔드 개발자 | UI/UX 애호가 | 창의적인 문제를 해결합니다
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setActiveSection('projects')} className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-emerald-400 hover:text-black transition-all">
              프로젝트 보기
            </button>
            <button onClick={() => setActiveSection('contact')} className="px-8 py-4 border border-white/30 rounded-xl hover:bg-white/10 transition-all">
              연락하기
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                5년 이상의 프론트엔드 개발 경험을 가진 개발자입니다. React, TypeScript, Tailwind를 주로 사용하며, 사용자 중심의 아름다운 인터페이스를 만드는 것을 좋아합니다.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-emerald-400 text-sm mb-1">SKILLS</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Framer Motion', 'Figma'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all">
                <div className="h-64 bg-zinc-800 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform">🚀</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-zinc-400 mb-6">혁신적인 웹 애플리케이션. React와 Tailwind로 구축된 사용자 경험 중심 프로젝트.</p>
                  <div className="flex gap-3">
                    <span className="text-xs px-4 py-2 bg-zinc-800 rounded-full">React</span>
                    <span className="text-xs px-4 py-2 bg-zinc-800 rounded-full">Tailwind</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-zinc-400 mb-12">새로운 기회나 협업에 언제든 연락 주세요!</p>
          <a href="mailto:your@email.com" className="inline-block px-10 py-5 bg-emerald-500 text-black font-semibold rounded-2xl hover:bg-emerald-400 transition-all text-lg">
            이메일 보내기
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        © 2026 김철수. All rights reserved.
      </footer>
    </div>
  );
}

export default App;