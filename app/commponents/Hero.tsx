import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import hero from "../../public/assets/Image.svg";

export function Hero() {
  return (
    <div className="pt-4">
      <div className="px-[20px]">
        <h1 className="text-center text-[32px] font-medium leading-[40px] text-[#172026]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center font-normal pt-6 text-[background: #36485C] ">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full items-center justify-center pt-8">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 font-medium text-white rounded-[4px]">
            Try for free{" "}
          </button>
          <button className="flex w-1/2 gap-x-3 items-center text-[#4328EB] justify-center">
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
          className="min-h-[500px] w-full object-cover"
        />
        <div>
          <Image src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}
