import { useState, useEffect } from "react";
import DomainCard from "./DomainCard";
import domainResolverAbi from "../abi/lexarDomainResolver.json";
import lexarDomainAbi from "../abi/lexarDomainABI.json";
import DomainSkeleton from "../components/skeleton/DomainSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { config } from "../abi";
import { MdHourglassEmpty } from "react-icons/md";

const StandardDomains = () => {
  const { address } = useAccount();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProfileDetails = async () => {
    setLoading(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    const defaultDomain = await domainResolver.getDefaultDomains(address);

    const defaultDomainArr = defaultDomain.split(" ");

    const domainDetails = await getDefaultDomains(defaultDomainArr);

    const domainUriArr = await getDomainUri(domainDetails);

    setResponse(domainUriArr);

    setLoading(false);
  };

  useEffect(() => {
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const getDefaultDomains = async (defaultDomains) => {
    let domainDetailsArr = [];
    let defaultDomainLength;
    if (defaultDomains[defaultDomains.length - 1] === "") {
      defaultDomainLength = defaultDomains.length - 1;
    } else {
      defaultDomainLength = defaultDomains.length;
    }
    for (let i = 0; i < defaultDomainLength; i++) {
      let domainDetails = {
        domainName: "",
        tld: "",
      };
      const domain = defaultDomains[i];
      // console.log(domain);
      const splitArr = domain.split(".");
      const domainName = splitArr[0];
      const tld = "." + splitArr[1];

      domainDetails.domainName = domainName;
      domainDetails.tld = tld;
      domainDetailsArr.push(domainDetails);
    }

    return domainDetailsArr;
  };

  //this function get the images of all domains
  const getDomainUri = async (domainDetailsArr) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    let domainDetails = [];
    for (let i = 0; i < domainDetailsArr.length; i++) {
      let newDomainDetails = {
        domainName: "",
        tld: "",
        image: "",
      };
      const domainDetail = domainDetailsArr[i];

      //this is where the image is gotten from
      const domainUri = await domainResolver.getDomainTokenUri(
        domainDetail.domainName,
        domainDetail.tld
      );
      const domainImage = window.atob(domainUri.substring(29));
      const result = JSON.parse(domainImage);
      // console.log(result);

      newDomainDetails.domainName = domainDetail.domainName;
      newDomainDetails.tld = domainDetail.tld;
      newDomainDetails.image = result.image;

      domainDetails.push(newDomainDetails);
    }

    return domainDetails;
  };

  function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
  }

  const res = isEmptyArray(response);

  return (
    <div className="">
      <div className="ml-[300px] gap-4 columns-2 md:gap-2 sm:columns-2 ">
        {loading && <DomainSkeleton cards={2} />}
        {!loading &&
          response?.map((data, index) => (
            <DomainCard
              key={index}
              domainName={data.domainName}
              tld={data.tld}
              image={data.image}
            />
          ))}
      </div>

      <div className={res ? "block" : "hidden ml-[300px]"}>
        <div className="h-screen mx-[200px] mt-6">
          <p className="text-white text-center ml-[280px] py-[80px] bg-black-gradient rounded-xl text-2xl rex2 flex flex-col items-center">
            <MdHourglassEmpty className="text-[60px]" />
            You currently have no domains
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardDomains;
