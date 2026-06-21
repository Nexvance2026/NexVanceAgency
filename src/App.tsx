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

            {/* Middleman Node Asset */}
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

            {/* Metrics Row */}
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

            {/* Pipeline Cards */}
            <div className="max-w-4xl mx-auto mb-28">
              <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-3">The Operation</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Two sides. One frictionless pipeline.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-6 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] group cursor-pointer" onClick={() => setActiveTab('brands')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner relative">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Brand" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-2 block tracking-widest">For Tech Brands</span>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">Launch campaigns that actually move users.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">Skip the cold-DM grind. Get matched with creators whose audience already wants what you ship.</p>
                  <div className="text-xs text-blue-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Explore brand services</span> <span>→</span>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/5 rounded-2xl p-6 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-500/30 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] group cursor-pointer" onClick={() => setActiveTab('creators')}>
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner relative">
                    <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80" alt="Creator" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-2 block tracking-widest">For Creators</span>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">Focus on content. We bring the brand deals.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">No upfront fees, no exclusivity traps. We only earn when we land you a deal — and we guard your rate.</p>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Apply to the roster</span> <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS (ISOMETRIC VISUAL) ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-sm inline-block transform hover:-translate-y-0.5">Start Campaign Strategy →</a>
            </div>

            {/* ISOMETRIC GLOWING DASHBOARD */}
            <div className="w-full max-w-4xl mx-auto min-h-[460px] relative flex items-center justify-center mb-24 perspective-1000 group">
              <div className="absolute w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] opacity-80 group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
              <div className="relative w-full max-w-2xl aspect-[1.4/1] transform rotate-x-55 rotate-z-[-32deg] skew-x-6 transition-all duration-700 group-hover:rotate-x-50 group-hover:rotate-z-[-28deg] group-hover:-translate-y-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-neutral-900/20 border border-white-[0.03] rounded-3xl p-6 backdrop-blur-xl shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                  <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:16px_16px] rounded-2xl" />
                </div>
                <div className="absolute inset-x-4 inset-y-8 bg-neutral-950/80 border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-z-8 transition-transform duration-700 group-hover:translate-z-12 flex flex-col justify-between">
                  <div className="w-full h-28 flex items-end space-x-2 px-2 border-b border-white/5 relative">
                    <div className="absolute inset-x-0 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-emerald-400 opacity-80" />
                    <div className="bg-neutral-900 w-full h-[20%] rounded-t-sm" />
                    <div className="bg-blue-500/40 w-full h-[80%] rounded-t-sm" />
                    <div className="bg-gradient-to-t from-blue-600/40 to-emerald-500/40 w-full h-[95%] rounded-t-sm" />
                  </div>
                </div>
                <div className="absolute -top-6 right-4 w-44 aspect-[1.5/1] bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-3 shadow-[0_15px_30px_rgba(37,99,235,0.4)] transform translate-z-20 transition-transform duration-700 group-hover:translate-z-28 flex flex-col justify-between">
                  <div className="text-[8px] font-mono text-white/70 uppercase">Conversion Engine</div>
                  <div className="text-lg font-bold font-mono tracking-tight leading-none mt-0.5">+412%</div>
                </div>
              </div>
            </div>

            {/* Form remain same */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl">
              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-12 space-y-4 w-full">
                <input required type="text" name="companyName" placeholder="Company Name" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white" />
                <select required name="budget_bracket" value={brandBudget} onChange={(e) => setBrandBudget(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300">
                  <option value="" disabled>Select Budget</option>
                  <option value="1k-5k">$1k - $5k</option>
                  <option value="5k+">5k+</option>
                </select>
                <textarea name="message" rows={4} placeholder="Campaign goals..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold">Send Request</button>
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
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-sm inline-block transform hover:-translate-y-0.5">Apply to the Roster →</a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
