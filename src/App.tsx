{/* Brand <-> Creator Graph Asset (UPGRADED: Premium Dark Infrastructure Graph Component) */}
<div className="w-full max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-neutral-950 to-[#050505] border border-white/10 p-3 shadow-2xl relative overflow-hidden mb-24">
  
  {/* Micro Tech Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
  
  {/* Premium Ambient Radial Glow (Deep Blue and Green mixing in the middle) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
  <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />

  <div className="w-full aspect-[16/9] min-h-[360px] rounded-xl bg-black/80 flex flex-col justify-between p-6 md:p-8 relative overflow-hidden border border-white/5">
    
    {/* TOP STATUS BAR: Premium Engine Meta Data */}
    <div className="relative z-10 flex justify-between items-center w-full border-b border-white/5 pb-4">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Escrow & Campaign Router Active</span>
      </div>
      <div className="text-[10px] font-mono text-neutral-500 bg-neutral-950 px-2.5 py-1 rounded-md border border-white/5">
        Latency: <span className="text-emerald-400">0.02ms</span>
      </div>
    </div>

    {/* MIDDLE SECTION: Interactive Middleman Node Pipeline Diagram */}
    <div className="relative w-full h-full flex items-center justify-between px-4 md:px-12 my-4">
      
      {/* 1. LEFT SIDE: Brands Node Cluster */}
      <div className="flex flex-col space-y-4 z-10 w-1/4">
        <div className="bg-neutral-950 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md transform hover:scale-105 transition-all">
          <div className="text-[9px] font-mono uppercase text-blue-400 font-bold mb-0.5">SaaS Brand</div>
          <div className="text-xs font-semibold text-white truncate">AI Automations</div>
        </div>
        <div className="bg-neutral-950 border border-white/5 opacity-50 rounded-xl p-2 text-[10px] text-neutral-400 text-center">
          Hardware Inc.
        </div>
      </div>

      {/* DYNAMIC CONNECTOR SVG LAYER (The Middleman Visualizer) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 700 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Glow Path definitions */}
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

          {/* Left Side Lines converging to the Middle Agency Node */}
          <path d="M 160,80 L 350,125" stroke="url(#brandToMiddle)" strokeWidth="1.5" />
          <path d="M 160,170 L 350,125" stroke="url(#brandToMiddle)" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Right Side Lines distributing to Creators */}
          <path d="M 350,125 L 540,75" stroke="url(#middleToCreator)" strokeWidth="1.5" />
          <path d="M 350,125 L 540,175" stroke="url(#middleToCreator)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Core Intersection Indicator Ring */}
          <circle cx="350" cy="125" r="28" className="stroke-white/10 fill-black" strokeWidth="1" />
          <circle cx="350" cy="125" r="20" className="stroke-blue-500/30 fill-neutral-950" strokeWidth="1" />
        </svg>
      </div>

      {/* 2. THE CENTER MIDDLEMAN: Agency Router Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-pulse">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-white tracking-widest">NV</span>
          </div>
        </div>
        {/* Floating Middleman Badges */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-950/80 border border-blue-500/30 text-[9px] font-mono text-blue-300 px-2 py-0.5 rounded-full backdrop-blur-md">
          Brief & Contract Managed
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-950/80 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 px-2 py-0.5 rounded-full backdrop-blur-md">
          Guaranteed ROI Vetting
        </div>
      </div>

      {/* 3. RIGHT SIDE: Elite Creators Node Cluster */}
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

    {/* BOTTOM INFRASTRUCTURE METRICS SECTION */}
    <div className="relative z-10 border-t border-white/5 pt-4 bg-gradient-to-t from-black via-black/90 to-transparent">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
        <div>
          <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">Middleware Engine</span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">The Frictionless Pipeline</h3>
        </div>
        <div className="flex space-x-1.5">
          <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-neutral-400">
            Escrow Audit
          </span>
          <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-neutral-400">
            Automated QA
          </span>
          <span className="bg-neutral-900 border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono text-neutral-300 font-semibold">
            Zero Operational Drag
          </span>
        </div>
      </div>
    </div>

  </div>
</div>
