
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Benefits } from './components/Benefits';
import { TargetAudience } from './components/TargetAudience';
import { WhatYouReceive } from './components/WhatYouReceive';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Differentials />
      <Benefits />
      <TargetAudience />
      <WhatYouReceive />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
