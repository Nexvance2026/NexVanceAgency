import { useState, type FormEvent, type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
 
/* ==========================================================================
   NEXVANCE: SITE CONFIG  (theme: #000000 black, #FFFFFF white, navy #0A1A3F)
   ========================================================================== */
const SITE = {
  email: 'haseeb@nexvanceagency.com',
  linkedin: 'https://www.linkedin.com/in/muhammadhaseeb3',
  formEndpoint: 'https://formspree.io/f/mvkgblaq',
  creatorsOnRoster: 14, // update when the number changes
};
 
type Platform = 'YouTube' | 'TikTok' | 'Instagram' | 'Facebook';
type Creator = {
  name: string; handle?: string; profileUrl?: string; photo?: string; niche: string;
  platforms: Platform[]; ugc?: boolean; audience: string; region: string; priorWork?: string[];
};
 
/* ROSTER: add a creator ONLY after they said yes to being shown here.
   Copy the template, fill real details, paste inside the array. Cards appear automatically.
   TEMPLATE:
   {
     name: 'Creator Name',
     handle: '@handle',
     profileUrl: 'https://youtube.com/@handle',
     photo: '/creators/creator-name.jpg',   // file goes in /public/creators/
     niche: 'Desk setups & productivity',
     platforms: ['YouTube', 'Instagram'],
     ugc: false,
     audience: '97K subscribers',
     region: 'US & UK',
     priorWork: ['Brand A', 'Brand B'],
   }, */
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
  { q: 'What does NexVance charge?', a: 'We take a 20% commission on each deal that closes, and nothing else. There is no retainer, no signup fee and no monthly cost. For brands, the 20% comes out of the agreed campaign fee; it is not added on top. Creators receive the other 80%.' },
  { q: 'Do brands pay anything upfront?', a: 'Brands pay NexVance no retainer or setup fee. The campaign fee itself is paid in two parts: 50% before the content is published and 50% within 30 to 45 days after it goes live. Those terms are written into the contract before any work starts.' },
  { q: 'Are creators exclusive to NexVance?', a: 'No. Creators stay free to work with other brands and agencies. We also never introduce a creator to a brand without their approval.' },
  { q: 'Which platforms and regions do you cover?', a: 'YouTube, TikTok, Instagram and Facebook (posts, reels, stories and long-form), plus UGC made for paid ads. Creators are based mainly in the US, UK, Canada and Europe.' },
  { q: 'Who owns the content and the usage rights?', a: 'It is set per campaign in the contract: how long the brand may use the content, on which channels, and whether paid usage such as whitelisting or Spark Ads is included.' },
  { q: 'How quickly will I hear back?', a: 'Usually within a day or two. Brand briefs get a reply with next steps; creator applications are reviewed against incoming briefs.' },
];
 
const BUDGETS = ['$1,250 – $2,500 (single integration)', '$2,500 – $5,000', '$5,000 – $15,000', '$15,000+', 'Not sure yet'];
 
const BRAND_PAINS = [
  'You paid an agency a monthly retainer and still could not point to what it produced.',
  'You do not know which creators actually have the right audience in the right country.',
  'You are scared of paying upfront and then getting late, off-brief or no content.',
  'You want UGC for your ads but do not know who to hire or what usage rights to ask for.',
];
const CREATOR_PAINS = [
  'Brands message you with vague offers and then disappear when it is time to pay.',
  'You do not know what your rate should be or how to write a contract.',
  'You are good at content but pitching brands eats the time you need to create.',
  'You want to stay free to work with other brands, not get locked in by an agency.',
];
 
const INSIDE = [
  ['Matching by niche and audience', 'We shortlist creators by niche, audience location and engagement, and share audience data before you decide.'],
  ['Contract-first deals', 'Deliverables, usage rights and payment dates are signed before any content is made.'],
  ['Long-form and short-form', 'YouTube integrations, TikToks, Instagram reels, Facebook video, posts and stories.'],
  ['UGC for paid ads', 'Creator-made video for your own ad accounts, with whitelisting or Spark Ads agreed per brief.'],
  ['Draft approval', 'Nothing goes live without the brand approving the draft first.'],
  ['Payment follow-up', 'We chase the payments so creators can focus on creating, on the dates written in the contract.'],
];
 
const MARQUEE = ['YouTube', 'TikTok', 'Instagram', 'Facebook', 'UGC for ads', 'Whitelisting', 'Spark Ads', 'Reels', 'Long-form', 'Podcast reads'];
 
type Status = 'idle' | 'sending' | 'sent' | 'error';
 
const inputCls =
  'w-full bg-black border border-white/25 rounded-lg px-3.5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white';
const btnWhite = 'inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/85 transition-colors text-center';
const btnNavy = 'inline-block bg-[#0A1A3F] text-white border border-[#1c3a7a] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#10285c] transition-colors text-center';
const eyebrow = 'inline-block text-xs font-semibold tracking-[0.18em] uppercase text-white bg-[#0A1A3F] border border-[#1c3a7a] rounded-full px-4 py-1.5 mb-5';
const h2Cls = 'font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight';
 
 
/* ==========================================================================
   PRIVACY & TERMS TEXT (plain-language draft; have it reviewed before relying on it)
   Each item = heading + paragraphs. Edit the text here, the layout reads from it.
   ========================================================================== */
