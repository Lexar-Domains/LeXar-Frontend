import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { navigation } from '@/constants';
import { SiHiveBlockchain } from 'react-icons/si';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <nav
        className="hidden  fixed top-0 left-0 bg-black-gradient-2 shadow-2xl items-center h-screen w-[250px]  right-0  navbar mt-0  md:block "
        aria-label="Sidebar"
      >
        <Link className="flex items-center ml-14 mt-6 " href="/">
          <SiHiveBlockchain className="text-white text-[24px]" />
          &nbsp;&nbsp;
          <h2 className="font-extrabold text-[24px] leading-[30px] text-secondary-white">
            LeXar
          </h2>
        </Link>
        <ul className="list-none mt-16 ml-6 flex flex-col sm:flex justify-start items-start gap-6 flex-1 ">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} scroll={false}>
              <span
                className={`font-poppins flex items-center font-normal cursor-pointer text-[16px]  ${
                  router.pathname == item.href
                    ? 'text-white font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-2 px-6 rounded-md transition-all duration-500'
                    : 'text-secondary-white px-6 hover:opacity-80'
                } `}
              >
                <div className="text-[20px]">{item.icon}</div>
                &nbsp;&nbsp;
                <div>{item.name}</div>
              </span>
            </Link>
          ))}
          <Link href="/integration" scroll={false}>
            <span
              className={`font-poppins flex items-center font-normal cursor-pointer text-[16px]  ${
                router.pathname === '/integration'
                  ? 'text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 px-6 rounded-md transition-all duration-500'
                  : 'text-secondary-white px-2 ml-4 hover:opacity-80'
              } `}
            >
              <div className="text-[20px]">
                <MdOutlineIntegrationInstructions />
              </div>
              &nbsp;&nbsp;
              <div className="flex items-center">
                <p>Integrations</p>
                &nbsp; &nbsp;
                <span className="text-[12px] p-[4px] bg-purple-600 rounded-lg">
                  coming
                </span>
              </div>
            </span>
          </Link>
          <Link href="/send-tokens" scroll={false}>
            <span
              className={`font-poppins flex items-center font-normal cursor-pointer text-[16px]  ${
                router.pathname === '/send-tokens'
                  ? 'text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 px-6 rounded-md transition-all duration-500'
                  : 'text-secondary-white px-2 ml-4 hover:opacity-80'
              } `}
            >
              <div className="text-[20px]">
                <FiUpload />
              </div>
              &nbsp;&nbsp;
              <div className="flex items-center">
                <p>Send Tokens</p>
                &nbsp; &nbsp;
                <span className="text-[12px] p-[4px] bg-purple-600 rounded-lg">
                  coming
                </span>
              </div>
            </span>
          </Link>
          <li className="flex flex-col ml-6 mt-14">
            <span className="flex items-center text-secondary-white">
              {' '}
              <MdOutlineSettings className="text-2xl  group-hover: " />
              &nbsp; Settings
            </span>
            <span className="flex items-center text-secondary-white mt-4">
              <MdOutlineMoreHoriz className="text-2xl  group-hover: " />
              &nbsp; More
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
