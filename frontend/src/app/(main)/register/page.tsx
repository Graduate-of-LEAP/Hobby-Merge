
"use client";

import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
const Register = () => {
    const [isHovering, setIsHovering] = useState(true);
    const [isHoveringEmail, setIsHoveringEmail] = useState(true);
    const [isHoveringPassword, setIsHoveringPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="container flex justify-center m-auto">
            <div className="flex-1 h-screen border border-black bg-white flex justify-center items-center">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-xl font-bold text-[#0e343c]">HELLO!</h1>
                        <h1 className="font-medium text-[#15444d]">Sign Up to Get Started</h1>
                    </div>
                    <div className="w-80 flex flex-col gap-5">
                        <div
                            className="border rounded-3xl py-3 px-4 border-[#15444d] flex items-center gap-2"
                            onMouseEnter={() => setIsHovering(false)}
                            onMouseLeave={() => setIsHovering(true)}
                        >
                            <div className="text-black h-4 w-4">
                                {isHovering && <FaUser />}
                            </div>
                            <input type="text" className="outline-none" placeholder="Full Name" />
                        </div>
                        <div
                            className="border rounded-3xl py-3 px-4 border-[#15444d] flex items-center gap-2"
                            onMouseEnter={() => setIsHoveringEmail(false)}
                            onMouseLeave={() => setIsHoveringEmail(true)}
                        >
                            <div className="opacity-60 h-4 w-4">
                                {isHoveringEmail && <MdOutlineEmail />}
                            </div>
                            <input type="text" className="outline-none" placeholder="Email Address" />
                        </div>
                        <div
                            className="border rounded-3xl py-3 px-4 border-[#15444d] flex items-center gap-2"
                            onMouseEnter={() => setIsHoveringPassword(true)}
                            onMouseLeave={() => setIsHoveringPassword(false)}
                        >
                            <div className="opacity-60 h-4 w-4">
                                {!isHoveringPassword && <FaLock />}
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="outline-none flex-1"
                                placeholder="Password"
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                        <button className="duration-700 border border-[#15444d] py-2 rounded-3xl hover:bg-[#226d7b] hover:text-white text-[#226d7b]">
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen border bg-[#226d78] flex justify-center items-center">
                <div className="w-[410px] h-[147px] flex flex-col justify-between text-white">
                    <h1 className="text-4xl font-bold">Hobby Merge</h1>
                    <h1 className="text-xl">The most popular peer to peer lending at SEA</h1>
                    <h1>Read More</h1>
                </div>
            </div>
        </div>
    );
};
export default Register;