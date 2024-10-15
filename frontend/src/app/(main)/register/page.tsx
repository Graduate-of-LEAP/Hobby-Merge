import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Register = () => {
    return (
        <div className="container flex justify-center m-auto">
            <div className="  flex-1  h-screen border border-black bg-white flex justify-center items-center">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className=" text-xl font-bold text-[#0e343c]">HELLO!</h1>
                        <h1 className="font-medium text-[#15444d]">Sign Up to Get Started</h1>
                    </div>
                    <div className="w-80 flex flex-col gap-5">
                        <input type="text" className="border rounded-3xl py-3  px-4 border-[#15444d]" placeholder="Full Name " />
                        <input type="text" className="border rounded-3xl py-3  px-4 border-[#15444d]" placeholder="Email Address " />
                        <input type="text" className="border rounded-3xl py-3  px-4 border-[#15444d]" placeholder="Password " />
                        <button className="border border-[#15444d] py-2 rounded-3xl hover:bg-[#226d7b] hover:text-white text-[#226d7b]">Register</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen  border bg-[#226d78] flex justify-center items-center">
                <div className="w-[410px] h-[147px]  flex flex-col justify-between text-white">
                    <h1 className="text-4xl font-bold">Hobby Merge</h1>
                    <h1 className="text-xl ">The most popular peer to peer lending at SEA</h1>
                    <h1>Read More</h1>
                </div>
            </div>
        </div>
    )
}

export default Register;