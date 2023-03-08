import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import DevelopmentSchedule from 'src/features/information/development-schedule';

const DevelopmentSchedulePage = () => {
  return <DevelopmentSchedule />;
};

DevelopmentSchedulePage.getLayout = getLayout;
export default DevelopmentSchedulePage;
