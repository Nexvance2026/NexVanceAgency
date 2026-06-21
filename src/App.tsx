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
      
      {/* Premium Tech Grid System */}
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

      {/* CORE BODY WRAPPER */}
      <main className="relative z-10 pt-28 max-w-7xl mx-auto w-full">
        
        {/* ==================== 1. OVERVIEW SCREEN ==================== */}
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

            {/* Middle Pipeline display */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-24 transition-all duration-500">
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
                  <div className="w-1/4 z-10">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md">
                      <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">SaaS Brand</div>
                      <div className="text-xs font-semibold text-white truncate">AI Automations</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 700 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 160,80 L 350,125" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.6" />
                      <path d="M 350,125 L 540,75" stroke="#10b881" strokeWidth="1.5" strokeOpacity="0.6" />
                    </svg>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-white">NV</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 z-10 flex justify-end">
                    <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-right">
                      <div className="text-[9px] font-mono uppercase text-emerald-400 font-bold mb-0.5">Elite Creator</div>
                      <div className="text-xs font-semibold text-white truncate">Tech Reviewer (500k+)</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4">
                  <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">Middleware Engine</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
                </div>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-md mb-28 max-w-4xl mx-auto">
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-blue-400">84%</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Avg. Retention</div>
              </div>
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-white">50+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Vetted Creators</div>
              </div>
              <div className="text-center p-2 border-r border-white/5 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-white">12M+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Monthly Reach</div>
              </div>
              <div className="text-center p-2 last:border-0">
                <div className="text-2xl md:text-4xl font-extrabold text-blue-400">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">Managed Campaigns</div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. TECH BRAND PORTAL ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.</p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-xs inline-block">Start Campaign Strategy →</a>
            </div>

            {/* Process Steps Cards */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white tracking-tight">The brand campaign process.</h3>
                <p className="text-neutral-500 text-xs mt-1">How we remove the operational drag of running creator campaigns.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: '🎯', step: 'STEP 01', title: 'Perfect matching', desc: 'We analyze creator demographics to find the absolute best fit for your niche.' },
                  { icon: '🚀', step: 'STEP 02', title: 'Content briefing', desc: "We build detailed guides highlighting your product's core value props." },
                  { icon: '🛡️', step: 'STEP 03', title: 'Quality control', desc: 'Every integration is reviewed by our team before going live on networks.' },
                  { icon: '📈', step: 'STEP 04', title: 'Results evaluation', desc: 'Clean campaign data to optimize the next wave and scale efficiently.' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0b0f19] border border-white/10 rounded-xl p-5 transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#111726] cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-sm mb-4">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 font-bold block mb-1">{item.step}</span>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Dual Intake Layout with Embedded Dashboard Image */}
            <div id="brand-form" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-24">
              {/* Left Segment Text Block + Dashboard Image Embedded */}
              <div className="md:col-span-5 bg-[#0b0f19] border border-white/10 rounded-xl p-6 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">Work with <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">NexVance</span></h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">Partner with a dedicated marketing manager to launch your next campaign seamlessly.</p>
                </div>
                
                {/* Embedded Brand Dashboard Image Slot */}
                <div className="w-full rounded-lg border border-white/5 bg-neutral-950/50 p-1.5 overflow-hidden mb-6 group">
                  <img 
                    src="/brand-dashboard.jpg" 
                    alt="NexVance Brand UI Dashboard" 
                    className="w-full h-auto object-cover rounded-md opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // fallback representation if paths aren't mapped on your public build folder yet
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="p-2 text-center text-[10px] font-mono text-neutral-500 border-t border-white/5 mt-1 bg-black/40 rounded">
                    📊 Real-Time Integration Analytics Active
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-3 bg-black/40 p-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs text-neutral-300 font-medium">Guaranteed Content Quality Controls</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/40 p-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs text-neutral-300 font-medium">Conversion Analytics Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Right Segment Form Block */}
              <form 
                action="https://formspree.io/f/xlgkywng" 
                method="POST" 
                className="md:col-span-7 bg-[#0b0f19] border border-white/10 rounded-xl p-8 space-y-4 w-full transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company / SaaS name</label>
                    <input required type="text" name="companyName" placeholder="Your brand name" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company Website URL</label>
                    <input required type="url" name="websiteUrl" placeholder="https://yourbrand.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Work email</label>
                    <input required type="email" name="email" placeholder="name@company.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Estimated Monthly Budget</label>
                    <select 
                      required 
                      name="budget_bracket" 
                      value={brandBudget}
                      onChange={(e) => setBrandBudget(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-blue-500 outline-none cursor-pointer"
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
                    <input required type="text" name="customBrandBudget" placeholder="e.g., $35,000 / campaign" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-400 outline-none transition-all" />
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign goals & Target Audience</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your product, KPI requirements, and ideal creator profiles..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none resize-none transition-all" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">Send Strategy Request</button>
              </form>
            </div>
          </div>
        )}

        {/* ==================== 3. CREATOR PORTAL ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">👥 For Creators</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Focus on content. We'll bring the brand deals.</h1>
              <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.</p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-xs inline-block">Apply to the Roster →</a>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white tracking-tight">How we support our creators.</h3>
                <p className="text-neutral-500 text-xs mt-1">We work in the background so you spend your time building videos — not chasing invoices.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: '📈', stage: 'STAGE 01', title: 'Inbound deals', desc: 'We match your channel with premium software and hardware brands seamlessly.' },
                  { icon: '🔒', stage: 'STAGE 02', title: 'Contract protection', desc: 'Fair pricing structures. No late payments or shifting scope on deliverables.' },
                  { icon: '🎧', stage: 'STAGE 03', title: 'Retention support', desc: 'Performance ideas to optimize visual hooks and maximize audience watch time.' },
                  { icon: '🚀', stage: 'STAGE 04', title: 'Programmatic scaling', desc: 'We turn one-off integrations into recurring quarterly or annual contracts.' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0b0f19] border border-white/10 rounded-xl p-5 transform transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#111726] cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-sm mb-4">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">{item.stage}</span>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Dual Application Layout with Embedded Creator Setup Image */}
            <div id="roster-form" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mb-24">
              {/* Left Text Block + Setup Image Embedded */}
              <div className="md:col-span-5 bg-[#0b0f19] border border-white/10 rounded-xl p-6 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">Join our active <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">roster</span></h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">Apply to onboard onto our talent network. Safe terms with zero upfront configuration fees.</p>
                </div>

                {/* Embedded Creator Setup Image Slot */}
                <div className="w-full rounded-lg border border-white/5 bg-neutral-950/50 p-1.5 overflow-hidden mb-6 group">
                  <img 
                    src="/creator-setup.jpg" 
                    alt="NexVance Roster Setup Asset" 
                    className="w-full h-auto object-cover rounded-md opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="p-2 text-center text-[10px] font-mono text-neutral-500 border-t border-white/5 mt-1 bg-black/40 rounded">
                    ⚙️ Performance Engine Workflow Profile Locked
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-3 bg-black/40 p-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-neutral-300 font-medium">Pricing Rate Security Guards</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black/40 p-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-neutral-300 font-medium">Constant Inbound Deal Sourcing</span>
                  </div>
                </div>
              </div>

              {/* Right Form Block */}
              <form 
                action="https://formspree.io/f/xlgkywng" 
                method="POST" 
                className="md:col-span-7 bg-[#0b0f19] border border-white/10 rounded-xl p-8 space-y-4 w-full transform transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Your Real Name</label>
                    <input required type="text" name="creatorRealName" placeholder="First & Last Name" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Channel / Handle Name</label>
                    <input required type="text" name="channelName" placeholder="e.g., TechWithDev" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Channel Link / URL</label>
                    <input required type="url" name="channelUrl" placeholder="https://youtube.com/@yourchannel" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Contact Email</label>
                    <input required type="email" name="email" placeholder="you@gmail.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Average Views (Past 30 Days)</label>
                  <select 
                    required 
                    name="average_views_bracket" 
                    value={creatorViews}
                    onChange={(e) => setCreatorViews(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-emerald-500 outline-none cursor-pointer"
                  >
                    <option value="" disabled>Select average video performance</option>
                    <option value="under-10k">Less than 10,000 views</option>
                    <option value="10k-50k">10,000 - 50,000 views</option>
                    <option value="50k-200k">50,000 - 200,000 views</option>
                    <option value="200k+">200,000+ views</option>
                    <option value="custom">Custom View Count</option>
                  </select>
                </div>

                {creatorViews === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Enter Your Exact Average Views</label>
                    <input required type="text" name="customCreatorViews" placeholder="e.g., 85K long-form avg" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-400 outline-none transition-all" />
                  </div>
                )}

                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        {/* ==================== 4. PRIVACY ARCHITECTURE ==================== */}
        {activeTab === 'privacy' && (
          <div className="animate-fadeIn px-6 md:px-[8%] max-w-4xl mx-auto">
            <div className="text-center mb-12 pt-6">
              <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-3">Legal Framework</span>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Operation Protocol</h1>
              <p className="text-neutral-500 text-xs">Last updated: June 2026. Global Data Encrypted.</p>
            </div>
            <div className="space-y-6 text-neutral-300 text-xs leading-relaxed border-b border-white/5 pb-12">
              <section>
                <h3 className="text-sm font-bold text-white mb-2">1. Data Scope</h3>
                <p>We only collect information parameters that are explicitly provided via dashboard forms (such as handles, views, metric budgets) to process integrations manually.</p>
              </section>
              <section>
                <h3 className="text-sm font-bold text-white mb-2">2. Safety Guardrails</h3>
                <p>No distribution, leak, or sell-actions occur on identity fields or platform communications under any circumstances.</p>
              </section>
            </div>
          </div>
        )}

        {/* ==================== 5. TERMS ARCHITECTURE ==================== */}
        {activeTab === 'terms' && (
          <div className="animate-fadeIn px-6 md:px-[8%] max-w-4xl mx-auto">
            <div className="text-center mb-12 pt-6">
              <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold block mb-3">Operational Agreement</span>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Architecture</h1>
              <p className="text-neutral-500 text-xs">Effective: June 2026. Standard Rules Active.</p>
            </div>
            <div className="space-y-6 text-neutral-300 text-xs leading-relaxed border-b border-white/5 pb-12">
              <section>
                <h3 className="text-sm font-bold text-white mb-2">1. Collaboration Ecosystem</h3>
                <p>NexVance facilitates outreach and structural execution. No exclusivity is forced upon creator talent pools unless bound inside customized separate brand agreements.</p>
              </section>
              <section>
                <h3 className="text-sm font-bold text-white mb-2">2. Payouts Validation</h3>
                <p>Campaign funds undergo manual validation metrics tracking before final releases to secure execution parameters seamlessly.</p>
              </section>
            </div>
          </div>
        )}

        {/* GLOBAL SYSTEM FOOTER */}
        <footer className="border-t border-white/5 pt-12 pb-8 px-6 md:px-[8%] bg-black/20 w-full mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            <div className="md:col-span-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-5 h-5 rounded bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-[10px]">NV</div>
                <span className="text-sm font-bold tracking-tight text-white">NexVance</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-xs">Managed creator operations and infrastructure for high-value tech partnerships.</p>
            </div>
            
            <div className="md:col-span-3">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Navigation</h5>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('brands')} className="hover:text-white">Tech brand portal</button></li>
                <li><button onClick={() => setActiveTab('creators')} className="hover:text-white">Creator roster</button></li>
                <li><button onClick={() => setActiveTab('overview')} className="hover:text-white">Overview</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Compliance</h5>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white">Privacy Protocol</button></li>
                <li><button onClick={() => setActiveTab('terms')} className="hover:text-white">Terms Framework</button></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-[10px] text-neutral-600 border-t border-white/5 pt-6">
            © 2026 NexVance. All frameworks operational.
          </div>
        </footer>

      </main>
    </div>
  );
}
