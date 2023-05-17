import React from "react";
import MintNavbar from "@/components/MintNavbar";
import SbtMinterHeader from "@/components/SbtMinterHeader";
import MintFooter from "@/components/MintFooter";

const MintSbt = () => {
  return (
    <div className="bg-primary-black overflow-hidden h-screen">
      <MintNavbar />
      <div>
        <SbtMinterHeader />
      </div>
      <MintFooter />
    </div>
  );
};

export default MintSbt;
