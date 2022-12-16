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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <p className="font-bold text-3xl p-2">Live Chat</p>
            <p className="font-normal text-2xl p-3 text-center">
              Get instant answers to your questions about our product.
            </p>
          </div>
          <div className="card rounded-md border-2 border-gray-100 h-48 w-2/12 bg-white flex justify-center flex-col items-center ">
            <div className="flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>

            <p className="font-bold text-3xl p-2">Technical Support</p>
            <p className="font-normal text-2xl p-3 text-center">
              Email technical support for issues with our product.
            </p>
          </div>
          <div className="card rounded-md border-2 border-gray-100 h-48 w-2/12 flex justify-center flex-col items-center hover:border bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>

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
