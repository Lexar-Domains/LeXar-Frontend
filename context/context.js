import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { config } from "@/abi";
import domainResolverAbi from "../abi/lexarDomainResolver.json";
import { useAccount } from "wagmi";

export const DomainContext = createContext();

export const DomainContextProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const [userDefault, setUserDefault] = useState();

  const getDefaultDomain = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    const defaultDomain = await domainResolver.getFirstDefaultDomain(address);

    setUserDefault(defaultDomain);
  };

  useEffect(() => {
    getDefaultDomain();
  }, []);

  return (
    <DomainContext.Provider value={{ userDefault }}>
      {children}
    </DomainContext.Provider>
  );
};
