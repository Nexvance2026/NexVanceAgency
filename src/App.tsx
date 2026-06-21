import React, { useState, useEffect } from 'react';

function App() {
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

            {/* Brand <-> Creator Graph Asset (Image_328259.jpg Layout) */}
            <div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 p-4 shadow-2xl relative overflow-hidden mb-24">
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
              <div className="w-full aspect-[16/9] rounded-xl bg-neutral-950/80 border border-white/5 flex flex-col justify-end p-6 md:p-10 relative">
                
                {/* Visual Neural Node Wireframes Simulating Graph */}
                <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                  <div className="w-72 h-72 border border-blue-500/30 rounded-full animate-ping absolute" />
                  <div className="w-96 h-96 border border-emerald-500/20 rounded-full absolute" />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-2 block">Live Operations</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Brand ↔ Creator graph</h3>
                  <div className="flex space-x-2">
                    <span className="bg-blue-950/60 border border-blue-800/40 px-3 py-1 rounded-full text-[10px] text-blue-300 font-medium">SaaS</span>
                    <span className="bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full text-[10px] text-emerald-300 font-medium">Creators</span>
                    <span className="bg-neutral-900 border border-white/10 px-3 py-1 rounded-full text-[10px] text-neutral-400 font-medium">AI Tools</span>
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

            {/* Dual Pipeline Blocks (Image_328240.png Layout) */}
            <div className="max-w-4xl mx-auto mb-28">
              <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-3">The Operation</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Two sides. One frictionless pipeline.</h2>
                <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
                  We sit between supply and demand — handling outreach, briefs, contracts, payments, and QA so neither side has to think about it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Brands Card */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-blue-500/20 transition-all duration-300">
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden text-neutral-600 text-xs">
                    [ Analytics Dashboard Asset ]
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-2 block">For Tech Brands</span>
                  <h4 className="text-xl font-bold mb-3">Launch campaigns that actually move users.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">Skip the cold-DM grind. Get matched with creators whose audience already wants what you ship.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Vetted creator roster</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Brief & QA included</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>ROI-tracked placements</span></li>
                    <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>50/50 milestone payments</span></li>
                  </ul>
                  <button onClick={() => setActiveTab('brands')} className="text-xs text-blue-400 font-semibold flex items-center space-x-1 hover:underline">
                    <span>Explore brand services</span> <span>→</span>
                  </button>
                </div>

                {/* Creators Card */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-full aspect-[4/3] bg-neutral-950 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden text-neutral-600 text-xs">
                    [ Camera & Gear Production Asset ]
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-2 block">For Creators</span>
                  <h4 className="text-xl font-bold mb-3">Focus on content. We bring the brand deals.</h4>
                  <p className="text-neutral-400 text-xs mb-6 leading-relaxed">No upfront fees, no exclusivity traps. We only earn when we land you a deal — and we guard your rate.</p>
                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-8 mt-auto">
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Inbound deal flow</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Rate negotiation</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Contract protection</span></li>
                    <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Payment escrow</span></li>
                  </ul>
                  <button onClick={() => setActiveTab('creators')} className="text-xs text-emerald-400 font-semibold flex items-center space-x-1 hover:underline">
                    <span>Apply to the roster</span> <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Audience Psychology Framework (Image_32823e.png Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto mb-24 border-t border-white/5 pt-20">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-3">Audience Science</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Built on deep audience psychology, not vibes.</h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  We don't ship generic shoutouts. Every integration is mapped against viewer attention curves, pacing, and CTA placement so the brand message lands when the audience is most receptive.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-neutral-900 border border-white/5 text-[11px] px-3 py-1.5 rounded-full text-neutral-300">Attention mapping</span>
                  <span className="bg-neutral-900 border border-white/5 text-[11px] px-3 py-1.5 rounded-full text-neutral-300">High-converting pacing</span>
                  <span className="bg-neutral-900 border border-white/5 text-[11px] px-3 py-1.5 rounded-full text-neutral-300">Brand-message alignment</span>
                  <span className="bg-neutral-900 border border-white/5 text-[11px] px-3 py-1.5 rounded-full text-neutral-300">Native integration</span>
                </div>
              </div>
              <div className="bg-neutral-900/20 border border-white/10 rounded-2xl p-4 shadow-xl">
                <div className="w-full aspect-[4/3] bg-black/40 rounded-xl flex items-center justify-center text-neutral-600 text-xs border border-white/5">
                  [ Retention Curve Metric Chart ]
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS LANDING & STRATEGY FORM ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            
            {/* Brands Hero Section (Image_327f1a.jpg Layout) */}
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                ⚡ For Tech Brands
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Scale signups with creators who already own your audience.
              </h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.
              </p>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-sm inline-block">
                Start Campaign Strategy →
              </a>
            </div>

            {/* Campaign Process Workflow Steps (Image_3211c2.png Style Layout) */}
            <div className="max-w-5xl mx-auto mb-24 border-t border-b border-white/5 py-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">The brand campaign process.</h2>
                <p className="text-neutral-400 text-xs">How we remove the operational drag of running creator campaigns.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-900/30 flex items-center justify-center mb-4 text-blue-400 font-mono text-xs transition-colors group-hover:border-blue-500/50">01</div>
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 01</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">Perfect matching</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We analyze creator demographics to find the absolute best fit for your niche.</p>
                </div>
                
                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-900/30 flex items-center justify-center mb-4 text-blue-400 font-mono text-xs transition-colors group-hover:border-blue-500/50">02</div>
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 02</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">Content briefing</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We build detailed guides highlighting your product's core value props.</p>
                </div>

                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-900/30 flex items-center justify-center mb-4 text-blue-400 font-mono text-xs transition-colors group-hover:border-blue-500/50">03</div>
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 03</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">Quality control</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Every integration is reviewed by our team before going live.</p>
                </div>

                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-900/30 flex items-center justify-center mb-4 text-blue-400 font-mono text-xs transition-colors group-hover:border-blue-500/50">04</div>
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 04</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">Results evaluation</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Clean campaign data to optimize the next wave and scale efficiently.</p>
                </div>
              </div>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-neutral-900/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 01</div>
                  <h4 className="font-bold text-sm mb-2">Perfect matching</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We analyze creator demographics to find the absolute best fit for your niche.</p>
                </div>
                <div className="bg-neutral-900/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 02</div>
                  <h4 className="font-bold text-sm mb-2">Content briefing</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We build detailed guides highlighting your product's core value props.</p>
                </div>
                <div className="bg-neutral-900/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 03</div>
                  <h4 className="font-bold text-sm mb-2">Quality control</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Every integration is reviewed by our team before going live.</p>
                </div>
                <div className="bg-neutral-900/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Step 04</div>
                  <h4 className="font-bold text-sm mb-2">Results evaluation</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Clean campaign data to optimize the next wave and scale efficiently.</p>
                </div>
              </div>
            </div>

            {/* Strategy Form Container with Formspree Endpoint (Image_327f17.png Layout) */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Work with NexVance.</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Partner with a dedicated marketing manager to launch your next tech, SaaS, or hardware campaign.
                </p>
                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Access to top tech & developer creators</span></li>
                  <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Full campaign QA & policy safety</span></li>
                  <li className="flex items-center space-x-2"><span className="text-blue-500">✓</span> <span>Clear communication & fast deliveries</span></li>
                </ul>
              </div>

              {/* Formspree Endpoint Form for Brands */}
                <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company / SaaS name</label>
                  <input required type="text" name="companyName" placeholder="Your brand name" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Work email</label>
                  <input required type="email" name="email" placeholder="name@company.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Product type</label>
                  <select name="productType" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-blue-500 outline-none transition-colors">
                    <option value="SaaS / Software">SaaS / Software</option>
                    <option value="AI / DevTool">AI / DevTool</option>
                    <option value="Hardware / Consumer Tech">Hardware / Consumer Tech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign goals & details</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your product and ideal budget..." className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                  Send Strategy Request
                </button>
              </form>
            </div>

          </div>
        )}

        {/* ==================== 3. FOR CREATORS ROSTER LANDING & APPLICATION FORM ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            
            {/* Creators Hero Block (Image_327e9a.jpg Layout) */}
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                👥 For Creators
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Focus on content. We'll bring the brand deals.
              </h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                Stop wasting hours on cold corporate emails. We protect your creative freedom and lock in high-paying sponsorships.
              </p>
              <a href="#roster-form" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-sm inline-block">
                Apply to the Roster →
              </a>
            </div>

            {/* Creator Support Benefits Row (Exact Image_3211c2.png Popup Layout) */}
            <div className="max-w-5xl mx-auto mb-24 border-t border-b border-white/5 py-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">How we support our creators.</h2>
                <p className="text-neutral-400 text-xs">We work in the background so you spend your time building videos — not chasing invoices.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center mb-4 text-emerald-400 transition-colors group-hover:border-emerald-500/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Stage 01</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">Inbound deals</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We match your channel with premium software and hardware brands.</p>
                </div>

                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center mb-4 text-emerald-400 transition-colors group-hover:border-emerald-500/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Stage 02</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">Contract protection</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Fair pricing structures. No late payments. No shifting scope.</p>
                </div>

                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center mb-4 text-emerald-400 transition-colors group-hover:border-emerald-500/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Stage 03</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">Retention support</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">Performance ideas to optimize hooks and maximize watch time.</p>
                </div>

                <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-neutral-900/50 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center mb-4 text-emerald-400 transition-colors group-hover:border-emerald-500/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">Stage 04</div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">Programmatic scaling</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">We turn one-off integrations into recurring quarterly contracts.</p>
                </div>
              </div>
            </div>

            {/* Creator Roster Form Block (Image_327e97.png Layout) */}
            <div id="roster-form" className="max-w-4xl mx-auto bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join our active roster.</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Apply to onboard onto our talent network. We operate strictly on commission — we only grow when your channel does.
                </p>
                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>100% contract & payment transparency</span></li>
                  <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Direct management of corporate requests</span></li>
                  <li className="flex items-center space-x-2"><span className="text-emerald-500">✓</span> <span>Creative freedom safeguards</span></li>
                </ul>
              </div>

              {/* Formspree Endpoint Form for Creators */}
              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-7 space-y-4 w-full">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Channel name</label>
                  <input required type="text" name="channelName" placeholder="e.g., TechWithDev" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Contact email</label>
                  <input required type="email" name="email" placeholder="you@gmail.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">YouTube channel URL</label>
                  <input required type="url" name="channelUrl" placeholder="youtube.com/@yourchannel" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Avg views per video</label>
                    <input required type="text" name="avgViews" placeholder="e.g., 25k" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Main niche / topic</label>
                    <input required type="text" name="niche" placeholder="e.g., AI / Coding" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">
                  Submit Application
                </button>
              </form>
            </div>

          </div>
        )}

        {/* ==================== GLOBAL FOOTER SECTION ==================== */}
        <footer className="border-t border-white/5 pt-16 pb-12 px-6 md:px-[8%] bg-black/20 w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs">NV</div>
                <span className="font-bold tracking-tight text-lg">NexVance</span>
              </div>
              <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
                Operational infrastructure and strategic frameworks for high-value tech partnerships.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">Navigation</h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><button onClick={() => setActiveTab('brands')} className="hover:text-white">Tech brand portal</button></li>
                <li><button onClick={() => setActiveTab('creators')} className="hover:text-white">Creator roster</button></li>
                <li><button onClick={() => setActiveTab('overview')} className="hover:text-white">Overview</button></li>
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

export default App;
