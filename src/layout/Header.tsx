import React, { useEffect, useState } from 'react';
import { MENU } from './model';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type TMenu = {
  id: number;
  href: string;
  label: string;
  sub_menu?: any;
  pageActive?: number;
};
interface IProps {
  activeTab: number;
}
interface IListPages {
  id: number | any;
  page_parent: number | any;
  sub_page: Array<number> | any;
}

const Header: React.FC<IProps> = ({ activeTab = 0 }) => {
  const router = useRouter();

  const [openSubmenu, setOpenSubmenu] = useState<boolean>(false);

  const ListPages = [
    { id: 1, page_parent: 0, sub_page: [] },
    { id: 2, page_parent: 1, sub_page: [2, 3, 4] },
    { id: 3, page_parent: 5, sub_page: [6] },
    { id: 4, page_parent: 7, sub_page: [8] },
    { id: 5, page_parent: 9, sub_page: [10, 11, 12, 13] },
    { id: 6, page_parent: 14, sub_page: [15, 16, 17, 18, 19, 20, 21, 22] },
    { id: 7, page_parent: 23, sub_page: [24, 25, 26] },
    { id: 8, page_parent: 27, sub_page: [28, 29, 30, 31, 32, 33, 34] },
  ];
  // initial state (first)
  const [pagesAndSubPages, setPagesAndSubPages] = useState<IListPages | any>({
    id: 1,
    page_parent: 1,
    sub_page: [2, 3, 4],
  });

  useEffect(() => {
    const findPage = ListPages.find(item => {
      return (
        item.page_parent === activeTab || item.sub_page.includes(activeTab)
      );
    });
    setPagesAndSubPages(findPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  return (
    <div className="is-sticky w-full h-[100px]">
      {/* <div className="h-[80px] lg:h-[100px] w-full"> */}
      <div className="wrap-header flex items-center gap-2 lg:gap-1 md:justify-between md:items-center lg:justify-center h-full w-full">
        <div className="logo w-[40%] h-4/5 md:w-[10%] md:h-4/5 relative cursor-pointer">
          <Image
            onClick={() => window.open('/', '_self')}
            alt="Logo"
            src={'/header/mainlogo.png'}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:hidden lg:block pages w-[90%] h-full ">
          <div className="wrap-pages flex items-center justify-center w-full h-full font-zenkaku font-medium text-primary_text text-primary">
            {MENU.map((item: TMenu) => {
              return (
                <>
                  {item.href === '/' ? (
                    <>
                      <div className="item hidden">{item.label}</div>
                    </>
                  ) : (
                    <>
                      <div className="item flex items-center justify-center cursor-pointer  w-1/6 relative">
                        <div className="relative group">
                          <div
                            className={`
                            ${
                              activeTab === item.pageActive && 'text-secondary'
                            } 
                            ${router.pathname === item.href && 'text-secondary'}
                            text-[14px] group-hover:text-secondary lg:text-md_size_regular font-medium font-bulter_medium`}
                          >
                            {item.label}
                          </div>
                          <div
                            className={`sub-menu absolute z-[999] top-[25px] text-[13px] font-medium`}
                          >
                            {item.sub_menu?.map((itemx: TMenu) => {
                              return (
                                <React.Fragment key={itemx.id}>
                                  {(item.pageActive === activeTab ||
                                    pagesAndSubPages?.sub_page?.includes(
                                      itemx.pageActive,
                                    )) && (
                                    <div className="absolute flex items-center justify-center gap-1 w-[100px] left-[-5px] top-[-45px] ">
                                      <div className="h-[8px] w-[8px] rounded-full relative shadow-xl">
                                        <Image
                                          alt="Logo"
                                          src={'/header/selected-page.png'}
                                          layout="fill"
                                          objectFit="contain"
                                          priority
                                        />
                                      </div>
                                      <div className="h-[8px] w-[8px] rounded-full relative shadow-xl">
                                        <Image
                                          alt="Logo"
                                          src={'/header/selected-page.png'}
                                          layout="fill"
                                          objectFit="contain"
                                          priority
                                        />
                                      </div>
                                      <div className="h-[8px] w-[8px] rounded-full relative shadow-xl">
                                        <Image
                                          alt="Logo"
                                          src={'/header/selected-page.png'}
                                          layout="fill"
                                          objectFit="contain"
                                          priority
                                        />
                                      </div>
                                    </div>
                                  )}
                                  <div
                                    className={`hover:text-secondary ${
                                      activeTab === itemx.pageActive &&
                                      'text-secondary'
                                    } 
                                    ${
                                      router.pathname === itemx.href &&
                                      'text-secondary'
                                    }
                                    w-max`}
                                  >
                                    <a
                                      className={`${
                                        activeTab === item.pageActive ||
                                        pagesAndSubPages?.sub_page?.includes(
                                          itemx.pageActive,
                                        )
                                          ? 'block'
                                          : 'hidden'
                                      } group-hover:block text-[.9rem] font-bulter_medium `}
                                    >
                                      {itemx.label}
                                    </a>
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
        {/* menu mobile */}
        <div className="menu-mobile  h-full flex  lg:hidden items-center justify-end w-[60%] md:w-[5%]">
          <div
            onClick={() => setOpenSubmenu(true)}
            className="hamburger-menu flex flex-col gap-1 bg-slate-800 group px-1 py-2 shadow-lg rounded-sm"
          >
            <div className="h-[2px] w-[25px] rounded-md bg-white "></div>
            <div className="h-[2px] w-[25px] rounded-md bg-white"></div>
            <div className="h-[2px] w-[25px] rounded-md bg-white"></div>
          </div>
        </div>
        <div
          onClick={() => setOpenSubmenu(false)}
          className={`overlay ${
            openSubmenu ? 'block' : 'hidden'
          } md:hidden z-[998] fixed bg-black/40 h-full w-full top-0`}
        ></div>
        <div
          className={`${
            openSubmenu ? 'left-0' : 'left-[-450px]'
          } transition-all ease-in-out delay-150 
               top-0 fixed px-4 flex md:block lg:hidden flex-col items-start justify-start h-full bg-stone-100 shadow-md w-[60%] md:w-[40%] z-[999]`}
        >
          <div className="logo h-[120px] w-[120px] relative">
            <Image
              onClick={() => window.open('/', '_self')}
              alt="Logo"
              src={'/header/mainlogo.png'}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="menu-navigation flex flex-col items-start justify-start mt-4 bg-green-500z w-full h-full">
            <div className="wrap-menu-navigation w-full font-bulter_regular  text-lg font-base flex flex-col gap-5 mt-4 ">
              <div className="wrap-item-menu flex flex-col gap-3 relative">
                {MENU.map((item: any) => {
                  return (
                    <div
                      className="item-page flex flex-col justify-between items-start"
                      key={item.id}
                    >
                      <label htmlFor={`${item.id}`}>
                        <Link href={item.href}>
                          <div
                            className="font-zenkaku font-medium"
                            onClick={() => setOpenSubmenu(false)}
                          >
                            {item.label}
                          </div>
                        </Link>
                      </label>
                      <input
                        className="sr-only peer"
                        type="checkbox"
                        id={`${item.id}`}
                      />
                      {item.sub_menu && (
                        <label
                          className="h-5 w-5 right-0 absolute peer-checked:rotate-90 transition-all delay-100"
                          htmlFor={`${item.id}`}
                        >
                          <Image
                            alt="Logo"
                            src={'/header/direction.png'}
                            layout="fill"
                            objectFit="contain"
                            priority
                          />
                        </label>
                      )}

                      <div className="hidden peer-checked:flex flex-col sub-menu-mobile px-4 text-[14px]">
                        {item.sub_menu?.map((itemx: any) => {
                          return (
                            <Link
                              className={`hover:text-secondary w-max     
                            `}
                              key={itemx.id}
                              href={itemx.href}
                            >
                              <div onClick={() => setOpenSubmenu(false)}>
                                {itemx.label}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute h-[25px] w-[25px] bg-white shadow-3xl rounded-full p-1 right-[15px] top-[10px]">
            <div
              className="relative h-full w-full"
              onClick={() => setOpenSubmenu(false)}
            >
              <Image
                alt="Cancel"
                src={'/header/cancel.png'}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
