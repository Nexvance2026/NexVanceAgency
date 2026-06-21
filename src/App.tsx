import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('brands'); // Kept on brands for immediate testing
  const [brandBudget, setBrandBudget] = useState('');
  const [creatorViews, setCreatorViews] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Premium Background Grid & Radial Glow */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* TOP NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-6 md:px-[8%] py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            NV
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            NexVance
          </span>
        </div>

        <div className="bg-neutral-900/80 p-1 border border-white/5 rounded-full flex space-x-1 shadow-lg">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'overview' ? 'bg-neutral-800 text-white shadow-inner' : 'text-neutral-400 hover:text-white'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'brands' ? 'bg-blue-600/90 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Tech Brands
          </button>
          <button 
            onClick={() => setActiveTab('creators')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'creators' ? 'bg-emerald-600/90 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Creators
          </button>
        </div>
      </nav>

      {/* DYNAMIC PAGES BODY */}
      <main className="relative z-10 pt-28 max-w-7xl mx-auto w-full">
        
        {/* ==================== 1. OVERVIEW LANDING PAGE ==================== */}
        {activeTab === 'overview' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="flex justify-center mb-8 pt-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/80 border border-white/5 rounded-full px-4 py-1.5 text-xs text-neutral-400 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Now booking Q3 / Q4 2026 campaigns</span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Where <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">tech brands</span> meet <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">elite creators.</span>
              </h1>
              <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                NexVance is the full-service marketing operation behind tomorrow's SaaS, AI, and hardware launches. We source, vet, and deploy creators that actually convert.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('brands')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] group"
                >
                  <span>I'm a Tech Brand</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => setActiveTab('creators')}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)] group"
                >
                  <span>I'm a Creator</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Core Pipeline Router Block */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-24 transition-all duration-500 hover:border-blue-500/20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="w-full aspect-[16/9] min-h-[360px] rounded-xl bg-black/80 flex flex-col justify-between p-6 relative overflow-hidden border border-white/5">
                <div className="relative z-10 flex justify-between items-center w-full border-b border-white/5 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Escrow & Campaign Router Active</span>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 bg-neutral-950 px-2.5 py-1 rounded-md border border-white/5">
                    Latency: <span className="text-emerald-400">0.02ms</span>
                  </div>
                </div>

                <div className="relative w-full h-full flex items-center justify-between px-4 md:px-12 my-4">
                  <div className="flex flex-col space-y-4 z-10 w-1/4">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">SaaS Brand</div>
                      <div className="text-xs font-semibold text-white truncate">AI Automations</div>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 700 250" fill="none">
                      <path d="M 160,80 L 350,125" stroke="url(#brandToMiddle)" strokeWidth="1.5" />
                      <path d="M 350,125 L 540,75" stroke="url(#middleToCreator)" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-white tracking-widest">NV</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 z-10 w-1/4 items-end">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl text-right transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Tech Reviewer (500k+)</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">Middleware Engine</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS (REDESIGNED PURE VISUAL POP-OUT) ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-sm inline-block transform hover:-translate-y-0.5">Start Campaign Strategy →</a>
            </div>

            {/* BRAND SPECIFIC NEW VISUAL: ISOMETRIC DEEPLY LAYERED GLOWING DASHBOARD HUDS (Inspired by brand-dashboard_2.jpg) */}
            <div className="w-full max-w-4xl mx-auto min-h-[460px] relative flex items-center justify-center mb-24 perspective-1000 group">
              
              {/* Giant Ambient Back-Glow popping from behind the layers */}
              <div className="absolute w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] opacity-80 group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />

              {/* ISOMETRIC DECK OF GLASS LAYERS */}
              <div className="relative w-full max-w-2xl aspect-[1.4/1] transform rotate-x-55 rotate-z-[-32deg] skew-x-6 transition-all duration-700 group-hover:rotate-x-50 group-hover:rotate-z-[-28deg] group-hover:-translate-y-4 flex items-center justify-center">
                
                {/* LAYER 1: BASE DEEP PLATFORM SHADOW / UNDERLAY GRID */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-neutral-900/20 border border-white-[0.03] rounded-3xl p-6 backdrop-blur-xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] transition-all duration-500">
                  <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:16px_16px] rounded-2xl" />
                  
                  {/* Faux minimal subtle layout blocks on base layer */}
                  <div className="absolute bottom-6 left-6 w-1/3 h-6 bg-white/5 rounded-md" />
                  <div className="absolute bottom-6 right-6 w-12 h-6 bg-emerald-500/10 rounded-md" />
                </div>

                {/* LAYER 2: INTERMEDIATE DATA PIPELINE METRICS CHART (Elevated floating panel) */}
                <div className="absolute inset-x-4 inset-y-8 bg-neutral-950/80 border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-z-8 transition-transform duration-700 group-hover:translate-z-12 flex flex-col justify-between">
                  <div className="flex justify-between items-center opacity-70">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <div className="w-8 h-1 bg-white/10 rounded" />
                    </div>
                    <div className="w-12 h-2 bg-blue-500/20 rounded animate-pulse" />
                  </div>

                  {/* Pure Abstract Neon Chart Visual Vectors */}
                  <div className="w-full h-28 flex items-end space-x-2 px-2 border-b border-white/5 relative">
                    {/* Glowing dynamic path gradient simulation */}
                    <div className="absolute inset-x-0 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-emerald-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-80" />
                    
                    <div className="bg-neutral-900 w-full h-[20%] rounded-t-sm" />
                    <div className="bg-neutral-900 w-full h-[40%] rounded-t-sm" />
                    <div className="bg-blue-600/20 w-full h-[65%] rounded-t-sm relative border-t border-blue-400/50" />
                    <div className="bg-blue-600/30 w-full h-[55%] rounded-t-sm relative border-t border-blue-400/60" />
                    <div className="bg-blue-500/40 w-full h-[80%] rounded-t-sm relative border-t border-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
                    <div className="bg-gradient-to-t from-blue-600/40 to-emerald-500/40 w-full h-[95%] rounded-t-sm relative border-t border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]" />
                  </div>

                  {/* Mini visual metrics labels */}
                  <div className="grid grid-cols-3 gap-2 text-[8px] font-mono tracking-widest text-neutral-500">
                    <div className="h-4 bg-white/[0.02] rounded border border-white/5 flex items-center justify-center">CR: 4.8%</div>
                    <div className="h-4 bg-white/[0.02] rounded border border-white/5 flex items-center justify-center text-blue-400">ROI: 3.1x</div>
                    <div className="h-4 bg-white/[0.02] rounded border border-white/5 flex items-center justify-center">CAC: MIN</div>
                  </div>
                </div>

                {/* LAYER 3: TOP ULTRA-FLOATING GLOWING HUD CARDS (Popping clean over the frame) */}
                <div className="absolute -top-6 right-4 w-44 aspect-[1.5/1] bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-3 shadow-[0_15px_30px_rgba(37,99,235,0.4)] transform translate-z-20 transition-transform duration-700 group-hover:translate-z-28 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-5 h-5 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px]">⚡</div>
                    <span className="text-[7px] font-mono tracking-widest uppercase bg-white/20 px-1.5 py-0.5 rounded">LIVE TRACK</span>
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-white/70 uppercase">Conversion Engine</div>
                    <div className="text-lg font-bold font-mono tracking-tight leading-none mt-0.5">+412%</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 w-40 aspect-[1.6/1] bg-neutral-900/90 border border-emerald-500/30 text-white rounded-xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform translate-z-24 transition-transform duration-700 group-hover:translate-z-32 flex flex-col justify-between backdrop-blur-md">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[7px] font-mono tracking-wider text-emerald-400 uppercase font-bold">Roster Secured</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400">Pipeline Linked</div>
                </div>

              </div>
            </div>

            {/* 4 HOVER GRID CARDS */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3">01</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Campaign Routing</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">We sync your parameters into tailored influencer video outlines with absolute compliance layouts.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3">02</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Performance Tracking</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Track integration channels with clean conversion checks, reach analytics metrics, and live dashboards.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3">03</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Infrastructure Guard</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Secure escrow management setups, legal sheets protection, and transparent operational pipeline logs.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3">04</div>
                <h4 className="text-xs font-bold text-white mb-1.5">ROI-Optimized Matches</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Skip generalized pitches. Route directly to creators whose historic click retention data ensures raw conversion value.</p>
              </div>
            </div>

            {/* STRATEGY REQUEST FORM */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Work with <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">NexVance</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">Partner with a dedicated marketing manager to launch your next tech, SaaS, or hardware campaign seamlessly.</p>
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-3 bg-black/30 p-3 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-xs text-neutral-300 font-medium">Guaranteed Video Quality Check</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-3 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                    <span className="text-xs text-neutral-300 font-medium">Full CTR & conversion analytics pipeline</span>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
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
                    <input required type="text" name="customBrandBudget" placeholder="e.g., $35,000 / complete campaign" className="w-full bg-blue-950/30 border border-blue-500/40 rounded-lg p-3 text-xs text-white focus:border-blue-400 outline-none" />
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign goals & Target Audience</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your product, KPI requirements, and ideal creator profiles..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">Send Strategy Request</button>
              </form>
            </div>
          </div>
        )}

        {/* ==================== 3. FOR CREATORS ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">👥 For Creators</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Focus on content. We'll bring the brand deals.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-sm inline-block transform hover:-translate-y-0.5">Apply to the Roster →</a>
            </div>

            {/* ARTISTIC VISUAL SETUP */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#05090e] border border-white/5 p-2 shadow-2xl relative overflow-hidden mb-12 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b88103_1px,transparent_1px),linear-gradient(to_bottom,#10b88103_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
              <div className="w-full aspect-[21/9] min-h-[300px] rounded-xl bg-[#020408] relative overflow-hidden flex items-center justify-center border border-white/5">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-950/40 via-emerald-900/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-950/20 rounded-full blur-[90px] pointer-events-none" />
                <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="w-full h-full rounded-full border-[14px] border-white/90 shadow-[0_0_50px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
                <div className="absolute left-8 md:left-16 top-10 max-w-[200px] md:max-w-xs">
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">Roster Environment</div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-tight leading-snug">Built by operators who protect creators.</h3>
                </div>
              </div>
            </div>

            {/* ROSTER APPLICATION FORM */}
            <div id="roster-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Join the <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Elite Roster</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">We review applications within 48 hours. If there's a fit with active tech/SaaS campaigns, we'll reach out with immediate deal structures.</p>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Platform / Link</label>
                    <input required type="url" name="platformLink" placeholder="https://youtube.com/c/..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Audience Size / Subs</label>
                    <input required type="text" name="subscriberCount" placeholder="e.g., 150k" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
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
                    <input required type="text" name="niche" placeholder="e.g., Software Engineering, Consumer Tech" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                </div>

                {creatorViews === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Specify Exact Avg. Views</label>
                    <input required type="text" name="customCreatorViews" placeholder="e.g., 45,000 views" className="w-full bg-emerald-950/30 border border-emerald-500/40 rounded-lg p-3 text-xs text-white focus:border-emerald-400 outline-none" />
                  </div>
                )}
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-white/5 pt-16 pb-12 px-6 md:px-[8%] bg-black/20 w-full relative z-10">
          <div className="text-center text-[11px] text-neutral-600 pt-8">
            © 2026 NexVance. Managed operations infrastructure.
          </div>
        </footer>
      </main>
    </div>
  );
}
