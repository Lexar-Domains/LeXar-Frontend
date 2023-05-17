'use client';

import { useState, useEffect } from 'react';
import styles from '../styles';
import { FaWallet } from 'react-icons/fa';
import { ethers } from 'ethers';
import { config } from '@/abi';
import domainResolverAbi from '../abi/lexarDomainResolver.json';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { useAccount, useBalance } from 'wagmi';

const AccountHeader2 = () => {
  const { address } = useAccount();
  const [userDefault, setUserDefault] = useState();
  const { data } = useBalance({
    address: address,
  });

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

  // console.log(data?.formatted);

  const formatAddress = (address, charsToShow = 6) => {
    if (!address || address.length < charsToShow * 2 + 3) {
      return address;
    }

    const start = address.slice(0, charsToShow);
    const end = address.slice(-charsToShow);
    return `${start}...${end}`;
  };

  const formatBalance = (balance) => {
    let balanceFormatted;
    if (balance) {
      balanceFormatted = balance.slice(0, -12);
    } else {
      balanceFormatted = '---';
    }
    return balanceFormatted;
  };

  return (
    <section
      className={`ml-[330px] mt-[60px]   md:flex-row flex-col ${styles}`}
    >
      <h1 className="text-xl text-white font-bold mb-6">Account Overview</h1>

      <div className="flex justify-between mr-[80px] ">
        <div className="flex gap-3 bg-black-gradient-2 p-7 rounded-lg w-[50%]">
          <div>
            <img
              src="/roko.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-md "
            />
          </div>
          &nbsp;&nbsp;
          <div>
            <p className="text-secondary-white mt-6">
              <span className="font-bold bg-[#A020F0] p-2 rounded-l-lg">
                {' '}
                Default Domain:
              </span>
              <span className="bg-white p-2 roun text-black rounded-r-lg font-bold">
                {/* {userDefault} */}
                ghost.xdai
              </span>{' '}
            </p>

            <p className="flex items-center mt-5">
              <span className="text-md font-normal text-gray-300 flex items-center">
                {formatAddress(address)}
                &nbsp; &nbsp;
                <HiOutlineClipboardDocument className="text-xl cursor-pointer" />
              </span>
            </p>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className=" p-7 rounded-lg bg-black-gradient-2 w-[50%]  flex items-center justify-between">
          <div className="">
            <h1>
              <span className="text-gray-300 font-bold">Domain Status:</span>{' '}
              &nbsp; <span className="text-green-400">Active</span>
            </h1>

            <div className="mt-3 text-white">
              <span className="text-gray-300 font-bold">
                {' '}
                Wallet Balance: &nbsp;{' '}
              </span>
              {formatBalance(data?.formatted)} {data?.symbol}
            </div>
          </div>

          <div className="bg-gray-500 p-2 rounded-lg">
            <FaWallet className="text-gray-300 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountHeader2;
