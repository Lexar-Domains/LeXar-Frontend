"use client";

import { useState, useEffect } from "react";
import styles from "../styles";
import { SiReactivex } from "react-icons/si";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { config } from "@/abi";
import domainResolverAbi from "../abi/lexarDomainResolver.json";
import { useAccount } from "wagmi";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProfileNavbar = () => {
  const { address, isConnected } = useAccount();
  const [userDefault, setUserDefault] = useState();

  const getDefaultDomain = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    const defaultDomain = await domainResolver.getFirstDefaultDomain(address);

    setUserDefault(defaultDomain);
  };

  useEffect(() => {
    getDefaultDomain();
  }, [address]);

  return (
    <nav
      className={`ml-[250px] h-1/2 bg-black-gradient opacity-80 shadow-2xl w-[85%] py-2`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex justify-end items-center gap-3`}
      >
        <form className="w-1/2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shadow-2xl">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-50 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-50 border border-gray-500 rounded-lg bg-gr gradi"
              placeholder="Search Domains..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        <div>
          <MdOutlineNotificationsNone className="text-2xl text-white " />
        </div>
        &nbsp; &nbsp;
        <button className="feedback-container bg-white font-bold p-2 rounded-full text-gray-700 flex items-center">
          <RiArrowDropDownLine className="text-4xl" />
          <img
            src="/roko.jpg"
            alt=""
            className="w-[25px] h-[25px] rounded-full"
          />
          &nbsp; {userDefault}
        </button>
        <div className="gradi p-2 pr-10 text-white rounded-[10px] font-bold">
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
