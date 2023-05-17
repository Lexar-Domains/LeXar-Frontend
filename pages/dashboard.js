import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import AccountHeader2 from "@/components/AccountHeader2";
import { useState, useEffect, createRef } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectModal from "@/components/ConnectModal";
import DomainTab from "@/components/DomainTab";

const Dashboard = () => {
  const [openMintModal, setOpenMintModal] = useState(true);
  const { isConnected, address } = useAccount();
  console.log(isConnected);

  const handleMintOnClose = () => setOpenMintModal(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        {isConnected && (
          <div className="bg-black-gradient-2 h-full">
            <div className="flex">
              <Sidebar />
              <ProfileNavbar />
            </div>
            <div>
              <AccountHeader2 />
              <div>
                <DomainTab />
              </div>
            </div>
          </div>
        )}
        {!isConnected && (
          <div className="bg-primary-black h-screen">
            <ConnectModal
              openMintModal={openMintModal}
              handleOnClose={handleMintOnClose}
            />
          </div>
        )}
      </>
    )
  );
};

export default Dashboard;
