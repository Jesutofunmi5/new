import { Button, Input } from "components";

interface Props {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  error: {
    password?: string;
    confirmPassword?: string;
  };
  details?: {
    password?: string;
    confirmPassword?: string;
  };
}

const ResetPasswordView = ({ handleChange, handleSubmit, error }: Props) => {
  return (
    <div className="w-full lg:w-2/3 lg:mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">Reset Password</h4>
        <p className="text-lg text-gray-200 capitalize">Choose A New Password For Your Account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Password
          </label>
          <Input
            required
            size="lg"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={handleChange}
            className="w-full"
          />
          <p className="text-red text-base ">{error?.password}</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Confirm Password
          </label>
          <Input
            required
            size="lg"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
            className="w-full"
          />
          <p className="text-red text-base ">{error?.confirmPassword}</p>
        </div>

        <Button type="submit" size="lg" className="w-full bg-green">
          Resend Email
        </Button>
        <Button size="lg" variant="outline" className="w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordView;
