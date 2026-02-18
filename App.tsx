import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Onboarding from './components/Onboarding';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy Load Components
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const ContentShowcase = React.lazy(() => import('./components/ContentShowcase'));
const Ecosystem = React.lazy(() => import('./components/Ecosystem'));
const EducationSolutions = React.lazy(() => import('./components/EducationSolutions'));
const AudienceSplit = React.lazy(() => import('./components/AudienceSplit'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Footer = React.lazy(() => import('./components/Footer'));
const Dashboard = React.lazy(() => import('./app/dashboard/Dashboard'));

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
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
        <Dashboard />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />

      <main>
        <section id="hero">
          <Hero />
        </section>

        {/* 1. SPEED: "Launch in 48h" */}
        <section id="fast-launch">
          <Onboarding />
        </section>

        <Suspense fallback={<div className="h-96"></div>}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
