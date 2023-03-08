import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import Introduction from 'src/features/introduction';

const IntroductionPage = () => {
  return <Introduction />;
};

IntroductionPage.getLayout = getLayout;
export default IntroductionPage;
