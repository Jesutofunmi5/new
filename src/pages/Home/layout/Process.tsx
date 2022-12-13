const Process = () => {
  return (
    <div>
      <div className="flex flex-col items-center  gap-16 py-20 px-5 md:px-10 xl:px-20 bg-white">
        <div className="items-center text-center">
          <p className="text-[#07AA3D]  text-base text-center">Our Process</p>
          <p className="font-bold py-6 text-5xl">Digital system for your company</p>
        </div>
        <div className="flex gap-44">
          <div className="flex flex-col items-center ">
            <div className="rounded-full bg-[#5034FC] h-16 w-16 flex items-center justify-center font-bold shadow-[0px_1px_20px_1px_rgb(80,52,252)] shadow-[#5034FC]">
              <p className="text-4xl font-bold text-white">1</p>
            </div>
            <h5 className="font-bold text-xl py-6">Sign Up</h5>
            <h6 className="text-base opacity-70 text-center">
              Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
              sint.
            </h6>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#EF4339] h-16 w-16 flex justify-center items-center shadow-[0px_1px_20px_1px_rgb(239,67,57)] shadow-[#EF4339]">
              <p className="text-4xl font-bold text-white">2</p>
            </div>
            <h5 className="font-bold text-xl py-6">Fill Details</h5>
            <h6 className="text-center text-base opacity-70">
              Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
              sint.
            </h6>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#0ABFBC] h-16 w-16 flex items-center justify-center shadow-[0px_2px_20px_2px_rgb(10,191,188)] shadow-cyan-500/100">
              <p className="text-4xl font-bold text-white">3</p>
            </div>
            <h5 className="font-bold text-xl py-6">Enjoy The Process</h5>
            <h6 className="text-center text-base opacity-70">
              Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
              sint.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
