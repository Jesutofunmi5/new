const Loader = () => {
  const circleCommonClasses = "h-2.5 w-2.5 bg-white rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce duration-200`}></div>
      <div className={`${circleCommonClasses} animate-bounce duration[400ms]`}></div>
    </div>
  );
};

export default Loader;
