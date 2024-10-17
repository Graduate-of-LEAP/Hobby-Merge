import { BiChevronRight, BiSearch } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="container m-auto border h-screen">
      <div className="flex h-screen">
        <div className="p-6 h-screen bg-white flex flex-col gap-10">
          <div className="grid gap-5 h-fit">
            <p className="text-[24px] font-semibold text-[#0D525B]">Hobby Merge</p>
            <div className="w-[80px] h-[80px] rounded-full border m-auto border-[#307D87]"></div>
            <p className="text-[18px] m-auto">Dulguun</p>
          </div>
          <div className="h-fit grid gap-3 mt-14">
            <div className="flex gap-2 items-center bg-[#307D87] text-white rounded-3xl px-4 py-2">
              <BsHouse />
              <p> News Feed</p>
            </div>
            <div className="flex gap-2 items-center border text-black rounded-3xl px-4 py-2 border-[#307D87]">
              <BsHouse />
              <p> News Feed</p>
            </div>
            <div className="flex gap-2 items-center border bg-[#307D87] text-white rounded-3xl px-4 py-2 ">
              <BsHouse />
              <p> News Feed</p>
            </div>
            <div className="flex gap-2 items-center border text-black rounded-3xl px-4 py-2 border-[#307D87]">
              <BsHouse />
              <p> News Feed</p>
            </div>
          </div>
          <div className="border h-screen rounded-xl bg-[#dcf6f3]"></div>
        </div>
        <div className="flex-1 bg-[#F2FBFF]">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="border w-14 h-14 rounded-full bg-white"></div>
              <p>Car collection feeds</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="border bg-white w-14 h-14 rounded-full"></div>
              <div className="border bg-white w-14 h-14 rounded-full"></div>
              <div className="border bg-white w-14 h-14 rounded-full"></div>
            </div>
          </div>
          <div className="h-fit grid gap-4 p-6">
            <div className="w-full h-[200px] bg-[#c6d6df] rounded-3xl"></div>
            <div className="w-full h-[300px] bg-[#abd3da] rounded-3xl"></div>
            <div className="w-full h-[200px] bg-[#dcf6f3] rounded-3xl"></div>
          </div>
          <div className="bg-[#307D87] flex mt-20">
            <div className="bg-white  flex justify-between p-2 m-2 rounded-3xl flex-1 items-center">
              <div className="flex gap-3">
                <MdMenu />
                <input className=" " placeholder="write" />
              </div>
              <BiSearch />
            </div>
            <div className="p-2 m-2 rounded-full bg-white ">
              <BiChevronRight />
            </div>
          </div>
        </div>

        <div className="grid h-fit  bg-white">
          <div className="grid gap-5">
            <div className="flex justify-center pt-4">
              <div className="bg-[#F2FBFF] border flex justify-between py-2 px-3 m-2 rounded-3xl items-center border-[#307D87]">
                <div className="flex gap-3 items-center">
                  <MdMenu />
                  <input className="bg-[#F2FBFF] " placeholder="write" />
                </div>
                <BiSearch />
              </div>
              {/* <div className="p-2 m-2 rounded-full bg-white ">
                <BiChevronRight />
              </div> */}
            </div>
            <div className="grid h-fit gap-5 pb-64 px-6">
              <p className="font-semibold text-[20px] px-4">Suggestions</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87]"></div>
                  <p> Engirees</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-2xl bg-[#307D87] text-white">follow</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87]"></div>
                  <p> Car</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-2xl border-[#307D87]">follow</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#307D87]"></div>
                  <p> Engirees</p>
                </div>
                <div className="border w-fit h-fit px-3 rounded-2xl bg-[#307D87] text-white">follow</div>
              </div>
              
            </div>
          </div>
          <div className="border ">
            <div className="flex justify-between py-3 px-3 border bg-[#307D87]">
              <div className="flex items-center ">
                <div className="border w-14 h-14 rounded-full bg-white"></div>
                <div className="flex flex-col text-sm gap-x-2 text-white">
                  <h1>Turuu</h1>
                  <p className="text-gray-400">5 minute age</p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="border  w-10 h-10 rounded-full bg-white"></div>
                <div className="border  w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="grid gap-3 py-16 px-3">
              <div className="flex gap-2 ">
                <div className="border border-green-500 w-[40px] h-[40px] rounded-full "></div>
                <div className="border w-20 h-10 rounded-lg">hi</div>
              </div>
              <div className="flex gap-2 ml-auto">
                <div className="border w-20 h-10 rounded-lg">hello</div>
                <div className="border border-green-500 w-[40px] h-[40px] rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div className="border border-green-500 w-[40px] h-[40px] rounded-full"></div>
                <div className="border w-20 h-10 rounded-lg">hi</div>
              </div>
            </div>
            <div className=" bg-[#307D87] flex">
              <div className="bg-white  flex justify-between p-2 m-2 rounded-3xl items-center">
                <div className="flex gap-3 items-center">
                  <MdMenu />
                  <input className=" " placeholder="write" />
                </div>
                <BiSearch />
              </div>
              <div className="p-2 m-2 rounded-full bg-white items-center">
                <BiChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
