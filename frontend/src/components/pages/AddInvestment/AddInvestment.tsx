import React from 'react';
import { AddInvestmentContainer, AddInvestmentTitle, AddInvestmentContent } from './AddInvestment.styles';

const AddInvestment: React.FC = () => {
  return (
    <AddInvestmentContainer>
      <AddInvestmentTitle>Yatırım Ekle</AddInvestmentTitle>
      <AddInvestmentContent>
        <p>Yeni yatırım eklemek için form burada olacak.</p>
      </AddInvestmentContent>
    </AddInvestmentContainer>
  );
};

export default AddInvestment; 