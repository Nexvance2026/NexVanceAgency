import React from 'react';
// Yeh hamari main App file hai jo aage chal kar baaki components ko render karegi

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-white selection:text-black antialiased">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center padding-x py-6 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5 px-[8%]">
        <div className="text-xl font-bold tracking-wider text-white">NexVance</div>
        <ul className="flex items-center space-x-8">
          <li><a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</a></li>
          <li><a href="#roster" className="text-sm text-neutral-400 hover:text-white transition-colors">Our Roster</a></li>
          <li><a href="#case-studies" className="text-sm text-neutral-400 hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#contact" className="text-sm bg-white text-black font-semibold px-5 py-2.5 rounded-sm hover:bg-neutral-200 transition-colors">Let's Talk</a></li>
        </ul>
      </nav>

      {/* Hero Section Placeholder - Agle steps mein ise complete code se badlein ge */}
      <section className="pt-32 pb-20 px-[8%] flex flex-col items-center justify-center text-center min-h-[80vh]">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
          We Scale Tech Brands Through <span className="text-neutral-400">Precision Influencer Marketing</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
          Connecting high-growth software and AI startups with premium content creators.
        </p>
      </section>
    </div>
  );
}

export default App;
