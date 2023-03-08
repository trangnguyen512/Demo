import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import ReturnOnInvestmentTarget from 'src/features/return-on-investment-target';

const ReturnOnInvestmentTargetPage = () => {
  return <ReturnOnInvestmentTarget />;
};

ReturnOnInvestmentTargetPage.getLayout = getLayout;
export default ReturnOnInvestmentTargetPage;
