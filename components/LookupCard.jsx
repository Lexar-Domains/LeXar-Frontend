import React from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { formatAddress } from '@/utils/formatAddress';

const factoryAddress = '0x19123c5AA973a9F27c07655fcda9456A6b554CAc';

const LookupCard = ({ ownerAddress, contractAddress, tokenId }) => {
  return (
    <div className="mt-6 bg-black-gradient mx-[240px] rounded-lg rex">
      <div className="px-12 py-6 text-secondary-white">
        <div className="flex gap-6 items-center">
          <h1 className="my-2">
            <span className="font-bold"> Domain Owner Address: </span>
            {formatAddress(ownerAddress)}...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2">
            <a
              target="_blank"
              href={'https://testnet.patexscan.io/address/' + ownerAddress}
            >
              View on Patex(Sepolia)
            </a>
          </button>
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="my-4">
            <span className="font-bold">Tld Contract Address:</span>{' '}
            &nbsp;&nbsp;&nbsp; {formatAddress(contractAddress)}...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2 mt-4">
            <a
              target="_blank"
              href={'https://testnet.patexscan.io/address/' + contractAddress}
            >
              View on Patex(Sepolia)
            </a>
          </button>
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <h1 className="my-1">
          <span className="font-bold">Domain Token ID:</span>
          &nbsp;&nbsp;{tokenId}
        </h1>
        <div className="flex items-center">
          <h1 className="my-4">
            <span className="font-bold">Domain Factory Address:</span>
            &nbsp; {formatAddress(factoryAddress)}...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2 ">
            <a
              target="_blank"
              href={'https://testnet.patexscan.io/address/' + factoryAddress}
            >
              View on Patex(Sepolia)
            </a>
          </button>
          &nbsp;&nbsp;&nbsp;
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <h1 className="my-4">
          TLD Status: &nbsp;&nbsp;&nbsp;
          <span className="bg-green-600 p-2 rounded-xl font-bold">
            Active
          </span>{' '}
        </h1>
      </div>
    </div>
  );
};

export default LookupCard;
