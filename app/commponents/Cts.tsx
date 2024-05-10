import React from "react";
import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

const Cts = () => {
  return (
    <div className="px-[20px] pb-16 lg:container lg:px-18 mx-auto ">
      <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[32px] lg:py-[89px]">
        <h1 className="text-white text-center text-[32px] font-medium lg:font-semibold leading-[64px] lg:text-[56px]">
          Monitoring your website like a pro
        </h1>
        <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>

        <div className="flex flex-col w-full items-center lg:justify-center mt-[40px] lg:mt-[56px] lg:flex-row pt-8 gap-x-[40px]">
          <button className="bg-[#FFFFFF] w-1/2 py-4 px-4 text-[#EB2891] rounded-[4px] lg:w-fit">
            Try for free{" "}
          </button>
          <button className="flex w-full gap-x-2 items-center text-[#FFFFFF] justify-center lg:w-fit">
            View Pricing{" "}
            <span>
              <Image src={Arrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cts;
