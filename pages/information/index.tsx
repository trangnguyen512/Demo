import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import Information from 'src/features/information/information';

const InformationPage = () => {
  return <Information />;
};

InformationPage.getLayout = getLayout;
export default InformationPage;
