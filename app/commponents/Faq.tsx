"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faq = [
  {
    ques: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    ans: "Lorem sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    ques: "How to create an account?",
    ans: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    ques: "How can I make payment using Paypal?",
    ans: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    ques: "How can I reach to support?",
    ans: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
  },
];

const Faq = () => {
  const [expand, setexpand] = useState(Array(faq.length).fill(false));
  const handleExpand = (index: number) => {
    const newExpand = [...expand];
    newExpand[index] = !newExpand[index];
    setexpand(newExpand);
  };
  return (
    <div className="px-[20px] lg:container lg:px-18 mx-auto ">
      <div className="flex flex-col py-[48px] w-full">
        <div>
          <h3 className="font-medium text-sm lg:text-lg text-[#EB2891]">
            Frequently Asked Questions
          </h3>
          <h1 className="font-medium text-2xl  py-4leading-9 lg:text-[42px] lg:leading-[58px] text-[#172026] pt-[12px] ">
            Lets clarify some of your questions
          </h1>

          <p className="py-[18px] font-normal text-base lg:text-lg text-[ #36485C] ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-6 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-[#E3F1FF] border-2 border-gray-300 shadow-lg cursor-pointer hover:bg-gray-50 rounded-lg "
            >
              <div className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold text-black">
                  {item.ques}
                </span>
                {expand[index] ? (
                  <FiMinus size={24} onClick={() => handleExpand(index)} />
                ) : (
                  <FiPlus size={24} onClick={() => handleExpand(index)} />
                )}
              </div>

              {expand[index] && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{item.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"></div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Faq;
