import React from 'react';

const EmptyLayout = ({ children }: { children: React.ReactElement }) => {
  return <>{children}</>;
};

export const getLayout = (page: any): React.ReactElement => (
  <EmptyLayout>{page}</EmptyLayout>
);
export { EmptyLayout };
