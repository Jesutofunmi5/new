import { Button, Input } from "components";

interface Props {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  error: {
    email: string;
  };
  details?: {
    email: string;
  };
}

const ForgetPasswordView = ({ handleSubmit, handleChange, error }: Props) => {
  return (
    <div className="w-full lg:w-2/3 mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">Forget Password</h4>
        <p className="text-lg text-gray-200 capitalize">
          Enter the email you used to create your account so we can send you instructions on how to
          reset your password.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Email address*
          </label>
          <Input
            required
            size="lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            className="w-full"
          />
          <p className="text-red text-base ">{error.email}</p>
        </div>

        <Button type="submit" size="lg" className="w-full bg-green">
          Send
        </Button>
        <Button size="lg" variant="outline" className="w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ForgetPasswordView;
