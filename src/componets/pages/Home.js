import React from 'react';
import HeroSection from './HeroSection';
import ImpactSummary from './ImpactSummary';
import Programs from './Programs';
import Testimonials from './Testimonials';
import GetInvolved from './GetInvolved';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImpactSummary />
      <Programs />
      <Testimonials />
      <GetInvolved />
    </div>
  );
};

export default Home;