type LegalItem = { h: string; p: string[] };
 
const PRIVACY_UPDATED = 'October 8, 2026';
 
const PRIVACY: LegalItem[] = [
  { h: 'Introduction', p: ['NexVance respects your privacy. This Privacy Policy explains what information we collect when you use our website, submit a form, contact us, or work with us, and how we use that information.'] },
  { h: 'Information we collect', p: [
    'When you contact NexVance or submit one of our website forms, we may receive information such as your name, email address, social media or channel links, website, company or brand information, creator information, audience information, campaign requirements, rates, and anything else you choose to include in your message.',
    'We may also receive information you provide when communicating with us by email or through other direct communication channels.',
  ] },
  { h: 'How we use your information', p: [
    'We use the information you provide to operate NexVance and respond to legitimate business inquiries.',
    'For creators, this may include reviewing your profile, understanding your audience and content, determining whether you may be a suitable fit for a brand opportunity, communicating with you about potential campaigns, and managing an agreed sponsorship.',
    'For brands and clients, this may include understanding your campaign requirements, identifying suitable creators, communicating about potential collaborations, and managing campaigns that both sides agree to pursue.',
    'We may also use your information to respond to questions, improve our website and services, prevent misuse of our website, and maintain records related to our business relationships.',
  ] },
  { h: 'We do not sell your information', p: [
    'NexVance does not sell your personal information.',
    'We also do not provide a creator\u2019s private contact details, rates, audience information, or other submitted information to a brand simply because the creator has joined our roster or submitted a form.',
    'When we believe there may be a genuine opportunity for a creator, we may contact the creator first and seek the appropriate permission before sharing relevant information with a brand.',
    'Likewise, information provided by a brand is used for the purpose of evaluating and managing potential creator partnerships and is not publicly disclosed by NexVance without appropriate authorization.',
  ] },
  { h: 'Website forms', p: [
    'Our website forms are processed using Formspree and the information submitted through those forms is delivered to us by email.',
    'By submitting a form, you understand that the information you provide will be transmitted through the services required to operate that form and website.',
    'We recommend that you do not submit passwords, payment card details, government identification numbers, or other highly sensitive information through our website forms.',
  ] },
  { h: 'When information may be shared', p: [
    'NexVance may share relevant information when it is reasonably necessary to operate a campaign or provide a service you have requested.',
    'For example, if a creator has agreed to work with a brand, relevant creator information may need to be shared with that brand for campaign planning and execution.',
    'We may also disclose information where required by law, legal process, or to protect the rights, security, and legitimate interests of NexVance, our clients, creators, or others.',
    'We do not share more information than is reasonably necessary for the relevant purpose.',
  ] },
  { h: 'Data security', p: [
    'We take reasonable steps to protect the information we receive from unauthorized access, misuse, loss, or disclosure.',
    'However, no website, email service, or method of transmitting information over the internet can be guaranteed to be completely secure. You submit information to NexVance at your own risk.',
  ] },
  { h: 'How long we keep information', p: [
    'We keep information for as long as reasonably necessary for the purpose for which it was collected, including maintaining business, campaign, contractual, accounting, or communication records.',
    'When information is no longer reasonably required, we may delete or anonymize it, subject to any legal or legitimate business requirements that require us to retain it for longer.',
  ] },
  { h: 'Third-party services', p: [
    'NexVance may rely on third-party services to operate parts of our website, forms, communications, analytics, hosting, or business operations.',
    'Those services may process information on our behalf or according to their own privacy policies. We only use third-party services that are reasonably necessary for operating the business.',
  ] },
  { h: 'Your choices and requests', p: [
    'If you have submitted information to NexVance and want to ask what information we hold about you, request a correction, or ask us to delete information where legally possible, you can contact us using the email address provided on our website.',
    'We may need to verify your identity before completing certain requests.',
  ] },
  { h: 'Changes to this Privacy Policy', p: ['We may update this Privacy Policy when our website, services, or data practices change. The latest version will always be posted on this page with the updated date.'] },
  { h: 'Contact', p: ['If you have a privacy-related question or request, please contact NexVance at haseeb@nexvanceagency.com.'] },
];
 
