import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import RevenuePlan from 'src/features/revenue-plan';

const RevenuePlanPage = () => {
  return <RevenuePlan />;
};

RevenuePlanPage.getLayout = getLayout;
export default RevenuePlanPage;
