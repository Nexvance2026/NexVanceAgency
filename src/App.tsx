<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NexVance | Bridging Global Brands & Premium Creators</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --ink:#0A0E17;
    --ink-soft:#121828;
    --ink-card:#161D30;
    --line: rgba(247,245,240,0.10);
    --paper:#F5F4F0;
    --text-dim: rgba(245,244,240,0.60);
    --text-dimmer: rgba(245,244,240,0.42);
    --green:#12C999;
    --blue:#3E7BFA;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'Inter', sans-serif;
    background:var(--ink);
    color:var(--paper);
    line-height:1.55;
  }
  h1,h2,h3{font-family:'Space Grotesk', sans-serif; font-weight:600; letter-spacing:-0.02em;}
  .mono{font-family:'IBM Plex Mono', monospace;}
  a{color:inherit; text-decoration:none;}
  .wrap{max-width:1080px; margin:0 auto; padding:0 24px;}
 
  /* NAV */
  nav{
    position:sticky; top:0; z-index:50;
    background:rgba(10,14,23,0.9);
    backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line);
  }
  nav .wrap{display:flex; align-items:center; justify-content:space-between; height:70px;}
  .brand{display:flex; align-items:center; gap:10px;}
  .brand-icon{
    width:32px; height:32px; border-radius:9px;
    background:linear-gradient(135deg, var(--green), var(--blue));
    display:flex; align-items:center; justify-content:center;
    font-family:'Space Grotesk'; font-weight:700; font-size:0.85rem; color:#fff;
  }
  .brand-name{font-family:'Space Grotesk'; font-weight:700; font-size:1.15rem;}
 
  .tabs{
    display:flex; gap:4px; background:var(--ink-soft); border-radius:100px; padding:4px;
    border:1px solid var(--line);
  }
  .tab-btn{
    padding:8px 18px; border-radius:100px; font-size:0.88rem; font-weight:500;
    color:var(--text-dim); cursor:pointer; border:none; background:none; transition:all .2s ease;
    font-family:'Inter';
  }
  .tab-btn.active{background:var(--green); color:var(--ink); font-weight:600;}
  .tab-btn.active.brands-active{background:var(--blue); color:#fff;}
  @media(max-width:640px){ .tabs{font-size:0.8rem;} .tab-btn{padding:7px 12px;} }
 
  main{padding:52px 0 100px;}
  .view{display:none;}
  .view.active{display:block;}
 
  /* HERO */
  .eyebrow{
    display:inline-flex; align-items:center; gap:8px;
    font-family:'IBM Plex Mono'; font-size:0.74rem; letter-spacing:0.03em;
    color:var(--green); border:1px solid rgba(18,201,153,0.3);
    background:rgba(18,201,153,0.08); padding:6px 12px; border-radius:100px;
    margin-bottom:24px;
  }
  .dot{width:6px; height:6px; border-radius:50%; background:var(--green); animation:pulse 2s infinite;}
  @keyframes pulse{0%,100%{opacity:1;} 50%{opacity:0.3;}}
 
  h1.headline{font-size:2.5rem; line-height:1.12; margin-bottom:20px; max-width:640px;}
  h1.headline .g{color:var(--green);}
  h1.headline .b{color:var(--blue);}
  p.lead{font-size:1.02rem; color:var(--text-dim); max-width:560px; margin-bottom:32px;}
 
  .btn{
    padding:13px 24px; border-radius:8px; font-weight:600; font-size:0.92rem;
    display:inline-flex; align-items:center; gap:8px; transition:all .15s ease;
    cursor:pointer; border:1px solid transparent;
  }
  .btn-green{background:var(--green); color:var(--ink);}
  .btn-green:hover{background:#0fb387;}
  .btn-blue{background:var(--blue); color:#fff;}
  .btn-blue:hover{background:#2e6bea;}
  .btn-ghost{border-color:var(--line); color:var(--paper);}
  .btn-ghost:hover{background:rgba(245,244,240,0.05);}
 
  /* PROBLEM STATEMENT */
  .problem{
    background:var(--ink-soft); border:1px solid var(--line); border-radius:16px;
    padding:36px; margin:64px 0;
  }
  .problem .tag{font-family:'IBM Plex Mono'; font-size:0.74rem; color:var(--text-dimmer); letter-spacing:0.05em; margin-bottom:14px;}
  .problem p{font-size:1rem; color:var(--text-dim); max-width:720px;}
  .problem p + p{margin-top:14px;}
  .problem strong{color:var(--paper); font-weight:600;}
 
  /* GAME CHANGER SPLIT */
  .section-tag{font-family:'IBM Plex Mono'; font-size:0.76rem; color:var(--green); letter-spacing:0.05em; margin-bottom:12px;}
  .section-title{font-size:1.9rem; max-width:600px; margin-bottom:44px;}
 
  .split-grid{display:grid; grid-template-columns:1fr 1fr; gap:22px;}
  @media(max-width:820px){ .split-grid{grid-template-columns:1fr;} }
  .split-card{
    background:var(--ink-card); border:1px solid var(--line); border-radius:14px; padding:30px;
  }
  .split-card .stag{font-family:'IBM Plex Mono'; font-size:0.72rem; letter-spacing:0.04em; margin-bottom:10px;}
  .split-card.for-creators .stag{color:var(--green);}
  .split-card.for-brands .stag{color:var(--blue);}
  .split-card h3{font-size:1.3rem; margin-bottom:16px;}
  .split-list{list-style:none;}
  .split-list li{display:flex; gap:10px; padding:11px 0; font-size:0.9rem; color:var(--text-dim); border-bottom:1px solid var(--line);}
  .split-list li:last-child{border:none;}
  .split-list b{color:var(--paper);}
  .check{flex-shrink:0; margin-top:2px;}
  .for-creators .check{color:var(--green);}
  .for-brands .check{color:var(--blue);}
 
  /* PROCESS */
  .process-rail{display:grid; grid-template-columns:repeat(4,1fr); gap:24px;}
  @media(max-width:820px){ .process-rail{grid-template-columns:1fr;} }
  .proc-num{
    width:40px; height:40px; border-radius:50%; background:var(--ink-soft); border:1px solid var(--line);
    display:flex; align-items:center; justify-content:center; font-family:'IBM Plex Mono'; font-size:0.85rem;
    margin-bottom:16px;
  }
  .proc-step h3{font-size:1.02rem; margin-bottom:6px;}
  .proc-step p{font-size:0.86rem; color:var(--text-dim);}
 
  /* FORM */
  .form-card{
    background:var(--ink-soft); border:1px solid var(--line); border-radius:16px; padding:32px; max-width:600px;
  }
  .form-card h3{font-size:1.5rem; margin-bottom:10px;}
  .form-card > p{color:var(--text-dim); font-size:0.92rem; margin-bottom:28px;}
  label{
    display:block; font-family:'IBM Plex Mono'; font-size:0.7rem; letter-spacing:0.05em;
    color:var(--text-dimmer); text-transform:uppercase; margin-bottom:7px; margin-top:18px;
  }
  label:first-of-type{margin-top:0;}
  input, select, textarea{
    width:100%; background:var(--ink); border:1px solid var(--line); border-radius:8px;
    padding:12px 14px; color:var(--paper); font-family:'Inter'; font-size:0.92rem;
  }
  input:focus, select:focus, textarea:focus{outline:none; border-color:var(--green);}
  .form-card.brand-form input:focus, .form-card.brand-form select:focus, .form-card.brand-form textarea:focus{border-color:var(--blue);}
  textarea{resize:vertical; min-height:90px;}
  .submit-btn{width:100%; margin-top:26px; justify-content:center; border:none; font-size:0.95rem; cursor:pointer;}
  .form-note{font-size:0.78rem; color:var(--text-dimmer); margin-top:14px; text-align:center;}
  .form-success{display:none; text-align:center; padding:40px 20px;}
  .form-success.show{display:block;}
  .form-success h3{color:var(--green); margin-bottom:10px;}
 
  section.pad{padding:64px 0;}
 
  footer{border-top:1px solid var(--line); padding:36px 0; margin-top:20px;}
  footer .wrap{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;}
  footer .fine{font-size:0.8rem; color:var(--text-dimmer);}
  footer .flinks{display:flex; gap:22px; font-size:0.84rem; color:var(--text-dim);}
</style>
</head>
<body>
 
<nav>
  <div class="wrap">
    <div class="brand">
      <div class="brand-icon">NV</div>
      <div class="brand-name">NexVance</div>
    </div>
    <div class="tabs">
      <button class="tab-btn active" data-tab="overview" onclick="showTab('overview', this)">Overview</button>
      <button class="tab-btn" data-tab="brands" onclick="showTab('brands', this)">Brands</button>
      <button class="tab-btn" data-tab="creators" onclick="showTab('creators', this)">Creators</button>
    </div>
  </div>
</nav>
 
<main>
  <div class="wrap">
 
    <!-- OVERVIEW -->
    <div class="view active" id="view-overview">
      <div class="eyebrow"><span class="dot"></span> ONBOARDING FOUNDING CREATORS &amp; BRANDS — Q3/Q4 2026</div>
      <h1 class="headline">Bridging the gap between <span class="b">global brands</span> and <span class="g">premium creators</span>.</h1>
      <p class="lead">NexVance is a performance-based sponsorship agency connecting tech creators across the US and UK with brands that want their audience — on a transparent, pure-performance model with zero hidden fees.</p>
      <div style="display:flex; gap:14px; flex-wrap:wrap;">
        <button class="btn btn-blue" onclick="showTab('brands', document.querySelectorAll('.tab-btn')[1])">I'm a Brand →</button>
        <button class="btn btn-green" onclick="showTab('creators', document.querySelectorAll('.tab-btn')[2])">I'm a Creator →</button>
      </div>
 
      <div class="problem">
        <div class="tag">THE PROBLEM</div>
        <p>Most brands and premium creators fail to build long-term, high-converting partnerships. <strong>Brands waste thousands on upfront agency retainers or sponsors that don't convert</strong>, while creators lose hours managing back-and-forth emails instead of focusing on their content.</p>
        <p>At NexVance, we eliminate the friction entirely — operating on a transparent, pure-performance model with zero hidden fees.</p>
      </div>
 
      <div class="section-tag">HOW WE'RE CHANGING THE GAME</div>
      <h2 class="section-title">One structure, built to protect both sides.</h2>
 
      <div class="split-grid">
        <div class="split-card for-creators">
          <div class="stag">FOR PREMIUM CREATORS</div>
          <h3>Focus on content. We handle the rest.</h3>
          <ul class="split-list">
            <li><span class="check">✓</span><span><b>100% free upfront</b> — you never pay a single penny to start working with us</span></li>
            <li><span class="check">✓</span><span><b>Proactive pitching</b> — we scout, pitch, and secure brand deals that fit your audience</span></li>
            <li><span class="check">✓</span><span><b>Standard 20% cut</b> — taken only after your deal is secured and paid</span></li>
            <li><span class="check">✓</span><span><b>Zero financial risk</b> — if you don't get paid, we don't take anything</span></li>
          </ul>
        </div>
        <div class="split-card for-brands">
          <div class="stag">FOR TECH BRANDS</div>
          <h3>Direct access to vetted audiences.</h3>
          <ul class="split-list">
            <li><span class="check">✓</span><span><b>No agency retainers</b> — skip the overhead and monthly management fees</span></li>
            <li><span class="check">✓</span><span><b>Direct creator rates</b> — you pay only the creator's actual fee, before kickoff</span></li>
            <li><span class="check">✓</span><span><b>Curated roster</b> — get access to aligned creators with engaged audiences</span></li>
            <li><span class="check">✓</span><span><b>End-to-end handling</b> — sourcing, communication, and contracts, managed for you</span></li>
          </ul>
        </div>
      </div>
    </div>
 
    <!-- BRANDS -->
    <div class="view" id="view-brands">
      <div class="eyebrow" style="color:var(--blue); border-color:rgba(62,123,250,0.3); background:rgba(62,123,250,0.08);"><span class="dot" style="background:var(--blue);"></span> FOR BRANDS</div>
      <h1 class="headline">Stop burning money on <span class="b">agency retainers</span>.</h1>
      <p class="lead">Get direct access to highly vetted tech creators. You only pay the creator's actual rate — no management fees, no monthly overhead.</p>
 
      <div class="section-tag" style="color:var(--blue);">HOW IT WORKS FOR YOU</div>
      <h2 class="section-title">End-to-end handling, one point of contact.</h2>
      <div class="process-rail" style="margin-bottom:56px;">
        <div class="proc-step">
          <div class="proc-num mono">01</div>
          <h3>Tell us your goals</h3>
          <p>Share your budget, product, and target audience through the form below.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">02</div>
          <h3>Get matched</h3>
          <p>We source and vet creators whose audience actually fits your product.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">03</div>
          <h3>Review &amp; sign</h3>
          <p>A single clear contract — deliverables, timeline, and rate defined upfront.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">04</div>
          <h3>Content, delivered</h3>
          <p>Draft is held for your approval before anything goes live.</p>
        </div>
      </div>
 
      <div class="form-card brand-form">
        <div id="brand-form-body">
          <h3>Work with NexVance</h3>
          <p>Partner with a dedicated pipeline to plan and execute your creator campaign.</p>
          <form id="brandForm" action="https://formspree.io/f/xlgkywng" method="POST">
            <input type="hidden" name="form_type" value="Brand Application">
            <label>Company / Brand Name</label>
            <input type="text" name="brand_name" placeholder="Your brand name" required>
            <label>Company Website URL</label>
            <input type="url" name="website" placeholder="https://yourbrand.com" required>
            <label>Work Email</label>
            <input type="email" name="email" placeholder="name@company.com" required>
            <label>Estimated Monthly Budget</label>
            <select name="budget" required>
              <option value="">Select your budget bracket</option>
              <option>Under $1,000</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
            <label>Campaign Goals &amp; Target Audience</label>
            <textarea name="message" placeholder="Tell us about your product, niche, and customer avatar..." required></textarea>
            <button type="submit" class="btn btn-blue submit-btn">Send Strategy Request</button>
          </form>
        </div>
        <div class="form-success" id="brand-success">
          <h3>Request received.</h3>
          <p style="color:var(--text-dim);">We review inbound requests and reply within 48 hours.</p>
        </div>
      </div>
    </div>
 
    <!-- CREATORS -->
    <div class="view" id="view-creators">
      <div class="eyebrow"><span class="dot"></span> FOR CREATORS</div>
      <h1 class="headline">Focus on content. <span class="g">We'll bring the deals.</span></h1>
      <p class="lead">Managing sponsorships shouldn't feel like a second full-time job. We scout, pitch, and secure brand deals — you just make the video.</p>
 
      <div class="section-tag">HOW IT WORKS FOR YOU</div>
      <h2 class="section-title">Zero upfront, zero risk.</h2>
      <div class="process-rail" style="margin-bottom:56px;">
        <div class="proc-step">
          <div class="proc-num mono">01</div>
          <h3>Apply free</h3>
          <p>Share your channel and audience details — no cost, ever.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">02</div>
          <h3>We pitch for you</h3>
          <p>We approach brands on your behalf and negotiate your rate.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">03</div>
          <h3>You approve terms</h3>
          <p>Nothing moves forward without your sign-off on the contract.</p>
        </div>
        <div class="proc-step">
          <div class="proc-num mono">04</div>
          <h3>Get paid, 20% cut</h3>
          <p>Only after the deal is secured and paid — never before.</p>
        </div>
      </div>
 
      <div class="form-card">
        <div id="creator-form-body">
          <h3>Join the Roster</h3>
          <p>We review applications within 48 hours and reach out if there's a fit with active brand campaigns.</p>
          <form id="creatorForm" action="https://formspree.io/f/xlgkywng" method="POST">
            <input type="hidden" name="form_type" value="Creator Application">
            <label>Primary Platform / Link</label>
            <input type="url" name="channel_link" placeholder="https://youtube.com/c/..." required>
            <label>Audience Size / Subscribers</label>
            <input type="text" name="audience_size" placeholder="e.g., 150k" required>
            <label>Avg. Views Per Content Unit</label>
            <select name="avg_views" required>
              <option value="">Select average views</option>
              <option>5,000 - 20,000 views</option>
              <option>20,000 - 100,000 views</option>
              <option>100,000+ views</option>
              <option>Custom bracket</option>
            </select>
            <label>Main Content Niche</label>
            <input type="text" name="niche" placeholder="e.g., Tech reviews, Productivity" required>
            <label>Channel / Profile Name</label>
            <input type="text" name="channel_name" placeholder="e.g., CreatorDev" required>
            <label>Contact Email</label>
            <input type="email" name="email" placeholder="you@email.com" required>
            <button type="submit" class="btn btn-green submit-btn">Submit Application</button>
          </form>
        </div>
        <div class="form-success" id="creator-success">
          <h3>Application received.</h3>
          <p style="color:var(--text-dim);">We review every application within 48 hours.</p>
        </div>
      </div>
    </div>
 
  </div>
</main>
 
<footer>
  <div class="wrap">
    <div class="fine mono">© 2026 NexVance</div>
    <div class="flinks">
      <a href="mailto:haseeb@nexvanceagency.com">haseeb@nexvanceagency.com</a>
      <a href="#">LinkedIn</a>
    </div>
  </div>
</footer>
 
<script>
function showTab(tab, btn){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + tab).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active','brands-active'); });
  btn.classList.add('active');
  if(tab === 'brands'){ btn.classList.add('brands-active'); }
  window.scrollTo({top:0, behavior:'smooth'});
}
 
// Formspree AJAX submit so it stays inline instead of redirecting
function handleFormSubmit(formId, bodyId, successId){
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {'Accept':'application/json'}
    }).then(response => {
      if(response.ok){
        document.getElementById(bodyId).style.display = 'none';
        document.getElementById(successId).classList.add('show');
      } else {
        alert('Something went wrong. Please try again or email haseeb@nexvanceagency.com directly.');
      }
    }).catch(() => {
      alert('Something went wrong. Please try again or email haseeb@nexvanceagency.com directly.');
    });
  });
}
handleFormSubmit('brandForm', 'brand-form-body', 'brand-success');
handleFormSubmit('creatorForm', 'creator-form-body', 'creator-success');
</script>
 
</body>
</html>
