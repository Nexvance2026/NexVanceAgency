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
      
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712] pointer-events-none z-0" />

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 px-6 md:px-[8%] py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">NV</div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">NexVance</span>
        </div>

        <div className="bg-neutral-900/80 p-1 border border-white/5 rounded-full flex space-x-1 shadow-lg">
          <button onClick={() => setActiveTab('overview')} className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeTab === 'overview' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}>Overview</button>
          <button onClick={() => setActiveTab('brands')} className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeTab === 'brands' ? 'bg-blue-600 text-white' : 'text-neutral-400'}`}>For Tech Brands</button>
          <button onClick={() => setActiveTab('creators')} className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeTab === 'creators' ? 'bg-emerald-600 text-white' : 'text-neutral-400'}`}>For Creators</button>
        </div>
      </nav>

      <main className="relative z-10 pt-28 max-w-7xl mx-auto w-full">
        
        {activeTab === 'overview' && (
          <div className="px-6 md:px-[8%]">
            <h1 className="text-4xl md:text-7xl font-bold text-center mb-10">Welcome to NexVance</h1>
            {/* Yahan baki overview content aayega */}
          </div>
        )}

        {/* Integrated Tech Brands Section */}
        {activeTab === 'brands' && (
          <div className="animate-fadeIn px-6 md:px-[8%]">
            <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
              <span className="bg-blue-950/60 border border-blue-800/40 text-[10px] font-bold text-blue-300 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">⚡ For Tech Brands</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Scale signups with creators who already own your audience.</h1>
              <a href="#brand-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl transition-all">Start Campaign Strategy →</a>
            </div>

            <div className="w-full max-w-4xl mx-auto min-h-[460px] relative flex items-center justify-center mb-24 perspective-1000">
               {/* Isometric Dashboard Visual Yahan Hai */}
               <div className="w-full max-w-2xl aspect-[1.4/1] bg-gradient-to-tr from-blue-950/40 to-neutral-900/20 rounded-3xl border border-white/10 flex items-center justify-center">
                  <span className="text-blue-500 font-mono">Isometric Dashboard Display</span>
               </div>
            </div>

            <div id="brand-form" className="max-w-4xl mx-auto bg-neutral-900/50 border border-white/5 p-8 rounded-2xl mb-24">
              <form action="https://formspree.io/f/xlgkywng" method="POST" className="space-y-4">
                <input required type="text" name="companyName" placeholder="Company Name" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white" />
                <select required name="budget_bracket" value={brandBudget} onChange={(e) => setBrandBudget(e.target.value)} className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-neutral-300">
                  <option value="">Select Budget</option>
                  <option value="1k-5k">$1k - $5k</option>
                  <option value="5k+">5k+</option>
                </select>
                <textarea name="message" rows={4} placeholder="Campaign goals..." className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">Send Request</button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'creators' && (
          <div className="px-6 md:px-[8%]">
            <h1 className="text-4xl font-bold text-center">For Creators</h1>
          </div>
        )}
      </main>
    </div>
  );
}
