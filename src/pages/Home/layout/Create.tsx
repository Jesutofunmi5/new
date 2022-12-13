import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";

const Create = () => {
  return (
    <div className="flex items-center justify-center py-20 px-36 w-full bg-white">
      <div style={{ backgroundImage: `url('${ZUimages.lastRowBackground}')` }} className="bg-auto">
        <div className="flex justify-between items-center">
          <h5 className="text-black text-5xl">
            Get Started By Creating <br /> an Account
          </h5>
          <Button to={SIGNUP} className="">
            Create an Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
