import PricingCard from "./PricingCard";

const PricingView = () => {
  return (
    <div className="mb-[5em]">
      <h1 className="font-[700] text-[47px] font-['Heebo'] text-[#41723] text-center leading-[150% mt-[1.2em] mb-[1.7em]">
        The best platform for price{" "}
      </h1>
      <div className="flex justify-center mb-[5em] relative right-[6.5em]">
        <input
          type="button"
          value="Yearly"
          className="py-[8px] px-[100px] z-10 bg-[#07aa3d] cursor-pointer rounded-[32px] w-[160px] h-[40px] flex flex-row justify-center align-middle flex-grow-0 order-0 flex-none font-[700] font-['Heebo'] text-[16px] text-[#f7f7f7] leading-[150%]"
        />
        <input
          type="button"
          value="Monthly"
          className="flex flex-row absolute right-[400px] cursor-pointer justify-center align-middle pl-[5em] w-[260px] h-[40px] bg-[#ffffff] border-[1px] border-solid border-[#d1d1d6] font-['Heebo'] rounded-[32px] font-[700] text-[16px] leading-[150%] text-[#041723]"
        />
      </div>
      <div className="flex">
        <PricingCard title="Basic" pricing="Free" basic="Basic Starter" off="" slash="" />
        <PricingCard title="Standard" pricing="$200" basic="Upgrade" off="20% off" slash="/" />
      </div>
      <div className="flex">
        <PricingCard title="Premium" pricing="$500" basic="Upgrade" off="20% off" slash="/" />
        <PricingCard title="Enterprise" pricing="$750" basic="Upgrade" off="20% off" slash="/" />
      </div>
    </div>
  );
};

export default PricingView;
