import React from 'react';
import { getLayout } from '@/layout/PageLayout';
import DistributionSchedule from 'src/features/revenue-plan/distribution-schedule';

const DistributionSchedulePage = () => {
  return <DistributionSchedule />;
};

DistributionSchedulePage.getLayout = getLayout;
export default DistributionSchedulePage;
