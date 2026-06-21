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

        {/* Interactive Nav Tabs */}
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
            
            {/* Hero Top Tagline */}
            <div className="flex justify-center mb-8 pt-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/80 border border-white/5 rounded-full px-4 py-1.5 text-xs text-neutral-400 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Now booking Q3 / Q4 2026 campaigns</span>
              </div>
            </div>

            {/* Main Hero Copy */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Where <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">tech brands</span> meet <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 bg-clip-text text-transparent">elite creators.</span>
              </h1>
              <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                NexVance is the full-service marketing operation behind tomorrow's SaaS, AI, and hardware launches. We source, vet, and deploy creators that actually convert.
              </p>

              {/* Dual Buttons */}
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

            {/* Brand <-> Creator Middleman Node Asset - (image_04d57a.png remains here for the main pipeline overview) */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-24 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="w-full aspect-[16/9] min-h-[360px] rounded-xl bg-black/80 flex flex-col justify-between p-6 md:p-8 relative overflow-hidden border border-white/5">
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
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">SaaS Brand</div>
                      <div className="text-xs font-semibold text-white truncate">AI Automations</div>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full pointer-events-none">
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

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-white tracking-widest">NV</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 z-10 w-1/4 items-end">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-right transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Tech Reviewer (500k+)</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">Middleware Engine</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-md mb-28 max-w-4xl mx-auto">
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-blue-400">84%</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Avg. Audience Retention</div>
              </div>
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-white">50+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Verified Elite Creators</div>
              </div>
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-white">12M+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Combined Monthly Reach</div>
              </div>
              <div className="text-center p-2 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-blue-400">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Managed End-to-End</div>
              </div>
            </div>

            {/* Dual Pipeline Blocks */}
            <div className="max-w-4xl mx-auto mb-28">
              <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-3">The Operation</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Two sides. One frictionless pipeline.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tech Brand Card */}
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-6 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] group cursor-pointer" onClick={() => setActiveTab('brands')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner relative">
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 z-10" />
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Brand Performance Dashboard" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 opacity-80 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-2 block tracking-widest">For Tech Brands</span>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">Launch campaigns that actually move users.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">Skip the cold-DM grind. Get matched with creators whose audience already wants what you ship.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Vetted creator roster</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>Brief & QA included</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-400 font-bold">✓</span> <span>ROI-tracked placements</span></li>
                  </ul>
                  <div className="text-xs text-blue-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Explore brand services</span> <span>→</span>
                  </div>
                </div>

                {/* Creator Card */}
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-6 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-500/30 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] group cursor-pointer" onClick={() => setActiveTab('creators')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner relative">
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500 z-10" />
                    <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80" alt="Elite Tech Creator Setup" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 opacity-80 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-2 block tracking-widest">For Creators</span>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">Focus on content. We bring the brand deals.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">No upfront fees, no exclusivity traps. We only earn when we land you a deal — and we guard your rate.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
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
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.5)] text-sm inline-block transform hover:-translate-y-0.5">Start Campaign Strategy →</a>
            </div>

            {/* BRAND SPECIFIC REPLACED VISUAL: EMBEDDED DASHBOARD & LIVE CAMPAIGN SDK CONSOLE TERMINAL */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-black border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-12 transition-all duration-500 hover:border-blue-500/20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="w-full min-h-[380px] rounded-xl bg-[#05070f]/90 border border-white/5 p-4 md:p-6 flex flex-col justify-between font-mono relative">
                {/* Embedded Framework Console Top Controls */}
                <div className="flex justify-between items-center w-full border-b border-white/5 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500/60" />
                    </div>
                    <span className="text-[10px] text-neutral-400 ml-2 tracking-wide font-semibold">nexvance-analytics-sdk — v2.4.1</span>
                  </div>
                  <div className="bg-blue-950/40 border border-blue-500/20 rounded px-2 py-0.5 text-[9px] text-blue-400 font-bold uppercase tracking-widest animate-pulse">
                    Live Integration Active
                  </div>
                </div>

                {/* Embedded Body Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full items-stretch my-auto">
                  {/* Left Column: Code Structure Preview Box */}
                  <div className="md:col-span-5 bg-black/60 rounded-xl p-3 border border-white/5 text-[10px] text-neutral-400 flex flex-col justify-between leading-relaxed">
                    <div>
                      <div className="text-neutral-500 mb-2 font-sans text-[9px] uppercase tracking-wider font-bold">SDK Snippet Layout</div>
                      <span className="text-blue-400">import</span> &#123; NexVancePipeline &#125; <span className="text-blue-400">from</span> <span className="text-emerald-400">'@nv/core'</span>;
                      <br /><br />
                      <span className="text-neutral-500">// Track live conversions & CAC</span>
                      <br />
                      <span className="text-blue-400">const</span> campaign = <span className="text-blue-400">new</span> NexVancePipeline(&#123;
                      <br />
                      &nbsp;&nbsp;brandId: <span className="text-amber-400">"saas_ai_automation"</span>,
                      <br />
                      &nbsp;&nbsp;targetCAC: <span className="text-purple-400">45.00</span>,
                      <br />
                      &nbsp;&nbsp;escrowSecure: <span className="text-blue-400">true</span>
                      <br />
                      &#125;);
                    </div>
                    <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-neutral-500">
                      Terminal Output: <span className="text-emerald-400">Ready to deploy.</span>
                    </div>
                  </div>

                  {/* Right Column: Mini Analytical Analytics Simulation Visual */}
                  <div className="md:col-span-7 bg-neutral-950/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-neutral-500 text-[9px] uppercase tracking-wider font-bold font-sans">Performance Engine</div>
                        <div className="text-sm font-bold text-white font-sans tracking-tight">Conversion Tracking Overview</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-emerald-400 font-sans">+314.8%</div>
                        <div className="text-[8px] text-neutral-500 uppercase tracking-widest font-sans">Avg ROI Curve</div>
                      </div>
                    </div>

                    {/* Faux Graph Structure representation */}
                    <div className="h-24 w-full flex items-end space-x-1.5 pt-4 pb-2 px-1 border-b border-white/5">
                      <div className="bg-neutral-800 w-full h-[15%] rounded-t" />
                      <div className="bg-neutral-800 w-full h-[30%] rounded-t" />
                      <div className="bg-blue-600/30 w-full h-[45%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                      <div className="bg-blue-600/40 w-full h-[40%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                      <div className="bg-blue-600/60 w-full h-[65%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400" /></div>
                      <div className="bg-blue-600/80 w-full h-[85%] rounded-t relative"><div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400 animate-pulse" /></div>
                      <div className="bg-gradient-to-t from-blue-600 to-emerald-500 w-full h-[98%] rounded-t relative shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400" />
                      </div>
                    </div>

                    {/* Embedded Parameter Stat Readout Row */}
                    <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                      <div className="bg-black/40 p-1.5 rounded border border-white/5">
                        <div className="text-[8px] text-neutral-500 uppercase font-sans">Live Clicks</div>
                        <div className="text-xs font-bold text-white font-sans tracking-tight">41.2k</div>
                      </div>
                      <div className="text-center bg-black/40 p-1.5 rounded border border-white/5">
                        <div className="text-[8px] text-neutral-500 uppercase font-sans">Sign-ups</div>
                        <div className="text-xs font-bold text-blue-400 font-sans tracking-tight">8,914</div>
                      </div>
                      <div className="text-center bg-black/40 p-1.5 rounded border border-white/5">
                        <div className="text-[8px] text-neutral-500 uppercase font-sans">Verified CAC</div>
                        <div className="text-xs font-bold text-emerald-400 font-sans tracking-tight">$12.40</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Embedded Footer Console Banner */}
                <div className="relative z-10 border-t border-white/5 pt-3 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold block font-sans mb-0.5">Custom Brand SDK Module</span>
                    <h3 className="text-sm font-bold text-white font-sans tracking-tight">Embedded Distribution Pipeline</h3>
                  </div>
                  <div className="text-[9px] text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-white/5 font-mono">
                    Status: <span className="text-emerald-400">Fully Encrypted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 HOVER GRID CARDS POSITIONED DIRECTLY UNDER THE IMAGE */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">01</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Campaign Routing</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">We sync your parameters into tailored influencer video outlines with absolute compliance layouts.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">02</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Performance Tracking</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Track integration channels with clean conversion checks, reach analytics metrics, and live dashboards.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">03</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Infrastructure Guard</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Secure escrow management setups, legal sheets protection, and transparent operational pipeline logs.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">04</div>
                <h4 className="text-xs font-bold text-white mb-1.5">ROI-Optimized Matches</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Skip generalized pitches. Route directly to creators whose historic click retention data ensures raw conversion value.</p>
              </div>
            </div>

            {/* STRATEGY REQUEST FORM */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl transition-all duration-500 hover:border-blue-500/20">
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

        {/* ==================== 3. FOR CREATORS ROSTER LANDING & APPLICATION FORM ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(16,185,129,0.2)]">👥 For Creators</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Focus on content. We'll bring the brand deals.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.5)] text-sm inline-block transform hover:-translate-y-0.5">Apply to the Roster →</a>
            </div>

            {/* ARTISTIC VISUAL STUDIO COMPONENT (IMAGE AREA) */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#05090e] border border-white/5 p-2 shadow-2xl relative overflow-hidden mb-12 transition-all duration-700 hover:border-emerald-500/20 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b88103_1px,transparent_1px),linear-gradient(to_bottom,#10b88103_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
              <div className="w-full aspect-[21/9] min-h-[300px] rounded-xl bg-[#020408] relative overflow-hidden flex items-center justify-center border border-white/5">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-950/40 via-emerald-900/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-950/20 rounded-full blur-[90px] pointer-events-none" />
                <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="w-full h-full rounded-full border-[14px] border-white/90 shadow-[0_0_50px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
                <div className="absolute left-8 md:left-16 bottom-12 flex items-end space-x-6">
                  <div className="w-24 h-16 bg-gradient-to-t from-neutral-950 to-neutral-900 border border-white/10 rounded-lg shadow-2xl flex items-center justify-end p-1 relative">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/20 shadow-inner flex items-center justify-center absolute -right-5">
                      <div className="w-6 h-6 rounded-full bg-black border border-emerald-500/30" />
                    </div>
                  </div>
                </div>
                <div className="absolute left-8 md:left-16 top-10 max-w-[200px] md:max-w-xs">
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">Roster Environment</div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-tight leading-snug">Built by operators who protect creators.</h3>
                </div>
              </div>
            </div>

            {/* 4 HOVER GRID CARDS POSITIONED DIRECTLY UNDER THE IMAGE */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,185,129,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">01</div>
                <h4 className="text-xs font-bold text-white mb-1.5">High Rate Protection</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">No predatory split traps. We legally secure your CPM baselines and optimize deal setups transparently.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,185,129,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">02</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Automated Sponsorship Flow</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Skip cold corporate follow-ups. Recieve incoming verified brand deal routes optimized for your platform size.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,185,129,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">03</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Creative Discretion</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Your custom production workflow stays clean. We manage tedious invoices pipelines, briefs, and legal details.</p>
              </div>
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,185,129,0.05)] group">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold mb-3 group-hover:scale-110 transition-transform">04</div>
                <h4 className="text-xs font-bold text-white mb-1.5">Zero Exclusivity Rules</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">Retain complete autonomy. Keep your own direct inbound deals while pulling active premium campaigns from NexVance.</p>
              </div>
            </div>

            {/* ROSTER APPLICATION FORM */}
            <div id="roster-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl transition-all duration-500 hover:border-emerald-500/20">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Join the <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">Elite Roster</span></h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">We review applications within 48 hours. If there's a fit with active tech/SaaS campaigns, we'll reach out with immediate deal structures.</p>
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-3 bg-black/30 p-3 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-xs text-neutral-300 font-medium">0% Exclusivity Traps — keep your inbound</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/30 p-3 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                    <span className="text-xs text-neutral-300 font-medium">Guaranteed payment escrow system</span>
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
                    <input required type="text" name="niche" placeholder="e.g., Software Engineering, Consumer Tech" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all duration-300" />
                  </div>
                </div>

                {creatorViews === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Specify Exact Avg. Views</label>
                    <input required type="text" name="customCreatorViews" placeholder="e.g., 45,000 views per 30-day window" className="w-full bg-emerald-950/30 border border-emerald-500/40 rounded-lg p-3 text-xs text-white focus:border-emerald-400 outline-none" />
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
        <footer className="border-t border-white/5 pt-16 pb-12 px-6 md:px-[8%] bg-black/20 w-full relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs">NV</div>
                <span className="text-base font-bold text-white tracking-tight">NexVance</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-sm leading-relaxed">Elite performance influencer middleware infrastructure layout for SaaS, deep tech systems, and consumer hardware brands worldwide.</p>
            </div>
            
            <div className="md:col-span-3">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Navigation</h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('brands')} className="hover:text-white text-left">Tech brand portal</button></li>
                <li><button onClick={() => setActiveTab('creators')} className="hover:text-white text-left">Creator roster</button></li>
                <li><button onClick={() => setActiveTab('overview')} className="hover:text-white text-left">Overview</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Corporate</h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white text-left">Privacy</button></li>
                <li><button onClick={() => setActiveTab('terms')} className="hover:text-white text-left">Terms</button></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-[11px] text-neutral-600 border-t border-white/5 pt-8">
            © 2026 NexVance. Managed operations infrastructure.
          </div>
        </footer>
      </main>
    </div>
  );
}
