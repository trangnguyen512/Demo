import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import KeyIndicators from 'src/features/revenue-plan/key-indicators';

const KeyIndicatorsPage = () => {
  return <KeyIndicators />;
};

KeyIndicatorsPage.getLayout = getLayout;
export default KeyIndicatorsPage;
