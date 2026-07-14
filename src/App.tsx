import { useState } from 'react';
 
export default function App() {
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [brandSubmitted, setBrandSubmitted] = useState(false);
  const [creatorSending, setCreatorSending] = useState(false);
  const [brandSending, setBrandSending] = useState(false);
 
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
      const res = await fetch('https://formspree.io/f/xlgkywng', {
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
 
  return (
    <div className="bg-[#0B0D12] text-[#F2F1ED] font-sans antialiased selection:bg-[#E3A64A] selection:text-[#1a1408]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display{ font-family:'Fraunces', serif; letter-spacing:-0.01em; }
        .font-mono-nv{ font-family:'IBM Plex Mono', monospace; }
        @keyframes pulseDot{ 0%,100%{opacity:1;} 50%{opacity:0.25;} }
        .pulse-dot{ animation:pulseDot 2.2s infinite; }
      `}</style>
 
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0B0D12]/85 backdrop-blur-md border-b border-white/[0.09]">
        <div className="max-w-[1120px] mx-auto px-6 h-[76px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="NexVance logo" className="w-[30px] h-[30px] object-contain rounded-md" />
            <span className="font-display font-semibold text-xl">NexVance</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#creators" className="hover:text-white transition-colors">For Creators</a>
            <a href="#brands" className="hover:text-white transition-colors">For Brands</a>
            <a href="#how" className="hover:text-white transition-colors">How It Works</a>
            <a href="#trust" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <a href="#creators" className="bg-[#E3A64A] text-[#1a1408] px-5 py-2.5 rounded-md font-semibold text-sm hover:-translate-y-0.5 transition-transform">
            Get Started
          </a>
        </div>
      </nav>
 
      {/* HERO */}
      <header id="top" className="pt-20 pb-16 max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] border border-[#3FA9A0]/30 bg-[#3FA9A0]/10 px-3.5 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FA9A0] pulse-dot" />
              ONBOARDING FOUNDING CREATORS &amp; BRANDS
            </div>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-[1.1] mb-5">
              Where <span className="text-[#E3A64A]">creators</span> meet <span className="text-[#3FA9A0]">brands</span>  on paper, before anything else.
            </h1>
            <p className="text-white/60 max-w-[480px] mb-8 leading-relaxed">
              NexVance is a performance-based sponsorship agency. We pitch, negotiate, and contract every deal between creators and brands across the US and UK  zero upfront cost, ever.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#creators" className="bg-[#E3A64A] text-[#1a1408] px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#eeb562] hover:-translate-y-0.5 transition-all">
                Apply as a Creator →
              </a>
              <a href="#brands" className="bg-[#3FA9A0] text-[#06211f] px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#4bbdb3] hover:-translate-y-0.5 transition-all">
                Request the Roster →
              </a>
            </div>
          </div>
 
          {/* SIGNAL LINE - signature visual */}
          <div className="bg-[#151822] border border-white/[0.09] rounded-2xl p-7">
            <div className="font-mono-nv text-[0.7rem] text-white/40 uppercase tracking-wide mb-7 text-center">How a deal moves</div>
            <div className="flex justify-between mb-6">
              <div className="max-w-[120px] text-[0.78rem]">
                <span className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-[#E3A64A] block mb-1">Creator</span>
                Sets the rate
              </div>
              <div className="max-w-[120px] text-[0.78rem] text-right ml-auto">
                <span className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-[#3FA9A0] block mb-1">Brand</span>
                Pays on approval
              </div>
            </div>
            <div className="relative h-0.5 bg-white/[0.09] mx-2 mb-8">
              <div className="absolute left-0 top-0 h-full w-3/5 bg-gradient-to-r from-[#E3A64A] to-[#3FA9A0]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-3.5 h-3.5 rounded-full bg-[#E3A64A] border-2 border-[#0B0D12]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[60%] w-5 h-5 rounded-full bg-[#151822] border-2 border-[#3FA9A0]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-full w-3.5 h-3.5 rounded-full bg-[#3FA9A0] border-2 border-[#0B0D12]" />
            </div>
            <div className="bg-[#1B1F2B] border border-white/[0.09] rounded-lg px-4 py-4 text-center">
              <div className="font-mono-nv text-[0.68rem] text-white/40 uppercase tracking-wide mb-1.5">Currently at</div>
              <div className="font-semibold text-sm">Contract signed, awaiting first payment</div>
            </div>
          </div>
        </div>
      </header>
 
      {/* WHY SECTION */}
      <section className="py-16 max-w-[1120px] mx-auto px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] block mb-3.5">WHY NEXVANCE EXISTS</span>
          <p className="font-display font-medium text-xl md:text-2xl mb-4">Most brands and creators never build partnerships that last.</p>
          <p className="text-white/60 leading-relaxed">
            Brands waste money on retainers and sponsorships that don't convert. Creators lose hours on back-and-forth emails instead of making content. NexVance removes the friction  one contract, one point of contact, and a fee that only applies once a deal actually pays out.
          </p>
        </div>
      </section>
 
      {/* USP GRID */}
      <section className="py-16 max-w-[1120px] mx-auto px-6">
        <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#E3A64A] block mb-3.5">WHAT YOU GET</span>
        <h2 className="font-display font-semibold text-3xl max-w-[600px] mb-5">Built on a few non-negotiables.</h2>
        <p className="text-white/60 max-w-[600px] mb-10">No matter your niche or budget, every NexVance deal runs on the same terms.</p>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: '$0', title: 'Zero upfront cost', body: "Creators never pay to join or to be pitched. Our fee comes out of a deal only after it's paid.", color: 'amber' },
            { icon: '✎', title: 'Contract before content', body: 'Rate, deliverables, and timeline are signed in writing before a single video gets made.', color: 'teal' },
            { icon: '1:1', title: 'Founder-led', body: 'You deal directly with the person running NexVance  not a rotating account manager.', color: 'amber' },
            { icon: '%', title: 'Performance-only fee', body: "No retainers, no monthly charges. We're paid the same way you are  when the deal closes.", color: 'teal' },
            { icon: '∞', title: 'Any niche welcome', body: 'Tech, lifestyle, business, gaming  we match on audience fit, not category.', color: 'amber' },
            { icon: 'US/UK', title: 'US & UK focused', body: 'Every brand and creator we work with sits in these two markets, by design.', color: 'teal' },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-[#151822] border border-white/[0.09] rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 ${
                item.color === 'amber' ? 'hover:border-[#E3A64A]/40' : 'hover:border-[#3FA9A0]/40'
              }`}
            >
              <div
                className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center font-mono-nv text-[0.85rem] font-bold mb-3.5 ${
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
      </section>
 
      {/* PROCESS */}
      <section id="how" className="py-16 max-w-[1120px] mx-auto px-6">
        <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#3FA9A0] block mb-3.5">THE PROCESS</span>
        <h2 className="font-display font-semibold text-3xl max-w-[600px] mb-5">Four steps. Same order, every time.</h2>
        <p className="text-white/60 max-w-[600px] mb-10">This sequence is fixed on purpose  it's what keeps both sides protected.</p>
 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { n: '01', title: 'Match', body: "We connect a creator's audience to a brand's product and budget." },
            { n: '02', title: 'Contract', body: 'Rate, deliverables, and timeline are put in writing and signed by both sides.' },
            { n: '03', title: 'Produce & approve', body: 'The creator delivers a draft. The brand gets one revision and a 48-hour window to approve.' },
            { n: '04', title: 'Pay & publish', body: 'The video stays private until payment clears  then it goes live, and the creator is paid.' },
          ].map((step, i) => (
            <div key={i}>
              <div className="w-[38px] h-[38px] rounded-full bg-[#151822] border border-white/[0.09] flex items-center justify-center font-mono-nv text-[0.82rem] mb-4">
                {step.n}
              </div>
              <h3 className="font-bold text-base mb-1.5">{step.title}</h3>
              <p className="text-[0.86rem] text-white/60">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* FOR CREATORS */}
      <section id="creators" className="py-16 max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/[0.09] aspect-[4/3] group">
            <img
              src="https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?auto=format&fit=crop&w=900&q=80"
              alt="Creator filming content"
              className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div>
            <span className="font-mono-nv text-[0.75rem] tracking-wide text-[#E3A64A] block mb-3">FOR CREATORS</span>
            <h2 className="font-display font-semibold text-3xl mb-4">Focus on content. We'll bring the deals.</h2>
            <p className="text-white/60 text-[0.95rem] mb-6">
              Managing sponsorships shouldn't be a second job. We pitch you to brands, negotiate on your behalf, and only get paid once you do.
            </p>
            <ul className="mb-7">
              {[
                ['100% free to join', '— no cost at any stage'],
                ['We pitch for you', '— brands come to you, not the other way around'],
                ['20% commission', '— only once a deal is signed and paid'],
                ['Non-exclusive', '— take outside deals whenever you want'],
              ].map(([bold, rest], i) => (
                <li key={i} className="flex gap-3 py-2.5 text-[0.92rem] text-white/60 border-b border-white/[0.09] last:border-none">
                  <span className="flex-shrink-0">✓</span>
                  <span><b className="text-white">{bold}</b> {rest}</span>
                </li>
              ))}
            </ul>
 
            <div className="bg-[#151822] border border-white/[0.09] rounded-2xl p-7">
              {!creatorSubmitted ? (
                <>
                  <h3 className="font-display font-semibold text-xl mb-1.5">Join the roster</h3>
                  <p className="text-white/60 text-sm mb-6">We review every application within 48 hours.</p>
                  <form onSubmit={(e) => handleSubmit(e, setCreatorSending, setCreatorSubmitted)}>
                    <input type="hidden" name="form_type" value="Creator Application" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Platform / channel link</label>
                    <input type="url" name="channel_link" placeholder="https://youtube.com/c/..." required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Audience size</label>
                    <input type="text" name="audience_size" placeholder="e.g., 150k subscribers" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Content niche</label>
                    <input type="text" name="niche" placeholder="e.g., tech, lifestyle, business" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Contact email</label>
                    <input type="email" name="email" placeholder="you@email.com" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E3A64A] mb-5" />
                    <button type="submit" disabled={creatorSending}
                      className="w-full bg-[#E3A64A] text-[#1a1408] py-3.5 rounded-lg font-semibold text-sm hover:bg-[#eeb562] transition-colors disabled:opacity-60">
                      {creatorSending ? 'Sending...' : 'Submit application'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <h3 className="font-display font-semibold text-xl mb-2">Application received.</h3>
                  <p className="text-white/60 text-sm">We'll be in touch within 48 hours if there's a fit.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
 
      {/* FOR BRANDS */}
      <section id="brands" className="py-16 max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="font-mono-nv text-[0.75rem] tracking-wide text-[#3FA9A0] block mb-3">FOR BRANDS</span>
            <h2 className="font-display font-semibold text-3xl mb-4">Pay for a result, not a retainer.</h2>
            <p className="text-white/60 text-[0.95rem] mb-6">
              Skip the agency overhead. Get matched with vetted creators and pay only the agreed rate  nothing until the work is approved.
            </p>
            <ul className="mb-7">
              {[
                ['No agency retainer', "— you pay the creator's rate, nothing more"],
                ['Curated matches', '— creators selected for audience fit, not just reach'],
                ['One signed contract', '— deliverables and timeline fixed upfront'],
                ['Content held until approved', "— nothing publishes without your sign-off"],
              ].map(([bold, rest], i) => (
                <li key={i} className="flex gap-3 py-2.5 text-[0.92rem] text-white/60 border-b border-white/[0.09] last:border-none">
                  <span className="flex-shrink-0">✓</span>
                  <span><b className="text-white">{bold}</b> {rest}</span>
                </li>
              ))}
            </ul>
 
            <div className="bg-[#151822] border border-white/[0.09] rounded-2xl p-7">
              {!brandSubmitted ? (
                <>
                  <h3 className="font-display font-semibold text-xl mb-1.5">Work with NexVance</h3>
                  <p className="text-white/60 text-sm mb-6">Tell us your goals — we'll reply within 48 hours.</p>
                  <form onSubmit={(e) => handleSubmit(e, setBrandSending, setBrandSubmitted)}>
                    <input type="hidden" name="form_type" value="Brand Application" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Company / brand name</label>
                    <input type="text" name="brand_name" placeholder="Your brand name" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Company website</label>
                    <input type="url" name="website" placeholder="https://yourbrand.com" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Work email</label>
                    <input type="email" name="email" placeholder="name@company.com" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-4" />
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Estimated budget</label>
                    <select name="budget" required
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-4">
                      <option value="">Select a range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $3,000</option>
                      <option>$3,000 – $10,000</option>
                      <option>$10,000+</option>
                    </select>
                    <label className="block font-mono-nv text-[0.68rem] tracking-wide text-white/40 uppercase mb-1.5">Campaign goals</label>
                    <textarea name="message" placeholder="Tell us about your product and target audience..." required rows={3}
                      className="w-full bg-[#0B0D12] border border-white/[0.09] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3FA9A0] mb-5 resize-y" />
                    <button type="submit" disabled={brandSending}
                      className="w-full bg-[#3FA9A0] text-[#06211f] py-3.5 rounded-lg font-semibold text-sm hover:bg-[#4bbdb3] transition-colors disabled:opacity-60">
                      {brandSending ? 'Sending...' : 'Send strategy request'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <h3 className="font-display font-semibold text-xl mb-2">Request received.</h3>
                  <p className="text-white/60 text-sm">We'll be in touch within 48 hours.</p>
                </div>
              )}
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden border border-white/[0.09] aspect-[4/3] group">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
              alt="Brand team reviewing strategy"
              className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </section>
 
      {/* TRUST & PRIVACY */}
      <section id="trust" className="py-16 max-w-[1120px] mx-auto px-6">
        <span className="font-mono-nv text-[0.74rem] tracking-wide text-[#E3A64A] block mb-3.5">TRUST &amp; PRIVACY</span>
        <h2 className="font-display font-semibold text-3xl max-w-[600px] mb-5">What we collect, and why.</h2>
        <p className="text-white/60 max-w-[600px] mb-10">No surprises. Here's exactly how your information is used.</p>
 
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.09] border border-white/[0.09] rounded-2xl overflow-hidden">
          {[
            ['What we collect', "Just what's needed to match and contract you: name, email, channel or company link, and basic audience or budget info. Nothing more."],
            ['How it\u2019s used', 'To match you with the right brand or creator, and to draft the contract and manage payment for any deal you agree to.'],
            ['Who sees it', 'Only NexVance and the specific brand or creator you\u2019re matched with  never sold or shared beyond that deal.'],
            ['Payment handling', 'Campaign payments are collected in two parts  before production, and before publishing  and held by NexVance until each milestone is met.'],
          ].map(([title, body], i) => (
            <div key={i} className="bg-[#0B0D12] p-7">
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-[0.87rem] text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA BAND */}
      <section className="py-20 text-center max-w-[1120px] mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-[600px] mx-auto mb-4">Ready to see how your deal would run?</h2>
        <p className="text-white/60 max-w-[440px] mx-auto mb-8">Whether you make content or sell a product, the first conversation is free and commits you to nothing.</p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a href="#creators" className="bg-[#E3A64A] text-[#1a1408] px-6 py-3.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform">Apply as a Creator</a>
          <a href="#brands" className="bg-[#3FA9A0] text-[#06211f] px-6 py-3.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform">Request the Roster</a>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer className="border-t border-white/[0.09] py-11">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap justify-between gap-5">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <img src="/logo.png" alt="NexVance logo" className="w-[22px] h-[22px] object-contain rounded-md" />
              <span className="font-display font-semibold text-base">NexVance</span>
            </div>
            <p className="text-white/40 text-[0.82rem] max-w-[280px]">Connecting global brands with premium creators on a transparent, performance-only model.</p>
          </div>
          <div className="flex gap-9 flex-wrap">
            <div>
              <h5 className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-white/40 mb-2.5">Navigate</h5>
              <a href="#creators" className="block text-[0.85rem] text-white/60 hover:text-white mb-2">For Creators</a>
              <a href="#brands" className="block text-[0.85rem] text-white/60 hover:text-white mb-2">For Brands</a>
              <a href="#how" className="block text-[0.85rem] text-white/60 hover:text-white mb-2">How It Works</a>
            </div>
            <div>
              <h5 className="font-mono-nv text-[0.68rem] uppercase tracking-wide text-white/40 mb-2.5">Contact</h5>
              <a href="mailto:haseeb@nexvanceagency.com" className="block text-[0.85rem] text-white/60 hover:text-white mb-2">haseeb@nexvanceagency.com</a>
              <a href="#trust" className="block text-[0.85rem] text-white/60 hover:text-white mb-2">Privacy &amp; Data</a>
            </div>
          </div>
        </div>
        <div className="text-center font-mono-nv text-[0.78rem] text-white/40 mt-9 pt-6 border-t border-white/[0.09] max-w-[1120px] mx-auto px-6">
          © 2026 NexVance
        </div>
      </footer>
    </div>
  );
}
