"use client";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { LuLock } from "react-icons/lu";

export default function Login() {
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [iconVisible, setIconVisible] = useState(true);

  const onMouseEnter = () => {
    setIsIconVisible(false);
    // setIconVisible(false);
  };
  const onMousEnter = () => {
    setIconVisible(false);
  };

  const onMouseLeave = () => {
    setIsIconVisible(true);
    // setIconVisible(true);
  };
  const onMousLeave = () => {
    setIconVisible(true);
  };

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
          <button className="text-white text-lg font-medium flex justify-start hover:text-[#15444d] underline underline-offset-4">
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
            <div
              className="flex gap-2 border border-[#15444d] rounded-3xl py-3 px-4 items-center "
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {isIconVisible && (
                <HiOutlineMail className="opacity-60 w-5 h-5" />
              )}
              <input
                type="email"
                placeholder="email"
                className="outline-none duration-700"
              />
            </div>
            <div
              className="flex gap-2 border border-[#15444d] rounded-3xl py-3 px-4 items-center"
              onMouseEnter={onMousEnter}
              onMouseLeave={onMousLeave}
            >
              {iconVisible && <LuLock className="opacity-60 w-5 h-5 " />}
              <input
                type="password"
                placeholder="Password"
                className="outline-none duration-1000"
              />
            </div>
            <button className="border border-[#15444d] py-2 rounded-3xl hover:bg-[#226D7B] hover:text-white bg-white text-[#15444d] text-lg duration-700 hover:border-none">
              Login
            </button>
            <button className="flex justify-center hover:text-[#15444d] text-[#226D7B] text-lg underline underline-offset-4">
              Forget Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
