import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import PaPurposeOfFundraising from 'src/features/purpose-of-fundraising';

const PaPurposeOfFundraisingPage = () => {
  return <PaPurposeOfFundraising />;
};

PaPurposeOfFundraisingPage.getLayout = getLayout;
export default PaPurposeOfFundraisingPage;