const TERMS: LegalItem[] = [
  { h: 'Introduction', p: ['These Terms of Use explain the basic terms under which you may use the NexVance website and interact with our services. By using this website or submitting information to NexVance, you agree to these Terms.'] },
  { h: 'What NexVance does', p: [
    'NexVance is a talent management and creator-brand partnership business.',
    'We connect creators and brands for potential paid sponsorships and collaborations. We may help identify opportunities, communicate with both sides, coordinate campaign discussions, and assist with the process of getting a collaboration agreed and completed.',
    'NexVance does not guarantee that any creator will receive a sponsorship or that any brand will find a suitable creator.',
    'A creator being listed, reviewed, contacted, or considered by NexVance does not guarantee a campaign. Likewise, submitting a campaign request does not guarantee that NexVance will accept or complete the campaign.',
  ] },
  { h: 'No upfront fees', p: [
    'NexVance does not charge creators or brands an upfront fee simply for submitting an opportunity or joining the process.',
    'Our standard business model is performance-based: when a sponsorship deal is successfully secured and paid, NexVance earns its agreed commission from that deal.',
    'Where applicable, the specific commercial terms, commission, payment structure, deliverables, deadlines, and responsibilities will be confirmed separately between the relevant parties.',
  ] },
  { h: 'Every campaign is separate', p: [
    'A campaign is not considered confirmed simply because a creator and brand have spoken, exchanged messages, or expressed interest.',
    'A campaign becomes official only when the relevant parties have agreed to the applicable terms and, where required, signed the relevant contract or agreement.',
    'The written agreement for a particular campaign takes priority over general information published on this website.',
  ] },
  { h: 'Creator responsibilities', p: [
    'Creators are responsible for providing accurate information about themselves, their platforms, audience, performance, availability, rates, and previous work.',
    'Creators must have the necessary rights and permissions to provide any content, images, videos, statistics, or other materials they submit to NexVance.',
    'Creators are also responsible for completing agreed campaign deliverables accurately and on time.',
    'NexVance may decline, pause, or end a creator relationship if information provided is misleading, fraudulent, materially inaccurate, or inconsistent with a campaign\u2019s requirements.',
  ] },
  { h: 'Brand responsibilities', p: [
    'Brands are responsible for providing accurate campaign information, requirements, budgets, timelines, deliverables, and other relevant details.',
    'Brands are also responsible for paying agreed campaign amounts according to the applicable agreement.',
    'A brand must not request content or conduct that violates applicable law, platform rules, or the agreed campaign terms.',
  ] },
  { h: 'Creator and brand content', p: [
    'Creators remain responsible for the content they create and publish unless a separate agreement states otherwise.',
    'Brands are responsible for the materials, trademarks, products, claims, instructions, and other assets they provide to creators.',
    'Ownership and usage rights for sponsored content, including whether a brand may repost, edit, advertise, license, or otherwise use creator content, should be defined in the applicable campaign agreement.',
    'Nothing on this website automatically transfers ownership or intellectual property rights from one party to another.',
  ] },
  { h: 'Information and creator profiles', p: [
    'Creator profiles or information displayed on NexVance may be based on information provided by the creator, publicly available information, or information collected during the business relationship.',
    'We try to keep information accurate, but we do not guarantee that every follower count, statistic, rate, availability, or profile detail is always current.',
    'A creator\u2019s presence on the NexVance website or roster does not constitute an endorsement, guarantee of performance, or guarantee of future results.',
  ] },
  { h: 'Website content', p: [
    'The information on this website is provided to explain how NexVance works and what we offer.',
    'It is not a promise that a particular result, sponsorship, income level, campaign performance, or business outcome will be achieved.',
    'Any examples, creator profiles, campaign descriptions, or statements about our process should not be interpreted as a guarantee of future results.',
  ] },
  { h: 'No guarantee of results', p: [
    'Influencer marketing involves factors outside NexVance\u2019s control, including audience behaviour, platform algorithms, content performance, market conditions, brand decisions, creator performance, and changes to social media platforms.',
    'Because of this, NexVance does not guarantee specific views, clicks, sales, conversions, followers, engagement, revenue, or other campaign results unless a specific written agreement expressly provides otherwise.',
  ] },
  { h: 'Third-party platforms and links', p: [
    'NexVance may link to or rely on third-party platforms such as social media networks, creator channels, websites, payment providers, form providers, or other services.',
    'Those services are operated independently from NexVance and may have their own terms and privacy policies.',
    'NexVance is not responsible for the availability, security, policies, or actions of third-party platforms.',
  ] },
  { h: 'Website availability', p: [
    'We aim to keep the website available and accurate, but we do not guarantee that the website will always be available, uninterrupted, error-free, or completely up to date.',
    'We may modify, suspend, or discontinue any part of the website or its functionality at any time.',
  ] },
  { h: 'Prohibited use', p: ['You may not use this website to submit fraudulent information, impersonate another person or business, interfere with the website, attempt unauthorized access, distribute malicious software, or use NexVance\u2019s services for unlawful purposes.'] },
  { h: 'Limitation of responsibility', p: [
    'To the extent permitted by applicable law, NexVance is not responsible for indirect, incidental, consequential, or other losses arising from the use of this website or from a creator-brand relationship unless such responsibility is expressly accepted in a separate written agreement.',
    'The specific responsibilities of NexVance, a creator, and a brand for an individual campaign are governed by the applicable campaign agreement.',
  ] },
  { h: 'Changes to these Terms', p: [
    'We may update these Terms when our business, website, or services change.',
    'The latest version will be posted on this page with the updated date. Your continued use of the website after an update means you accept the revised Terms to the extent permitted by law.',
  ] },
  { h: 'Contact', p: ['If you have a question about these Terms or how NexVance works, contact NexVance at haseeb@nexvanceagency.com.'] },
];
 
