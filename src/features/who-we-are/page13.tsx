import React from 'react';
const FirstProject = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full">
        <div className="title w-full md:w-[90%] ml-0 md:ml-[30px] h-17 font-bulter_bold font-medium text-[25px] md:text-size_pcmd lg:text-size_pcmd xl:size_pclg text-primary">
          第一号プロジェクト概要
        </div>
        <div className="ml-[30px] border-b-[1.5px] border-[#707070] w-full lg:w-[80%] mb-[20px]" />
        <div className="flex flex-col gap-5 md:gap-1 xl:pr-12 xl:pl-12 lg:px-12 lg:w-full lg:h-[470px] lg:overflow-scroll">
          <div className="flex flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5 h-[50px] xl:h-[50px] border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[30px] font-semibold md:font-medium">
              {' '}
              事業名
            </div>
            <div className="p-2 xl:p-5 h-[50px] xl:h-[50px] border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary  text-des_size  md:text-md_size_regular xl:text-xl-size font-medium leading-[25px] ">
              {' '}
              鉱山プロジェクトを行う外国合同会社社員権
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5 h-[50px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[20px]  xl_size font-semibold md:font-medium">
              {' '}
              募集枠
            </div>
            <div className="p-2 xl:p-5 h-[50px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[5]  items-center text-primary leading-[20px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              2,000,000 USD (*1)
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5 h-[50px] xl:h-50px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[20px]  xl_size font-semibold md:font-medium">
              {' '}
              当会社の事業内容
            </div>
            <div className="p-2 xl:p-5 h-[50px] xl:h-[5[0px]  border-solid border-[1px] border-[#707070] flex flex-[5]  items-center text-primary leading-[20px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              2M USDの資金調達により、McKinley Mine鉱山事業収益
              の13%(*2)を得る権利の取得
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5 h-[50px] md:h-[60px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[20px]  xl_size font-semibold md:font-medium">
              {' '}
              金鉱山名称及び所在地
            </div>
            <div className="p-2 xl:p-5 h-[50px] md:h-[60px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[5]  items-center text-primary leading-[20px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              McKinley Mountain, Township 25 North, Range 1 East Boise Meridian,
              Idaho
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5  h-[50px] md:h-[60px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[25px]  xl_size font-semibold md:font-medium">
              {' '}
              募集内容
            </div>
            <div className="p-2 xl:p-5  h-[50px] md:h-[60px] xl:h-[50px]  border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary leading-[25px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              最低口数1口 = 1,300 USドル + 事務管理手数料3% (購入口数に対して)
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5 h-[90px] md:h-[120px] lg:h-[80px] xl:h-[130px] text-center border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[25px] xl:leading-[40px]  xl_size font-semibold md:font-medium">
              有限責任社員資格の権
              <br />
              利と会社の義務
            </div>
            <div className="p-2 xl:p-5 h-[90px] md:h-[120px] lg:h-[80px] xl:h-[130px] border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary leading-[25px] xl:leading-[40px] text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              1: 社員権資格の収益の受取り権 (採掘開始後)
              <br />
              2: 社員権保有分の会社の議決権
              <br />
              3: 出資金を超える負債や債務を負わない会社の義務
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5  h-[50px] md:h-[60px] xl:h-[60px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[25px]  xl_size font-semibold md:font-medium">
              {' '}
              配当開始 & 方法
            </div>
            <div className="p-2 xl:p-5  h-[50px] md:h-[60px] xl:h-[60px]  border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary leading-[25px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              2024年1月頃 (予定) / 支払い通貨: USDC or USDT / 配当ターム:
              四半期に1回
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5  h-[50px] md:h-[70px] lg:h-[60px] xl:h-[60px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[25px]  xl_size font-semibold md:font-medium">
              {' '}
              配当
            </div>
            <div className="p-2 xl:p-5  h-[50px] md:h-[70px] lg:h-[60px] xl:h-[60px]  border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary leading-[25px]  text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              4年間合計300-400%前後を想定 (別途詳細を確認お願いします)
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="p-2 xl:p-5  h-[50px] md:h-[450px] lg:h-[300px] xl:h-[200px]  border-solid border-[1px] border-[#707070] flex flex-[4] justify-center items-center text-des_size md:text-md_size_regular xl:text-xl-size  xl:flex-1 text-primary leading-[25px]  xl_size font-semibold md:font-medium">
              {' '}
              社員権資格解約条件
            </div>
            <div className="p-2 xl:p-5  h-[50px] md:h-[450px] lg:h-[300px] xl:h-[200px]  border-solid border-[1px] border-[#707070] flex flex-[5] items-center text-primary leading-[25px] xl:leading-[30px] text-des_size md:text-md_size_regular xl:text-xl-size  font-medium">
              {' '}
              社員権資格継続期は契約日から2030年12月31日までとする。中途退社を行う場合には、原則として、他の社員若しく
              <br />
              は第三 者に対して、本契約に基づく出資者たる地位を売却して譲渡す
              るものとし、かかる譲渡先は、中途退社を行
              <br />
              う社員自身の責任 となります。
              なお、第三者への譲渡によらない中途退社を希望する場合、解約手数料10％がかか
              <br />
              り、返還金から控除されます。又当方で
              ポジション希望者を探す為出資金返還に時間がかかります。事業の中途で
              <br />
              の償還となるため、時価で評価された出資金額の返還金額は、当初出資時に比べて大きく目減りする場合がありま
              <br />
              す。その場合の返還金額は、出資金の10%となります。
            </div>
          </div>
        </div>
        <div className="text-primary leading-[25px] xl:leading-[30px] mt-[10px] mb-[10px]  text-sm_text md:text-des_size xl:text-[17px] font-medium">
          <div className="pb-3">
            (*1) McKinley Mine 鉱山プロジェクト総額は15,000,000
            USDで、その内訳は(1)採掘準備・調査費用(8M
            USD)、(3)採掘設備投資費用(4M USD)、(4)その他オペレーション費用(3M
            <br />
            USD)となっ ています。
            採掘開始2023年12月を予定しておりますが、予定が変更になる可能性があります。採掘/生産の収益予想シュミレーションは添付資料御参照下さい。
          </div>
          <div>
            (*2) McKinley Mine鉱山開発の総資金調達額15M USDのうち2M USDを Neo
            Gold Money
            LLCが拠出し、事業収益権の13%を取得します。当会社は、かかる拠出に有限責任社員か
            <br />
            らの出資金を充てます。
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstProject;
