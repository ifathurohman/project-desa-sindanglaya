import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import VillageProfile from '../components/home/VillageProfile';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Profil Desa" 
        description="Informasi mengenai wilayah dan kependudukan Desa Sindangjaya"
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <VillageProfile />
    </div>
  );
};

export default ProfilePage;