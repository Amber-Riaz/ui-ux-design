import React from "react";
interface PricingComponentProps {
  h1text: string;
  h2text: string;
  h3text: string;
  span: string;
}

const PricingComponents: React.FC<PricingComponentProps> = (props) => {
  return (
    <div>
      <h1 className={`text-[${props.h1text}] font-medium text-xl`}>
        Free Trail
      </h1>
      <h2 className={`text-[${props.h2text}] font-normal pt-3 text-lg`}>
        Perfect for test the waters
      </h2>
      <h3 className={`text-[${props.h3text}] font-medium pt-4 text-3xl`}>
        $0<span className={`text-[${props.span}]`}>/mo</span>
      </h3>
    </div>
  );
};

export default PricingComponents;
