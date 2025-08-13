import React, { useEffect } from 'react';
import Hero from '../components/Home/HeroSection';
import WelcomeMessage from '../components/Home/WelcomeMessage';
import HomeServices from '../components/Home/HomeServices'; // ✅ updated here
import OneStopSolution from '../components/Home/OneStopSolution';
import WhyUS from '../components/Home/WhyUs';
import PortfolioStats from '../components/Home/PortfolioStats';
import Clients from '../components/Home/Clients';

const Home = () => {

  useEffect(() => {
    document.title = 'Global Works';
  }, []);

  return (
    <div className='mx-auto'>
      <Hero />
      <WelcomeMessage />
      <HomeServices /> {/* ✅ changed from <Services /> to <HomeServices /> */}
      <div className='hidden sm:block'><WhyUS /></div>
      <OneStopSolution />
      <div className="hidden sm:block">
        <PortfolioStats />
        <Clients />
      </div>
    </div>
  );
};

export default Home;
