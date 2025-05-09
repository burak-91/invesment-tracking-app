import React from 'react';
import { SettingsContainer, SettingsTitle, SettingsContent } from './Settings.styles';
// import './Settings.css';

const Settings: React.FC = () => {
  return (
    <SettingsContainer>
      <SettingsTitle>Ayarlar</SettingsTitle>
      <SettingsContent>
        <p>Uygulama ayarlarınız burada görüntülenecek.</p>
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Settings; 