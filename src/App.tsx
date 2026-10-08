import { useState, type FormEvent, type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
 
/* ==========================================================================
   NEXVANCE: SITE CONFIG
   Edit the values here. Everything else on the page reads from this block.
   ========================================================================== */
const SITE = {
  email: 'haseeb@nexvanceagency.com',
  linkedin: 'https://www.linkedin.com/in/muhammadhaseeb3',
  formEndpoint: 'https://formspree.io/f/mvkgblaq',
  creatorsOnRoster: 14, // update when the number changes
};
 
type Platform = 'YouTube' | 'TikTok' | 'Instagram' | 'Facebook';
 
type Creator = {
  name: string;
  handle?: string; // e.g. "@channel"
  profileUrl?: string; // link to the creator's channel/profile
  photo?: string; // e.g. "/creators/lukas.jpg" (put the file in /public/creators/)
  niche: string;
  platforms: Platform[];
  ugc?: boolean; // true if the creator also does UGC for ads
  audience: string; // a real number the creator confirmed, e.g. "120K subscribers"
  region: string; // e.g. "US & Canada"
  priorWork?: string[]; // the CREATOR's own past brand work (shown with a disclaimer)
};
 
/* ==========================================================================
   ROSTER
   Add a creator ONLY after they have said yes to being shown here.
   Copy the template below, fill it with real details, and paste it inside the
   array. Cards appear automatically. Leave the array empty and the page shows
   an honest "roster being added" message instead of fake profiles.
 
   TEMPLATE:
   {
     name: 'Creator Name',
     handle: '@handle',
     profileUrl: 'https://youtube.com/@handle',
     photo: '/creators/creator-name.jpg',
     niche: 'Desk setups & productivity',
     platforms: ['YouTube', 'Instagram'],
     ugc: false,
     audience: '97K subscribers',
     region: 'US & UK',
     priorWork: ['Brand A', 'Brand B'],
   },
   ========================================================================== */
const roster: Creator[] = [];
 
const FILTERS = ['All', 'YouTube', 'TikTok', 'Instagram', 'Facebook', 'UGC'] as const;
type Filter = (typeof FILTERS)[number];
 
const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#roster', label: 'Creators' },
  { href: '#for-creators', label: 'For creators' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];
 
const FAQS = [
  {
    q: 'What does NexVance charge?',
    a: 'We take a 20% commission on each deal that closes, and nothing else. There is no retainer, no signup fee and no monthly cost. For brands, the 20% comes out of the agreed campaign fee; it is not added on top. Creators receive the other 80%.',
  },
  {
    q: 'Do brands pay anything upfront?',
    a: 'Brands pay NexVance no retainer or setup fee. The campaign fee itself is paid in two parts: 50% before the content is published and 50% within 30 to 45 days after it goes live. Those terms are written into the contract before any work starts.',
  },
  {
    q: 'Are creators exclusive to NexVance?',
    a: 'No. Creators stay free to work with other brands and agencies. We also never introduce a creator to a brand without their approval.',
  },
  {
    q: 'Which platforms and regions do you cover?',
    a: 'YouTube, TikTok, Instagram and Facebook (posts, reels, stories and long-form), plus UGC made for paid ads. Creators are based mainly in the US, UK, Canada and Europe.',
  },
  {
    q: 'Who owns the content and the usage rights?',
    a: 'It is set per campaign in the contract: how long the brand may use the content, on which channels, and whether paid usage such as whitelisting or Spark Ads is included.',
  },
  {
    q: 'How quickly will I hear back?',
    a: 'Usually within a day or two. Brand briefs get a reply with next steps; creator applications are reviewed against incoming briefs.',
  },
];
 
const BUDGETS = [
  '$1,250 – $2,500 (single integration)',
  '$2,500 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Not sure yet',
];
 
type Status = 'idle' | 'sending' | 'sent' | 'error';
 
const inputCls =
  'w-full bg-[#0B0D12] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/40';
 
/* ---------- small helpers ---------- */
 
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
 
function Avatar({ creator }: { creator: Creator }) {
  const [failed, setFailed] = useState(false);
  const initials = creator.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  if (creator.photo && !failed) {
    return (
      <img
        src={creator.photo}
        alt={creator.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-12 h-12 rounded-full object-cover border border-white/20"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="w-12 h-12 rounded-full bg-[#E3A64A]/15 text-[#E3A64A] border border-[#E3A64A]/30 flex items-center justify-center font-display font-semibold"
    >
      {initials}
    </div>
  );
}
 
function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-white/70 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
 
function FormMessage({ status }: { status: Status }) {
  if (status !== 'error') return null;
  return (
    <p role="alert" className="mt-4 text-sm text-[#ff8f8f]">
      The form could not be sent. Check your connection and try again, or email{' '}
      <a href={`mailto:${SITE.email}`} className="underline">
        {SITE.email}
      </a>
      .
    </p>
  );
}
 
/* ========================================================================== */
 
export default function App() {
  const [activeFormTab, setActiveFormTab] = useState<'brand' | 'creator'>('brand');
  const [brandStatus, setBrandStatus] = useState<Status>('idle');
  const [creatorStatus, setCreatorStatus] = useState<Status>('idle');
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All');
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, setStatus: (s: Status) => void) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };
 
  const openForm = (tab: 'brand' | 'creator') => {
    setActiveFormTab(tab);
    setMenuOpen(false);
  };
 
  const filteredRoster = roster.filter((c) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'UGC') return !!c.ugc;
    return c.platforms.includes(selectedFilter as Platform);
  });
 
  return (
    <div className="bg-[#0B0D12] text-[#F2F1ED] font-sans antialiased selection:bg-[#E3A64A] selection:text-[#1a1408]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display{ font-family:'Fraunces', Georgia, serif; letter-spacing:-0.01em; }
        .font-mono-nv{ font-family:'IBM Plex Mono', ui-monospace, monospace; }
        html{ scroll-behavior:smooth; }
        section[id], header[id]{ scroll-margin-top:96px; }
        a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible,
        textarea:focus-visible, summary:focus-visible{ outline:2px solid #E3A64A; outline-offset:2px; }
        details > summary{ list-style:none; cursor:pointer; }
        details > summary::-webkit-details-marker{ display:none; }
        details[open] .faq-plus{ transform:rotate(45deg); }
        .faq-plus{ transition:transform .2s ease; }
        @media (prefers-reduced-motion: reduce){
          html{ scroll-behavior:auto; }
          *{ transition:none !important; animation:none !important; }
        }
      `}</style>
 
      <Analytics />
 
      {/* ANNOUNCEMENT */}
      <div className="bg-[#151822] border-b border-white/[0.08] text-sm py-2 px-4 text-center text-white/75">
        Creator campaigns for brands in the <span className="text-[#3FA9A0] font-semibold">US, UK, Canada and Europe</span>.
        Flat-rate and performance deals.
      </div>
 
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0B0D12]/95 backdrop-blur-md border-b border-white/[0.1]" aria-label="Main">
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="" className="w-[30px] h-[30px] object-contain rounded-md" />
            <span className="font-display font-semibold text-2xl tracking-tight">NexVance</span>
          </a>
 
          <div className="hidden lg:flex gap-7 text-sm text-white/75">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
 
          <div className="flex items-center gap-3">
            <a
              href="#portal"
              onClick={() => openForm('creator')}
              className="hidden sm:inline text-sm text-white/75 hover:text-white transition-colors"
            >
              Join as a creator
            </a>
            <a
              href="#portal"
              onClick={() => openForm('brand')}
              className="bg-[#E3A64A] text-[#1a1408] px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#eeb562] transition-colors"
            >
              Get a shortlist
            </a>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-white"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
 
        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-white/[0.08] bg-[#0B0D12] px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base text-white/85 border-b border-white/[0.06]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#portal"
              onClick={() => openForm('creator')}
              className="py-3 text-base text-[#E3A64A] font-semibold"
            >
              Join as a creator
            </a>
          </div>
        )}
      </nav>
 
      {/* HERO */}
      <header id="top" className="pt-16 md:pt-24 pb-20 max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08] mb-6">
              Creator sponsorships with no retainer and no agency fee upfront.
            </h1>
            <p className="text-white/75 text-lg max-w-[560px] mb-8 leading-relaxed">
              NexVance connects brands with creators on YouTube, TikTok, Instagram and Facebook, including UGC for paid
              ads. We earn a 20% commission only when a deal closes, and every deal starts with a signed contract.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#portal"
                onClick={() => openForm('brand')}
                className="bg-[#3FA9A0] text-[#06211f] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#4bbdb3] transition-colors"
              >
                Get a creator shortlist
              </a>
              <a
                href="#portal"
                onClick={() => openForm('creator')}
                className="bg-[#151822] border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-[#E3A64A] transition-colors"
              >
                I'm a creator
              </a>
            </div>
 
            <dl className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/[0.1] max-w-[560px]">
              <div>
                <dt className="text-xs text-white/65 mb-1">Commission, on closed deals only</dt>
                <dd className="font-display text-2xl font-semibold text-[#E3A64A]">20%</dd>
              </div>
              <div>
                <dt className="text-xs text-white/65 mb-1">Retainers or signup fees</dt>
                <dd className="font-display text-2xl font-semibold text-[#3FA9A0]">None</dd>
              </div>
              <div>
                <dt className="text-xs text-white/65 mb-1">Creators on our roster</dt>
                <dd className="font-display text-2xl font-semibold text-white">{SITE.creatorsOnRoster}</dd>
              </div>
            </dl>
          </div>
 
          {/* PAYMENT TIMELINE */}
          <aside className="bg-[#151822] border border-white/[0.1] rounded-3xl p-7 md:p-8" aria-labelledby="timeline-title">
            <h2 id="timeline-title" className="font-display text-xl font-semibold mb-1">
              How a campaign is paid
            </h2>
            <p className="text-sm text-white/65 mb-6">Terms are written into the contract before any work starts.</p>
 
            <ol className="relative border-l border-white/15 ml-2 space-y-6">
              <li className="pl-6 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#E3A64A]" aria-hidden="true" />
                <h3 className="font-semibold text-[0.95rem]">Contract signed</h3>
                <p className="text-sm text-white/70 mt-1">
                  Deliverables, usage rights and payment dates are agreed in writing.
                </p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#3FA9A0]" aria-hidden="true" />
                <h3 className="font-semibold text-[0.95rem]">50% paid, draft approved</h3>
                <p className="text-sm text-white/70 mt-1">
                  The brand pays the first half. The creator sends a draft, and nothing goes live without the brand's
                  approval.
                </p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#9b8cf0]" aria-hidden="true" />
                <h3 className="font-semibold text-[0.95rem]">Published, remaining 50% in 30 to 45 days</h3>
                <p className="text-sm text-white/70 mt-1">
                  Once payment arrives, the creator receives 80% of the fee and NexVance keeps 20%.
                </p>
              </li>
            </ol>
          </aside>
        </div>
      </header>
 
      {/* HOW IT WORKS (for brands) */}
      <section id="how" className="py-20 bg-[#0E1118] border-y border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-[640px] mb-3">How it works for brands</h2>
          <p className="text-white/70 max-w-[620px] mb-12">
            You see who we would match you with, and the terms, before you commit to anything.
          </p>
 
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                t: 'Send a brief',
                b: 'Tell us about the product, platforms, regions and budget. Two minutes, no call needed.',
              },
              {
                t: 'Review a shortlist',
                b: 'We match creators from our roster by niche, audience location and engagement, and share their audience data.',
              },
              {
                t: 'Contract, then content',
                b: 'Scope, usage rights and payment dates are signed first. The creator sends a draft and you approve it.',
              },
              {
                t: 'Publish and pay',
                b: '50% before publishing, 50% within 30 to 45 days after. NexVance’s 20% comes out of that fee.',
              },
            ].map((s, i) => (
              <li key={s.t} className="bg-[#151822] border border-white/[0.1] rounded-2xl p-6">
                <span className="font-mono-nv text-sm text-[#E3A64A]">Step {i + 1}</span>
                <h3 className="font-semibold text-lg mt-2 mb-2">{s.t}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
 
      {/* ROSTER */}
      <section id="roster" className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-2">Creators on our roster</h2>
            <p className="text-white/70 max-w-[640px]">
              Creators appear here with their permission. Audience figures come from the creators themselves, and we
              share full audience data with brands on request.
            </p>
          </div>
 
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter creators by platform">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={selectedFilter === f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                  selectedFilter === f
                    ? 'bg-[#E3A64A] text-[#1a1408] border-[#E3A64A] font-semibold'
                    : 'bg-[#151822] text-white/75 border-white/20 hover:border-white/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
 
        {roster.length === 0 ? (
          <div className="border border-dashed border-white/25 rounded-2xl p-10 text-center">
            <p className="text-white/80 max-w-[520px] mx-auto mb-5">
              We are adding creator profiles one at a time, each with the creator's approval. Ask for the current roster
              and we will send it with audience data for your niche and region.
            </p>
            <a
              href="#portal"
              onClick={() => openForm('brand')}
              className="inline-block bg-[#3FA9A0] text-[#06211f] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#4bbdb3] transition-colors"
            >
              Request the roster
            </a>
          </div>
        ) : filteredRoster.length === 0 ? (
          <p className="text-white/70">No creators match this filter yet. Try another platform.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredRoster.map((c) => (
              <li key={c.name} className="bg-[#151822] border border-white/[0.1] rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <Avatar creator={c} />
                    <div className="min-w-0">
                      <h3 className="font-bold text-base text-white truncate">{c.name}</h3>
                      {c.handle &&
                        (c.profileUrl ? (
                          <a
                            href={c.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono-nv text-[#3FA9A0] hover:underline"
                          >
                            {c.handle}
                          </a>
                        ) : (
                          <p className="text-xs font-mono-nv text-white/65">{c.handle}</p>
                        ))}
                    </div>
                  </div>
 
                  <dl className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Niche</dt>
                      <dd className="text-white/90 text-right">{c.niche}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Audience</dt>
                      <dd className="text-[#3FA9A0] font-semibold text-right">{c.audience}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-white/60">Region</dt>
                      <dd className="text-white/90 text-right">{c.region}</dd>
                    </div>
                  </dl>
 
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {[...c.platforms, ...(c.ugc ? ['UGC'] : [])].map((p) => (
                      <span key={p} className="text-xs bg-white/[0.08] px-2 py-0.5 rounded text-white/85">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
 
                {c.priorWork && c.priorWork.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.1]">
                    <p className="text-xs text-white/60 mb-1.5">Creator's prior brand work</p>
                    <p className="text-sm text-white/85">{c.priorWork.join(', ')}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
 
      {/* FORMATS & NICHES */}
      <section className="py-20 bg-[#0E1118] border-y border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-[640px] mb-3">Formats and niches</h2>
          <p className="text-white/70 max-w-[620px] mb-12">
            One brief can mix formats. We recommend a combination based on your goal and budget.
          </p>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-[#151822] border border-white/[0.1] p-7 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">Long-form</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                Dedicated YouTube reviews, sponsor segments, product walkthroughs and podcast reads.
              </p>
              <p className="text-sm text-[#E3A64A]">YouTube, podcasts</p>
            </div>
            <div className="bg-[#151822] border border-white/[0.1] p-7 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">Short-form</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                TikToks, Instagram reels, Facebook video, posts and stories made for a quick, clear message.
              </p>
              <p className="text-sm text-[#3FA9A0]">TikTok, Instagram, Facebook</p>
            </div>
            <div className="bg-[#151822] border border-white/[0.1] p-7 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">UGC for ads</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                Creator-made video for your own ad accounts. Paid usage such as whitelisting or Spark Ads is agreed per
                brief.
              </p>
              <p className="text-sm text-[#9b8cf0]">Meta, TikTok paid creative</p>
            </div>
          </div>
 
          <p className="text-white/75 max-w-[820px] leading-relaxed">
            <span className="font-semibold text-white">Niches we work in:</span> tech and gadgets, SaaS and AI tools,
            gaming, fitness and wellness, beauty, food and beverage, home, travel, finance, fashion, family, and books
            and writing. If your niche is not listed, send a brief and we will tell you honestly whether we have a fit.
          </p>
        </div>
      </section>
 
      {/* FOR CREATORS */}
      <section id="for-creators" className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">For creators</h2>
            <p className="text-white/70 leading-relaxed max-w-[480px] mb-6">
              We pitch you to brands that fit your audience, and handle the contract and the payment chasing. You decide
              which deals you take.
            </p>
            <a
              href="#portal"
              onClick={() => openForm('creator')}
              className="inline-block bg-[#E3A64A] text-[#1a1408] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#eeb562] transition-colors"
            >
              Apply to join the roster
            </a>
          </div>
 
          <ul className="space-y-4">
            {[
              'No signup fee. We earn 20% only when a deal closes; you keep 80%.',
              'Non-exclusive. Keep working with other brands and agencies.',
              'Contract first: deliverables, usage rights and payment dates are agreed in writing before you start.',
              'You approve your listing, including which details and past brands we show.',
            ].map((t) => (
              <li key={t} className="flex gap-3 text-white/85 text-[0.95rem] leading-relaxed">
                <span className="text-[#3FA9A0]">
                  <CheckIcon />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
 
      {/* ABOUT / FOUNDER (edit the story in your own words) */}
      <section id="about" className="py-20 bg-[#0E1118] border-y border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <FounderPhoto />
 
            <div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
                A small agency that works in the open
              </h2>
              <div className="space-y-4 text-white/75 leading-relaxed">
                <p>
                  I'm Haseeb, the founder of NexVance. I started it in 2026 because brands want creator marketing
                  without paying a retainer for results nobody guarantees, and creators want to know the contract and
                  the payment dates before they start work.
                </p>
                <p>
                  So every deal begins with a signed contract, and we only earn when a deal closes. When you write to
                  NexVance, you reach me directly.
                </p>
                <p>
                 My background isn’t a traditional agency story. 
                 Before NexVance, I was running a perfume brand, then worked in sales for a thumbnail agency,
                 where I learned how to find people, pitch, follow up, handle rejection and turn conversations into business. 
                 Around the same time, I started going deep into AI and I’m still actively learning how it works,
                 what it can automate and how it can give small businesses an advantage. 
                 None of this was planned as a path toward building NexVance. 
                 It just kept stacking up selling, building, learning AI, understanding creators and understanding brands.
                 Eventually, NexVance became the place where all of that came together.
                 I’m still building it from there. No fake success story, no made-up case studies just the real process,
                 as it happens.
                </p>
              </div>
 
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <a href={`mailto:${SITE.email}`} className="text-[#3FA9A0] hover:underline font-mono-nv">
                  {SITE.email}
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-white underline underline-offset-4"
                >
                  Muhammad Haseeb on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* FAQ */}
      <section id="faq" className="py-20 max-w-[820px] mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-8">Questions brands and creators ask</h2>
        <div className="divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex items-center justify-between gap-4 py-4 text-[1.02rem] font-semibold">
                {f.q}
                <span className="faq-plus text-2xl leading-none text-[#E3A64A]" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-5 text-white/75 leading-relaxed max-w-[720px]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
 
      {/* FORMS */}
      <section id="portal" className="py-20 bg-[#0E1118] border-t border-white/[0.08]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-3xl md:text-4xl">Start with a short message</h2>
            <p className="text-white/70 mt-2 text-sm">Choose whether you are hiring creators or applying to join the roster.</p>
 
            <div role="tablist" aria-label="Form type" className="inline-flex p-1 bg-[#151822] border border-white/15 rounded-xl mt-6">
              <button
                role="tab"
                id="tab-brand"
                aria-selected={activeFormTab === 'brand'}
                aria-controls="panel-brand"
                type="button"
                onClick={() => setActiveFormTab('brand')}
                className={`px-5 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeFormTab === 'brand' ? 'bg-[#3FA9A0] text-[#06211f]' : 'text-white/70 hover:text-white'
                }`}
              >
                I'm a brand
              </button>
              <button
                role="tab"
                id="tab-creator"
                aria-selected={activeFormTab === 'creator'}
                aria-controls="panel-creator"
                type="button"
                onClick={() => setActiveFormTab('creator')}
                className={`px-5 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeFormTab === 'creator' ? 'bg-[#E3A64A] text-[#1a1408]' : 'text-white/70 hover:text-white'
                }`}
              >
                I'm a creator
              </button>
            </div>
          </div>
 
          <div className="bg-[#151822] border border-white/[0.1] rounded-2xl p-6 sm:p-8 shadow-2xl">
            {activeFormTab === 'brand' ? (
              <div role="tabpanel" id="panel-brand" aria-labelledby="tab-brand">
                {brandStatus === 'sent' ? (
                  <div className="text-center py-10" role="status">
                    <h3 className="font-display font-semibold text-2xl mb-2 text-[#3FA9A0]">Brief received</h3>
                    <p className="text-white/75 text-sm max-w-[420px] mx-auto">
                      Thanks. Haseeb will review it and reply with next steps, usually within a day or two.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, setBrandStatus)}>
                    <input type="hidden" name="form_type" value="Brand Partnership Request" />
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
 
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="brand-name" label="Company or brand name">
                        <input id="brand-name" className={inputCls} type="text" name="brand_name" placeholder="Acme Corp" required />
                      </Field>
                      <Field id="brand-site" label="Website or store">
                        <input id="brand-site" className={inputCls} type="url" name="website" placeholder="https://acme.com" required />
                      </Field>
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="brand-email" label="Work email">
                        <input id="brand-email" className={inputCls} type="email" name="email" placeholder="alex@acme.com" required />
                      </Field>
                      <Field id="brand-budget" label="Campaign budget">
                        <select id="brand-budget" className={inputCls} name="budget" required defaultValue="">
                          <option value="" disabled>
                            Select a range
                          </option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
 
                    <div className="mb-5">
                      <Field id="brand-message" label="What do you want to promote, on which platforms, and in which regions?">
                        <textarea
                          id="brand-message"
                          className={inputCls}
                          name="message"
                          rows={4}
                          required
                          placeholder="Product, target platforms (YouTube, TikTok, Instagram, Facebook, UGC), regions, and the goal of the campaign."
                        />
                      </Field>
                    </div>
 
                    <button
                      type="submit"
                      disabled={brandStatus === 'sending'}
                      className="w-full bg-[#3FA9A0] text-[#06211f] py-3.5 rounded-lg font-bold text-sm hover:bg-[#4bbdb3] transition-colors disabled:opacity-60"
                    >
                      {brandStatus === 'sending' ? 'Sending…' : 'Send brief'}
                    </button>
                    <FormMessage status={brandStatus} />
                    <p className="mt-4 text-xs text-white/55">
                      We use your details only to reply to this request. See <a href="#privacy" className="underline">Privacy</a>.
                    </p>
                  </form>
                )}
              </div>
            ) : (
              <div role="tabpanel" id="panel-creator" aria-labelledby="tab-creator">
                {creatorStatus === 'sent' ? (
                  <div className="text-center py-10" role="status">
                    <h3 className="font-display font-semibold text-2xl mb-2 text-[#E3A64A]">Application received</h3>
                    <p className="text-white/75 text-sm max-w-[420px] mx-auto">
                      Thanks. We review applications against incoming brand briefs and will reply by email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, setCreatorStatus)}>
                    <input type="hidden" name="form_type" value="Creator Application" />
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
 
                    <div className="mb-4">
                      <Field id="creator-link" label="Main channel or portfolio link">
                        <input
                          id="creator-link"
                          className={inputCls}
                          type="url"
                          name="channel_link"
                          placeholder="https://youtube.com/@channel, or your TikTok / Instagram / portfolio link"
                          required
                        />
                      </Field>
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="creator-size" label="Followers or subscribers">
                        <input id="creator-size" className={inputCls} type="text" name="audience_size" placeholder="120K subscribers, or UGC portfolio" required />
                      </Field>
                      <Field id="creator-niche" label="Content category">
                        <input id="creator-niche" className={inputCls} type="text" name="niche" placeholder="Tech, lifestyle, gaming, UGC…" required />
                      </Field>
                    </div>
 
                    <div className="mb-5">
                      <Field id="creator-email" label="Contact email">
                        <input id="creator-email" className={inputCls} type="email" name="email" placeholder="you@email.com" required />
                      </Field>
                    </div>
 
                    <button
                      type="submit"
                      disabled={creatorStatus === 'sending'}
                      className="w-full bg-[#E3A64A] text-[#1a1408] py-3.5 rounded-lg font-bold text-sm hover:bg-[#eeb562] transition-colors disabled:opacity-60"
                    >
                      {creatorStatus === 'sending' ? 'Sending…' : 'Apply to join'}
                    </button>
                    <FormMessage status={creatorStatus} />
                    <p className="mt-4 text-xs text-white/55">
                      Applying is free and non-exclusive. See <a href="#privacy" className="underline">Privacy</a>.
                    </p>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
 
      {/* PRIVACY & TERMS (plain-language draft; have it reviewed before relying on it) */}
      <section id="privacy" className="py-14 max-w-[820px] mx-auto px-6">
        <h2 className="font-display font-semibold text-2xl mb-6">Privacy and terms</h2>
        <div className="space-y-3">
          <details className="bg-[#151822] border border-white/[0.1] rounded-xl px-5">
            <summary className="py-4 font-semibold">Privacy</summary>
            <div className="pb-5 text-sm text-white/75 leading-relaxed space-y-2">
              <p>
                When you send a form we receive the details you type in (such as name, email, website or channel link and
                your message). Forms are processed by Formspree and delivered to us by email.
              </p>
              <p>
                We use these details only to reply to you and to match brands with creators. We do not sell them. We never
                share a creator's details with a brand without that creator's approval.
              </p>

            </div>
          </details>
          <details id="terms" className="bg-[#151822] border border-white/[0.1] rounded-xl px-5">
            <summary className="py-4 font-semibold">Terms of use</summary>
            <div className="pb-5 text-sm text-white/75 leading-relaxed space-y-2">
              <p>
                The information on this site is a general description of how NexVance works. It is not an offer.
                Each campaign is governed only by the written contract signed by the parties.
              </p>
              <p>
                Creator profiles are shown with the creator's permission. Past brands shown on a profile are the creator's
                prior work.
              </p>
            </div>
          </details>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer className="border-t border-white/[0.1] py-12 bg-[#0B0D12]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="" className="w-[24px] h-[24px] object-contain rounded-md" />
              <span className="font-display font-semibold text-lg">NexVance</span>
            </div>
            <p className="text-white/60 text-sm max-w-[320px] leading-relaxed">
              Creator sponsorships and UGC for brands in the US, UK, Canada and Europe. Commission-only, contract first.
            </p>
          </div>
 
          <div className="flex gap-14 flex-wrap text-sm">
            <div>
              <h3 className="text-white/60 mb-3 text-xs">Site</h3>
              <a href="#how" className="block text-white/80 hover:text-white mb-2">How it works</a>
              <a href="#roster" className="block text-white/80 hover:text-white mb-2">Creators</a>
              <a href="#about" className="block text-white/80 hover:text-white mb-2">About</a>
              <a href="#faq" className="block text-white/80 hover:text-white mb-2">FAQ</a>
            </div>
            <div>
              <h3 className="text-white/60 mb-3 text-xs">Contact</h3>
              <a href={`mailto:${SITE.email}`} className="block text-[#3FA9A0] hover:underline mb-2">
                {SITE.email}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white mb-2">
                LinkedIn
              </a>
              <a href="#privacy" className="block text-white/80 hover:text-white mb-2">Privacy and terms</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 mt-10 pt-6 border-t border-white/[0.06] max-w-[1200px] mx-auto px-6">
          © 2026 NexVance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
 
/* Founder photo: uses /public/founder.jpg. If the file is missing, shows initials,
   never a stock photo of someone else. */
function FounderPhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative max-w-[420px]">
      <div className="rounded-2xl overflow-hidden border border-[#E3A64A]/40 aspect-[4/5] bg-[#151822] relative">
        {!failed ? (
          <img
            src="/founder.jpg"
            alt="Muhammad Haseeb, founder of NexVance"
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display text-6xl text-[#E3A64A]/70" aria-hidden="true">
            MH
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0B0D12] to-transparent">
          <p className="font-display font-semibold text-xl text-white">Muhammad Haseeb</p>
          <p className="text-sm text-[#E3A64A]">Founder and CEO</p>
        </div>
      </div>
    </div>
  );
}
