import { ZUimages } from "assets";
import type { FC } from "react";

interface Props {
  title: string;
}

const ContainerView: FC<Props> = ({ title }) => {
  return (
    <main className="bg-white">
      <div className="bg-[url('https://cdn.pixabay.com/photo/2022/12/11/05/10/bird-7648202_960_720.jpg')] bg-no-repeat bg-cover">
        <div className=" relative h-96 w-full bg-cover bg-center p-24">
          <h3 className="text-white text-6xl font-bold">Contact Us</h3>
          <p className="text-white mt-3 text-3xl font-light">
            We’d like to help you with any questions you may have. Get in touch!{title}
          </p>
          <div className="mt-16 ">
            <div className=" grid grid-cols-3 gap-3 flex-row m-16 bg-white shadow-lg w-3/4 h-44 absolute rounded-md p-2">
              <div className="border-r-2  border-gray-100  m-4">
                <div className="text-dark mx-16">Follow us</div>
                <div className="flex items-center p-4 justify-center space-x-1 ">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
                    <img src={ZUimages.facebook} className="w-3 h-4" alt="linkedin" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
                    <img src={ZUimages.instagram} className="w-3 h-4" alt="linkedin" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
                    <img src={ZUimages.twitter} className="w-4 h-4" alt="linkedin" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
                    <img src={ZUimages.linkedin} className="w-3 h-4" alt="linkedin" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
                    <img src={ZUimages.youtube} className="w-4 h-4" alt="linkedin" />
                  </button>
                </div>
              </div>
              <div className="border-r-2  border-gray-100  m-4 p-8">
                <button className="flex items-center text-black space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <span>+31621922705</span>
                </button>
                <button className="flex items-center text-black space-x-3 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>infor@zumaridi.io</span>
                </button>
              </div>
              <div className="mt-4 p-4 inline-block align-middle">
                <button className="flex items-center text-black space-x-3 py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <span className="inline-block align-middle">Right here the company address</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white pt-24  py-4 my-3">
        <div className="flex flex-row space-x-5 justify-center items-stretch gap-x-10 py-10">
          <div className="card rounded-md border-2 h-48 w-2/12 flex justify-center flex-col items-center bg-white border-gray-100">
            <img src={ZUimages.zuChatDots} className="h-7 w-7 m-2" />
            <p className="font-bold text-3xl p-2">Live Chat</p>
            <p className="font-normal text-2xl p-3 text-center">
              Get instant answers to your questions about our product.
            </p>
          </div>
          <div className="card rounded-md border-2 border-gray-100 h-48 w-2/12 bg-white flex justify-center flex-col items-center ">
            <div className="flex p-2">
              <img src={ZUimages.zuTool} className="h-7 w-7 m-2" />
              <img src={ZUimages.zuSettings} className="h-7 w-7 m-2" />
            </div>

            <p className="font-bold text-3xl p-2">Technical Support</p>
            <p className="font-normal text-2xl p-3 text-center">
              Email technical support for issues with our product.
            </p>
          </div>
          <div className="card rounded-md border-2 border-gray-100 h-48 w-2/12 flex justify-center flex-col items-center hover:border bg-slate-100">
            <img src={ZUimages.zuCoins} className="h-7 w-7 m-2" />
            <p className="font-bold text-3xl p-2">Billing & Payment</p>
            <p className="font-normal text-2xl p-3 text-center">
              Solve your billing & payment issues. Get answers about our pricing, payment channels,
              and subscriptions.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-100 my-3 py-3">
        <div className="p-16 mx-64 flex justify-items-center flex-col place-content-center">
          <div className="">
            <h5 className="font-bold text-5xl">Our News Lorem Ipsum</h5>
            <p className="text-black text-4xl font-normal my-4 text-base">
              Lorem Ipsum to be the first to hear when we lorem ipsum dummy text here.
            </p>
          </div>
          <div className="rounded-md bg-black h-36 flex flex-row gap-2 mt-20">
            <div className="p-3">
              <p className="font-bold text-5xl text-white items-start text-start mx-4 py-4">
                Remain Updated
              </p>
              <p className="text-base font-normal  mx-4 text-white inline-block align-middle">
                Subscribe to receive the latest news and updates about our product. <br />
                No spamming!
              </p>
            </div>
            <div className="flex justify-center items-center pr-3 p-3">
              <label className="relative block">
                <input
                  className="w-80 rounded-md text-sm px-7 h-10"
                  placeholder="Enter email address"
                  type="text"
                />
                <span className="absolute inset-y-0 right-0 flex items-center p-1">
                  <button className="rounded-md bg-green-600 text-white font-normal text-sm px-2 h-8 w-24">
                    Subscribe
                  </button>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContainerView;
