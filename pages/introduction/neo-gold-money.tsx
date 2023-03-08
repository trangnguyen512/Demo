import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import NeoGoldLLC from 'src/features/neo-gold-llc';

const NeoGoldLLCPage = () => {
  return <NeoGoldLLC />;
};

NeoGoldLLCPage.getLayout = getLayout;
export default NeoGoldLLCPage;
