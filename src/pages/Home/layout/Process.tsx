const Process = () => {
  return (
    <div className="flex flex-col items-center  gap-12 py-20 px-5 md:px-10 xl:px-20 bg-white">
      <div className="items-center text-center">
        <p className="text-[#07AA3D]  text-base text-center">Our Process</p>
        <p className="font-bold py-6 text-5xl">Digital system for your company</p>
      </div>
      <div className="flex items-center justify-center gap-12 pt-4">
        <div className="rounded-full bg-[#5034FC] h-16 w-16 flex items-center justify-center font-bold shadow-2xl shadow-[#5034FC]">
          <p className="text-4xl font-bold text-white">1</p>
        </div>
        <div className="w-60 bg-gray-100 h-[0.5px]"></div>
        <div className="rounded-full bg-[#EF4339] h-16 w-16 flex justify-center items-center shadow-2xl shadow-[#EF4339]">
          <p className="text-4xl font-bold text-white">2</p>
        </div>
        <div className="w-60 bg-gray-100 h-[0.5px]"></div>
        <div className="rounded-full bg-[#0ABFBC] h-16 w-16 flex items-center justify-center shadow-2xl shadow-cyan-500/100">
          <p className="text-4xl font-bold text-white">3</p>
        </div>
      </div>

      <div className="flex gap-44 ">
        <div className="flex flex-col items-center ">
          <h5 className="font-bold text-xl pb-6">Sign Up</h5>
          <h6 className="text-base opacity-70 text-center">
            Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet sint.
          </h6>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-xl pb-6">Fill Details</h5>
          <h6 className="text-center text-base opacity-70">
            Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet sint.
          </h6>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-xl pb-6">Enjoy The Process</h5>
          <h6 className="text-center text-base opacity-70">
            Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet sint.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Process;
