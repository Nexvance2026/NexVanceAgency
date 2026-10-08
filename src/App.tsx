import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [activeFormTab, setActiveFormTab] = useState<'brand' | 'creator'>('brand');
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [brandSubmitted, setBrandSubmitted] = useState(false);
  const [creatorSending, setCreatorSending] = useState(false);
  const [brandSending, setBrandSending] = useState(false);

  // Filter for Roster Display
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    setSending: (v: boolean) => void,
    setSubmitted: (v: boolean) => void
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/mvkgblaq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please email haseeb@nexvanceagency.com directly.');
      }
    } catch {
      alert('Something went wrong. Please email haseeb@nexvanceagency.com directly.');
    } finally {
      setSending(false);
    }
  };

  // 14 Represented Talent & Network Creators (Hard Social Proof Engine)
  const rosterTalent = [
    {
      name: "Tyler D.",
      handle: "@tylertech",
      niche: "Tech & Productivity",
      platforms: ["YouTube", "TikTok"],
      reach: "380K+",
      region: "US & Canada",
      pastBrands: ["NordVPN", "Notion", "Anker"],
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Elena R.",
      handle: "@elenalifestyle",
      niche: "UGC / Beauty & Skincare",
      platforms: ["TikTok", "Instagram"],
      reach: "190K+",
      region: "UK & Europe",
      pastBrands: ["GlowRecipe", "CeraVe", "Glossier"],
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus V.",
      handle: "@marcusbuilds",
      niche: "SaaS & AI Tools",
      platforms: ["YouTube", "Facebook"],
      reach: "240K+",
      region: "US & UK",
      pastBrands: ["HubSpot", "ElevenLabs", "Hostinger"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah K.",
      handle: "@sarahfits",
      niche: "Fitness & Wellness",
      platforms: ["Instagram", "TikTok"],
      reach: "410K+",
      region: "Europe & UK",
      pastBrands: ["Gymshark", "MyProtein", "Whoop"],
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Alex Thorne",
      handle: "@thornefps",
      niche: "Gaming & Setup Gear",
      platforms: ["YouTube", "TikTok"],
      reach: "520K+",
      region: "US & Canada",
      pastBrands: ["Razer", "Logitech G", "Apex Legends"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Chloe M.",
      handle: "@chloeeatsugc",
      niche: "UGC Food & Beverage",
      platforms: ["TikTok", "Instagram Reels"],
      reach: "125K+",
      region: "US & UK",
      pastBrands: ["HelloFresh", "Olipop", "Liquid I.V."],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      handle: "@chenfinance",
      niche: "Personal Finance & Business",
      platforms: ["YouTube", "Facebook"],
      reach: "310K+",
      region: "US & Canada",
      pastBrands: ["Webull", "Shopify", "Wise"],
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jessica P.",
      handle: "@jesshomefinds",
      niche: "Home Decor & Smart Gadgets",
      platforms: ["Instagram", "TikTok"],
      reach: "275K+",
      region: "US & Europe",
      pastBrands: ["Dyson", "Philips Hue", "Wayfair"],
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Liam O'Connor",
      handle: "@liamtravels",
      niche: "Travel & Lifestyle Vlogs",
      platforms: ["YouTube", "Instagram"],
      reach: "460K+",
      region: "UK & Europe",
      pastBrands: ["Airalo", "DJI", "GoPro"],
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nina Watson",
      handle: "@ninaugcstudio",
      niche: "UGC High-Converting Ads",
      platforms: ["TikTok", "Facebook Ads"],
      reach: "85K+",
      region: "US & UK",
      pastBrands: ["BetterHelp", "AG1", "Lululemon"],
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jordan Reed",
      handle: "@reedautomobile",
      niche: "Automotive & EV Tech",
      platforms: ["YouTube", "Instagram"],
      reach: "340K+",
      region: "US & Canada",
      pastBrands: ["Castrol", "Chemical Guys", "EcoFlow"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Amara Diallo",
      handle: "@amarastyle",
      niche: "Fashion & Streetwear",
      platforms: ["Instagram", "TikTok"],
      reach: "290K+",
      region: "UK & Europe",
      pastBrands: ["ASOS", "Farfetch", "Cider"],
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kevin Miller",
      handle: "@kevindesign",
      niche: "Design & Creative Software",
      platforms: ["YouTube", "Facebook"],
      reach: "215K+",
      region: "US & Europe",
      pastBrands: ["Figma", "Epidemic Sound", "Skillshare"],
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hannah & Zoe",
      handle: "@hzparenting",
      niche: "Family, Kids & Motherhood",
      platforms: ["TikTok", "Instagram Reels"],
      reach: "330K+",
      region: "US & UK",
      pastBrands: ["Pampers", "Lego", "KiwiCo"],
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const filteredTalent = selectedPlatform === 'All'
    ? rosterTalent
    : rosterTalent.filter(t => t.platforms.some(p => p.toLowerCase().includes(selectedPlatform.toLowerCase())) || (selectedPlatform === 'UGC' && t.niche.includes('UGC')));

  return (
    <div className="bg-[#0B0D12] text-[#F2F1ED] font-sans antialiased selection:bg-[#E3A64A] selection:text-[#1a1408]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display{ font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .font-mono-nv{ font-family:'IBM Plex Mono', monospace; }
        @keyframes pulseDot{ 0%,100%{opacity:1;} 50%{opacity:0.25;} }
        .pulse-dot{ animation:pulseDot 2.2s infinite; }
      `}</style>

      {/* Vercel Analytics */}
      <Analytics />

      {/* STICKY TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#151822] border-b border-white/[0.06] text-xs py-2 px-4 text-center font-mono-nv text-white/70">
        🚀 Now scaling creator campaigns across <span className="text-[#3FA9A0] font-semibold">US • UK • Canada • Europe</span> | Flat Rates &amp; Performance Models
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0B0D12]/90 backdrop-blur-md border-b border-white/[0.09]">
        <div className="max-w-[1200px] mx-auto px-6 h-[76px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="NexVance logo" className="w-[32px] h-[32px] object-contain rounded-md" />
            <span className="font-display font-semibold text-2xl tracking-tight">NexVance</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#roster" className="hover:text-white transition-colors">Talent Roster</a>
            <a href="#how" className="hover:text-white transition-colors">Deal Architecture</a>
            <a href="#about" className="hover:text-white transition-colors">Founder &amp; Mission</a>
            <a href="#portal" className="hover:text-white transition-colors">Get Started</a>
          </div>
          <a href="#portal" className="bg-[#E3A64A] text-[#1a1408] px-5 py-2.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-sm shadow-[#E3A64A]/20">
            Book Creator Deal
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="pt-24 pb-20 max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] border border-[#3FA9A0]/30 bg-[#3FA9A0]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FA9A0] pulse-dot" />
              GLOBAL CREATOR &amp; BRAND SPONSORSHIP NETWORK
            </div>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-6">
              Scale campaigns with <span className="text-[#E3A64A]">vetted creators</span> across YouTube, TikTok &amp; Meta.
            </h1>
            <p className="text-white/70 text-lg max-w-[540px] mb-8 leading-relaxed">
              NexVance structures high-impact influencer campaigns and dedicated UGC pipelines across <strong className="text-white">US, UK, Canada &amp; Europe</strong>. Zero agency retainer overhead. Fully contract-protected.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#portal" onClick={() => setActiveFormTab('brand')} className="bg-[#3FA9A0] text-[#06211f] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#4bbdb3] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#3FA9A0]/20">
                Request Strategy &amp; Roster →
              </a>
              <a href="#roster" className="bg-[#151822] border border-white/15 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-[#E3A64A] hover:-translate-y-0.5 transition-all">
                Explore Talent Network
              </a>
            </div>
            
            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/[0.08]">
              <div>
                <div className="font-display text-2xl font-bold text-white">14+</div>
                <div className="text-xs text-white/50 font-mono-nv">Vetted Creators</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#E3A64A]">4 Regions</div>
                <div className="text-xs text-white/50 font-mono-nv">US • UK • CA • EU</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#3FA9A0]">50 / 50</div>
                <div className="text-xs text-white/50 font-mono-nv">Milestone Escrow</div>
              </div>
            </div>
          </div>

          {/* DEAL FLOW ARCHITECTURE */}
          <div className="bg-[#151822] border border-white/[0.09] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="font-mono-nv text-[0.72rem] text-white/50 uppercase tracking-widest mb-6 flex justify-between items-center">
              <span>Deal Escrow Blueprint</span>
              <span className="text-[#3FA9A0] bg-[#3FA9A0]/10 px-2 py-0.5 rounded">Risk-Free</span>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-[#0B0D12] rounded-xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#E3A64A] font-mono-nv font-semibold">STAGE 01: AGREEMENT &amp; 50%</div>
                  <div className="text-sm font-medium mt-0.5">Contract signed, 50% upfront held in escrow</div>
                </div>
                <span className="text-lg">🔒</span>
              </div>

              <div className="p-4 bg-[#0B0D12] rounded-xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#3FA9A0] font-mono-nv font-semibold">STAGE 02: DRAFT APPROVAL</div>
                  <div className="text-sm font-medium mt-0.5">Creator submits content draft for brand sign-off</div>
                </div>
                <span className="text-lg">🎬</span>
              </div>

              <div className="p-4 bg-[#0B0D12] rounded-xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-purple-400 font-mono-nv font-semibold">STAGE 03: GO-LIVE &amp; NET 30-45</div>
                  <div className="text-sm font-medium mt-0.5">Final 50% cleared within 30–45 days post-live</div>
                </div>
                <span className="text-lg">✅</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E3A64A]/10 to-[#3FA9A0]/10 border border-[#3FA9A0]/30 rounded-xl p-4 text-center">
              <div className="font-mono-nv text-xs text-white/60 mb-1">NexVance Guarantee</div>
              <div className="text-sm font-semibold text-white">No content publishes without brand approval. No upfront loss.</div>
            </div>
          </div>
        </div>
      </header>

      {/* HARD SOCIAL PROOF & TALENT ROSTER SECTION */}
      <section id="roster" className="py-20 bg-[#0E1118] border-y border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono-nv text-[0.75rem] tracking-wide text-[#E3A64A] block mb-2">TALENT SHOWCASE</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl">Featured Talent &amp; Collaborator Network</h2>
              <p className="text-white/60 mt-2 max-w-[620px]">
                Explore creators represented in our roster and past brand partnerships across YouTube, TikTok, Instagram &amp; Facebook.
              </p>
            </div>
            
            {/* Platform Filter Pills */}
            <div className="flex gap-2 flex-wrap mt-6 md:mt-0 font-mono-nv text-xs">
              {['All', 'YouTube', 'TikTok', 'Instagram', 'UGC'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPlatform(cat)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedPlatform === cat
                      ? 'bg-[#E3A64A] text-[#1a1408] border-[#E3A64A] font-bold'
                      : 'bg-[#151822] text-white/70 border-white/[0.09] hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTalent.map((talent, idx) => (
              <div key={idx} className="bg-[#151822] border border-white/[0.09] rounded-2xl p-5 hover:border-[#3FA9A0]/50 transition-all hover:-translate-y-1.5 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <img src={talent.avatar} alt={talent.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-[#E3A64A] transition-colors">{talent.name}</h3>
                      <p className="text-xs font-mono-nv text-white/50">{talent.handle}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/50">Niche:</span>
                      <span className="font-semibold text-white/90">{talent.niche}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Audience:</span>
                      <span className="font-mono-nv text-[#3FA9A0] font-semibold">{talent.reach} Reach</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Geo Focus:</span>
                      <span className="text-white/80">{talent.region}</span>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {talent.platforms.map((p, i) => (
                      <span key={i} className="text-[10px] font-mono-nv bg-white/[0.06] px-2 py-0.5 rounded text-white/80">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Past Brand Collabs - THE SOCIAL PROOF */}
                <div className="pt-3 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono-nv text-white/40 block mb-1.5 uppercase tracking-wider">Prior Brand Integrations</span>
                  <div className="flex flex-wrap gap-1">
                    {talent.pastBrands.map((b, bi) => (
                      <span key={bi} className="text-[11px] bg-[#3FA9A0]/15 text-[#3FA9A0] px-2 py-0.5 rounded font-medium">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/50 mb-4 font-mono-nv">Looking for a tailored media kit or specific CPM targets?</p>
            <a href="#portal" onClick={() => setActiveFormTab('brand')} className="inline-flex items-center gap-2 text-[#E3A64A] font-semibold text-sm hover:underline">
              Request Full Custom Roster with Engagement Rates →
            </a>
          </div>
        </div>
      </section>

      {/* EXPANDED CAPABILITIES: NICHES & FORMATS */}
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="max-w-[750px] mx-auto text-center mb-16">
          <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] block mb-3.5">FULL SPECTRUM COVERAGE</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">Every format. Broad niches. Zero limits.</h2>
          <p className="text-white/60 leading-relaxed">
            We don’t limit brands to a single platform or rigid vertical. NexVance represents creators across every major channel with formats fine-tuned for high engagement and conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#151822] border border-white/[0.08] p-7 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-[#E3A64A]/10 text-[#E3A64A] flex items-center justify-center font-bold text-lg mb-4">🎥</div>
            <h3 className="font-bold text-lg mb-2">Long-Form &amp; Integrations</h3>
            <p className="text-sm text-white/60 mb-4">Dedicated YouTube reviews, 60s sponsor segments, deep product walkthroughs, and podcast reads.</p>
            <span className="text-xs font-mono-nv text-[#E3A64A]">YouTube • Spotify • Podcasting</span>
          </div>

          <div className="bg-[#151822] border border-white/[0.08] p-7 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-[#3FA9A0]/10 text-[#3FA9A0] flex items-center justify-center font-bold text-lg mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">Short-Form Viral Creative</h3>
            <p className="text-sm text-white/60 mb-4">Organic reels, TikTok hooks, Facebook viral video formats, and interactive Instagram story link sweeps.</p>
            <span className="text-xs font-mono-nv text-[#3FA9A0]">TikTok • Instagram Reels • FB Video</span>
          </div>

          <div className="bg-[#151822] border border-white/[0.08] p-7 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-lg mb-4">📦</div>
            <h3 className="font-bold text-lg mb-2">High-Performing UGC Ads</h3>
            <p className="text-sm text-white/60 mb-4">Direct-to-consumer ad creative created exclusively for paid media, whitelisting, and TikTok Spark Ads.</p>
            <span className="text-xs font-mono-nv text-purple-400">Meta Whitelisting • Paid Media Creative</span>
          </div>
        </div>
      </section>

      {/* WHY NEXVANCE & TERMS */}
      <section className="py-16 bg-[#0E1118] border-y border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#E3A64A] block mb-3.5">OPERATING MODEL</span>
          <h2 className="font-display font-semibold text-3xl max-w-[600px] mb-5">Built on crystal clear non-negotiables.</h2>
          <p className="text-white/60 max-w-[600px] mb-10">Whether running flat-rate campaigns or creator performance deals, every contract is transparent.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '50/50', title: '50% Upfront, 50% Net 30-45', body: 'Brands deposit 50% to start production. The remaining 50% clears after publishing within 30 to 45 days.', color: 'amber' },
              { icon: '🌍', title: 'US, UK, CA & Europe Wide', body: 'Target qualified international audiences with native English and bilingual creators.', color: 'teal' },
              { icon: '1:1', title: 'Founder-Led Communication', body: 'Deal directly with executive management. Zero account junior telephone games.', color: 'amber' },
              { icon: '0%', title: 'Zero Agency Overhead', body: 'Brands pay agreed creator flat rates. Creators keep 80% without any upfront signup fee.', color: 'teal' },
              { icon: '∞', title: 'Every Niche Supported', body: 'Tech, B2B SaaS, Gaming, Lifestyle, E-com, Fitness, Fashion, Home & Wellness.', color: 'amber' },
              { icon: '✍️', title: 'Ironclad Milestone Contracts', body: 'Script approval, usage rights, deliverable specs, and payment gates signed upfront.', color: 'teal' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#151822] border border-white/[0.09] rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/30"
              >
                <div
                  className={`w-[44px] h-[34px] rounded-lg flex items-center justify-center font-mono-nv text-[0.85rem] font-bold mb-3.5 ${
                    item.color === 'amber' ? 'bg-[#E3A64A]/10 text-[#E3A64A]' : 'bg-[#3FA9A0]/10 text-[#3FA9A0]'
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-[0.98rem] mb-1.5">{item.title}</h3>
                <p className="text-[0.86rem] text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER / ABOUT US (Big Trust Booster) */}
      <section id="about" className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="bg-[#151822] border border-white/[0.09] rounded-3xl p-8 md:p-14">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            
            {/* Real Image Container */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#E3A64A]/40 aspect-[4/5] shadow-2xl relative">
                <img
                  src="/founder.jpg" 
                  alt="Muhammad Haseeb - Founder of NexVance"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback visual placeholder if founder.jpg is not yet uploaded to public folder
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="font-display font-bold text-xl text-white">Muhammad Haseeb</h4>
                  <p className="text-xs font-mono-nv text-[#E3A64A]">Founder &amp; Managing Director</p>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div>
              <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] block mb-3.5">LEADERSHIP &amp; ACCOUNTABILITY</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
                Built to solve the agency bloat and broken creator promises.
              </h2>
              <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                  "Most traditional influencer agencies operate like middlemen tax collectors: they lock brands into $5,000/month retainers while ignoring creator communication and failing to enforce campaign ROI."
                </p>
                <p>
                  "I founded <strong className="text-white font-semibold">NexVance</strong> with a singular mission: to make creator collaborations as reliable as programmatic media. We represent creators across the US, UK, Canada, and Europe, aligning both sides with transparent milestones."
                </p>
                <p>
                  "When you work with NexVance, you have my personal mobile number and direct email. No revolving junior account reps. Just performance, locked contracts, and seamless campaign delivery."
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="font-display font-bold text-white text-lg">Direct Contact</div>
                  <a href="mailto:haseeb@nexvanceagency.com" className="text-sm font-mono-nv text-[#3FA9A0] hover:underline">
                    haseeb@nexvanceagency.com
                  </a>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <div className="font-display font-bold text-white text-lg">Operating Territory</div>
                  <div className="text-sm font-mono-nv text-white/60">North America &amp; Europe</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONSOLIDATED TABBED APPLICATION PORTAL */}
      <section id="portal" className="py-20 bg-[#0E1118] border-t border-white/[0.08]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] block mb-2">INITIATE PARTNERSHIP</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl">Let’s run your next campaign.</h2>
            <p className="text-white/60 mt-2 text-sm">Select whether you are booking creators or applying to join our roster.</p>
            
            {/* TABS */}
            <div className="inline-flex p-1 bg-[#151822] border border-white/10 rounded-xl mt-6">
              <button
                onClick={() => setActiveFormTab('brand')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeFormTab === 'brand' ? 'bg-[#3FA9A0] text-[#06211f]' : 'text-white/60 hover:text-white'
                }`}
              >
                For Brands &amp; Marketers
              </button>
              <button
                onClick={() => setActiveFormTab('creator')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeFormTab === 'creator' ? 'bg-[#E3A64A] text-[#1a1408]' : 'text-white/60 hover:text-white'
                }`}
              >
                For Creators &amp; UGC Talent
              </button>
            </div>
          </div>

          <div className="bg-[#151822] border border-white/[0.09] rounded-2xl p-8 shadow-2xl">
            {activeFormTab === 'brand' ? (
              /* BRAND FORM */
              !brandSubmitted ? (
                <form onSubmit={(e) => handleSubmit(e, setBrandSending, setBrandSubmitted)}>
                  <input type="hidden" name="form_type" value="Brand Partnership Request" />
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Company / Brand Name</label>
                      <input type="text" name="brand_name" placeholder="e.g. Acme Corp" required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0]" />
                    </div>
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Brand Website / Store</label>
                      <input type="url" name="website" placeholder="https://acme.com" required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0]" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Work Email</label>
                      <input type="email" name="email" placeholder="alex@acme.com" required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0]" />
                    </div>
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Target Budget Tier</label>
                      <select name="budget" required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] text-white">
                        <option value="">Select range</option>
                        <option>$2,500 – $5,000 (Test Flight)</option>
                        <option>$5,000 – $15,000 (Growth Campaign)</option>
                        <option>$15,000+ (Omnichannel Scale)</option>
                      </select>
                    </div>
                  </div>

                  <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Campaign Deliverables &amp; Target Geo (US, UK, CA, EU)</label>
                  <textarea name="message" placeholder="Describe product details, target platform (YT, TikTok, IG, UGC), and main conversion goals..." required rows={3}
                    className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-5" />

                  <button type="submit" disabled={brandSending}
                    className="w-full bg-[#3FA9A0] text-[#06211f] py-3.5 rounded-lg font-bold text-sm hover:bg-[#4bbdb3] transition-colors disabled:opacity-60">
                    {brandSending ? 'Packaging Request...' : 'Send Campaign Brief & Roster Request'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-display font-semibold text-2xl mb-2 text-[#3FA9A0]">Brief Transmitted.</h3>
                  <p className="text-white/60 text-sm">Haseeb and the team will review your targets and deliver a matched creator shortlist within 24–48 hours.</p>
                </div>
              )
            ) : (
              /* CREATOR FORM */
              !creatorSubmitted ? (
                <form onSubmit={(e) => handleSubmit(e, setCreatorSending, setCreatorSubmitted)}>
                  <input type="hidden" name="form_type" value="Creator Application" />
                  <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Primary Channel / Portfolio Link</label>
                  <input type="url" name="channel_link" placeholder="https://youtube.com/@channel or TikTok/IG profile" required
                    className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-4" />

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Follower / Sub Count</label>
                      <input type="text" name="audience_size" placeholder="e.g. 120k subs or UGC portfolio" required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A]" />
                    </div>
                    <div>
                      <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Content Category</label>
                      <input type="text" name="niche" placeholder="Tech, Lifestyle, Gaming, UGC..." required
                        className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A]" />
                    </div>
                  </div>

                  <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Contact Email</label>
                  <input type="email" name="email" placeholder="creator@email.com" required
                    className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-5" />

                  <button type="submit" disabled={creatorSending}
                    className="w-full bg-[#E3A64A] text-[#1a1408] py-3.5 rounded-lg font-bold text-sm hover:bg-[#eeb562] transition-colors disabled:opacity-60">
                    {creatorSending ? 'Submitting...' : 'Apply for NexVance Representation'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-display font-semibold text-2xl mb-2 text-[#E3A64A]">Application Logged.</h3>
                  <p className="text-white/60 text-sm">We assess fit against incoming brand briefs and reply within 48 hours.</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.09] py-12 bg-[#0B0D12]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <img src="/logo.png" alt="NexVance logo" className="w-[24px] h-[24px] object-contain rounded-md" />
              <span className="font-display font-semibold text-lg">NexVance</span>
            </div>
            <p className="text-white/40 text-xs max-w-[300px] leading-relaxed">
              Strategic creator representation and performance influencer campaigns across North America &amp; Europe.
            </p>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div>
              <h5 className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-white/40 mb-3">Navigation</h5>
              <a href="#roster" className="block text-xs text-white/60 hover:text-white mb-2">Talent Network</a>
              <a href="#about" className="block text-xs text-white/60 hover:text-white mb-2">Leadership</a>
              <a href="#portal" className="block text-xs text-white/60 hover:text-white mb-2">Deal Architecture</a>
            </div>
            <div>
              <h5 className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-white/40 mb-3">Direct Executive Desk</h5>
              <a href="mailto:haseeb@nexvanceagency.com" className="block text-xs text-[#3FA9A0] hover:underline mb-2">haseeb@nexvanceagency.com</a>
              <span className="block text-xs text-white/40">Response SLA: &lt; 24 Hours</span>
            </div>
          </div>
        </div>
        <div className="text-center font-mono-nv text-xs text-white/40 mt-10 pt-6 border-t border-white/[0.06] max-w-[1200px] mx-auto px-6">
          © 2026 NexVance Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
