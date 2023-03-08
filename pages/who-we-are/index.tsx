import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import WhoAreYou from 'src/features/who-we-are';

const WhoAreYouPage = () => {
  return <WhoAreYou />;
};

WhoAreYouPage.getLayout = getLayout;
export default WhoAreYouPage;
