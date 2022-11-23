const ForgetPasswordView = () => {
  return (
    <div className="w-full">
      <h4 className="mb-4 font-bold text-2xl py-2 px-3">Forget Password</h4>
      <p className="text-normal py-2 px-3">
        Enter the email you used to create your account so we can send you instructions on how to
        reset your password.
      </p>
      <form className="px-5 pt-6 pb-8 mb-4">
        <div className="mb-4 mt-10">
          <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="email@domain.com"
          />
        </div>
        <button
          className="shadow leading-8  bg-green-500 hover:bg-green-400 mb-4 w-full focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
          type="button"
        >
          Send
        </button>
        <button className="bg-transparent leading-8 hover:bg-blue-500 text-blue-700 w-full py-2 px-4 border border-green-500 text-green-500 hover:border-green-400 rounded">
          Back To Login
        </button>
      </form>
    </div>
  );
};

export default ForgetPasswordView;
