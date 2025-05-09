import React from 'react';
import { PricesContainer, PricesTitle, PricesContent } from './Prices.styles';

const Prices: React.FC = () => {
  return (
    <PricesContainer>
      <PricesTitle>Fiyatlar</PricesTitle>
      <PricesContent>
        <p>Güncel fiyatlar burada listelenecek.</p>
      </PricesContent>
    </PricesContainer>
  );
};

export default Prices; 