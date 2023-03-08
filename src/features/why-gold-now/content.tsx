import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const WhyGoldNowContent = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-150px)] w-full relative">
      <div className="main-content h-full w-full flex flex-col lg:flex-row gap-0 md:gap-10">
        <div className="col-left md:w-[80%] lg:w-[45%] relative h-full">
          <div className="absolute z-10 text-img md:bottom-3 left-3 text-mobile text-white leading-[15px] md:leading-[23px] lg:leading-[30px] text-[11px] md:text-[18px] lg:text-[20px] font-medium">
            <span> {'投資の神様 '}</span>
            <br />
            ウォーレン・バフェット
            <br />
            CEO / バークシャー・ハサウェイ
          </div>
          <div className="bg-whynow h-[450px] md:h-[600px] lg:h-full w-full"></div>
        </div>
        <div className="col-right text-why-gold p-2 md:p-0 w-full md:w-[55%]">
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce
            delay={100}
            className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]"
          >
            Why Gold Mine Now
          </ScrollAnimation>
          <div className="flex flex-col  gap-4 mt-4">
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={300}
              className="text-mobile text-black font-bulter_bold leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              なぜいま金鉱山事業を行うのでしょうか？
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={400}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              「投資の神様」として名高いウォーレン・バフェット氏が、
              <br />
              カナダにの鉱山会社バリックゴールド社へ投資した理由から
              <br />
              読み解いてみます。
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={500}
              className="text-mobile text-primary leading-[20px] font-zenkaku md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              バフェット氏のレターより：
              <br />
              『金鉱投資にとって、金価格の上昇は金以上のパフォーマン
              <br />
              スをもたらし得るのだ。ゴールドの投資家は、金価格が昨年
              <br />
              から2倍になってもパフォーマンスは2倍にしかならないが、
              <br />
              金鉱山投資の収益は2倍以上になる可能性がある。』
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={600}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              つまり、
              <span className="text-secondary-dark font-medium font-bulter_medium">
                金鉱山へ投資することは、金自体に投資を
              </span>
              <br />
              <span className="text-secondary-dark font-medium font-bulter_medium">
                {' '}
                行うよりも優れたパフォーマンスをもたらす
              </span>
              ことを
              <br />
              示唆しています。
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGoldNowContent;