function LegalBlock({ id, title, items }: { id?: string; title: string; items: LegalItem[] }) {
  return (
    <details id={id} className="bg-[#0A1A3F]/50 border border-[#1c3a7a] rounded-2xl px-6">
      <summary className="py-5 font-semibold text-lg flex items-center justify-between gap-4">
        {title}
        <span className="faq-plus text-2xl leading-none" aria-hidden="true">+</span>
      </summary>
      <div className="pb-6 text-sm text-white/75 leading-relaxed">
        <p className="text-white/55 mb-4">Last updated: {PRIVACY_UPDATED}</p>
        {items.map((it) => (
          <div key={it.h} className="mb-5">
            <h3 className="font-semibold text-white mb-1.5">{it.h}</h3>
            {it.p.map((t, i) => (<p key={i} className="mb-2">{t}</p>))}
          </div>
        ))}
      </div>
    </details>
  );
}
 
/* ---------- helpers ---------- */
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-1">
      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
 
function Avatar({ creator }: { creator: Creator }) {
  const [failed, setFailed] = useState(false);
  const initials = creator.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  if (creator.photo && !failed) {
    return <img src={creator.photo} alt={creator.name} loading="lazy" onError={() => setFailed(true)} className="w-12 h-12 rounded-full object-cover border border-white/20" />;
  }
  return (
    <div aria-hidden="true" className="w-12 h-12 rounded-full bg-[#0A1A3F] text-white border border-[#1c3a7a] flex items-center justify-center font-display font-semibold">
      {initials}
    </div>
  );
}
 
function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-white/70 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
 
function FormMessage({ status }: { status: Status }) {
  if (status !== 'error') return null;
  return (
    <p role="alert" className="mt-4 text-sm text-[#ff8f8f]">
      The form could not be sent. Check your connection and try again, or email{' '}
      <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
    </p>
  );
}
 
function FounderPhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative max-w-[420px]">
      <div className="rounded-3xl overflow-hidden border border-[#1c3a7a] aspect-[4/5] bg-[#0A1A3F] relative">
        {!failed ? (
          <img src="/founder.jpg" alt="Muhammad Haseeb, founder of NexVance" className="w-full h-full object-cover" onError={() => setFailed(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display text-7xl text-white/70" aria-hidden="true">MH</div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black to-transparent">
          <p className="font-display font-semibold text-xl text-white">Muhammad Haseeb</p>
          <p className="text-sm text-white/70">Founder and CEO</p>
        </div>
      </div>
    </div>
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
      const res = await fetch(SITE.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };
 
  const openForm = (tab: 'brand' | 'creator') => { setActiveFormTab(tab); setMenuOpen(false); };
 
  const filteredRoster = roster.filter((c) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'UGC') return !!c.ugc;
    return c.platforms.includes(selectedFilter as Platform);
  });
 
  return (
    <div className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap');
        .font-sans{ font-family:'Inter', system-ui, sans-serif; }
        .font-display{ font-family:'Fraunces', Georgia, serif; letter-spacing:-0.02em; }
        html{ scroll-behavior:smooth; }
        section[id], header[id]{ scroll-margin-top:90px; }
        a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, summary:focus-visible{ outline:2px solid #fff; outline-offset:2px; }
        details > summary{ list-style:none; cursor:pointer; }
        details > summary::-webkit-details-marker{ display:none; }
        details[open] .faq-plus{ transform:rotate(45deg); }
        .faq-plus{ transition:transform .2s ease; }
        @keyframes nv-marquee{ from{ transform:translateX(0);} to{ transform:translateX(-50%);} }
        .nv-marquee{ animation:nv-marquee 28s linear infinite; }
        @media (prefers-reduced-motion: reduce){ html{ scroll-behavior:auto; } *{ transition:none !important; animation:none !important; } }
      `}</style>
 
      <Analytics />
 
      {/* ANNOUNCEMENT */}
      <div className="bg-[#0A1A3F] border-b border-[#1c3a7a] text-sm py-2.5 px-4 text-center font-medium">
        No retainer. No signup fee. We earn 20% only when your deal closes.
      </div>
 
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10" aria-label="Main">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="" className="w-[30px] h-[30px] object-contain rounded-md" />
            <span className="font-display font-bold text-2xl">NexVance</span>
          </a>
          <div className="hidden lg:flex gap-8 text-sm text-white/75">
            {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#portal" onClick={() => openForm('creator')} className="hidden sm:inline text-sm text-white/75 hover:text-white">Join as a creator</a>
            <a href="#portal" onClick={() => openForm('brand')} className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white/85 transition-colors">Get a shortlist</a>
            <button type="button" className="lg:hidden p-2 -mr-2" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((v) => !v)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-white/10 bg-black px-6 py-4 flex flex-col">
            {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-3 text-base text-white/85 border-b border-white/10">{l.label}</a>))}
            <a href="#portal" onClick={() => openForm('creator')} className="py-3 text-base font-semibold">Join as a creator</a>
          </div>
        )}
      </nav>
 
      {/* HERO (full screen) */}
      <header id="top" className="relative min-h-[calc(100vh-110px)] flex items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#0A1A3F_0%,#000_65%)]" />
        <div className="relative max-w-[1100px] mx-auto px-6 py-20 text-center">
          <span className={eyebrow}>Creator marketing, commission only</span>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl leading-[1.02] mb-8">
            Get your brand in front of the right audience.
            <span className="block text-white/55">Pay only when the deal closes.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-[720px] mx-auto mb-10 leading-relaxed">
            NexVance connects brands with creators on YouTube, TikTok, Instagram and Facebook, including UGC for paid ads.
            Every deal starts with a signed contract, and we earn 20% only when it closes.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a href="#portal" onClick={() => openForm('brand')} className={btnWhite}>Get a creator shortlist</a>
            <a href="#portal" onClick={() => openForm('creator')} className={btnNavy}>I'm a creator</a>
          </div>
          <p className="mt-6 text-sm text-white/55">One-time brief. Two minutes. No call needed.</p>
        </div>
      </header>
 
      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0A1A3F]">
        <dl className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['20%', 'Commission, on closed deals only'],
            ['$0', 'Retainer or signup fee'],
            ['50 / 50', 'Payment split, written in the contract'],
            [String(SITE.creatorsOnRoster), 'Creators on our roster'],
          ].map(([n, l]) => (
            <div key={l}>
              <dd className="font-display font-extrabold text-4xl md:text-6xl order-first">{n}</dd>
              <dt className="text-sm text-white/70 mt-2">{l}</dt>
            </div>
          ))}
        </dl>
      </section>
 
      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-white/10 py-6 bg-black" aria-hidden="true">
        <div className="nv-marquee flex w-max gap-12 text-2xl md:text-3xl font-display font-semibold text-white/40">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (<span key={i} className="whitespace-nowrap">● {m}</span>))}
        </div>
      </div>
 
      {/* WHO IT'S FOR */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className={eyebrow}>Who this is for</span>
          <h2 className={h2Cls}>Two sides. One contract.</h2>
          <p className="text-white/70 mt-5 max-w-[620px] mx-auto text-lg">Whether you are hiring creators or getting paid by brands, the terms are on the table before work starts.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white text-black rounded-3xl p-8 md:p-10">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#0A1A3F] mb-3">Brands</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">Creator campaigns without the retainer</h3>
            <p className="text-black/70 mb-6 leading-relaxed">Tell us what you sell and who you want to reach. We shortlist creators and you only pay when a deal closes.</p>
            <ul className="space-y-3 mb-8">
              {['Shortlist by niche, region and audience data', 'Signed contract before any content', 'Approve the draft before it goes live', 'Usage rights and UGC for ads agreed per brief'].map((t) => (
                <li key={t} className="flex gap-3 text-[0.95rem]"><span className="text-[#0A1A3F]"><CheckIcon /></span>{t}</li>
              ))}
            </ul>
            <a href="#portal" onClick={() => openForm('brand')} className="inline-block bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#0A1A3F] transition-colors">Get a shortlist</a>
          </div>
          <div className="bg-[#0A1A3F] border border-[#1c3a7a] rounded-3xl p-8 md:p-10">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/70 mb-3">Creators</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">Brand deals without the chasing</h3>
            <p className="text-white/75 mb-6 leading-relaxed">We pitch you to brands that fit your audience and handle the contract. You decide which deals you take.</p>
            <ul className="space-y-3 mb-8">
              {['No signup fee. You keep 80% of every deal', 'Non-exclusive: work with other brands too', 'Contract and payment dates agreed in writing', 'You approve your listing and past brands shown'].map((t) => (
                <li key={t} className="flex gap-3 text-[0.95rem] text-white/90"><CheckIcon />{t}</li>
              ))}
            </ul>
            <a href="#portal" onClick={() => openForm('creator')} className={btnWhite}>Apply to join the roster</a>
          </div>
        </div>
      </section>
 
      {/* DOES THIS SOUND LIKE YOU */}
      <section className="py-24 bg-[#0A1A3F] border-y border-[#1c3a7a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className={`${eyebrow} !bg-black`}>Let's get real</span>
            <h2 className={h2Cls}>Does this sound like you right now?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[['If you are a brand', BRAND_PAINS], ['If you are a creator', CREATOR_PAINS]].map(([title, list]) => (
              <div key={title as string}>
                <h3 className="font-display font-bold text-2xl mb-5">{title as string}</h3>
                <ul className="space-y-4">
                  {(list as string[]).map((p) => (
                    <li key={p} className="bg-black/50 border border-white/10 rounded-2xl p-5 text-white/85 leading-relaxed">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center font-display font-semibold text-2xl md:text-3xl max-w-[820px] mx-auto mt-14 leading-snug">
            Most creator deals go wrong from missing structure, not missing effort. NexVance adds the structure.
          </p>
        </div>
      </section>
 
      {/* WHAT'S INSIDE */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className={eyebrow}>What you get</span>
          <h2 className={h2Cls}>Everything a creator deal needs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INSIDE.map(([t, b], i) => (
            <div key={t} className="border border-white/15 rounded-3xl p-8 hover:border-white/40 hover:bg-[#0A1A3F]/40 transition-colors">
              <span className="font-display font-extrabold text-5xl text-white/25">0{i + 1}</span>
              <h3 className="font-bold text-xl mt-4 mb-2">{t}</h3>
              <p className="text-white/70 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* HOW IT WORKS + PAYMENT */}
      <section id="how" className="py-24 bg-white text-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-white bg-[#0A1A3F] rounded-full px-4 py-1.5 mb-5">How it works</span>
            <h2 className={h2Cls}>Brief. Shortlist. Contract. Paid.</h2>
            <p className="text-black/65 mt-5 max-w-[640px] mx-auto text-lg">You see who we would match you with, and the terms, before you commit to anything.</p>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              ['Send a brief', 'Tell us about the product, platforms, regions and budget. Two minutes, no call needed.'],
              ['Review a shortlist', 'We match creators by niche, audience location and engagement, and share their audience data.'],
              ['Contract, then content', 'Scope, usage rights and payment dates are signed first. The creator sends a draft and you approve it.'],
              ['Publish and pay', '50% before publishing, 50% within 30 to 45 days after. NexVance’s 20% comes out of that fee.'],
            ].map(([t, b], i) => (
              <li key={t} className="bg-black text-white rounded-3xl p-7">
                <span className="inline-flex w-10 h-10 rounded-full bg-[#0A1A3F] border border-[#1c3a7a] items-center justify-center font-bold mb-4">{i + 1}</span>
                <h3 className="font-bold text-lg mb-2">{t}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{b}</p>
              </li>
            ))}
          </ol>
 
          <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 md:p-12 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <span className={`${eyebrow} !bg-black`}>One price</span>
              <h3 className="font-display font-bold text-4xl md:text-5xl mb-4">20% on closed deals. Nothing else.</h3>
              <p className="text-white/75 leading-relaxed">For brands, the 20% comes out of the agreed fee, not on top. Creators receive 80%. No retainer, no signup fee, no monthly cost.</p>
            </div>
            <ol className="relative border-l border-white/25 ml-2 space-y-6">
              {[
                ['Contract signed', 'Deliverables, usage rights and payment dates are agreed in writing.'],
                ['50% paid, draft approved', 'Nothing goes live without the brand’s approval.'],
                ['Published, remaining 50% in 30 to 45 days', 'The creator receives 80% of the fee and NexVance keeps 20%.'],
              ].map(([t, b]) => (
                <li key={t} className="pl-6 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white" aria-hidden="true" />
                  <h4 className="font-semibold">{t}</h4>
                  <p className="text-sm text-white/70 mt-1">{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
 
      {/* ROSTER */}
      <section id="roster" className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className={eyebrow}>Roster</span>
            <h2 className={`${h2Cls} mb-3`}>Creators on our roster</h2>
            <p className="text-white/70 max-w-[640px]">Creators appear here with their permission. Audience figures come from the creators themselves, and we share full audience data with brands on request.</p>
          </div>
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter creators by platform">
            {FILTERS.map((f) => (
              <button key={f} type="button" aria-pressed={selectedFilter === f} onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${selectedFilter === f ? 'bg-white text-black border-white font-semibold' : 'bg-black text-white/75 border-white/25 hover:border-white/60'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
 
        {roster.length === 0 ? (
          <div className="border border-dashed border-white/30 rounded-3xl p-12 text-center bg-[#0A1A3F]/30">
            <p className="text-white/80 max-w-[520px] mx-auto mb-6">We are adding creator profiles one at a time, each with the creator's approval. Ask for the current roster and we will send it with audience data for your niche and region.</p>
            <a href="#portal" onClick={() => openForm('brand')} className={btnWhite}>Request the roster</a>
          </div>
        ) : filteredRoster.length === 0 ? (
          <p className="text-white/70">No creators match this filter yet. Try another platform.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredRoster.map((c) => (
              <li key={c.name} className="bg-[#0A1A3F]/50 border border-[#1c3a7a] rounded-3xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <Avatar creator={c} />
                    <div className="min-w-0">
                      <h3 className="font-bold text-base truncate">{c.name}</h3>
                      {c.handle && (c.profileUrl ? (
                        <a href={c.profileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:underline">{c.handle}</a>
                      ) : (<p className="text-xs text-white/65">{c.handle}</p>))}
                    </div>
                  </div>
                  <dl className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between gap-3"><dt className="text-white/60">Niche</dt><dd className="text-right">{c.niche}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-white/60">Audience</dt><dd className="font-semibold text-right">{c.audience}</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-white/60">Region</dt><dd className="text-right">{c.region}</dd></div>
                  </dl>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {[...c.platforms, ...(c.ugc ? ['UGC'] : [])].map((p) => (<span key={p} className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full">{p}</span>))}
                  </div>
                </div>
                {c.priorWork && c.priorWork.length > 0 && (
                  <div className="pt-3 border-t border-white/15">
                    <p className="text-xs text-white/60 mb-1.5">Creator's prior brand work</p>
                    <p className="text-sm text-white/85">{c.priorWork.join(', ')}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
 
      {/* NICHES */}
      <section className="py-20 bg-[#0A1A3F] border-y border-[#1c3a7a]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className={`${h2Cls} mb-8`}>Niches we work in</h2>
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {['Tech and gadgets', 'SaaS and AI tools', 'Gaming', 'Fitness and wellness', 'Beauty', 'Food and beverage', 'Home', 'Travel', 'Finance', 'Fashion', 'Family', 'Books and writing'].map((n) => (
              <span key={n} className="border border-white/30 rounded-full px-5 py-2 text-sm">{n}</span>
            ))}
          </div>
          <p className="text-white/70">If your niche is not listed, send a brief and we will tell you honestly whether we have a fit.</p>
        </div>
      </section>
 
      {/* FOR CREATORS */}
      <section id="for-creators" className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className={eyebrow}>For creators</span>
            <h2 className={`${h2Cls} mb-5`}>You decide which deals you take.</h2>
            <p className="text-white/70 leading-relaxed max-w-[480px] mb-8 text-lg">We pitch you to brands that fit your audience, and handle the contract and the payment chasing.</p>
            <a href="#portal" onClick={() => openForm('creator')} className={btnWhite}>Apply to join the roster</a>
          </div>
          <ul className="space-y-4">
            {[
              'No signup fee. We earn 20% only when a deal closes; you keep 80%.',
              'Non-exclusive. Keep working with other brands and agencies.',
              'Contract first: deliverables, usage rights and payment dates are agreed in writing before you start.',
              'You approve your listing, including which details and past brands we show.',
            ].map((t) => (
              <li key={t} className="flex gap-3 border border-white/15 rounded-2xl p-5 text-white/90 leading-relaxed"><CheckIcon />{t}</li>
            ))}
          </ul>
        </div>
      </section>
 
      {/* FIT / NOT FIT */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className={`${h2Cls} text-center mb-12`}>This is for you. This is not for you.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl mb-5">This is for you if…</h3>
              <ul className="space-y-3 text-white/85">
                {['You want a contract and payment dates before work starts', 'You want creators matched by niche and region, not guessed', 'You are happy to approve drafts and give clear feedback', 'You want to pay for results of a closed deal, not a retainer'].map((t) => (<li key={t} className="flex gap-3"><CheckIcon />{t}</li>))}
              </ul>
            </div>
            <div className="bg-[#0A1A3F] text-white rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl mb-5">This is not for you if…</h3>
              <ul className="space-y-3 text-white/85">
                {['You expect guaranteed views, sales or followers', 'You want content published with no approval or contract', 'You want a creator to work for free exposure only', 'You need a deal closed before understanding the terms'].map((t) => (<li key={t} className="flex gap-3"><span className="shrink-0 mt-0.5">✕</span>{t}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* ABOUT / FOUNDER */}
      <section id="about" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <FounderPhoto />
          <div>
            <span className={eyebrow}>Founder</span>
            <h2 className={`${h2Cls} mb-6`}>A small agency that works in the open</h2>
            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>I'm Haseeb, the founder of NexVance. I started it in 2026 because brands want creator marketing without paying a retainer for results nobody guarantees, and creators want to know the contract and the payment dates before they start work.</p>
              <p>So every deal begins with a signed contract, and we only earn when a deal closes. When you write to NexVance, you reach me directly.</p>
              <p>
                My background isn’t a traditional agency story. Before NexVance, I was running a perfume brand, then worked in sales for a thumbnail agency,
                where I learned how to find people, pitch, follow up, handle rejection and turn conversations into business.
                Around the same time, I started going deep into AI and I’m still actively learning how it works, what it can automate and how it can give small businesses an advantage.
                None of this was planned as a path toward building NexVance. It just kept stacking up: selling, building, learning AI, understanding creators and understanding brands.
                Eventually, NexVance became the place where all of that came together.
                I’m still building it from there. No fake success story, no made-up case studies, just the real process, as it happens.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email}</a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white underline underline-offset-4">Muhammad Haseeb on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
 
      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#0A1A3F] border-y border-[#1c3a7a]">
        <div className="max-w-[820px] mx-auto px-6">
          <h2 className={`${h2Cls} text-center mb-10`}>Still thinking it through?</h2>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex items-center justify-between gap-4 py-5 text-lg font-semibold">
                  {f.q}
                  <span className="faq-plus text-3xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="pb-5 text-white/75 leading-relaxed max-w-[720px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
 
      {/* BIG CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] max-w-[900px] mx-auto mb-8">
          Send the brief. See the terms. <span className="text-white/55">Then decide.</span>
        </h2>
        <a href="#portal" onClick={() => openForm('brand')} className={btnWhite}>Get a creator shortlist</a>
      </section>
 
      {/* FORMS */}
      <section id="portal" className="py-24 bg-white text-black">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className={h2Cls}>Start with a short message</h2>
            <p className="text-black/65 mt-3 text-sm">Choose whether you are hiring creators or applying to join the roster.</p>
            <div role="tablist" aria-label="Form type" className="inline-flex p-1 bg-black rounded-full mt-6">
              {(['brand', 'creator'] as const).map((tab) => (
                <button key={tab} role="tab" id={`tab-${tab}`} aria-selected={activeFormTab === tab} aria-controls={`panel-${tab}`} type="button" onClick={() => setActiveFormTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${activeFormTab === tab ? 'bg-[#0A1A3F] text-white' : 'text-white/70 hover:text-white'}`}>
                  {tab === 'brand' ? "I'm a brand" : "I'm a creator"}
                </button>
              ))}
            </div>
          </div>
 
          <div className="bg-black text-white rounded-3xl p-6 sm:p-9">
            {activeFormTab === 'brand' ? (
              <div role="tabpanel" id="panel-brand" aria-labelledby="tab-brand">
                {brandStatus === 'sent' ? (
                  <div className="text-center py-10" role="status">
                    <h3 className="font-display font-bold text-3xl mb-2">Brief received</h3>
                    <p className="text-white/75 text-sm max-w-[420px] mx-auto">Thanks. Haseeb will review it and reply with next steps, usually within a day or two.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, setBrandStatus)}>
                    <input type="hidden" name="form_type" value="Brand Partnership Request" />
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="brand-name" label="Company or brand name"><input id="brand-name" className={inputCls} type="text" name="brand_name" placeholder="Acme Corp" required /></Field>
                      <Field id="brand-site" label="Website or store"><input id="brand-site" className={inputCls} type="url" name="website" placeholder="https://acme.com" required /></Field>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="brand-email" label="Work email"><input id="brand-email" className={inputCls} type="email" name="email" placeholder="alex@acme.com" required /></Field>
                      <Field id="brand-budget" label="Campaign budget">
                        <select id="brand-budget" className={inputCls} name="budget" required defaultValue="">
                          <option value="" disabled>Select a range</option>
                          {BUDGETS.map((b) => (<option key={b} value={b}>{b}</option>))}
                        </select>
                      </Field>
                    </div>
                    <div className="mb-5">
                      <Field id="brand-message" label="What do you want to promote, on which platforms, and in which regions?">
                        <textarea id="brand-message" className={inputCls} name="message" rows={4} required placeholder="Product, target platforms (YouTube, TikTok, Instagram, Facebook, UGC), regions, and the goal of the campaign." />
                      </Field>
                    </div>
                    <button type="submit" disabled={brandStatus === 'sending'} className="w-full bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-white/85 transition-colors disabled:opacity-60">
                      {brandStatus === 'sending' ? 'Sending…' : 'Send brief'}
                    </button>
                    <FormMessage status={brandStatus} />
                    <p className="mt-4 text-xs text-white/55">We use your details only to reply to this request. See <a href="#privacy" className="underline">Privacy</a>.</p>
                  </form>
                )}
              </div>
            ) : (
              <div role="tabpanel" id="panel-creator" aria-labelledby="tab-creator">
                {creatorStatus === 'sent' ? (
                  <div className="text-center py-10" role="status">
                    <h3 className="font-display font-bold text-3xl mb-2">Application received</h3>
                    <p className="text-white/75 text-sm max-w-[420px] mx-auto">Thanks. We review applications against incoming brand briefs and will reply by email.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, setCreatorStatus)}>
                    <input type="hidden" name="form_type" value="Creator Application" />
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                    <div className="mb-4">
                      <Field id="creator-link" label="Main channel or portfolio link">
                        <input id="creator-link" className={inputCls} type="url" name="channel_link" placeholder="https://youtube.com/@channel, or your TikTok / Instagram / portfolio link" required />
                      </Field>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <Field id="creator-size" label="Followers or subscribers"><input id="creator-size" className={inputCls} type="text" name="audience_size" placeholder="120K subscribers, or UGC portfolio" required /></Field>
                      <Field id="creator-niche" label="Content category"><input id="creator-niche" className={inputCls} type="text" name="niche" placeholder="Tech, lifestyle, gaming, UGC…" required /></Field>
                    </div>
                    <div className="mb-5">
                      <Field id="creator-email" label="Contact email"><input id="creator-email" className={inputCls} type="email" name="email" placeholder="you@email.com" required /></Field>
                    </div>
                    <button type="submit" disabled={creatorStatus === 'sending'} className="w-full bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-white/85 transition-colors disabled:opacity-60">
                      {creatorStatus === 'sending' ? 'Sending…' : 'Apply to join'}
                    </button>
                    <FormMessage status={creatorStatus} />
                    <p className="mt-4 text-xs text-white/55">Applying is free and non-exclusive. See <a href="#privacy" className="underline">Privacy</a>.</p>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
 
      {/* PRIVACY & TERMS */}
      <section id="privacy" className="py-16 max-w-[820px] mx-auto px-6">
        <h2 className="font-display font-bold text-3xl mb-6">Privacy and terms</h2>
        <div className="space-y-3">
          <LegalBlock title="Privacy" items={PRIVACY} />
          <LegalBlock id="terms" title="Terms of use" items={TERMS} />
        </div>
      </section>
 
      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="" className="w-[24px] h-[24px] object-contain rounded-md" />
              <span className="font-display font-bold text-lg">NexVance</span>
            </div>
            <p className="text-white/60 text-sm max-w-[320px] leading-relaxed">Creator sponsorships and UGC for brands in the US, UK, Canada and Europe. Commission-only, contract first.</p>
          </div>
          <div className="flex gap-14 flex-wrap text-sm">
            <div>
              <h3 className="text-white/60 mb-3 text-xs">Site</h3>
              {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="block text-white/80 hover:text-white mb-2">{l.label}</a>))}
            </div>
            <div>
              <h3 className="text-white/60 mb-3 text-xs">Contact</h3>
              <a href={`mailto:${SITE.email}`} className="block text-white hover:underline mb-2">{SITE.email}</a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-white mb-2">LinkedIn</a>
              <a href="#privacy" className="block text-white/80 hover:text-white mb-2">Privacy and terms</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 mt-10 pt-6 border-t border-white/10 max-w-[1200px] mx-auto px-6">© 2026 NexVance. All rights reserved.</div>
      </footer>
    </div>
  );
}
