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
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-4 md:px-[8%] py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        
        <div className="flex items-center space-x-3 cursor-pointer self-start sm:self-auto" onClick={() => setActiveTab('overview')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            NV
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            NexVance
          </span>
        </div>

        {/* Interactive Nav Tabs - Scrollable on very small screens */}
        <div className="bg-neutral-900/80 p-1 border border-white/5 rounded-full flex space-x-1 shadow-lg max-w-full overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'overview' ? 'bg-neutral-800 text-white shadow-inner' : 'text-neutral-400 hover:text-white'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'brands' ? 'bg-blue-600/90 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Tech Brands
          </button>
          <button 
            onClick={() => setActiveTab('creators')}
            className={`px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === 'creators' ? 'bg-emerald-600/90 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Creators
          </button>
        </div>
      </nav>

      {/* DYNAMIC PAGES BODY */}
      <main className="relative z-10 pt-36 sm:pt-28 max-w-7xl mx-auto w-full">
        
        {/* ==================== 1. OVERVIEW LANDING PAGE ==================== */}
        {activeTab === 'overview' && (
          <div className="animate-fadeIn px-4 md:px-[8%]">
            
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
              <span className="bg-neutral-900 border border-white/10 text-[10px] font-bold text-neutral-400 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                ⚡ The Creator Ops Infrastructure
              </span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Where Elite Tech Brands Meet Top-Tier Creators.
              </h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                We handle the entire operational workflow—from contracts and strategy to assets and attribution. Scale without the headache.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button 
                  onClick={() => setActiveTab('brands')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl text-xs tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] transform hover:-translate-y-0.5"
                >
                  Deploy Campaigns
                </button>
                <button 
                  onClick={() => setActiveTab('creators')}
                  className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10 font-semibold px-6 py-3.5 rounded-xl text-xs tracking-wide transition-all transform hover:-translate-y-0.5"
                >
                  Join Roster
                </button>
              </div>
            </div>

            {/* Premium Centerpiece Image Wrapper (FIXED MOBILE OVERFLOW) */}
            <div className="w-full max-w-[650px] mx-auto mb-28 px-2">
              <div className="relative rounded-2xl border border-white/10 p-2 bg-neutral-900/30 backdrop-blur-sm shadow-[0_30px_100px_rgba(0,0,0,0.6)] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/brand-dashboard.jpg" 
                  alt="NexVance Infrastructure Interface" 
                  className="w-full h-auto rounded-xl object-cover border border-white/5 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Dual Value Proposition Splits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
              
              {/* Brand Preview Box */}
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-800/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <h3 className="text-xl font-bold mb-3">For Tech & SaaS Brands</h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                    Stop wasting internal engineering and marketing hours tracking down raw assets, legal sign-offs, and custom metrics. NexVance injects data-driven, conversion-optimized native integrations directly into specialized tech developer feeds.
                  </p>
                </div>
                <button onClick={() => setActiveTab('brands')} className="text-blue-400 hover:text-blue-300 text-xs font-semibold tracking-wide flex items-center gap-2 self-start">
                  Explore Brand Infrastructure <span>→</span>
                </button>
              </div>

              {/* Creator Preview Box */}
              <div className="bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/20 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    🎬
                  </div>
                  <h3 className="text-xl font-bold mb-3">For Cozy-Tech & Tech Creators</h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                    Focus strictly on the asset creation timeline. No more chasing inbound cold pitches or dealing with chaotic multi-layered creative briefs. We build out dedicated sponsorship packaging that aligns perfectly with your production cycle.
                  </p>
                </div>
                <button onClick={() => setActiveTab('creators')} className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold tracking-wide flex items-center gap-2 self-start">
                  Review Creator Standards <span>→</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* ==================== 2. FOR TECH BRANDS LANDING ==================== */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-4 md:px-[8%]">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                ⚡ For Tech Brands
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Scale signups with creators who already own your audience.
              </h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                High-intent users, structured video placements, and managed campaigns from kick-off to post-mortem.
              </p>
              <a 
                href="#brand-form" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] text-sm inline-block transform hover:-translate-y-0.5"
              >
                Start Campaign Strategy →
              </a>
            </div>

            {/* ISOMETRIC GLOWING DASHBOARD (FIXED FOR MOBILE INTERFERENCE) */}
            <div className="w-full max-w-4xl mx-auto min-h-[300px] md:min-h-[460px] relative flex items-center justify-center mb-24 perspective-1000 group px-4">
              {/* Glow Behind */}
              <div className="absolute w-[280px] md:w-[500px] h-[200px] md:h-[350px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[140px] opacity-80 group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
              
              {/* Isometric Card Container */}
              <div className="relative w-full max-w-2xl aspect-[1.5/1] sm:aspect-[1.4/1] transform rotate-x-30 rotate-z-[-15deg] sm:rotate-x-55 sm:rotate-z-[-32deg] skew-x-3 sm:skew-x-6 transition-all duration-700 group-hover:rotate-x-25 sm:group-hover:rotate-x-50 group-hover:rotate-z-[-10deg] sm:group-hover:rotate-z-[-28deg] group-hover:-translate-y-2 md:group-hover:-translate-y-4 flex items-center justify-center">
                
                {/* Outer Glass Shell */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-neutral-900/20 border border-white-[0.03] rounded-2xl md:rounded-3xl p-3 md:p-6 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.7)] md:shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                  <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:12px_12px] md:bg-[size:16px_16px] rounded-xl" />
                </div>

                {/* Inner Data Widget */}
                <div className="absolute inset-x-3 sm:inset-x-4 inset-y-6 sm:inset-y-8 bg-neutral-950/80 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transform translate-z-4 sm:translate-z-8 transition-transform duration-700 group-hover:translate-z-8 sm:group-hover:translate-z-12 flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <div className="text-[9px] font-mono text-neutral-500 tracking-wider">CAMPAIGN_ATTRIBUTION_LIVE</div>
                  </div>

                  {/* Simulated Chart Bars */}
                  <div className="w-full h-20 md:h-28 flex items-end space-x-1 sm:space-x-2 px-1 md:px-2 border-b border-white/5 relative mb-2">
                    <div className="absolute inset-x-0 bottom-4 md:bottom-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-emerald-400 opacity-80" />
                    <div className="bg-neutral-900 w-full h-[30%] rounded-t-sm" />
                    <div className="bg-blue-500/20 w-full h-[55%] rounded-t-sm" />
                    <div className="bg-blue-500/40 w-full h-[45%] rounded-t-sm" />
                    <div className="bg-blue-500/60 w-full h-[70%] rounded-t-sm" />
                    <div className="bg-gradient-to-t from-blue-600/40 to-emerald-500/40 w-full h-[90%] rounded-t-sm animate-pulse" />
                    <div className="bg-neutral-900 w-full h-[20%] rounded-t-sm" />
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -top-3 sm:-top-6 right-2 sm:right-4 w-32 sm:w-44 aspect-[1.5/1] bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-[0_10px_20px_rgba(37,99,235,0.4)] transform translate-z-12 sm:translate-z-20 transition-transform duration-700 group-hover:translate-z-20 sm:group-hover:translate-z-28 flex flex-col justify-between">
                  <div className="text-[7px] sm:text-[8px] font-mono text-white/70 uppercase tracking-wider">Conversion Engine</div>
                  <div className="text-sm sm:text-lg font-bold font-mono tracking-tight leading-none mt-0.5">+412%</div>
                </div>

              </div>
            </div>

            {/* Structured Intake Form */}
            <div id="brand-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl">
              
              <div className="md:col-span-4 space-y-4">
                <h4 className="text-lg font-bold tracking-tight">Initiate Operational Strategy</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide baseline target scope metrics. Our growth desk reviews audience alignment cross-checks within 12 standard operations hours.
                </p>
                <div className="pt-2 space-y-1.5">
                  <div className="text-[10px] text-neutral-500 flex items-center gap-2">✓ Verified Creator Matches</div>
                  <div className="text-[10px] text-neutral-500 flex items-center gap-2">✓ Automated Usage Rights</div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-8 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Company Entity</label>
                    <input required type="text" name="companyName" placeholder="e.g., Vercel Inc." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Work Corporate Email</label>
                    <input required type="email" name="email" placeholder="e.g., growth@company.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Target Quarterly Allocation</label>
                    <select 
                      required
                      name="budget_bracket" 
                      value={brandBudget}
                      onChange={(e) => setBrandBudget(e.target.value)}
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-blue-500 outline-none"
                    >
                      <option value="" disabled hidden>Select Budget Structure</option>
                      <option value="test_tier">$2,500 - $7,500 (Pilot Deployment)</option>
                      <option value="mid_tier">$7,500 - $20,000 (Scale Framework)</option>
                      <option value="enterprise_tier">$20,000+ (Enterprise Allocation)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Target Product Niche</label>
                    <input required type="text" name="product_niche" placeholder="e.g., Developer Tools, B2B SaaS" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Campaign Performance Metrics / Core Objectives</label>
                  <textarea required name="objectives" rows={4} placeholder="Detail core acquisition targets, specific feature focus vectors, or baseline conversion targets..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-blue-500 outline-none resize-none" />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                  Transmit Allocation Criteria
                </button>
              </form>

            </div>

          </div>
        )}

        {/* ==================== 3. FOR CREATORS ROSTER LANDING ==================== */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn px-4 md:px-[8%]">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 pt-6">
              <span className="bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-bold text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                ⚡ For Creators
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Protect your production pipeline. Outsource business ops.
              </h1>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                We embed directly into your infrastructure to pitch long-form tech brands, manage contracts, and streamline asset specs.
              </p>
              <a 
                href="#creator-form" 
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-sm inline-block transform hover:-translate-y-0.5"
              >
                Apply to Roster Framework →
              </a>
            </div>

            {/* Premium Asset Showcase Wrapper (FIXED MOBILE RESPONSIVENESS) */}
            <div className="w-full max-w-[650px] mx-auto mb-24 px-2">
              <div className="relative rounded-2xl border border-white/10 p-2 bg-neutral-900/30 backdrop-blur-sm shadow-[0_30px_100px_rgba(0,0,0,0.6)] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src="/creator-setup.jpg" 
                  alt="Cozy Tech Production Environment Asset" 
                  className="w-full h-auto rounded-xl object-cover border border-white/5 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Creator Application Form */}
            <div id="creator-form" className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start shadow-2xl">
              
              <div className="md:col-span-4 space-y-4">
                <h4 className="text-lg font-bold tracking-tight">Roster Integration Intake</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  NexVance strictly acts as an operational pipeline filter for premium tech channels. Ensure verified traffic logs match selection arrays.
                </p>
                <div className="pt-2 space-y-1.5">
                  <div className="text-[10px] text-neutral-500 flex items-center gap-2">✓ 100% Inbound Deal Handling</div>
                  <div className="text-[10px] text-neutral-500 flex items-center gap-2">✓ Guaranteed Legal Clearance</div>
                </div>
              </div>

              <form action="https://formspree.io/f/xlgkywng" method="POST" className="md:col-span-8 space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Primary Handle / Channel Link</label>
                    <input required type="url" name="channelLink" placeholder="e.g., youtube.com/@yourtechbrand" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Direct Contact Email</label>
                    <input required type="email" name="creatorEmail" placeholder="e.g., talent@nexvance.com" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Average Dynamic Video Metric Range</label>
                    <select 
                      required
                      name="average_views" 
                      value={creatorViews}
                      onChange={(e) => setCreatorViews(e.target.value)}
                      className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-xs text-neutral-300 focus:border-emerald-500 outline-none"
                    >
                      <option value="" disabled hidden>Select Baseline Range</option>
                      <option value="5k_15k">5,000 - 15,000 Avg Views</option>
                      <option value="15k_50k">15,000 - 50,000 Avg Views</option>
                      <option value="50k_plus">50,000+ Alpha Metrics Tier</option>
                      <option value="custom">Custom View Metric Spec</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Core Content Theme / Niche Focus</label>
                    <input required type="text" name="niche" placeholder="e.g., Software Engineering, Consumer Tech" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-emerald-500 outline-none" />
                  </div>
                </div>

                {creatorViews === 'custom' && (
                  <div className="animate-fadeIn">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Specify Exact Avg. Views</label>
                    <input required type="text" name="customCreatorViews" placeholder="e.g., 45,000 views" className="w-full bg-emerald-950/30 border border-emerald-500/40 rounded-lg p-3 text-xs text-white focus:border-emerald-400 outline-none" />
                  </div>
                )}
                
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">
                  Submit Application
                </button>
              </form>

            </div>

          </div>
        )}

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-white/5 pt-16 pb-12 px-4 md:px-[8%] bg-black/20 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-xs">
                  NV
                </div>
                <span className="text-md font-bold tracking-tight text-white">NexVance</span>
              </div>
              <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
                The operations architecture decoupling technical asset creation from operational baseline conversion.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:col-span-6">
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li><button onClick={() => setActiveTab('brands')} className="hover:text-white text-left transition-colors">Tech brand portal</button></li>
                  <li><button onClick={() => setActiveTab('creators')} className="hover:text-white text-left transition-colors">Creator roster</button></li>
                  <li><button onClick={() => setActiveTab('overview')} className="hover:text-white text-left transition-colors">Overview</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Corporate</h5>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white text-left transition-colors">Privacy Policy</button></li>
                  <li><button onClick={() => setActiveTab('terms')} className="hover:text-white text-left transition-colors">Terms of Operations</button></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="text-center text-[11px] text-neutral-600 border-t border-white/5 pt-8">
            © 2026 NexVance. Managed operations infrastructure. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}
