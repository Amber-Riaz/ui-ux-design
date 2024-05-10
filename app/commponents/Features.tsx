import React from "react";
import Image from "next/image";
import FeaturesComponent from "./reusable-comp/FeaturesComponent";
import feature1 from "../../public/assets/feature-1.svg";
import feature2 from "../../public/assets/feature-2.svg";
import pinkbutton from "../../public/assets/pink-button.svg";
import feature3 from "../../public/assets/feature-3.svg";

const Features = () => {
  return (
    <>
      <div className="px-[20px] lg:container lg:px-18 mx-auto ">
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
          <FeaturesComponent
            image={feature1}
            ptext1="Sales Monitoring"
            htext="Simplify your sales monitoring"
            ptext2="Stay on top of things and revamp your work process with our
        game-changing feature. Get a birds eye view with our customizable
        dashboard."
            li1="Sales marketing"
            li2="Sales monitoring"
            li3="Sales maintain"
            textColor="#0085FF"
            position="flex-row-reverse"
            padding="pr-[56px]"
          />
          <FeaturesComponent
            image={feature2}
            ptext1="Customer Support"
            htext="Get in touch with your customers"
            ptext2="Stay on top of things and revamp your work process with our
        game-changing feature. Get a birds eye view with our customizable
        dashboard."
            li1="Customer marketing"
            li2="Customer monitoring"
            li3="Customer maintain"
            textColor="#00A424"
            position="flex-row"
            padding="pl-[56px]"
          />

          <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
            <Image
              src={feature3}
              alt="feature3"
              className="hidden lg:w-1/2 sm:block"
            />
            <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
              <p className="font-medium text-base lg:text-lg text-[#EB2891]">
                Growth Monitoring
              </p>
              <h1 className="font-medium text-2xl leading-9 lg:text-[42px] lg:leading-[58px] text-[#172026] pt-[12px] ">
                Monitor your site’s new subscribers
              </h1>
              <Image
                src={feature3}
                alt="feature1"
                className="pt-[24px] sm:hidden"
              />
              <p className="py-[24px] font-normal text-base lg:text-lg text-[ #36485C] ">
                Stay on top of things and revamp your work process with our
                game-changing feature. Get a birds eye view with our
                customizable dashboard.
              </p>
              <div className="flex w-full gap-x-[24px] ">
                <div className="w-1/2 flex-col gap-y-3 ">
                  <h3 className="text-[#172026] font-medium text-[20px] ">
                    100+
                  </h3>
                  <p className="text-[#5F7896] font-normal">Customer sales</p>
                </div>
                <div className="w-1/2 flex-col gap-y-3 ">
                  <h3 className="text-[#172026] font-medium text-[20px] ">
                    800+
                  </h3>
                  <p className="text-[#5F7896] font-normal">
                    Customer Monitoring
                  </p>
                </div>
              </div>

              <p
                className="flex items-center pt-6 lg:text-lg
                  py-2 gap-x-3 font-medium text-base text-[#EB2891]"
              >
                Learn More
                <span>
                  <Image src={pinkbutton} alt="pink-buttton" />
                  {/* <FaArrowCircleRight className={`text-[${props.textColor}]`} /> */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
