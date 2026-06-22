import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Conditional form states for custom inputs
  const [brandBudget, setBrandBudget] = useState('');
  const [creatorViews, setCreatorViews] = useState('');

  // Smooth scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Premium Background Grid & Radial Glow Structure */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* TOP NAVIGATION BAR - Ultra Responsive Fix */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 md:px-[8%] py-3 md:py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
        
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            NV
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            NexVance
          </span>
        </div>

        {/* Interactive Nav Tabs - Prevent mobile clipping */}
        <div className="bg-neutral-900/80 p-1 border border-white/5 rounded-full flex space-x-0.5 sm:space-x-1 shadow-lg max-w-[95vw] sm:max-w-none justify-center overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'overview' ? 'bg-neutral-800 text-white shadow-inner' : 'text-neutral-400 hover:text-white'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'brands' ? 'bg-blue-600/90 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            Brands
          </button>
          <button 
            onClick={() => setActiveTab('creators')}
            className={`px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'creators' ? 'bg-emerald-600/90 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            Creators
          </button>
        </div>
      </nav>

      {/* DYNAMIC PAGES BODY */}
      <main className="relative z-10 pt-28 md:pt-32 max-w-7xl mx-auto w-full overflow-x-hidden">
        
        {/* ==================== 1. OVERVIEW LANDING PAGE ==================== */}
        {activeTab === 'overview' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%]">
            
            {/* Hero Top Tagline */}
            <div className="flex justify-center mb-6 md:mb-8 pt-2">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/80 border border-white/5 rounded-full px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs text-neutral-400 shadow-md text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                <span>Now booking Q3 / Q4 2026 campaigns</span>
              </div>
            </div>

            {/* Main Hero Copy */}
            <div className="text-center max-w-4xl mx-auto mb-12 md:text-center md:mb-16">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] md:leading-[1.1] mb-6 md:mb-8">
                Where <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">tech brands</span> meet <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">elite creators.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
                NexVance is the full-service marketing operation behind tomorrow's SaaS, AI, and hardware launches. We source, vet, and deploy creators that actually convert.
              </p>

              {/* Dual Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto px-4">
                <button 
                  onClick={() => setActiveTab('brands')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] group"
                >
                  <span>I'm a Tech Brand</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => setActiveTab('creators')}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)] group"
                >
                  <span>I'm a Creator</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Brand <-> Creator Middleman Node Asset - Fully Stackable Mobile Fix */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-2 md:p-3 shadow-2xl relative overflow-hidden mb-16 md:mb-24 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

              <div className="w-full min-h-[380px] md:aspect-[16/9] md:min-h-[360px] rounded-xl bg-black/80 flex flex-col justify-between p-4 md:p-8 relative overflow-hidden border border-white/5">
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full border-b border-white/5 pb-3 gap-2 sm:gap-0">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Escrow & Campaign Router Active</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-white/5">
                    Latency: <span className="text-emerald-400">0.02ms</span>
                  </div>
                </div>

                {/* Adaptive Middleman Router UI */}
                <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-2 md:px-12 my-6 md:my-4">
                  
                  {/* Left node */}
                  <div className="w-full md:w-1/4 flex justify-center md:justify-start z-10">
                    <div className="w-full max-w-[200px] md:max-w-none bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md transform hover:scale-105 transition-all text-center md:text-left">
                      <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">SaaS Brand</div>
                      <div className="text-xs font-semibold text-white truncate">AI Automations</div>
                    </div>
                  </div>

                  {/* SVG Center Connection - Hidden on mobile, beautiful on desktop */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
                    <svg className="w-full h-full" viewBox="0 0 700 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="brandToMiddle" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="middleToCreator" x1="0%" y1="50%" x2="100%" y2="50%">
                          <stop offset="0%" stopColor="#10b881" stopOpacity="1" />
                          <stop offset="100%" stopColor="#10b881" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <path d="M 160,80 L 350,125" stroke="url(#brandToMiddle)" strokeWidth="1.5" />
                      <path d="M 350,125 L 540,75" stroke="url(#middleToCreator)" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Center Node Diamond */}
                  <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 text-center py-2 md:py-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-[10px] md:text-xs font-mono font-bold text-white tracking-widest">NV</span>
                      </div>
                    </div>
                  </div>

                  {/* Right node */}
                  <div className="w-full md:w-1/4 flex justify-center md:justify-end z-10">
                    <div className="w-full max-w-[200px] md:max-w-none bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-center md:text-right transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Tech Reviewer (500k+)</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-0.5 block">Middleware Engine</span>
                      <h3 className="text-lg md:text-2xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Row - Non-scrunched Mobile Grid Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 bg-neutral-900/30 border border-white/5 p-4 md:p-6 rounded-2xl backdrop-blur-md mb-16 md:mb-28 max-w-4xl mx-auto">
              <div className="text-center p-1 sm:p-2 border-r border-white/5">
                <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-400">84%</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Audience Retention</div>
              </div>
              <div className="text-center p-1 sm:p-2 md:border-r border-white/5 lg:border-r">
                <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white">50+</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Elite Creators</div>
              </div>
              <div className="text-center p-1 sm:p-2 border-r border-white/5">
                <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white">12M+</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Monthly Reach</div>
              </div>
              <div className="text-center p-1 sm:p-2">
                <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-400">100%</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Managed Ops</div>
              </div>
            </div>

            {/* Dual Pipeline Blocks */}
            <div className="max-w-4xl mx-auto mb-16 md:mb-28">
              <div className="text-center mb-10 md:mb-16">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-2">The Operation</span>
                <h2 className="text-2xl md:text-5xl font-bold mb-3 tracking-tight">Two sides. One pipeline.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Tech Brand Card */}
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col h-full transform transition-all duration-500 hover:border-blue-500/30 group cursor-pointer" onClick={() => setActiveTab('brands')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-5 border border-white/5 overflow-hidden shadow-inner relative">
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 z-10" />
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Brand Performance Dashboard" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1.5 block tracking-widest">For Tech Brands</span>
                  <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">Launch campaigns that actually move users.</h4>
                  <p className="text-neutral-400 text-xs mb-4 leading-relaxed">Skip the cold-DM grind. Get matched with creators whose audience already wants what you ship.</p>
                  <ul className="space-y-2 text-xs text-neutral-300 mb-6 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Vetted creator roster</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Brief & QA included</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>ROI-tracked placements</span></li>
                  </ul>
                  <div className="text-xs text-blue-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Explore brand services</span> <span>→</span>
                  </div>
                </div>

                {/* Creator Card */}
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col h-full transform transition-all duration-500 hover:border-emerald-500/30 group cursor-pointer" onClick={() => setActiveTab('creators')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-5 border border-white/5 overflow-hidden shadow-inner relative">
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500 z-10" />
                    <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80" alt="Elite Tech Creator Setup" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-1.5 block tracking-widest">For Creators</span>
                  <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">Focus on content. We bring the brand deals.</h4>
                  <p className="text-neutral-400 text-xs mb-4 leading-relaxed">No upfront fees, no exclusivity traps. We only earn when we land you a deal — and we guard your rate.</p>
                  <ul className="space-y-2 text-xs text-neutral-300 mb-6 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Inbound deal flow</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Rate negotiation</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Contract protection</span></li>
                  </ul>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Apply to the roster</span> <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS LANDING & STRATEGY FORM ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 pt-2">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">⚡ For Tech Brands</span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 md:mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-xs sm:text-sm inline-block transform hover:-translate-y-0.5">Start Campaign Strategy →</a>
            </div>

            {/* ISOMETRIC GLOWING DASHBOARD - Adaptive Height & Angle Mobile Fix */}
            <div className="w-full max-w-4xl mx-auto min-h-[340px] sm:min-h-[420px] md:min-h-[460px] relative flex items-center justify-center mb-16 md:mb-24 group px-2" style={{ perspective: '1000px' }}>
              <div className="absolute w-[280px] sm:w-[500px] h-[250px] sm:h-[350px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[140px] opacity-80 pointer-events-none" />
              
              <div 
                className="relative w-full max-w-2xl aspect-[1.2/1] sm:aspect-[1.4/1] transition-all duration-700 flex items-center justify-center bg-gradient-to-tr from-blue-950/40 to-neutral-900/20 border border-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-6 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:group-hover:-translate-y-4"
                style={{ transform: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'rotateX(45deg) rotateZ(-25deg) skewX(5deg)' }}
              >
                <div className="w-full h-full opacity-10 sm:opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:16px_16px] rounded-2xl absolute inset-0 p-6 pointer-events-none" />
                
                <div className="w-full h-full bg-neutral-950/90 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between relative z-10 overflow-hidden">
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 h-full items-stretch my-auto">
                    {/* Left Column: Code Snippet */}
                    <div className="md:col-span-5 bg-black/60 rounded-xl p-2.5 sm:p-3 border border-white/5 text-[9px] sm:text-[10px] text-neutral-400 flex flex-col justify-between leading-normal font-mono">
                      <div>
                        <div className="text-neutral-500 mb-1.5 font-sans text-[8px] sm:text-[9px] uppercase tracking-wider font-bold">SDK Snippet Layout</div>
                        <span className="text-blue-400">import</span> &#123; NVCore &#125; <span className="text-blue-400">from</span> <span className="text-emerald-400">'@nv/sdk'</span>;
                        <br />
                        <span className="text-blue-400">const</span> track = <span className="text-blue-400">new</span> NVCore(&#123;
                        <br />
                        &nbsp;&nbsp;brandId: <span className="text-amber-400">"saas_ai"</span>
                        <br />
                        &#125;);
                      </div>
                      <div className="mt-2 pt-1.5 border-t border-white/5 text-[8px] text-neutral-500 font-sans">
                        Terminal: <span className="text-emerald-400">Active.</span>
                      </div>
                    </div>

                    {/* Right Column: Mini Analytical Visual */}
                    <div className="md:col-span-7 bg-neutral-950/80 rounded-xl p-3 sm:p-4 border border-white/5 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="text-neutral-500 text-[8px] sm:text-[9px] uppercase tracking-wider font-bold font-sans">Performance Engine</div>
                          <div className="text-xs sm:text-sm font-bold text-white tracking-tight">ROI Overview</div>
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold text-emerald-400">+314.8%</div>
                      </div>

                      {/* Line/Bar Graph Simulation */}
                      <div className="h-16 sm:h-20 w-full flex items-end space-x-1 sm:space-x-1.5 pt-2 pb-1 px-0.5 border-b border-white/5">
                        <div className="bg-neutral-800 w-full h-[20%] rounded-t" />
                        <div className="bg-neutral-800 w-full h-[35%] rounded-t" />
                        <div className="bg-blue-600/30 w-full h-[50%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                        <div className="bg-blue-600/40 w-full h-[45%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                        <div className="bg-blue-600/60 w-full h-[70%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                        <div className="bg-gradient-to-t from-blue-600 to-emerald-500 w-full h-[98%] rounded-t relative shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400" />
                        </div>
                      </div>

                      {/* Stat Metrics Row */}
                      <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center font-sans">
                        <div className="bg-black/40 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase">Live Clicks</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-white">41.2k</div>
                        </div>
                        <div className="bg-black/40 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase">Sign-ups</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-blue-400">8,914</div>
                        </div>
                        <div className="bg-black/40 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase">CAC</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400">$12.40</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-2 mt-3 flex justify-between items-center w-full text-[8px] sm:text-[9px]">
                    <span className="uppercase tracking-widest text-blue-400 font-bold font-sans">Custom Brand Module</span>
                    <span className="text-neutral-500 font-mono bg-neutral-950 px-1.5 py-0.5 rounded border border-white/5">Status: Encr.</span>
                  </div>

                </div>
              </div>
            </div>

            {/* 4 GRID CARDS - Tight Mobile Fix */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-16 md:mb-20">
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-blue-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-2.5">01</div>
                <h4 className="text-xs font-bold text-white mb-1">Campaign Routing</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">We sync your parameters into tailored influencer video outlines with absolute compliance layouts.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-blue-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-2.5">02</div>
                <h4 className="text-xs font-bold text-white mb-1">Performance Tracking</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Track integration channels with clean conversion checks, reach analytics metrics, and live dashboards.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-blue-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-2.5">03</div>
                <h4 className="text-xs font-bold text-white mb-1">Infrastructure Guard</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Secure escrow management setups, legal sheets protection, and transparent operational pipeline logs.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-blue-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-2.5">04</div>
                <h4 className="text-xs font-bold text-white mb-1">ROI-Optimized Matches</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Skip generalized pitches. Route directly to creators whose historic click retention data ensures raw conversion value.</p>
              </div>
            </div>

            {/* STRATEGY REQUEST FORM */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-5 sm:p-8 rounded-2xl backdrop-blur-md mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start shadow-2xl">
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">Work with <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">NexVance</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">Partner with a dedicated marketing manager to launch your next tech, SaaS, or hardware campaign seamlessly.</p>
                <div className="space-y-3 pt-3 border-t border-white/5 hidden sm:block">
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Guaranteed Video Quality Check</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Full CTR & conversion analytics</span>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company / SaaS name</label>
                    <input required type="text" name="companyName" placeholder="Your brand name" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company Website URL</label>
                    <input required type="url" name="websiteUrl" placeholder="https://yourbrand.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Work email</label>
                    <input required type="email" name="email" placeholder="name@company.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Estimated Monthly Budget</label>
                    <select 
                      required 
                      name="budget_bracket" 
                      value={brandBudget}
                      onChange={(e) => setBrandBudget(e.target.value)}
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-blue-500 outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your budget bracket</option>
                      <option value="1k-5k">$1,000 - $5,000 / mo</option>
                      <option value="5k-20k">$5,000 - $20,000 / mo</option>
                      <option value="20k+">$20,000+ / mo</option>
                      <option value="custom">Custom / Other Budget</option>
                    </select>
                  </div>
                </div>

                {brandBudget === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1.5">Specify Your Exact Budget ($)</label>
                    <input required type="text" name="customBrandBudget" placeholder="e.g., $35,000" className="w-full bg-blue-950/30 border border-blue-500/40 rounded-lg p-3 text-xs text-white focus:border-blue-400 outline-none" />
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign goals & Target Audience</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your product, KPI requirements..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">Send Strategy Request</button>
              </form>
            </div>
          </div>
        )}

        {/* ==================== 3. FOR CREATORS ROSTER LANDING & APPLICATION FORM ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 pt-2">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(16,185,129,0.2)]">👥 For Creators</span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">Focus on content. We'll bring the brand deals.</h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 md:mb-8">Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-xs sm:text-sm inline-block transform hover:-translate-y-0.5">Apply to the Roster →</a>
            </div>

            {/* PREMIUM ISOMETRIC INTERACTIVE VISUAL FOR CREATORS (Mobile Flatten Fix) */}
            <div className="w-full max-w-4xl mx-auto min-h-[340px] sm:min-h-[420px] md:min-h-[460px] relative flex items-center justify-center mb-16 md:mb-24 group px-2" style={{ perspective: '1000px' }}>
              <div className="absolute w-[280px] sm:w-[500px] h-[250px] sm:h-[350px] bg-emerald-600/10 rounded-full blur-[80px] sm:blur-[140px] opacity-80 pointer-events-none" />
              
              <div 
                className="relative w-full max-w-2xl aspect-[1.2/1] sm:aspect-[1.4/1] transition-all duration-700 flex items-center justify-center bg-gradient-to-tr from-emerald-950/30 to-neutral-900/10 rounded-2xl sm:rounded-3xl p-3 sm:p-6 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.85)] md:group-hover:-translate-y-4"
                style={{ transform: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'rotateX(38deg) rotateZ(-18deg) skewX(2deg)' }}
              >
                <div className="w-full h-full opacity-10 bg-[linear-gradient(to_right,#10b881_1px,transparent_1px),linear-gradient(to_bottom,#10b881_1px,transparent_1px)] bg-[size:18px_18px] rounded-2xl absolute inset-0 p-6 pointer-events-none" />
                
                <div className="w-full h-full bg-neutral-950/95 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between relative z-10 overflow-hidden">
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 h-full items-stretch my-auto">
                    {/* Left Layer: Analytics info */}
                    <div className="md:col-span-7 bg-neutral-900/40 rounded-xl p-3 border border-white/5 flex flex-col justify-between backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="text-neutral-500 text-[8px] sm:text-[9px] uppercase tracking-wider font-bold font-sans">Payout Middleware</div>
                          <div className="text-xs font-bold text-white tracking-tight">Escrow Distribution</div>
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-mono uppercase bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">Secured</span>
                      </div>

                      {/* Waveform Line Graphics */}
                      <div className="h-16 sm:h-24 w-full flex items-end space-x-1 pt-4 pb-1 px-0.5 border-b border-white/5 relative">
                        <div className="absolute top-1 left-1 flex items-center space-x-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-[7px] sm:text-[8px] font-mono text-neutral-400">Live CPM Optimizer</span>
                        </div>
                        <div className="bg-neutral-800/60 w-full h-[20%] rounded-t" />
                        <div className="bg-neutral-800/60 w-full h-[35%] rounded-t" />
                        <div className="bg-emerald-600/20 w-full h-[50%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500/50" /></div>
                        <div className="bg-emerald-600/30 w-full h-[45%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400/60" /></div>
                        <div className="bg-emerald-600/50 w-full h-[70%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400" /></div>
                        <div className="bg-gradient-to-t from-emerald-600 to-teal-400 w-full h-[100%] rounded-t relative shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal-300" />
                        </div>
                      </div>

                      {/* Readouts fields */}
                      <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center font-sans">
                        <div className="bg-black/50 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase font-bold">Brand Deals</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-white">Inbound</div>
                        </div>
                        <div className="bg-black/50 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase font-bold">Avg CPM</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-emerald-400">$42.50</div>
                        </div>
                        <div className="bg-black/50 p-1 rounded border border-white/5">
                          <div className="text-[7px] sm:text-[8px] text-neutral-500 uppercase font-bold">Take Rate</div>
                          <div className="text-[9px] sm:text-[10px] font-bold text-teal-400">0% Excl.</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Layer: Manifest Logger */}
                    <div className="md:col-span-5 bg-black/50 rounded-xl p-2.5 sm:p-3 border border-white/5 text-[9px] sm:text-[10px] text-neutral-400 flex flex-col justify-between leading-relaxed font-mono">
                      <div>
                        <div className="text-neutral-500 mb-1.5 font-sans text-[8px] sm:text-[9px] uppercase tracking-wider font-bold">Roster Manifest</div>
                        <span className="text-emerald-400">const</span> profile = &#123;
                        <br />
                        &nbsp;&nbsp;tier: <span className="text-teal-400">"Elite_Tech"</span>,
                        <br />
                        &nbsp;&nbsp;reach: <span className="text-amber-400">"500k+"</span>
                        <br />
                        &#125;;
                      </div>
                      <div className="mt-2 pt-1.5 border-t border-white/5 text-[8px] sm:text-[9px] text-neutral-500 flex justify-between items-center font-sans">
                        <span>Node Router:</span>
                        <span className="text-emerald-400 font-bold animate-pulse">● Live</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-2 mt-3 flex justify-between items-center w-full text-[8px] sm:text-[9px]">
                    <span className="uppercase tracking-widest text-emerald-400 font-bold font-sans">NV Creator Operations Hub</span>
                    <span className="text-neutral-500 font-mono bg-neutral-950 px-1.5 py-0.5 rounded border border-white/5">End-To-End</span>
                  </div>

                </div>
              </div>
            </div>

            {/* 4 CARDS GRID */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-16 md:mb-20">
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-emerald-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-2.5">01</div>
                <h4 className="text-xs font-bold text-white mb-1">High Rate Protection</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">No predatory split traps. We legally secure your CPM baselines and optimize deal setups transparently.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-emerald-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-2.5">02</div>
                <h4 className="text-xs font-bold text-white mb-1">Automated Sponsorship Flow</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Skip cold corporate follow-ups. Recieve incoming verified brand deal routes optimized for your platform size.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-emerald-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-2.5">03</div>
                <h4 className="text-xs font-bold text-white mb-1">Creative Discretion</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Your custom production workflow stays clean. We manage tedious invoices pipelines, briefs, and legal details.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-xl p-4.5 transition-all duration-300 hover:border-emerald-500/30 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-2.5">04</div>
                <h4 className="text-xs font-bold text-white mb-1">Zero Exclusivity Rules</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Retain complete autonomy. Keep your own direct inbound deals while pulling active premium campaigns from NexVance.</p>
              </div>
            </div>

            {/* ROSTER APPLICATION FORM */}
            <div id="roster-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-5 sm:p-8 rounded-2xl backdrop-blur-md mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start shadow-2xl text-left">
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">Join the <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Elite Roster</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">We review applications within 48 hours. If there's a fit with active tech/SaaS campaigns, we'll reach out with immediate deal structures.</p>
                <div className="space-y-3 pt-3 border-t border-white/5 hidden sm:block">
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">0% Exclusivity Traps — keep your inbound</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Guaranteed payment escrow system</span>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Platform / Link</label>
                    <input required type="url" name="platformLink" placeholder="https://youtube.com/c/..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Audience Size / Subs</label>
                    <input required type="text" name="subscriberCount" placeholder="e.g., 150k" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all duration-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Avg. Views per Video</label>
                    <select 
                      required 
                      name="views_bracket" 
                      value={creatorViews}
                      onChange={(e) => setCreatorViews(e.target.value)}
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-emerald-500 outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select average views</option>
                      <option value="5k-20k">5,000 - 20,000 views</option>
                      <option value="20k-100k">20,000 - 100,000 views</option>
                      <option value="100k+">100,000+ views</option>
                      <option value="custom">Custom Bracket</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Main Content Tech Niche</label>
                    <input required type="text" name="niche" placeholder="e.g., Consumer Tech" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all duration-300" />
                  </div>
                </div>

                {creatorViews === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Specify Exact Avg. Views</label>
                    <input required type="text" name="customCreatorViews" placeholder="e.g., 45,000 views" className="w-full bg-emerald-950/30 border border-emerald-500/40 rounded-lg p-3 text-xs text-white focus:border-emerald-400 outline-none" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Channel name</label>
                    <input required type="text" name="channelName" placeholder="e.g., TechWithDev" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Contact email</label>
                    <input required type="email" name="email" placeholder="you@gmail.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        {/* GLOBAL FOOTER SECTION */}
        <footer className="border-t border-white/5 pt-12 pb-8 px-4 sm:px-6 md:px-[8%] bg-black/20 w-full relative z-10 text-left">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 mb-8">
            <div className="md:col-span-6">
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-[10px]">NV</div>
                <span className="text-sm font-bold text-white tracking-tight">NexVance</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-sm leading-relaxed">Elite performance influencer middleware infrastructure layout for SaaS, deep tech systems, and hardware brands.</p>
            </div>
            
            <div className="md:col-span-3 col-span-1">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Navigation</h5>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('brands')} className="hover:text-white text-left">Tech brand portal</button></li>
                <li><button onClick={() => setActiveTab('creators')} className="hover:text-white text-left">Creator roster</button></li>
                <li><button onClick={() => setActiveTab('overview')} className="hover:text-white text-left">Overview</button></li>
              </ul>
            </div>

            <div className="md:col-span-3 col-span-1">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Corporate</h5>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white text-left">Privacy</button></li>
                <li><button onClick={() => setActiveTab('terms')} className="hover:text-white text-left">Terms</button></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-[10px] text-neutral-600 border-t border-white/5 pt-6">
            © 2026 NexVance. Managed operations infrastructure.
          </div>
        </footer>
      </main>
    </div>
  );
}
