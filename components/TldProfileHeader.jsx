import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TldProfileHeader = () => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState('');

  const text = 'yellow world';

  return (
    <div className="text-white ml-[250px] mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Minter Page</h1>
      <p className="py-4">
        You can access a page to your created domain using one of these links
      </p>
      <div className="flex items-center gap-6 mb-6">
        <button className="p-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded-xl">
          <a target="_blank" href="/mint-domain">
            Standard Domain Minter
          </a>
        </button>
        <button className="p-2 font-bold bg-gray-500 animate-pulse rounded-xl">
          <a target="_blank" href="/mint-sbt">
            Sbt Domain Minter
          </a>
        </button>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default TldProfileHeader;
