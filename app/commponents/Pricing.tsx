import React from "react";
import PricingComponents from "./reusable-comp/PricingComponents";
import Image from "next/image";
import check from "../../public/assets/check.svg";

const Pricing = () => {
  return (
    <div className="px-[20px] pb-16 lg:container lg:px-20 mx-auto ">
      <div className="flex flex-col py-[48px] w-full text-center lg:py-[60px]">
        <div>
          <h1 className="font-medium text-2xl py-4leading-9 lg:text-[42px] lg:leading-[58px] text-[#172026] pt-[12px] ">
            Flexible Plans for you
          </h1>
          <h3 className="flex font-medium pt-4 text-sm lg:text-lg text-[#36485C] justify-center">
            No hidden fees!
          </h3>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="bg-[#F5F4FF] gap-2 w-full lg:w-1/3 rounded-lg p-6 ">
          <PricingComponents
            h1text="#4328EB"
            h2text="#36485C"
            h3text="#172026"
            span="#5F7896"
          />
          <div>
            <ul className="flex flex-col gap-y-3 pt-4 font-normal text-base lg:text-lg  text-[#5F7896] leading-6">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <button className="w-full bg-[#FFFFFF] py-[14px] mt-[16px] px-[14px] font-medium text-base text-[#4328EB]">
              Start Trail
            </button>
          </div>
        </div>

        <div className="bg-[#4328EB] gap-2 w-full lg:w-1/3 rounded-lg p-6 ">
          <PricingComponents
            h1text="#FFFFFF"
            h2text="#FFFFFF"
            h3text="#FFFFFF"
            span="#FFFFFF"
          />
          <div>
            <ul className="flex flex-col gap-y-3 text-[#FFFFFF] pt-4 font-normal text-base lg:text-lg leading-6">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <button className="w-full bg-[#FFFFFF] my-4 py-[14px] mt px-[14px] font-medium text-base text-[#4328EB]">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-[#F5F4FF] gap-2 w-full lg:w-1/3 rounded-lg p-6 ">
          <PricingComponents
            h1text="#4328EB"
            h2text="#36485C"
            h3text="#172026"
            span="#5F7896"
          />
          <div>
            <ul className="flex flex-col gap-y-3 pt-4 font-normal text-base lg:text-lg  text-[#5F7896] leading-6">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="checkmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <button className="w-full bg-[#FFFFFF] my-4 py-[14px] mt px-[14px] font-medium text-base text-[#4328EB]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
