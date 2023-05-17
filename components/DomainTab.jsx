import { useState } from "react";
import SbtDomains from "./SbtDomains";
import StandardDomains from "./StandardDomains";

const DomainTab = () => {
  const [openTab, setOpenTab] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="ml-[250px] text-white text-2xl font-bold text-center mt-14">
        My Domains
      </div>
      <div className="mx-auto mt-4">
        <div className="flex flex-col items-center justify-center">
          <ul className="ml-[250px] flex space-x-2 bg-white rounded-xl">
            <li>
              <a
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                    : ""
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Standard Domains
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                    : ""
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Sbt Domains
              </a>
            </li>
          </ul>
          <div className="w-full mt-6">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <StandardDomains isLoading={loading} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <SbtDomains isLoading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainTab;
