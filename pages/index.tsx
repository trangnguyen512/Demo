import React from 'react';
import { getLayout } from '@/layout/PageLayout';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Mousewheel, Pagination, EffectFade } from 'swiper';

import './styles.module.css';

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const HomePage = () => {
  return <></>;
};

HomePage.getLayout = getLayout;
export default HomePage;
