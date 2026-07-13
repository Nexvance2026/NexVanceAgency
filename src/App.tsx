import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [brandBudget, setBrandBudget] = useState('');
  const [creatorViews, setCreatorViews] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Premium Background Grid & Radial Glow Structure */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* TOP NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 md:px-[8%] py-3 md:py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            NV
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            NexVance
          </span>
        </div>

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
            
            <div className="flex justify-center mb-6 md:mb-8 pt-2">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/80 border border-white/5 rounded-full px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs text-neutral-400 shadow-md text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                <span>Now booking Q3 / Q4 2026 campaigns</span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto mb-12 md:text-center md:mb-16">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] md:leading-[1.1] mb-6 md:mb-8">
                Where <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">top brands</span> meet <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">elite creators.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
                NexVance is the full-service marketing operation behind tomorrow's viral products, high-growth e-commerce assets, and digital brands. We source, vet, and deploy creators that convert attention into revenue.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto px-4">
                <button 
                  onClick={() => setActiveTab('brands')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] group"
                >
                  <span>I'm a Brand</span>
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

            {/* Middleman Router Asset */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-2 md:p-3 shadow-2xl relative overflow-hidden mb-16 md:mb-24 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

              <div className="w-full min-h-[380px] md:aspect-[16/9] md:min-h-[360px] rounded-xl bg-black/80 flex flex-col justify-between p-4 md:p-8 relative overflow-hidden border border-white/5">
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full border-b border-white/5 pb-3 gap-2 sm:gap-0">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Live Deal Flow</span>
                  </div>
                </div>

                <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-2 md:px-12 my-6 md:my-4">
                  <div className="w-full md:w-1/4 flex justify-center md:justify-start z-10">
                    <div className="w-full max-w-[200px] md:max-w-none bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md transform hover:scale-105 transition-all text-center md:text-left">
                      <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">Growing Brand</div>
                      <div className="text-xs font-semibold text-white truncate">E-Commerce / Product</div>
                    </div>
                  </div>

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

                  <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 text-center py-2 md:py-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-[10px] md:text-xs font-mono font-bold text-white tracking-widest">NV</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/4 flex justify-center md:justify-end z-10">
                    <div className="w-full max-w-[200px] md:max-w-none bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-center md:text-right transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Lifestyle & Niche (500k+)</div>
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

            {/* Why NexVance - problem/solution narrative */}
            <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block mb-4">Why NexVance Exists</span>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-medium mb-5">
                Most brands and premium creators fail to build long-term, high-converting partnerships.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Brands waste thousands on upfront agency retainers or sponsorships that don't convert — while creators lose hours managing back-and-forth emails instead of focusing on their content. At NexVance, we eliminate the friction entirely, bridging the gap between top-tier global brands and premium creators on a transparent, pure-performance model with zero hidden fees.
              </p>
            </div>

            {/* Trust badges - no fabricated stats, premium card style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-28 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center gap-3 bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 border border-white/10 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]">✓</div>
                <span className="text-[11px] md:text-xs text-neutral-300 font-medium leading-snug">Founder-led, direct point of contact</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 border border-white/10 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.15)]">✓</div>
                <span className="text-[11px] md:text-xs text-neutral-300 font-medium leading-snug">Zero upfront cost, ever</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 border border-white/10 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]">✓</div>
                <span className="text-[11px] md:text-xs text-neutral-300 font-medium leading-snug">Signed contract before any work begins</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 border border-white/10 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.15)]">✓</div>
                <span className="text-[11px] md:text-xs text-neutral-300 font-medium leading-snug">Pure performance model</span>
              </div>
            </div>

            {/* Dual Pipeline Blocks */}
            <div className="max-w-4xl mx-auto mb-16 md:mb-28">
              <div className="text-center mb-10 md:mb-16">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-2">The Operation</span>
                <h2 className="text-2xl md:text-5xl font-bold mb-3 tracking-tight">Two sides. One pipeline.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Brand Card */}
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col h-full transform transition-all duration-500 hover:border-blue-500/30 group cursor-pointer" onClick={() => setActiveTab('brands')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-5 border border-white/5 overflow-hidden shadow-inner relative">
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 z-10" />
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Brand Performance Dashboard" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1.5 block tracking-widest">For Brands</span>
                  <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">Launch campaigns that scale conversion metrics.</h4>
                  <p className="text-neutral-400 text-xs mb-4 leading-relaxed">Skip the cold-DM grind. Get matched with native creators whose audiences already buy your products.</p>
                  <ul className="space-y-2 text-xs text-neutral-300 mb-6 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Vetted creator roster</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Briefing & QA included</span></li>
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
                    <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" alt="Content Setup" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-1.5 block tracking-widest">For Creators</span>
                  <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">Focus on content. We bring premium deals.</h4>
                  <p className="text-neutral-400 text-xs mb-4 leading-relaxed">No upfront fees, no exclusive traps. We only earn when we land you a secure deal — protecting your rates.</p>
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

        {/* ==================== 2. FOR BRANDS LANDING & STRATEGY FORM ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 pt-2">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">⚡ For Brands</span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">Scale your customer base with creators who capture attention.</h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 md:mb-8">High-intent users, structural conversion placements, and optimized campaigns from kick-off to full delivery metrics.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-xs sm:text-sm inline-block transform hover:-translate-y-0.5">Start Campaign Strategy →</a>
            </div>

            {/* DASHBOARD MODULE - real image, no fabricated metrics */}
            <div className="w-full max-w-2xl mx-auto mb-16 md:mb-24 group">
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" alt="Brand team reviewing campaign strategy" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
              <div className="group relative bg-[#090d16]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">01</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">Campaign Routing</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">We translate your operational requirements into tailored influencer outlines matching active consumer demographics.</p>
                </div>
              </div>

              <div className="group relative bg-[#090d16]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">02</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">Performance Tracking</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Track ongoing integrations via real-time conversion checks, click retention models, and simple logs.</p>
                </div>
              </div>

              <div className="group relative bg-[#090d16]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">03</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">Infrastructure Guard</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Every deal is documented in a signed contract before work begins \u2014 deliverables, timeline, and rate, all in writing.</p>
                </div>
              </div>

              <div className="group relative bg-[#090d16]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">04</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">Data-Driven Matches</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Skip generalized assumptions. Deploy structural campaigns directly across creators backed by historic reach data.</p>
                </div>
              </div>
            </div>

            {/* STRATEGY REQUEST FORM */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-5 sm:p-8 rounded-2xl backdrop-blur-md mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start shadow-2xl">
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">Work with <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">NexVance</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">Partner with a dedicated marketing pipeline to optimize and execute your product, scale or physical brand campaign seamlessly.</p>
                <div className="space-y-3 pt-3 border-t border-white/5 hidden sm:block">
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Guaranteed Asset Content Quality</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Full reach & conversion analytics</span>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company / Brand name</label>
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
                  <textarea name="message" rows={4} placeholder="Tell us about your product niche, customer avatar requirements..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none resize-none" />
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
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 md:mb-8">Stop wasting hours on cold corporate templates. We guard your creative freedom and coordinate high-conversion structural sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-xs sm:text-sm inline-block transform hover:-translate-y-0.5">Apply to the Roster →</a>
            </div>

            {/* CREATOR VISUAL - real image, no fabricated metrics */}
            <div className="w-full max-w-2xl mx-auto mb-16 md:mb-24 group">
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?auto=format&fit=crop&w=1200&q=80" alt="Creator recording content" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>

            {/* CREATORS HOVER GRID CARDS */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
              <div className="group relative bg-[#050b0a]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">01</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">High Rate Protection</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">No hidden commission traps. Your rate is locked in writing before we pitch you to a single brand.</p>
                </div>
              </div>

              <div className="group relative bg-[#050b0a]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">02</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">Automated Deal Flow</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Skip outdated manual coordination setups. Receive verified verified campaigns tracking direct target offers.</p>
                </div>
              </div>

              <div className="group relative bg-[#050b0a]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">03</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">Creative Discretion</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Your custom workflow styling stays clean. We manage structural briefs, logistical documentation, and invoice checks.</p>
                </div>
              </div>

              <div className="group relative bg-[#050b0a]/80 border border-white/5 rounded-2xl p-5 transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">04</div>
                  <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">Zero Exclusivity Rules</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-normal">Retain total structural control. Secure separate external inbound deals while routing active premium runs from NexVance.</p>
                </div>
              </div>
            </div>

            {/* ROSTER APPLICATION FORM */}
            <div id="roster-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-5 sm:p-8 rounded-2xl backdrop-blur-md mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start shadow-2xl text-left">
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">Join the <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Elite Roster</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">We review inbound structures within 48 hours. If your content profile aligns with active brand placements, we match details immediately.</p>
                <div className="space-y-3 pt-3 border-t border-white/5 hidden sm:block">
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">0% Exclusivity Rules — retain autonomy</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-[11px] text-neutral-300 font-medium">Payment held until you approve the final draft</span>
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
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Avg. Views per Content Unit</label>
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
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Main Content Niche</label>
                    <input required type="text" name="niche" placeholder="e.g., Lifestyle, Review, Business" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all duration-300" />
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
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Channel / Profile name</label>
                    <input required type="text" name="channelName" placeholder="e.g., CreatorDev" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
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

        {/* ==================== 4. DYNAMIC PRIVACY POLICY VIEW ==================== */}
        {activeTab === 'privacy' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%] max-w-4xl mx-auto text-left mb-16 md:mb-24">
            <div className="mb-8 border-b border-white/5 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold block mb-2">Legal Operations // Core</span>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
              <p className="text-xs text-neutral-500 font-mono">Last Updated: June 2026</p>
            </div>

            <div className="bg-neutral-950/50 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-6 text-xs sm:text-sm text-neutral-400 leading-relaxed shadow-xl">
              <div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 1. What Data We Collect
                </h3>
                <p>We only collect basic info needed to process your inquiries and run metrics. This includes your name, company website, work email, and public social media stats. We never ask for private dashboard credentials or passwords.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 2. How We Use Info
                </h3>
                <p>Your data is used to match you with the right brand or creator, and to manage the payment and contract process for any deal you agree to.</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 5. DYNAMIC TERMS OF SERVICE VIEW ==================== */}
        {activeTab === 'terms' && (
          <div className="animate-fadeIn px-4 sm:px-6 md:px-[8%] max-w-4xl mx-auto text-left mb-16 md:mb-24">
            <div className="mb-8 border-b border-white/5 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-bold block mb-2">Compliance Metrics // Active</span>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">Terms of Service</h1>
              <p className="text-xs text-neutral-500 font-mono">Effective: June 2026</p>
            </div>

            <div className="bg-neutral-950/50 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-6 text-xs sm:text-sm text-neutral-400 leading-relaxed shadow-xl">
              <div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 1. Creator Freedom (No Exclusivity)
                </h3>
                <p>NexVance operates as an independent pipeline connecting brands and creators. Roster accounts retain full rights and absolute autonomy to lock external deal metrics at any point.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 2. Payment Milestones
                </h3>
                <p>Campaign payments are collected upfront in two installments (50% before production, 50% before publishing) and held by NexVance until each milestone is met.</p>
              </div>
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
              <p className="text-neutral-500 text-xs max-w-sm leading-relaxed">Elite performance influencer operational infrastructure matching active brands with scalable creative rosters global distribution.</p>
            </div>
            
            <div className="md:col-span-3 col-span-1">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Navigation</h5>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('brands')} className="hover:text-white text-left">Brand portal</button></li>
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
