import React, { useEffect, useState } from 'react';
import Header from './Header';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Mousewheel, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// animation Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// ------------------------
import Introduction from 'src/features/introduction';
import NeoGoldLLC from 'src/features/neo-gold-llc';
import PaPurposeOfFundraising from 'src/features/purpose-of-fundraising';
import ReturnOnInvestmentTarget from 'src/features/return-on-investment-target';
import BannerOurMission from 'src/features/our-mission/bannerOurmisson';
import OurMission from 'src/features/our-mission';
import BannerWhyGoldNow from 'src/features/why-gold-now/bannerWhygold';
import WhyGoldNow from 'src/features/why-gold-now';
import BannerWhoWeAre from 'src/features/who-we-are/bannerWhoWeAre';
import Page11 from 'src/features/who-we-are/page11';
import JohnDavid from 'src/features/who-we-are/page12';
import JohnDavid2 from 'src/features/who-we-are/pageJohn2';
import FirstProject from 'src/features/who-we-are/page13';
import Information from 'src/features/information/information';
import McKinleyMine from 'src/features/information/mckinley-mine';
import McKinleyMine2 from 'src/features/information/mckinley-mine-2';
import CharacterReserves from 'src/features/information/character-reserve';
import CharacteristicsReserves4 from 'src/features/information/character-reserve-4';
import Partner from 'src/features/information/character-reserve-2';
import CharacteristicsReserve3 from 'src/features/information/character-reserve-3';
import Page22 from 'src/features/information/page22';
import DevelopmentSchedule from 'src/features/information/development-schedule';
import RevenuePlan from 'src/features/revenue-plan';
import RevenuePlan2 from 'src/features/revenue-plan/revenue-plan-2';
import DistributionSchedule from '@/features/revenue-plan/distribution-schedule';
import KeyIndicators from 'src/features/revenue-plan/key-indicators';
import GoldPriceFuture from 'src/features/gold-price-future/gold-price-future';
import Page29 from 'src/features/gold-price-future/Page29';
import Earnings from 'src/features/gold-price-future/earnings';
import Page31 from 'src/features/gold-price-future/Page31';
import Page32 from 'src/features/gold-price-future/Page32';
import Page33 from 'src/features/gold-price-future/Page33';
import Page34 from 'src/features/gold-price-future/Page34';
import FinalPageMobile from 'src/features/finalpagemobile';
import Home from '@/features';

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PageLayout = ({ children }: { children: React.ReactElement }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 2500,
    });
  }, []);

  return (
    <div className="bg-neo-main h-[100vh] w-full hidden md:block">
      <Header activeTab={activeTab} />
      <div className="h-full w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          speed={1000}
          data-swiper-autoplay="2000"
          mousewheel={true}
          className="mySwiper"
          onSlideChange={e => setActiveTab(e.activeIndex)}
        >
          {/* Page 1 */}
          <SwiperSlide>
            <div className="bg-home px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Home />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Introduction />
            </div>
          </SwiperSlide>
          {/* Page 2 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <NeoGoldLLC />
            </div>
          </SwiperSlide>

          {/* Page 3 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <PaPurposeOfFundraising />
            </div>
          </SwiperSlide>

          {/* Page 4 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <ReturnOnInvestmentTarget />
            </div>
          </SwiperSlide>

          {/* Page 5 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <BannerOurMission />
            </div>
          </SwiperSlide>
          {/* Page 6 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <OurMission />
            </div>
          </SwiperSlide>

          {/* Page 7 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <BannerWhyGoldNow />
            </div>
          </SwiperSlide>

          {/* Page 8 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <WhyGoldNow />
            </div>
          </SwiperSlide>

          {/* Page 9 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <BannerWhoWeAre />
            </div>
          </SwiperSlide>

          {/* Page 10 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page11 />
            </div>
          </SwiperSlide>

          {/* Page 11 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <JohnDavid />
            </div>
          </SwiperSlide>

          {/* Page 12 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <JohnDavid2 />
            </div>
          </SwiperSlide>

          {/* Page 13 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <FirstProject />
            </div>
          </SwiperSlide>

          {/* Page 14 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Information />
            </div>
          </SwiperSlide>

          {/* Page 15 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <McKinleyMine />
            </div>
          </SwiperSlide>

          {/* Page 16 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <McKinleyMine2 />
            </div>
          </SwiperSlide>

          {/* Page 17 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <CharacterReserves />
            </div>
          </SwiperSlide>

          {/* Page 18 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Partner />
            </div>
          </SwiperSlide>

          {/* Page 19 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <CharacteristicsReserve3 />
            </div>
          </SwiperSlide>

          {/* Page 20 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <CharacteristicsReserves4 />
            </div>
          </SwiperSlide>

          {/* Page 21 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page22 />
            </div>
          </SwiperSlide>

          {/* Page 22 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <DevelopmentSchedule />
            </div>
          </SwiperSlide>

          {/* Page 23 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <RevenuePlan />
            </div>
          </SwiperSlide>

          {/* Page 24 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <RevenuePlan2 />
            </div>
          </SwiperSlide>

          {/* Page 25 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <DistributionSchedule />
            </div>
          </SwiperSlide>

          {/* Page 26 */}
          <SwiperSlide>
            <div className="bg-neo-main px-5 lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <KeyIndicators />
            </div>
          </SwiperSlide>

          {/* Page 27 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <GoldPriceFuture />
            </div>
          </SwiperSlide>

          {/* Page 28 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page29 />
            </div>
          </SwiperSlide>

          {/* Page 29 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Earnings />
            </div>
          </SwiperSlide>

          {/* Page 30 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page31 />
            </div>
          </SwiperSlide>

          {/* Page 31 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page32 />
            </div>
          </SwiperSlide>

          {/* Page 32 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page33 />
            </div>
          </SwiperSlide>

          {/* Page 33 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <Page34 />
            </div>
          </SwiperSlide>

          {/* Page 34 */}
          <SwiperSlide>
            <div className="bg-neo-main lg:overflow-hidden lg:h-[720px] mt-[100px]">
              <FinalPageMobile />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const getLayout = (page: any): React.ReactElement => (
  <PageLayout>{page}</PageLayout>
);
export { PageLayout };
