import React from 'react';
import { InvestmentsContainer, InvestmentsTitle, InvestmentsContent } from './Investments.styles';

const Investments: React.FC = () => {
  return (
    <InvestmentsContainer>
      <InvestmentsTitle>Yatırımlarım</InvestmentsTitle>
      <InvestmentsContent>
        <p>Yatırımlarınızın listesi burada görüntülenecek.</p>
      </InvestmentsContent>
    </InvestmentsContainer>
  );
};

export default Investments; 