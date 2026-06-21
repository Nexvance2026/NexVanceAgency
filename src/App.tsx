import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

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

        {/* Lovable Interactive Nav Tabs */}
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

              {/* Lovable Dual Buttons */}
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

            {/* Brand <-> Creator Premium Onyx Middleman Node Asset */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-24">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />

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
                    <div className="bg-neutral-950 border border-white/5 opacity-50 rounded-xl p-2 text-[10px] text-neutral-400 text-center">
                      Hardware Inc.
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
                      <path d="M 160,170 L 350,125" stroke="url(#brandToMiddle)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 350,125 L 540,75" stroke="url(#middleToCreator)" strokeWidth="1.5" />
                      <path d="M 350,125 L 540,175" stroke="url(#middleToCreator)" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="350" cy="125" r="28" className="stroke-white/10 fill-black" strokeWidth="1" />
                      <circle cx="350" cy="125" r="20" className="stroke-blue-500/30 fill-neutral-950" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-white tracking-widest">NV</span>
                      </div>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-950/80 border border-blue-500/30 text-[9px] font-mono text-blue-300 px-2 py-0.5 rounded-full backdrop-blur-md">
                      Brief & Contract Managed
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-950/80 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 px-2 py-0.5 rounded-full backdrop-blur-md">
                      Guaranteed ROI Vetting
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 z-10 w-1/4 items-end">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-right transform hover:scale-105 transition-all">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Tech Reviewer (500k+)</div>
                    </div>
                    <div className="bg-neutral-950 border border-white/5 opacity-50 rounded-xl p-2 text-[10px] text-neutral-400 text-center w-[110px]">
                      DevVlogger
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">Middleware Engine</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
                    </div>
                    <div className="flex space-x-1.5">
                      <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-neutral-400">Escrow Audit</span>
                      <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-neutral-400">Automated QA</span>
                      <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-white font-semibold">Zero Operational Drag</span>
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
                <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
                  We sit between supply and demand — handling outreach, briefs, contracts, payments, and QA so neither side has to think about it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-blue-500/20 transition-all duration-300">
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Brand Performance Dashboard" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-2 block">For Tech Brands</span>
                  <h4 className="text-xl font-bold mb-3">Launch campaigns that actually move users.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">Skip the cold-DM grind. Get matched with creators whose audience already wants what you ship.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Vetted creator roster</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Brief & QA included</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>ROI-tracked placements</span></li>
                  </ul>
                  <button onClick={() => setActiveTab('brands')} className="text-xs text-blue-400 font-semibold flex items-center space-x-1 hover:underline">
                    <span>Explore brand services</span> <span>→</span>
                  </button>
                </div>

                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 border border-white/5 overflow-hidden shadow-inner">
                    <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80" alt="Elite Tech Creator Setup" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-2 block">For Creators</span>
                  <h4 className="text-xl font-bold mb-3">Focus on content. We bring the brand deals.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">No upfront fees, no exclusivity traps. We only earn when we land you a deal — and we guard your rate.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Inbound deal flow</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Rate negotiation</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Contract protection</span></li>
                  </ul>
                  <button onClick={() => setActiveTab('creators')} className="text-xs text-emerald-400 font-semibold flex items-center space-x-1 hover:underline">
                    <span>Apply to the roster</span> <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS LANDING & STRATEGY FORM ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-sm inline-block">Start Campaign Strategy →</a>
            </div>

            <div id="brand-form" className="max-w-4xl mx-auto bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Work with NexVance.</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">Partner with a dedicated marketing manager to launch your next tech, SaaS, or hardware campaign.</p>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company / SaaS name</label>
                    <input required type="text" name="companyName" placeholder="Your brand name" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company Website URL</label>
                    <input required type="url" name="websiteUrl" placeholder="https://yourbrand.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Work email</label>
                    <input required type="email" name="email" placeholder="name@company.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Estimated Monthly Budget</label>
                    <select required name="budget" className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-blue-500 outline-none transition-colors appearance-none">
                      <option value="" disabled selected>Select your budget bracket</option>
                      <option value="1k-5k">$1,000 - $5,000 / mo</option>
                      <option value="5k-20k">$5,000 - $20,000 / mo</option>
                      <option value="20k+">$20,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign goals & Target Audience</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your product, KPI requirements, and ideal creator profiles..." className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">Send Strategy Request</button>
              </form>
            </div>
          </div>
        )}

        {/* ==================== 3. FOR CREATORS ROSTER LANDING & APPLICATION FORM ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">👥 For Creators</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Focus on content. We'll bring the brand deals.</h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-sm inline-block">Apply to the Roster →</a>
            </div>

            <div id="roster-form" className="max-w-4xl mx-auto bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join our active roster.</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">Apply to onboard onto our talent network. We operate strictly on commission.</p>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Your Real Name</label>
                    <input required type="text" name="creatorRealName" placeholder="First & Last Name" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Channel / Handle Name</label>
                    <input required type="text" name="channelName" placeholder="e.g., TechWithDev" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Channel Link / URL</label>
                    <input required type="url" name="channelUrl" placeholder="https://youtube.com/@yourchannel" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Contact Email</label>
                    <input required type="email" name="email" placeholder="you@gmail.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Average Views (Past 30 Days)</label>
                  <select required name="averageViews" className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-emerald-500 outline-none transition-colors appearance-none">
                    <option value="" disabled selected>Select average video performance</option>
                    <option value="under-10k">Less than 10,000 views</option>
                    <option value="10k-50k">10,000 - 50,000 views</option>
                    <option value="50k-200k">50,000 - 200,000 views</option>
                    <option value="200k+">200,000+ views</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        {/* PREMIUM RICH EXPANDED FOOTER INFRASTRUCTURE */}
        <footer className="border-t border-white/5 pt-16 pb-12 px-6 md:px-[8%] bg-black/20 w-full mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs">
                  NV
                </div>
                <span className="text-base font-bold tracking-tight text-white">NexVance</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-sm leading-relaxed">
                Managed creator operations architecture and strategic frameworks for high-value tech partnerships.
              </p>
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
                <li className="cursor-pointer hover:text-white">Privacy</li>
                <li className="cursor-pointer hover:text-white">Terms</li>
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
