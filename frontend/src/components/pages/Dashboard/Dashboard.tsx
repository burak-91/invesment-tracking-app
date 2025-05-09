import React from 'react';
import { DashboardContainer, DashboardTitle, DashboardContent } from './Dashboard.styles';
// import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardContent>
        <p>Hoş geldiniz! Burada portföyünüzün genel durumunu görebilirsiniz.</p>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard; 