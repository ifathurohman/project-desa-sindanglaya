import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickLinks from '../components/home/QuickLinks';
import VillageMap from '../components/home/VillageMap';
import LatestNews from '../components/home/LatestNews';
import VillageStats from '../components/home/VillageStats';
import VillageOfficials from '../components/home/VillageOfficials';
import AgricultureStats from '../components/home/AgricultureStats';
import CultureSection from '../components/home/CultureSection';
import PopulationStats from '../components/home/PopulationStats';
import EducationFacilities from '../components/home/EducationFacilities';
import HealthFacilities from '../components/home/HealthFacilities';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <VillageStats />
      <PopulationStats />
      <EducationFacilities />
      <HealthFacilities />
      <AgricultureStats />
      <CultureSection />
      <QuickLinks />
      <VillageMap />
      <LatestNews />
      <VillageOfficials />
    </div>
  );
};

export default HomePage;