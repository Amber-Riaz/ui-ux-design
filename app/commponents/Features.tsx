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
      <div className="px-[20px] lg:container lg:px-20 mx-auto ">
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
              <div className="flex w-full gap-x-24px pt-[25px]">
                <div className="w-1/2 flex-col gap-y-3 ">
                  <h3 className="text-[#172026] font-medium text-3xl ">100+</h3>
                  <p className="text-[#5F7896] font-normal text-lg">
                    Customer sales
                  </p>
                </div>
                <div className="w-1/2 flex-col gap-y-3 ">
                  <h3 className="text-[#172026] font-medium text-3xl ">800+</h3>
                  <p className="text-[#5F7896] font-normal text-lg">
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
      <div className="relative bg-gradient-to-b from-green-50 to-green-100">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto= h-8"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Menu
              </button>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <a
                href="#"
                title=""
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                {" "}
                Try for free{" "}
              </a>
            </div>
          </div>
        </header>

        <section className="overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
            <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                <div className="flex flex-col justify-between flex-1 h-full">
                  <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                      Take control <br />
                      on your daily expenses
                    </h1>
                    <p className="mt-6 text-base text-black sm:text-xl">
                      Our A.I helps you to predict your expenses based on your
                      previous activity and shares how you should manage you
                      money.
                    </p>
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                      role="button"
                    >
                      {" "}
                      Get started for free{" "}
                    </a>
                  </div>

                  <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                    <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                      <p className="text-base font-semibold text-black">
                        App available on
                      </p>

                      <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                        <a
                          href="#"
                          title=""
                          className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            className="w-auto rounded h-14 sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                            alt=""
                          />
                        </a>

                        <a
                          href="#"
                          title=""
                          className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                          role="button"
                        >
                          <img
                            className="w-auto rounded h-14 sm:h-16"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
              <div className="lg:absolute lg:bottom-0 lg:left-0">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
