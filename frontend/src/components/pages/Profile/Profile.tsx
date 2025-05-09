import React from 'react';
import { ProfileContainer, ProfileTitle, ProfileContent } from './Profile.styles';
// import './Profile.css';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>Profil</ProfileTitle>
      <ProfileContent>
        <p>Profil bilgileriniz burada görüntülenecek.</p>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile; 