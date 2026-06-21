import React, { useState } from 'react';

function App() {
  // Navigation active state control karne ke liye
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Background Radial Glow Effect (Lovable Premium Design) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      {/* TOP NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/70 backdrop-blur-md border-b border-white/5 px-[8%] py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            NV
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            NexVance
          </span>
        </div>

        {/* Dynamic Navigation Tabs (Image_3294a9.jpg Standard) */}
        <div className="bg-neutral-900/60 p-1 border border-white/5 rounded-full flex space-x-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'overview' ? 'bg-neutral-800 text-white shadow-inner' : 'text-neutral-400 hover:text-white'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'brands' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Tech Brands
          </button>
          <button 
            onClick={() => setActiveTab('creators')}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === 'creators' ? 'bg-emerald-600 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'text-neutral-400 hover:text-white'}`}
          >
            For Creators
          </button>
        </div>
      </nav>

      {/* MAIN LAYOUT SECTIONS */}
      <main className="relative z-10 pt-32 pb-24 px-[8%] max-w-7xl mx-auto">
        
        {/* DYNAMIC CONTENT SWITCHER */}
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            {/* Tagline Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/80 border border-white/5 rounded-full px-4 py-1.5 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Now booking Q3 / Q4 2026 campaigns</span>
              </div>
            </div>

            {/* Main Hero Hook */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Where <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">tech brands</span> meet <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">elite creators.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
                NexVance is the full-service marketing operation behind tomorrow's SaaS, AI, and hardware launches. We source, vet, and deploy creators that actually convert.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button 
                  onClick={() => setActiveTab('brands')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center space-x-2 group"
                >
                  <span>I'm a Tech Brand</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => setActiveTab('creators')}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-2 group"
                >
                  <span>I'm a Creator</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Embedded Cinematic Asset Placeholder */}
            <div className="w-full aspect-video md:max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 p-2 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-color-add pointer-events-none" />
              <div className="w-full h-full rounded-xl bg-neutral-950 flex flex-col items-center justify-center text-neutral-600">
                <svg className="w-12 h-12 mb-3 opacity-40 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium tracking-wide text-neutral-400">Cinematic Tech Roster Reel</span>
              </div>
            </div>
          </div>
        )}

        {/* TECH BRANDS LANDING & FORM PAGE */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Scale Your Software & AI Growth</h2>
              <p className="text-neutral-400">Deploy high-converting campaigns with tech-focused channels.</p>
            </div>
            
            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Company Name</label>
                  <input type="text" placeholder="e.g., NexaSaaS AI" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Work Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Campaign Budget (Monthly)</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors text-neutral-300">
                  <option>$2,500 - $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000+</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                Submit Strategy Request
              </button>
            </form>
          </div>
        )}

        {/* CREATORS PAGE */}
        {activeTab === 'creators' && (
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Join the Elite Tech Roster</h2>
              <p className="text-neutral-400">Get matched with high-paying sponsors in AI, Dev-tools, and Productivity.</p>
            </div>
            
            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Channel / Handle Name</label>
                  <input type="text" placeholder="e.g., TechWithDev" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-emerald-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Primary Platform Link</label>
                  <input type="url" placeholder="youtube.com/c/yourchannel" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-emerald-500 outline-none transition-colors" />
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]">
                Apply to Roster
              </button>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
