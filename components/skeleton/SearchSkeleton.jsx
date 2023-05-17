import React from "react";
import Skeleton from "react-loading-skeleton";

const SearchSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className=" rounded-tr-[40px] w-full h-full cursor-pointer relative overflow-hidden">
        <div className="w-full ">
          <Skeleton
            width={700}
            height={280}
            borderRadius="1rem"
            style={{ padding: "50px" }}
            baseColor="#555"
            duration={0.9}
          />
          {/* &nbsp;&nbsp; */}
          <div className="absolute top-0 right-50 bottom-0">
            <Skeleton />
          </div>
          {/* <div className="mt-4">
            <Skeleton />
          </div> */}
        </div>
      </div>
    ));
};
export default SearchSkeleton;
