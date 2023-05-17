'use client';

import { useState, useEffect } from 'react';
import styles from '../styles';
import { FaWallet } from 'react-icons/fa';
import { ethers } from 'ethers';
import { config } from '@/abi';
import domainResolverAbi from '../abi/lexarDomainResolver.json';
import { AiOutlineHome } from 'react-icons/ai';
import { RiWallet3Line } from 'react-icons/ri';
import { useAccount, useBalance } from 'wagmi';

const AccountHeader = () => {
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

  const formatAddress = (address) => {
    let addressFormatted;
    if (address) {
      addressFormatted = address.slice(0, -16);
    } else {
      addressFormatted = '---';
    }
    return addressFormatted;
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
      <div className="flex gap-4 items-center">
        <div className=" p-10 bg-black-gradient-2 rex  rounded-lg w-[65%] h-[180px] text-secondary-white  shadow-2xl ">
          {/* <span className="bg-secondary-white p-2 rounded-lg">
            <AiOutlineHome className="text-gray-600 text-2xl" />
          </span> */}
          <p className="flex items-center">
            <span className="text-lg font-bold flex items-center">
              <span className="bg-gray-600 p-2 rounded-md">
                <FaWallet className="text-gray-300" />
              </span>
              &nbsp; Wallet Address:
            </span>
            &nbsp;
            {formatAddress(address)}...
          </p>
          &nbsp;&nbsp;
          <p className="flex items-center">
            <span className="text-lg font-bold flex items-center">
              <span className="bg-gray-600 p-2 rounded-md">
                <FaWallet className="text-gray-300" />
              </span>
              &nbsp; Balance:
            </span>
            &nbsp; {formatBalance(data?.formatted)} {data?.symbol}
          </p>
          <br />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="text-center">
          <div className="mx-[90px]">
            <img
              src="/roko.jpg"
              alt=""
              className="w-[100px] h-[100px] polygon "
            />
          </div>
          <p className="text-secondary-white mt-6">
            <span className="font-bold bg-[#A020F0] p-2 rounded-l-lg">
              {' '}
              Default Domain:
            </span>
            <span className="bg-white p-2 roun text-black rounded-r-lg font-bold">
              {userDefault}
            </span>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccountHeader;
