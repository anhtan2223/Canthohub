import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5]">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl mb-8 font-bold text-black">Welcome!</h1>
        <div className="text-left mb-6">
          <label className="block mb-1 font-semibold text-black">Email</label>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder=""
              className="w-full pl-9 pr-4 py-1 border-0 border-b-2 border-black custom-input bg-transparent"
            />
            <img src="./Icon/email.png" className='absolute left-2 w-[17px] h-[12px]' alt="Email Icon" />
          </div>
        </div>
        <div className="text-left mb-6">
          <label className="block mb-1 font-semibold text-black">Password</label>
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder=""
              className="w-full pl-9 pr-4 py-1 border-0 border-b-2 border-black custom-input bg-transparent"
            />
            <img src="./Icon/password.png" className='absolute left-2 w-[15px] h-[15px]' alt="Password Icon" />
          </div>
        </div>
        <div className="mb-6 text-center">
          <label htmlFor="privacyPolicy" className="text-sm text-gray-500">
            I have read and agree to the
            <a href="/privacy-policy" className="text-indigo-500 hover:underline ml-1">Privacy Policy</a>
          </label>
        </div>
        <button className="w-full py-3 mb-4 bg-[#3559E0] text-white rounded-full font-semibold hover:bg-[#2742b3] transition duration-300 ease-in-out">
          Log in
        </button>
        <p className="text-center text-sm text-gray-500 cursor-pointer mb-6 hover:underline">
          Forgot password?
        </p>
        <button className="w-[50%] py-2 bg-[#3559E0] text-white rounded-full font-semibold hover:bg-[#2742b3] transition duration-300 ease-in-out">
          <a href="/dangky">Create account</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
