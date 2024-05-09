import React from "react";
import Image from "next/image";
import check from "../../../public/assets/check.svg";
// import bluebutton from "../../../public/assets/blue-button.svg";
import { FaArrowCircleRight } from "react-icons/fa";

interface FeaturesComponentProps {
  image: any;
  ptext1: string;
  htext: string;
  ptext2: string;
  li1: string;
  li2: string;
  li3: string;
  textColor: string;
  position: string;
  padding: string;
}

const FeaturesComponent: React.FC<FeaturesComponentProps> = (props) => {
  return (
    <div className={`flex flex-col gap-x-6 sm:${props.position}`}>
      <Image
        src={props.image}
        alt="feature1"
        className="hidden lg:w-1/2 sm:block"
      />
      <div className={`sm:w-1/2 lg:py-[56px] lg:${props.padding}`}>
        <p
          className={`font-medium text-base lg:text-lg text-[${props.textColor}]`}
        >
          {props.ptext1}
        </p>
        <h1 className="font-medium text-2xl leading-9 lg:text-[42px] lg:leading-[58px] text-[#172026] pt-[12px] ">
          {props.htext}
        </h1>
        <Image
          src={props.image}
          alt="feature1"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] font-normal text-base lg:text-lg text-[ #36485C] ">
          {props.ptext2}
        </p>
        <ul className="flex flex-col gap-y-3 font-normal text-base lg:text-lg  text-[#36485C] leading-6">
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={check} alt="checkmark" />
            </span>
            {props.li1}
          </li>
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={check} alt="checkmark" />
            </span>
            {props.li2}
          </li>
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={check} alt="checkmark" />
            </span>
            {props.li3}
          </li>
        </ul>
        <p
          className={`flex items-center pt-6 lg:text-lg
           py-2 gap-x-3 font-medium text-base text-[${props.textColor}]`}
        >
          Learn More
          <span>
            {/* <Image src={bluebutton} alt="blue-buttton" /> */}
            <FaArrowCircleRight className={`text-[${props.textColor}]`} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeaturesComponent;
