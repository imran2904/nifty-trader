import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const FAQ = () => {
  const [visiblity, setvisiblity] = useState(false);
  return (
    <div className="text-center w-auto mx-20  mb-10 items-center justify-between space-y-4 flex-col">
      <h1 className="font-bold text-3xl">FAQ</h1>
      <div
        onClick={() => setvisiblity(!visiblity)}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="text-sm">what is the Nifty trader prime plan ?</h1>
        <MdKeyboardArrowDown className={visiblity && `rotate-180`} />
      </div>
      {visiblity && (
        <p className=" text-left text-slate-400 text-xs">
          The prime plan is a subscription based plan that provides access to a
          variety of premium features on niftyTrader.{" "}
        </p>
      )}
      <hr className="w-full " />
      <div className="flex justify-between">
        <h1 className="text-sm">
          what are the premium features include with the prime plan ?
        </h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-sm">what is the Nifty trader prime plan ?</h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-sm">
          can i try the premium feature before i subscribe to the prime plan ?{" "}
        </h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />

      <div className="flex justify-between">
        <h1 className="text-sm">How do i subscribe to the prime plan?</h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-sm">can i upgrade my subscription level ?</h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-sm">what payment method do you accept ?</h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-sm">Do you offer any discount or promotions ?</h1>
        <MdKeyboardArrowDown />
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default FAQ;
