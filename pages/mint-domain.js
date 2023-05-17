import React from "react";
import MintNavbar from "@/components/MintNavbar";
import MinterHeader from "@/components/MinterHeader";
import MintFooter from "@/components/MintFooter";

const MintDomain = () => {
  return (
    <div className="bg-primary-black overflow-hidden h-screen">
      <MintNavbar />
      <div>
        <MinterHeader />
      </div>
      <MintFooter />
    </div>
  );
};

export default MintDomain;
