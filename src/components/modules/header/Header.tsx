import { bell, search } from "assets/images";

const Header = () => {
  return (
    <div className="flex gap-4 pr-16 w-full items-center justify-end h-24 bg-white">
      <div className="p-3 rounded-full shadow-md">
        <img src={search} />
      </div>
      <div>
        <img src={bell} />
      </div>
      <div>IMAGE</div>
    </div>
  );
};

export default Header;
