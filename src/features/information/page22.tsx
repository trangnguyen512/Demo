import React from 'react';
import Image from 'next/image';
import User from './image/user1.png';
import Kms from './image/logo-kms.png';
import People from './image/people.png';
import BGLeft from './image/bg01.png';
import Rule from './image/rile.png';

const Page22 = () => {
  return (
    <>
      <div className="bg-neo-main min-h-[800px] h-[calc(100vh-130px)] w-full relative flex justify-center items-center">
        <div className="absolute hidden lg:block z-[1] h-[350px] w-[400px] left-[-20px] bottom-[-10px]">
          <div className="h-full w-full relative">
            <Image
              alt="bg-left"
              src={BGLeft}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className="main-content h-[97%] w-[95%] flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 md:gap-20 lg:gap-10">
          <div className="col-left min-h-[580px] md:min-h-[580px] h-[20%] md:h-full md:mt-[92vh] lg:mt-0   md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start relative">
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={100}
              className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
            >
              鉱山開発パートナー
            </div>
            <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[85%]" />
            <div className="flex flex-col gap-3 mt-4 text-primary">
              <div
                // animateIn="fadeInDown"
                // animateOnce
                // delay={300}
                className="text-size_regulars md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
              >
                我々は現地の鉱山開発のパートナーとして、
                <br />
                <span className="text-secondary">
                  Klepfer Mining Services LLC (以下KMS)
                </span>
                と協力体制を築
                <br />
                いています。
              </div>
              <div
                // animateIn="fadeInDown"
                // animateOnce
                // delay={500}
                className=" text-size_regulars md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
              >
                KMSは以下の各分野の専門家メンバーで構成され、鉱山
                <br />
                開発の全ての分野カバーするための最大限のリソースを
                <br />
                有しております。
              </div>
              <div
                // animateIn="fadeInDown"
                // animateOnce
                // delay={700}
                className="ml-[30px] text-size_regulars md:text-md_size_regular xl:text-lg_size_regular font-medium leading-4 md:leading-5 "
              >
                <span className="list-item">エンジニアリング</span>
                <br />
                <span className="list-item">地質学</span>
                <br />
                <span className="list-item">生物学</span>
                <br />
                <span className="list-item">その他の専門分野</span>
              </div>
              <div
                // animateIn="fadeInDown"
                // animateOnce
                // delay={900}
                className=" text-size_regulars pb-16  md:pb-10 lg:pb-0 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
              >
                彼らの特徴として、幅広い専門知識を短期間または長期
                <br />
                間に渡って提供することが可能な点が挙げられます。
                <br />
                長期的なコミットメントをすることなく、プロジェクト
                <br />
                のニーズに応じて、オン・オフを切り替えることができ
                <br />
                ます。
              </div>
            </div>
          </div>
          <div className="col-right klepfer-img min-h-[700px] md:min-h-[700px] lg:min-h-0 h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-end gap-4">
            <div className="wrap flex items-center justify-center flex-col gap-4   h-[90%] w-full">
              <div className="cols-1 flex items-center justify-center w-full h-1/2 relative bg-left-key-indicators">
                <div className="behind flex items-center justify-start w-full h-full">
                  <div className="w-2/5 h-full  flex flex-col items-start justify-center gap-4 ">
                    <div className="logo w-3/5 h-[20%] px-4 py-1">
                      <div className="h-full w-full relative">
                        <Image
                          src={Kms}
                          objectFit="contain"
                          layout="fill"
                          alt="logo"
                        />
                      </div>
                    </div>
                    <div className="user w-full h-[80%] relative">
                      <Image
                        src={People}
                        objectFit="fill"
                        layout="fill"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="top absolute flex items-start justify-center z-10 right-0 w-[70%] h-full">
                  <div className="mt-3 flex flex-col gap-2 w-full">
                    <div
                      // animateIn="fadeInLeft"
                      // delay={200}
                      // animateOnce
                      className="flex gap-[10px] w-full lg:w-auto h-[45px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]"
                    >
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center items-center">
                        <span className="flex text-[10px] md:text-sm_text items-center">
                          会社名
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex font-bulter_regular justify-center items-center text-[10px] md:text-primary_text font-medium">
                          Klepfer Mining Services LLC
                        </span>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={500}
                      // animateOnce
                      className="flex gap-[10px] w-full lg:w-auto h-[45px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]"
                    >
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center items-center">
                        <span className="flex text-[10px] md:text-sm_text items-center">
                          代表{' '}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex font-bulter_regular justify-center items-center text-[10px] md:text-primary_text font-medium">
                          Eric Klepfer
                        </span>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={700}
                      // animateOnce
                      className="flex gap-[10px] w-full lg:w-auto h-[45px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]"
                    >
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center items-center">
                        <span className="flex text-[10px] md:text-sm_text items-center">
                          住所
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex font-bulter_regular justify-center items-center text-[10px] md:text-[1rem] font-medium">
                          11891 N. Warren St., Hayden, ID 83835
                        </span>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={900}
                      // animateOnce
                      className="flex gap-[10px] w-full lg:w-auto h-[45px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]"
                    >
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center items-center">
                        <span className="flex text-[10px] md:text-sm_text items-center">
                          Phone
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex font-bulter_regular justify-center items-center text-[10px] md:text-primary_text font-medium">
                          +1 (208) 772-6993
                        </span>
                      </div>
                    </div>

                    <div
                      // animateIn="fadeInLeft"
                      // delay={1100}
                      // animateOnce
                      className="flex gap-[10px] w-full lg:w-auto h-[45px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]"
                    >
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center items-center">
                        <span className="flex text-[10px] md:text-sm_text items-center">
                          Website
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex font-bulter_regular justify-center items-center text-[10px] md:text-primary_text font-medium">
                          https://klepfermining.com/
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-table-12 cols-2 w-full h-[50%] flex flex-row md:flex-col lg:flex-row">
                <div className="w-[40%] h-full">
                  <div
                    // animateIn="fadeInRight"
                    // delay={400}
                    className="h-full md:h-[400px] lg:h-full w-full relative right-0 bottom-0"
                  >
                    <Image
                      alt="bg-left"
                      src={User}
                      layout="fill"
                      priority
                      className="object-contain md:object-cover"
                    />
                  </div>
                </div>
                <div className=" w-[60%] h-full">
                  <div className=" content w-full font-light p-2 md:p-5">
                    <div
                      // animateIn="fadeInRight"
                      // delay={600}
                      className="leading-0 md:leading-6 text-[11px] md:text-[16px] font-medium font-zenkaku"
                    >
                      <span className="text-secondary text-lg_size_regular font-bulter_regular ">
                        President
                      </span>
                      <br />
                      <span className="text-[#2B2A2A] text-[20px] md:text-[28px] font-semibold tracking-[5px] font-bulter_regular ">
                        {' '}
                        Eric Klepfer
                      </span>
                      <div className="w-full md:w-[60%] h-1">
                        <div className="h-full w-full relative">
                          <Image
                            alt="bg-left"
                            src={Rule}
                            layout="fill"
                            objectFit="fill"
                            priority
                          />
                        </div>
                      </div>
                      <br />
                      Ericは、Noranda Minerals Corp、
                      <br />
                      Kaiser Steel Corp、Newmont、
                      <br />
                      Placer Dome、などの大手鉱山開発
                      <br />
                      企業で30年以上鉱山業に携わってき
                      <br />
                      た。現在は、KMSの代表として、鉱
                      <br />
                      山の技術、環境、発プログラムを監
                      <br />
                      督・支援を行っている。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page22;
