import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import { useAccount } from "wagmi";
import Lookup from "@/components/Lookup";

const lookup = () => {
  return (
    <div className="bg-black-gradient-2 h-screen">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>

      <Lookup />
    </div>
  );
};

export default lookup;
