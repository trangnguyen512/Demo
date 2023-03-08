import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import OurMission from 'src/features/our-mission';

const OurMissionPage = () => {
  return <OurMission />;
};

OurMissionPage.getLayout = getLayout;
export default OurMissionPage;
