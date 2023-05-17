import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const UpdateMetadata = ({ openMintModal, handleOnClose, domainName, tld }) => {
  return (
    <>
      <Transition appear show={openMintModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-serif"
          onClose={handleOnClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl rex bg-black-gradient-2 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-secondary-white"
                  >
                    Update Domain Metadata for &nbsp;
                    <span className="font-bold text-xl">
                      ({domainName}
                      {tld})
                    </span>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-secondary-white ">
                      You can add custom data to your domain
                    </p>
                  </div>

                  <div className="mt-2">
                    <form
                      className="flex flex-col"
                      noValidate
                      autoComplete="off"
                    >
                      <label
                        htmlFor="eventname"
                        className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                      >
                        Twitter:
                      </label>
                      <input
                        type="text"
                        className="border  text-sm border-secondary-white p-2 rounded mb-5 bg-black-gradient text-white"
                        placeholder="Please input your Twitter URL"
                        required
                      />
                      <label
                        htmlFor="eventname"
                        className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                      >
                        Instagram:
                      </label>
                      <input
                        type="text"
                        className="border  text-sm border-secondary-white p-2 rounded mb-5 bg-black-gradient text-white"
                        placeholder="Please input your Instagram URL"
                        required
                      />
                      <label
                        htmlFor="eventname"
                        className="block text-sm font-medium text-secondary-white sm:mt-px sm:pt-2"
                      >
                        URL Link:
                      </label>
                      <input
                        type="text"
                        className="border  text-sm border-secondary-white p-2 rounded mb-5 bg-black-gradient text-white"
                        placeholder="Please input your personal website URL"
                        required
                      />
                    </form>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70"
                      //   onClick={closeModal}
                    >
                      Confirm
                    </button>
                    &nbsp;&nbsp;
                    {/* <button
                      type="button"
                      className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 "
                      //   onClick={closeModal}
                    >
                      <a target="_blank" href="">
                        {' '}
                        Confirm on Opensea
                      </a>
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateMetadata;
