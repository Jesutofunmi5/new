import { ZUimages } from "assets";

const HomeView = () => {
  return (
    <div className="text-lg space-y-5">
      {/* Hero Section */}
      <div
        className="relative top-0 w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden"
        style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
      >
        <div className="absolute inset-0 bg-[#1C1C1E] opacity-80" />
        {/* Hero contents */}
      </div>
    </div>
  );
};
export default HomeView;
