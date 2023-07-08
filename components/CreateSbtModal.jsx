import { useState } from 'react';
import { useAccount } from 'wagmi';
import { config } from '@/abi';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { GridLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';
import Switch from './Switch';
import sbtDomainFactoryAbi from '../abi/sbtFactoryAbi.json';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const CreateSbtModal = ({ visible, onClose }) => {
  const { address } = useAccount();
  const [sbtAddress, setSbtAddress] = useState('');
  const [domainName, setDomainName] = useState('');
  const [price, setPrice] = useState('');
  const [symbol, setSymbol] = useState('');
  const [buyingEnabled, setBuyingEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [hash, setHash] = useState('');

  const createSbtDomain = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const formattedDomainName = domainName
      .replace(/\s+/g, '')
      .toLowerCase()
      .trim();
    const formattedSymbol = symbol.replace(/\s+/g, '').toUpperCase().trim();
    const formattedPrice = ethers.utils.parseEther(price, 'wei');

    console.log(formattedDomainName, formattedSymbol, price, buyingEnabled);

    const sbtFactory = new ethers.Contract(
      config.sbtFactoryAddress,
      sbtDomainFactoryAbi,
      signer
    );

    setIsLoading(true);

    const createSbtDomain = await sbtFactory.createTld(
      formattedDomainName,
      formattedSymbol,
      address,
      formattedPrice,
      buyingEnabled
      // { gasLimit: 1e6 }
    );

    const receipt = await createSbtDomain.wait();
    console.log('createSbtDomain: ', await createSbtDomain.hash);
    console.log('receipt: ', receipt);

    setIsLoading(false);
    setReceipt(true);
    setHash(createSbtDomain.hash);
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  return (
    <>
      <motion.div
        id="container"
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={receipt === true ? 'hidden' : 'block'}>
          {isLoading && (
            <div className=" rex3 bg-primary-black  p-10 rounded-[40px] w-full py-24  flex flex-col items-center justify-center">
              <div className="text-center mx-[60px]">
                <h1 className="font-semibold text-center text-xl text-secondary-white mb-8">
                  Please Wait!{' '}
                  <span className="italic">Creating your Domain...</span>
                </h1>
                <GridLoader size={60} color="#A020F0" />
              </div>
            </div>
          )}
        </div>

        <div className={receipt === true ? 'hidden' : 'block'}>
          {!isLoading && (
            <>
              <div className="rex3 bg-black-gradient-2  p-10 rounded-[40px] w-full  py-20 px-[74px]  flex flex-col items-center justify-center">
                <div className="px-[50px]">
                  <h1 className="text-center text-2xl text-secondary-white">
                    Create your Custom SBT Domain
                  </h1>
                  <form className="flex flex-col" noValidate autoComplete="off">
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                    >
                      Domain Name:
                    </label>
                    <input
                      type="text"
                      className="border  text-sm border-secondary-white p-2 rounded mb-5 bg-secondary-white text-gray-600 placeholder-gray-500 font-bold"
                      placeholder="Add domain name (i.e '.patex')"
                      required
                      onChange={(e) => setDomainName(e.target.value)}
                    />
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                    >
                      Symbol:
                    </label>
                    <input
                      type="text"
                      className="border text-sm border-secondary-white  text-gray-800 placeholder-gray-600 bg-secondary-white p-2 rounded mb-5"
                      placeholder='Domain symbol (i.e "TLD", "XAR")'
                      required
                      // defaultValue={symbol}
                      onChange={(e) => setSymbol(e.target.value)}
                    />
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2 pb-4"
                    >
                      Buying Status:
                    </label>
                    <Switch
                      isOn={buyingEnabled}
                      handleToggle={() => setBuyingEnabled(!buyingEnabled)}
                    />
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                    >
                      Mint Price:
                    </label>
                    <input
                      id="amount"
                      type="number"
                      min="0.000"
                      step="0.001"
                      className="border border-secondary-white  p-2 rounded mb-5 text-sm text-gray-800 placeholder-gray-600 bg-secondary-white"
                      placeholder="price per mint"
                      required
                      // defaultValue={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </form>
                  <div className="text-center">
                    <button
                      className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg"
                      onClick={createSbtDomain}
                    >
                      Create Domain
                    </button>
                  </div>
                  <span className="text-white font-semibold mt-7">
                    except .eth, .ens, .com, .org, .net, .smol, .dao, .xyz{' '}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={receipt === true ? 'block' : 'hidden'}>
          <div className="rex3 bg-black-gradient  p-10 rounded-[40px] w-full py-32 px-20  flex flex-col items-center justify-center">
            <h1 className="text-lg text-secondary-white">
              Your domain has been created on the Patex Sepolia Testnet.
            </h1>
            <div className="flex items-center w-full justify-center mt-[20px] text-[100px] text-green-500">
              <IoMdCheckmarkCircle />
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 text-white mt-4 font-bold rounded-xl">
              <a
                target="_blank"
                href={'https://testnet.patexscan.io/tx/' + hash}
              >
                Verify Transaction
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CreateSbtModal;
