import React from 'react';
import EasterPopup from './components/EasterPopup';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Philosophy from './components/Philosophy';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Socials from './components/Socials';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <EasterPopup />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-10">
            
            <Header />
            
            <main className="w-full mt-10 @container">
              <Hero />
              
              <div className="flex flex-col gap-10 py-16 @container">
                <Services />
                <Gallery />
                <Philosophy />
                <CallToAction />
                <Features />
                <Socials />
                <FAQ />
              </div>
            </main>

            <footer className="py-10 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Ostoja Spokoju. Wszelkie prawa zastrzeżone.</p>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;