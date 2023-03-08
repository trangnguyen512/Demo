import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import Earnings from 'src/features/gold-price-future/earnings';

const PriceAndEarningsPage = () => {
  return <Earnings />;
};

PriceAndEarningsPage.getLayout = getLayout;
export default PriceAndEarningsPage;
