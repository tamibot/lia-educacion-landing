import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceSplit from './components/AudienceSplit';
import HowItWorks from './components/HowItWorks';
import EducationSolutions from './components/EducationSolutions';
import ContentShowcase from './components/ContentShowcase';
import Ecosystem from './components/Ecosystem';
import Onboarding from './components/Onboarding';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Dashboard from './app/dashboard/Dashboard';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on navigation
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router
  if (currentHash === '#dashboard' || currentHash === '#app') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        {/* 1. SPEED: "Launch in 48h" */}
        <section id="fast-launch">
          <Onboarding />
        </section>

        {/* 2. PROCESS: "How LIA Sells" (WhatsApp Mockups) */}
        <section id="process">
          <HowItWorks />
        </section>

        {/* 3. MAGIC: "Content Studio" */}
        <section id="content">
          <ContentShowcase />
        </section>

        {/* 4. ECOSYSTEM: "All-in-One" */}
        <section id="features">
          <Ecosystem />
        </section>

        {/* 5. EXPERTISE: "We know Education" */}
        <section id="solutions">
          <EducationSolutions />
        </section>

        {/* 6. SCALE: "Designed for You" (Moved DOWN) */}
        <section id="audience" className="scroll-mt-20">
          <AudienceSplit />
        </section>

        <section id="precios">
          <Pricing />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
