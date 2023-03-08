import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { Props } from 'src/types/page';
import { wrapper } from 'store';
import '@/helpers/axios';
// load Toast styles
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';

import '../public/css/animate.min.css';
import useWindowSize from 'src/hooks/useWindowSize';
import Mobile from './mobile';

// animation Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

config.autoAddCss = false;
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const { width } = useWindowSize();

  return (
    <>
      <Head>
        <title>NEO GOLD MONEY</title>
        <meta name="description" content="NEO GOLD MONEY" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* <Mobile /> */}
      {width <= 428 ? <Mobile /> : getLayout(<Component {...pageProps} />)}

      <ToastContainer />
    </>
  );
};

export default wrapper.withRedux(App);
