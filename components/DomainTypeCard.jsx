import { useState } from "react";
import CreateModal from "./CreateSbtModal";
import CreateStaModal from "./CreateStaModal";

const DomainTypeCard = () => {
  const [showSbtModal, setShowSbtModal] = useState(false);
  const [showStandardModal, setShowStandardModal] = useState(false);

  const handleOnClose = () => setShowSbtModal(false);

  const handleStandardClose = () => setShowStandardModal(false);

  return (
    <div className="ml-[350px] w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
      <div className="shadow p-5 rounded-lg border-t-4 border-purple-900 bg-black-gradient  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rex">
        <p className="uppercase text-sm font-medium text-secondary-white">
          Standard Domain
        </p>

        <p className="mt-4 text-3xl text-secondary-white font-medium">Free</p>

        <p className="mt-4 font-medium text-secondary-white">
          Standard domains are transferable and can be resold on an NFT
          marketplace <span className="italic">(i.e Opensea)</span>
        </p>

        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Transferable
            </li>

            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Can be sold on a marketplace
            </li>

            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Perfect for communities{" "}
              <span className="italic"> (i.e whitelist)</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <button
            className="bg-gray-500 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white"
            visible={showSbtModal}
            onClick={() => setShowStandardModal(true)}
          >
            Create Standard Domain
          </button>
        </div>
      </div>

      <div className="shadow p-5 rounded-lg border-t-4 border-purple-900 bg-black-gradient-2  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rex">
        <p className="uppercase text-sm font-medium text-secondary-white">
          SBT Domains
        </p>

        <p className="mt-4 text-3xl text-secondary-white font-medium">Free</p>

        <p className="mt-4 font-medium text-secondary-white">
          SBT domains are non-transferable and allows for immutable ownership of
          a domain on the blockchain
        </p>

        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Non-transferable{" "}
              <span className="italic text-sm">
                &nbsp; (linked to the wallet forever)
              </span>
            </li>

            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Provides easily verifiable digital identity
            </li>

            <li className="inline-flex items-center text-secondary-white">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Perfect for organizations{" "}
              <span className="italic">(i.e Schools, DAOs)</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <button
            className="bg-gray-500 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white"
            visible={showSbtModal}
            onClick={() => setShowSbtModal(true)}
          >
            Create SBT Domain
          </button>
        </div>
      </div>
      <CreateModal onClose={handleOnClose} visible={showSbtModal} />
      <CreateStaModal
        onClose={handleStandardClose}
        visible={showStandardModal}
      />
    </div>
  );
};

export default DomainTypeCard;
