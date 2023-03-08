import React from 'react';
import Header from '@/layout/Header';
import HomeMobile from '../page-home-mobile';
import Introduction from 'src/features/introduction';
import NeoGoldLLC from 'src/features/neo-gold-llc';
import PaPurposeOfFundraising from 'src/features/purpose-of-fundraising';
import ReturnOnInvestmentTargetPage from '../introduction/return-on-investment-target';
import OurMissionMobile from 'src/features/our-mission/home-ourmisson';
import OurMissionContent from 'src/features/our-mission/contentmobile';
import WhyGoldNowMobile from 'src/features/why-gold-now/homepage';
import WhyGoldNowContent from 'src/features/why-gold-now/content';
import WhoAreYou from 'src/features/who-we-are';
import Page11 from 'src/features/who-we-are/page11';
import JohnDavid from 'src/features/who-we-are/page12';
import JohnDavid2 from 'src/features/who-we-are/pageJohn2';
import FirstProject from 'src/features/who-we-are/page13';
import Information from 'src/features/information/information';
import McKinleyMine from 'src/features/information/mckinley-mine';
import CharacterReserves from 'src/features/information/character-reserve';
import Page22 from 'src/features/information/page22';
import DevelopmentSchedule from 'src/features/information/development-schedule';
import RevenuePlan from 'src/features/revenue-plan';
import RevenuePlan2 from 'src/features/revenue-plan/revenue-plan-2';
import DistributionSchedulePage from '../revenue-plan/distribution-schedule';
import KeyIndicators from 'src/features/revenue-plan/key-indicators';
import GoldPriceFuture from 'src/features/gold-price-future/gold-price-future';
import Page29 from 'src/features/gold-price-future/Page29';
import Earnings from 'src/features/gold-price-future/earnings';
import Page31 from 'src/features/gold-price-future/Page31';
import Page32 from 'src/features/gold-price-future/Page32';
import Page33 from 'src/features/gold-price-future/Page33';
import Page34 from 'src/features/gold-price-future/Page34';
import FinalPageMobile from 'src/features/finalpagemobile';

export default function Mobile() {
  return (
    <>
      <div className="block md:hidden lg:hidden">
        <Header activeTab={0} />
      </div>
      <div className="block md:hidden lg:hidden">
        <div className="page-1">
          <HomeMobile />
        </div>
        <div className="page-2">
          <Introduction />
        </div>

        <div className="page-3">
          <NeoGoldLLC />
        </div>
        <div className="page-4">
          <PaPurposeOfFundraising />
        </div>
        <div className="page-5">
          <ReturnOnInvestmentTargetPage />
        </div>
        <div className="page-6">
          <OurMissionMobile />
        </div>
        <div className="page-7">
          <OurMissionContent />
        </div>
        <div className="page-8">
          <WhyGoldNowMobile />
        </div>
        <div className="page-9">
          <WhyGoldNowContent />
        </div>
        <div className="page-10">
          <WhoAreYou />
        </div>
        <div className="page-11">
          <Page11 />
        </div>
        <div className="page-12">
          <JohnDavid />
        </div>
        <div className="page-13">
          <JohnDavid2 />
        </div>
        <div className="page-14">
          <FirstProject />
        </div>
        <div className="page-15">
          <Information />
        </div>
        <div className="page-16">
          <McKinleyMine />
        </div>
        <div className="page-17">
          <CharacterReserves />
        </div>
        <div className="page-18 mt-[50vh]">
          <Page22 />
        </div>
        <div className="page-19">
          <DevelopmentSchedule />
        </div>
        <div className="page-20">
          <RevenuePlan />
        </div>
        <div className="page-21">
          <RevenuePlan2 />
        </div>
        <div className="page-22">
          <DistributionSchedulePage />
        </div>
        <div className="page-23">
          <KeyIndicators />
        </div>
        <div className="page-24">
          <GoldPriceFuture />
        </div>
        <div className="page-25">
          <Page29 />
        </div>

        <div className="page-26">
          <Earnings />
        </div>
        <div className="page-27">
          <Page31 />
        </div>

        <div className="page-28">
          <Page32 />
        </div>

        <div className="page-29">
          <Page33 />
        </div>

        <div className="page-30">
          <Page34 />
        </div>

        <div className="page-31  mt-[120vh]">
          <FinalPageMobile />
        </div>
      </div>
    </>
  );
}
