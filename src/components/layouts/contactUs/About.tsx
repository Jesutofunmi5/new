import { ZUimages } from "assets";

const About = () => {
  return (
    <div className=" bg-white md:pt-24 pt-8  py-4 my-3 px-5">
      <div className="flex md:flex-row flex-col gap-12 justify-center items-center  py-10">
        <div className="card rounded-md border-2 md:h-48 h-64 md:w-2/12 w-full flex justify-center flex-col items-center bg-white border-gray-100">
          <img src={ZUimages.zuChatDots} className="h-7 w-7 m-2" />
          <p className="font-bold text-3xl p-2">Live Chat</p>
          <p className="font-normal text-2xl p-3 text-center">
            Get instant answers to your questions about our product.
          </p>
        </div>
        <div className="card rounded-md border-2 border-gray-100 md:h-48 h-64 md:w-2/12 w-full bg-white flex justify-center flex-col items-center ">
          <div className="flex p-2">
            <img src={ZUimages.zuTool} className="h-7 w-7 m-2" />
            <img src={ZUimages.zuSettings} className="h-7 w-7 m-2" />
          </div>

          <p className="font-bold text-3xl p-2">Technical Support</p>
          <p className="font-normal text-2xl p-3 text-center">
            Email technical support for issues with our product.
          </p>
        </div>
        <div className="card rounded-md border-2 border-gray-100 md:h-48 h-64 md:w-2/12 w-full flex justify-center flex-col items-center align-middle font-Heebo hover:border bg-slate-100">
          <img src={ZUimages.zuCoins} className="h-7 w-7 mt-2 " />
          <p className="font-bold text-3xl p-1 mt-2">Billing & Payment</p>
          <p className="font-normal text-2xl p-3 text-center">
            Solve your billing & payment issues. Get answers about our pricing, payment channels,
            and subscriptions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
