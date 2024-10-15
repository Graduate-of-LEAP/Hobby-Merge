import { Input } from "@/components/ui/input"

const page = () => {
    return (
        <div className="container flex justify-center m-auto">
            <div className="w-full h-screen border border-black flex">
                <div className="w-[722px] h-screen border border-black bg-red-500 flex justify-center items-center">
                    <div className="w-[307px] h-[394px] border border-black">
                        <h1 className="font-bold">HELLO!</h1>
                        <h1>Sign Up to Get Started</h1>
                        <Input className="w-[307px] h-[40px]  rounded-xl" />
                    </div>
                </div>
                <div className="w-[722px] h-screen  border bg-[#226d78]"></div>
            </div>
        </div>
    )
}

export default page