import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickLinks from '../components/home/QuickLinks';
import VillageMap from '../components/home/VillageMap';
import LatestNews from '../components/home/LatestNews';
import VillageStats from '../components/home/VillageStats';
import VillageOfficials from '../components/home/VillageOfficials';
import AgricultureStats from '../components/home/AgricultureStats';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <VillageStats />
      <AgricultureStats />
      <QuickLinks />
      <VillageMap />
      <LatestNews />
      <VillageOfficials />
    </div>
  );
};

export default HomePage;