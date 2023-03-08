import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import McKinleyMine from 'src/features/information/mckinley-mine';

const McKinleyMinePage = () => {
  return <McKinleyMine />;
};

McKinleyMinePage.getLayout = getLayout;
export default McKinleyMinePage;
