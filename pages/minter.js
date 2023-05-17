import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileNavbar from "@/components/ProfileNavbar";
import TldProfileHeader from "@/components/TldProfileHeader";

const minter = () => {
  return (
    <div className="bg-black-gradient h-screen">
      <div className="flex">
        <Sidebar />
        <ProfileNavbar />
      </div>
      <TldProfileHeader />
    </div>
  );
};

export default minter;
