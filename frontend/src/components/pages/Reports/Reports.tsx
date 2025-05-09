import React from 'react';
import { ReportsContainer, ReportsTitle, ReportsContent } from './Reports.styles';
// import './Reports.css';

const Reports: React.FC = () => {
  return (
    <ReportsContainer>
      <ReportsTitle>Raporlar</ReportsTitle>
      <ReportsContent>
        <p>Yatırım raporlarınız burada görüntülenecek.</p>
      </ReportsContent>
    </ReportsContainer>
  );
};

export default Reports; 