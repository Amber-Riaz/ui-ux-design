import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import hero from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspiloot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[297px]">
        <h1 className="text-center text-[32px] font-medium lg:font-semibold leading-[40px] lg:leading-[72px] lg:text-[64px] text-[#172026]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7 ">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full justify-center pt-8 gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free{" "}
          </button>
          <button className="flex w-1/2 gap-x-2 items-center text-[#4328EB] justify-center lg:w-fit">
            View Pricing{" "}
            <span>
              <Image src={BlurArrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="graadient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute flex w-full flex-col items-center bottom-5">
          <Image
            src={hero}
            alt="hero"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
          <div className="flex flex-col w-full items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these comapnies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center align-middle px-[20px] lg:grid-cols-5">
              <Image src={Google} alt="google" />
              <Image src={Slack} alt="slack" />
              <Image src={Truspiloot} alt="Truspilot" />
              <Image src={Cnn} alt="cnn" />
              <Image src={Cluth} alt="cllutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
