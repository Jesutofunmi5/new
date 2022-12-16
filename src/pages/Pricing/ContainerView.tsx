import PricingCard from "./PricingCard";

const PricingView = () => {
  return (
    <div className="">
      <h1 className="font-[700] text-[47px] text-[#41723] text-center">
        The best platform for price{" "}
      </h1>
      <div className="flex justify-around">
        <input type="button" value="Yearly" />
        <input type="button" value="Monthly" />
      </div>
      <div className="flex">
        <PricingCard title="Basic" pricing="Free" basic="Basic Starter" />
        <PricingCard title="Standard" pricing="$200" basic="Upgrade" />
      </div>
      <div className="flex">
        <PricingCard title="Premium" pricing="$500" basic="Upgrade" />
        <PricingCard title="Enterprise" pricing="$750" basic="Upgrade" />
      </div>
    </div>
  );
};

export default PricingView;
