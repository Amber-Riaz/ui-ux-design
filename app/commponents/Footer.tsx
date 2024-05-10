"use client";

import { React, useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const footerItems = [
  {
    id: 1,
    title: "Features",
    lists: ["Growth", "Sales", "Chat"],
  },
  {
    id: 2,
    title: "Pricing",
    lists: ["Free Trail", "Standard", "Buisness"],
  },
  {
    id: 3,
    title: "Enterprise",
    lists: ["Personalize", "Automation", "Invoicing", "24/77 Support"],
  },
  {
    id: 4,
    title: "Careers",
    lists: ["Open Position", "Part-Time", "Contractual", "Contact Us"],
  },
];

const Footer = () => {
  const [expand, setexpand] = useState(Array(footerItems.length).fill(false));

  const handleExpand = (index: number) => {
    const newExpand = { ...expand };
    newExpand[index] = !newExpand[index];
    setexpand(newExpand);
  };
  return (
    <div className="pt-[80px] pb-[10px]  px-[20px] lg:container lg:px-18 mx-auto">
      <div className="flex flex-col lg:justify-between lg:flex-row">
        <div className="flex lg:items-start gap-x-[12px]">
          <Image src={Logo} alt="Logo" className="lg:mx-auto" />
          <p className="font-bold text-[17px]">Your Site</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-[845px] justify-evenly">
          {footerItems.map((item, index) => (
            <div key={index}>
              <ul className="flex flex-row lg:flex-col font-semibold justify-between items-center gap-y-[32px] pt-[45px] text-[#36485C] sm:flex-row sm:justify-center mx-2 sm:gap-x-5 sm:pt-2">
                <li>{item.title}</li>
                <span
                  className="block lg:hidden"
                  onClick={() => handleExpand(index)}
                >
                  {expand[index] ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </ul>

              {/* lg:hidden */}
              <div className="block lg:hidden">
                {expand[index] && (
                  <ul className="flex flex-col  gap-y-2 pt-4 text-[#36485C] ml-3">
                    {item.lists.map((listitem, listItemIndex) => (
                      <li key={listItemIndex}>{listitem}</li>
                    ))}
                  </ul>
                )}
              </div>
              {/* lg:block */}
              <div className="lg:block hidden">
                {
                  <ul className="flex flex-col  gap-y-2 pt-4 text-[#36485C] pl-6">
                    {item.lists.map((listitem, listItemIndex) => (
                      <li key={listItemIndex}>{listitem}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-2 lg:mt-40 mb-4">
        <p className=" flex justify-center pt-[56px] items-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-[56px] sm:pt-5 pt-3">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Feed} alt="Feed" />
          <Image src={Twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
