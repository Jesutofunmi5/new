import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";

const Create = () => {
  return (
    <div className=" py-20 px-36 w-full bg-white">
      <div
        style={{ backgroundImage: `url('${ZUimages.lastRowBackground}')` }}
        className="bg-cover bg-center h-80 w-full rounded-3xl px-28 flex justify-between items-center"
      >
        <h5 className="text-white text-5xl mb-12 leading-[60px]">
          Get Started By Creating <br /> an Account
        </h5>
        <Button to={SIGNUP} className="mb-12">
          Create an Account
        </Button>
      </div>
    </div>
  );
};

export default Create;
