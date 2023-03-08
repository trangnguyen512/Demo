import React from 'react';
import Image from 'next/image';
import Pages from './image/pages.png';
import LineBottom from './image/line-bottom.png';

const Partner = () => {
  return (
    <div className="bg-neo-main min-h-[700px] h-[calc(100vh-130px)] w-full relative flex justify-center items-center">
      <div className="main-content h-[100%] w-[95%] flex flex-col  md:grid md:grid-flow-row xl:grid-flow-col md:grid-rows-6 xl:grid-rows-none xl:grid-cols-2 gap-2 md:gap-40 xl:gap-10">
        <div className="col-left md:h-full lg:h-[20%] md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 xl:gap-4 relative">
          <div className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1px] border-black w-full">
            埋 蔵 量 情 報
          </div>
          {/* <div className=" border-b-[1px] border-black w-full"></div> */}
          <div className="content w-full font-light">
            <div className="text-primary text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
              金鉱山全体の推定埋蔵量は調査レポートによると
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                約
              </span>
              <br />
              <span className="text-secondary-dark font-semibold font-bulter_bold ">
                55,000oz = 1.6 トン(日本円換算で約140億円相
              </span>
              <br />
              <span className="text-secondary-dark font-semibold"> 算) </span>
              とされています。(1 USD = 130円換算)
            </div>
          </div>
          <div className="text-primary text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
            レポートを作成したパートナーであるKlepfer Mining
            <br />
            Services LLCは、SME/43-101と呼ばれる、鉱物資源プロ
            <br />
            ジェクトの情報開示基準に基づいたレポートの作成をし
            <br />
            ており、これは
            <span className="text-secondary-dark font-semibold font-bulter_bold">
              上場企業が鉱山を所有する際に取
            </span>
            <br />
            <span className="text-secondary-dark font-semibold font-bulter_bold">
              得しなければいけない厳格な基準
            </span>
            となっていま
            <br />
            す。
          </div>
          <div className="text-primary text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
            こちらのレポートの内容はすべて公開しております。
          </div>
        </div>
        <div className="col-right h-[80%] md:h-full md:row-start-1 md:row-end-6 xl:row-span-1 xl:col-span-1 flex flex-col items-start justify-start gap-4 xl:gap-10">
          <div className="h-0 xl:h-16"></div>
          <div className="size-table h-1/2 min-h-[300px] xl:min-h-0 w-full flex flex-col items-start justify-between md:justify-center gap-2 bg-left-key-indicators py-8 md:py-4 px-2 md:px-4">
            <div className="md:w-max text-center md:text-left h-[5%] font-bulter_regular font-medium  text-mobile xl:text-md_size_regular text-primary">
              McKinley鉱山の30ページにわたる詳細な調査レポート
            </div>
            <div className="w-full mt-2 md:mt-0 flex items-center justify-center h-[70%] md:h-[90%]">
              <div className="w-[90%] lg:w-[80%] mt-4 xl:w-[70%] h-full relative">
                <Image
                  src={Pages}
                  objectFit="fill"
                  layout="fill"
                  alt="left image"
                />
              </div>
            </div>
            <div className="w-full truncate text-[12px] xl:text-[14px] text-center h-fit text-primary font-zenkaku">
              <a
                href="https://drive.google.com/file/d/1w5SHxwl56uwBmWGiIpHL47j068NY7goF/view?usp=sharing"
                target={'_blank'}
                rel="noreferrer"
              >
                https://drive.google.com/file/d/1w5SHxwl56uwBmWGiIpHL47j068NY7goF/view?usp=sharing
              </a>
            </div>
          </div>
          <div className="h-[70%] md:h-1/2 w-full flex flex-col items-start justify-center gap-6 bg-left-key-indicators py-4 px-0 md:px-4 relative">
            <div className="md:w-max text-center md:text-left h-[5%] font-zenkaku font-semibold text-[13px] xl:text-md_size_regular text-primary ">
              McKinley鉱山の調査レポート (SMEレポート）より抜粋
            </div>
            <div className="w-full mt-1 p-0 md:p-4 flex items-center justify-center h-[60%] bg-white">
              <div className="table h-full w-full">
                <div className="head text-center text-xs md:text-base xl:text-size_regular    font-zenkaku text-primary font-semibold h-1/6 w-full flex items-center justify-center border-[1px] border-black border-solid">
                  Preliminary Resource based on Kriging Model at 0.066 Ounces
                  per Ton Cut Off Grade
                </div>
                <div className="flex items-center justify-center h-1/6 w-full">
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    Resource Category
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    tons
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    grade opt
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    ounces of gold
                  </div>
                </div>
                <div className="flex items-center justify-center h-1/6 w-full">
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    measured
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    79,261
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    0.195
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    16,456
                  </div>
                </div>
                <div className="flex items-center justify-center h-1/6 w-full">
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    indicated
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    87,469
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    0.18
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    15,744
                  </div>
                </div>
                <div className="flex items-center justify-center h-1/6 w-full">
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    inferred
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    114,728
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    0.208
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-medium w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    23,863
                  </div>
                </div>
                <div className="flex items-center justify-center h-1/6 w-full">
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    Total Resource
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    281,458
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[1px] border-black border-solid">
                    0.197
                  </div>
                  <div className="text-[12px] md:text-base text-center font-zenkaku text-primary font-semibold w-1/4 h-full flex items-center justify-center border-[3px] border-secondary-dark  border-solid">
                    55,063
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-2 xl:-mt-5 font-zenkaku w-full text-center text-[10px] md:text-md_size_regular  2xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
              2018年のレポートによる
              <span className="text-secondary-dark">55,063トン</span>
              の金埋蔵量が推定されます。
            </div>
            {/* line absolute */}
            <div className="absolute left-0 md:left-[0px] h-[5.5rem] md:h-32 lg:h-[100px] xl:h-30 2xl:h-32 w-full bottom-[10px] md:bottom-[10px] p-4">
              <div className="relative h-full w-[103%]">
                <Image src={LineBottom} layout="fill" objectFit="fill" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
