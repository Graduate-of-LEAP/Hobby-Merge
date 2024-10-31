"use client";

import { FaUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { UserContextType, useUser } from "@/components/utils/AuthProvider";
import { toast } from "react-toastify";
import { LuLock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { register, login } = (useUser() as UserContextType) || {};

  const [isHovering, setIsHovering] = useState(true);
  const [isHoveringEmail, setIsHoveringEmail] = useState(true);
  const [isHoveringPassword, setIsHoveringPassword] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [move, setMove] = useState(false); // Controls section movement
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [iconVisible, setIconVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const onMouseEnterIcon = () => setIsIconVisible(false);
  const onMouseLeaveIcon = () => setIsIconVisible(true);

  const onMouseEnterLock = () => setIconVisible(false);
  const onMouseLeaveLock = () => setIconVisible(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container flex justify-center m-auto relative">
      <div className="flex-1 h-screen bg-white flex justify-center items-center z-10">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl font-bold text-[#6baacc]">HELLO!</h1>
            <h1 className="font-medium text-lg text-[#6baacc]">
              Sign Up to Get Started
            </h1>
          </div>
          <div className="w-80 flex flex-col gap-5">
            <div
              className="border rounded-3xl py-3 px-4 border-[#6baacc] flex items-center gap-2"
              onMouseEnter={() => setIsHovering(false)}
              onMouseLeave={() => setIsHovering(true)}
            >
              {isHovering && (
                <FaUser className="opacity-60 h-4 w-4 text-[#6baacc]" />
              )}
              <input
                type="text"
                name="text"
                className="outline-none placeholder:text-[#6baacc] opacity-60"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              className="border rounded-3xl py-3 px-4 border-[#6baacc] flex items-center gap-2"
              onMouseEnter={() => setIsHoveringEmail(false)}
              onMouseLeave={() => setIsHoveringEmail(true)}
            >
              {isHoveringEmail && (
                <MdOutlineEmail className="opacity-60 h-5 w-5 text-[#6baacc]" />
              )}
              <input
                type="email"
                name="text"
                className="outline-none placeholder:text-[#6baacc] opacity-60"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className="border rounded-3xl py-3 px-4 border-[#6baacc] flex items-center gap-2"
              onMouseEnter={() => setIsHoveringPassword(false)}
              onMouseLeave={() => setIsHoveringPassword(true)}
            >
              {isHoveringPassword && (
                <FaLock className="opacity-60 h-4 w-4 text-[#6baacc]" />
              )}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="outline-none placeholder:text-[#6baacc] opacity-60 "
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <div
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer pl-12"
                >
                  {showPassword ? (
                    <FaEyeSlash className="opacity-60 h-4 w-4 text-[#6baacc]" />
                  ) : (
                    <FaEye className="opacity-60 h-4 w-4 text-[#6baacc]" />
                  )}
                </div>
              )}
            </div>
            <button
              className="duration-700 border-2 border-[#6baacc]  py-2 rounded-3xl hover:bg-[#6baacc] hover:text-white text-[#6baacc] text-lg font-semibold"
              onClick={() => {
                if (!name || !email || !password) {
                  toast.error("Бүх талбарыг бөглөнө үү.");
                  return;
                }
                register({ name, email, password });
              }}
            >
              Register
            </button>
            <button
              className="flex justify-center hover:text-[#15444d] text-[#6baacc] text-lg hover:underline underline-offset-4 z-10"
              onClick={() => setMove(false)} // Moves the section left
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center z-10">
        <div className="flex flex-col gap-10">
          <div className="">
            <h1 className="text-4xl font-bold text-[#6baacc]">Hello Again!</h1>
            <p className="text-lg font-medium text-[#6baacc]">Welcome Back</p>
          </div>
          <div className="w-80 flex flex-col gap-5 ">
            <div
              className="flex gap-2 border border-[#6baacc] rounded-3xl py-3 px-4 items-center"
              onMouseEnter={onMouseEnterIcon}
              onMouseLeave={onMouseLeaveIcon}
            >
              {isIconVisible && (
                <HiOutlineMail className="opacity-60 w-5 h-5 text-[#6baacc]" />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="outline-none duration-700 placeholder:text-[#6baacc] opacity-60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className="flex gap-2 border border-[#6baacc] rounded-3xl py-3 px-4 items-center"
              onMouseEnter={onMouseEnterLock}
              onMouseLeave={onMouseLeaveLock}
            >
              {iconVisible && (
                <LuLock className="opacity-60 w-5 h-5 text-[#6baacc]" />
              )}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="outline-none duration-1000 placeholder:text-[#6baacc] opacity-60"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <div
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer pl-12"
                >
                  {showPassword ? (
                    <FaEyeSlash className="opacity-60 h-4 w-4 text-[#6baacc]" />
                  ) : (
                    <FaEye className="opacity-60 h-4 w-4 text-[#6baacc]" />
                  )}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="border-2 border-[#6baacc] py-2 rounded-3xl hover:bg-[#6baacc] hover:text-white bg-white text-[#6baacc] text-lg font-semibold duration-700 "
              onClick={() => login(email, password)}
            >
              Login
            </button>

            <div className="flex flex-col justify-evenly">
              <button className="hover:text-blue-400 text-[#6baacc] text-lg hover:underline underline-offset-4">
                Forget Password
              </button>
              <button
                className="hover:text-blue-400 text-[#6baacc] text-lg hover:underline underline-offset-4 z-10"
                onClick={() => setMove(true)} // Moves the section right
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full absolute flex">
        <div
          className={`h-screen w-fit flex-1 border bg-[#6baacc] flex justify-center items-center transition-transform duration-1000 z-20 ${move ? "translate-x-full" : "translate-x-0"
            } duration-1000`} // Transition for smooth sliding
        >
          <div className=" text-white grid gap-4 ">
            <div>
              <h1 className="text-5xl font-bold">Hobby Merge</h1>
              <h1 className="text-xl">
                The most popular peer to peer lending at SEA
              </h1>
            </div>
            <button className="flex justify-start hover:underline underline-offset-4 ">
              Read More
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Register;
