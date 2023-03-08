// Define layout for pages
import React from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

type GetLayoutProps = (page: React.ReactElement) => React.ReactElement;
type Page<> = NextPage<any> & {
  getLayout?: GetLayoutProps;
};
type Props = AppProps & {
  Component: Page;
};
