export default function Login() {
  return (
    <div className="container border w-full h-screen m-auto flex">
      <div className="flex-1 bg-[#226D7B] h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="text-3xl font-semibold text-white">Hobby Merge</h1>
            <p className="text-lg font-medium text-white">
              The most popular peer to peer lending at SEA
            </p>
          </div>
          <button className="text-white text-lg font-medium flex justify-start hover:text-[#15444d]">
            Read More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-10">
          <div className="">
            <h1 className="text-3xl font-semibold text-[#0e343c]">
              Hello Again!
            </h1>
            <p className="text-lg font-medium text-[#15444d]">Welcome Back</p>
          </div>
          <div className="w-80 flex flex-col gap-5">
            <input
              className="border border-[#15444d] py-3 rounded-3xl px-4"
              placeholder="Email"
              type="email"
            />
            <input
              className="border placeholder: text-start border-[#15444d] py-3 rounded-3xl px-4"
              placeholder="password"
              type="password"
            />
            <button className="border border-[#15444d] py-2 rounded-3xl hover:bg-[#226D7B] hover:text-white bg-white text-[#15444d] text-lg ">
              Login
            </button>
            <button className="flex justify-center text-[#15444d] text-lg">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
