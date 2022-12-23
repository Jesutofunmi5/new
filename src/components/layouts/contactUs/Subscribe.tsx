const Subscribe = () => {
  return (
    <div className="bg-gray-100 w-full h-100 my-3 py-3">
      <div className="p-16 md:px-64 px-5 flex justify-items-center flex-col place-content-center">
        <div className="">
          <h5 className="font-bold text-5xl">Our News Lorem Ipsum</h5>
          <p className="text-black text-4xl font-normal my-4 text-base">
            Lorem Ipsum to be the first to hear when we lorem ipsum dummy text here.
          </p>
        </div>
        <div className="rounded-md bg-black md:h-36 h-full flex items-center justify-between md:flex-row flex-col md:gap-28 gap-8 md:mt-20 mt-8 md:px-8 px-3 py-8">
          <div className="">
            <p className="font-bold text-5xl text-white items-start text-start pb-4">
              Remain Updated
            </p>
            <p className="text-base font-normal text-white inline-block align-middle">
              Subscribe to receive the latest news and updates about our product. No spamming!
            </p>
          </div>
          <div className="flex justify-center items-center">
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
  );
};

export default Subscribe;
