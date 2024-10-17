import { BiChevronRight, BiSearch } from "react-icons/bi";
import {
  BsHouse,
  BsSendArrowUpFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdMenu, MdPhotoCameraBack } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="container m-auto h-screen">
      <div className="flex h-screen">
        <div className="w-[300px] p-6 h-screen bg-white flex flex-col gap-10">
          <div className="grid gap-5 justify-center">
            <p className="text-[24px] font-semibold text-[#0D525B]">
              Hobby Merge
            </p>
            <div className="flex flex-col justify-center gap-2">
              <div className="w-32 h-32 rounded-full border-2 m-auto border-[#307D87] border-dashed"></div>
              <p className="text-[18px] m-auto text-[#0D525B]">Dulguun</p>
            </div>
          </div>
          <div className="h-fit grid gap-3 ">
            <div className="flex gap-4 items-center bg-[#307D87] text-white rounded-3xl px-4 py-2 justify-center">
              <BsHouse />
              <p> News Feed</p>
            </div>
            <div className="flex gap-4 items-center border-2 text-black rounded-3xl px-4 py-2 border-[#307D87] justify-center">
              <BsHouse />
              <p className="font-semibold text-[#0D525B]"> Wait list</p>
            </div>
            <div className="flex gap-4 items-center border bg-[#307D87] text-white rounded-3xl px-4 py-2 justify-center">
              <BsHouse />
              <p> Profile</p>
            </div>
            <div className="flex gap-4 items-center border-2 text-black rounded-3xl px-4 py-2 border-[#307D87] justify-center">
              <BsHouse />
              <p className="font-semibold text-[#0D525B]">Settings</p>
            </div>
          </div>
          <div className="h-screen rounded-xl bg-[#dcf6f3]"></div>
        </div>

        <div className="bg-[#F2FBFF] flex flex-col h-screen justify-between w-[1000px]">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="border-2 w-14 h-14 rounded-full bg-white border-[#307D87] border-dashed"></div>
              <p className="font-semibold text-[#0D525B] text-xl">
                Car collection feeds
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className=" border-2 rounded-3xl px-2 bg-[#307D87] text-white">
                Your post
              </p>
              <p className=" text-[#0D525B] border-2 rounded-3xl px-2 border-[#307D87]">
                Notifications
              </p>
            </div>
          </div>
          <div className="h-fit grid gap-4 p-6">
            <div className="w-full h-[300px] bg-[#c6d6df] rounded-3xl"></div>
            <div className="w-full h-[400px] bg-[#abd3da] rounded-3xl"></div>
            <div className="w-full h-[250px] bg-[#b1d5d1] rounded-3xl"></div>
          </div>
          <div className="bg-[#307D87] flex mt-20 justify-center">
            <div className="bg-white  flex justify-between p-2 m-2 rounded-3xl flex-1 items-center ">
              <div className="flex gap-3 items-center">
                <MdMenu />
                <input className=" " placeholder="write" />
              </div>
              <BiSearch />
            </div>
            <div className="px-2 m-2 rounded-full bg-white flex items-center">
              <BsSendArrowUpFill />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen justify-between bg-white w-[400px]">
          <div className="grid gap-5">
            <div className="flex justify-center py-4">
              <div className="bg-[#e7faf8] flex justify-between py-2 px-11 m-2 rounded-3xl items-center">
                <div className="flex gap-3 items-center">
                  <MdMenu />
                  <input className="bg-[#e7faf8] " placeholder="write" />
                </div>
                <BiSearch />
              </div>
              {/* <div className="p-2 m-2 rounded-full bg-white ">
                <BiChevronRight />
              </div> */}
            </div>
            <div className="grid gap-5 pb-64 pt-7 mx-6 px-5 bg-[#e7faf8] rounded-xl">
              <p className="font-semibold text-[20px] px-4">Suggestions</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87] border-dashed bg-white"></div>
                  <p className="font-semibold text-[#0D525B]"> Engirees</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-2xl bg-[#307D87] text-white">
                  follow
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87] border-dashed bg-white"></div>
                  <p className="font-semibold text-[#0D525B]"> Car</p>
                </div>
                <div className="border-2 w-fit h-fit px-3 rounded-2xl border-[#307D87]">
                  follow
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87] border-dashed bg-white"></div>
                  <p className="font-semibold text-[#0D525B]"> Engirees</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-2xl bg-[#307D87] text-white">
                  follow
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-t-xl mx-6">
            <div className="flex justify-between py-2 px-3  bg-[#307D87] rounded-t-xl">
              <div className="flex items-center ">
                <div className=" w-11 h-11 rounded-full bg-white"></div>
                <div className="flex flex-col text-sm gap-x-2 text-white">
                  <h1>Turuu</h1>
                  <p className="text-gray-400">5 minute age</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <MdPhotoCameraBack className="w-6 h-6 text-white" />
                </div>
                <div>
                  <BsThreeDotsVertical className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="grid gap-3 py-16 px-3 bg-white border-2 border-[#307D87]">
              <div className="flex gap-2 ">
                <div className="border-2 border-[#307D87] w-[40px] h-[40px] rounded-full border-dashed"></div>
                <div className="border w-20 h-10 rounded-lg bg-slate-200">
                  hi
                </div>
              </div>
              <div className="flex gap-2 ml-auto">
                <div className="border w-20 h-10 rounded-lg bg-slate-200">
                  hello
                </div>
                <div className="border-2 border-[#307D87] w-[40px] h-[40px] rounded-full border-dashed"></div>
              </div>
              <div className="flex gap-2">
                <div className="border-2 border-[#307D87] w-[40px] h-[40px] rounded-full border-dashed"></div>
                <div className="border w-20 h-10 rounded-lg bg-slate-200">
                  hi
                </div>
              </div>
            </div>
            <div className=" bg-[#307D87] flex justify-center">
              <div className="bg-white flex justify-between py-2 px-5 m-2 rounded-3xl items-center">
                <div className="flex gap-3 items-center">
                  <MdMenu />
                  <input className=" " placeholder="write" />
                </div>
                <BsSendArrowUpFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
