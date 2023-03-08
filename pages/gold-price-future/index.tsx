import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import GoldPriceFuture from 'src/features/gold-price-future/gold-price-future';

const GoldPriceFuturePage = () => {
  return <GoldPriceFuture />;
};

GoldPriceFuturePage.getLayout = getLayout;
export default GoldPriceFuturePage;
