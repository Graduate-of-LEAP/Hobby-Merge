// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { RiHome4Line } from "react-icons/ri";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaList } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { IoMdCloseCircle } from "react-icons/io";
// import { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { api } from "@/lib/axios";
// import { toast } from "react-toastify";

// const paths = [
//   {
//     name: "News Feed",
//     path: "/",
//     icon: <RiHome4Line />,
//   },
//   {
//     name: "Settings",
//     path: "/settings",
//     icon: <IoSettingsOutline />,
//   },
//   {
//     name: "Wait List",
//     path: "/waitlist",
//     icon: <FaList />,
//   },
//   {
//     name: "Profile",
//     path: "/profile",
//     icon: <FaRegHeart />,
//   },
// ];

// export const SideBar = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [usersInHobby, setUsersInHobby] = useState([]);
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleClearSearch = () => {
//     setSearchValue("");
//   };

//   const getHobbies = async () => {
//     try {
//       const response = await api.get(`http://localhost:3030/hobby`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       console.log(response.data);
//       setUsersInHobby(response.data);
//     } catch (error) {
//       console.error("Error saving selected hobbies:", error);
//     }
//   };

//   useEffect(() => {
//     getHobbies();
//   }, []);

//   return (
//     <div className="min-w-[260px] flex flex-col justify-between">
//       <div className=" text-xl flex flex-col items-center py-4 bg-[#d8ebf5] rounded-br-xl">
//         <Image src={"./logo.svg"} alt="d" width={115} height={91} />
//         <div className="w-[128px] h-[128px] border border-black rounded-full relative">
//           <Image
//             className="rounded-full"
//             src="/profile.jpg"
//             alt="pro"
//             objectFit="cover"
//             layout="fill"
//           />
//         </div>
//         <div className="flex flex-col justify-center">
//           <h1 className="font-bold">Dulguun</h1>
//           <p className=" text-sm text-[#6c767b]">@Dulguun...</p>
//         </div>
//       </div>
//       <div className="w-full flex flex-col gap-3 p-5">
//         {paths.map((item, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => router.push(item.path)}
//               className={`w-[204px] ${
//                 pathname === item.path ? "bg-[#d8ebf5]" : "bg-white"
//               } h-[38px] border rounded-2xl hover:bg-[#d8ebf5] flex items-center justify-center gap-3 font-bold`}
//             >
//               {item.icon} {item.name}
//             </button>
//           );
//         })}
//       </div>
//       <div className="w-full max-h-[320px] border bg-[#d8ecf7] flex flex-col gap-3 p-4 rounded-tr-xl">
//         <h1 className="font-bold text-xl">Users</h1>
//         <div className="w-full space-y-1 overflow-y-scroll flex flex-col gap-2">
//           {usersInHobby?.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="w-[162px] h-[68px] rounded-xl flex gap-3 relative"
//               >
//                 {/* <div className="w-[56px] h-[56px] relative">
//                   <Image
//                     className="rounded-full"
//                     src={item.image}
//                     alt="h"
//                     objectFit="cover"
//                     layout="fill"
//                   />
//                 </div>
//                 <Image
//                   className="rounded-full absolute bottom-0 ml-8"
//                   src={item.avatarImg}
//                   alt="h"
//                   width={20}
//                   height={20}
//                 /> */}
//                 <div className="flex justify-center items-center">
//                   <p>{item?.name}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="text-sm flex items-center">
//           <input
//             className="border w-full bg-white rounded-xl p-3 font-sans"
//             placeholder="search"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />
//           {searchValue && (
//             <IoMdCloseCircle
//               className="text-xl cursor-pointer"
//               onClick={handleClearSearch}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiHome4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaList, FaRegHeart } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { toast } from "react-toastify";
import { useHobby } from "@/components/utils/HobbyProvider";

const paths = [
  { name: "News Feed", path: "/", icon: <RiHome4Line /> },
  { name: "Settings", path: "/settings", icon: <IoSettingsOutline /> },
  { name: "Wait List", path: "/waitlist", icon: <FaList /> },
  { name: "Profile", path: "/profile", icon: <FaRegHeart /> },
];

export const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [usersInHobby, setUsersInHobby] = useState([]);
  const pathname = usePathname();
  const router = useRouter();
  const { selectedHobby } = useHobby(); // Access selected hobby from context

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const getUsersByHobby = async () => {
    if (!selectedHobby) return;
    try {
      const response = await api.get(
        `http://localhost:3030/hobby/${selectedHobby.id}/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
      setUsersInHobby(response.data);
    } catch (error) {
      console.error("Error fetching users by hobby:", error);
    }
  };

  useEffect(() => {
    getUsersByHobby();
  }, [selectedHobby]);

  return (
    <div className="min-w-[260px] flex flex-col justify-between">
      <div className="text-xl flex flex-col items-center py-4 bg-[#d8ebf5] rounded-br-xl">
        <Image src={"./logo.svg"} alt="logo" width={115} height={91} />
        <div className="w-[128px] h-[128px] border border-black rounded-full relative">
          <Image
            className="rounded-full"
            src="/profile.jpg"
            alt="profile"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Dulguun</h1>
          <p className="text-sm text-[#6c767b]">@Dulguun...</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-5">
        {paths.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className={`w-[204px] ${
              pathname === item.path ? "bg-[#d8ebf5]" : "bg-white"
            } h-[38px] border rounded-2xl hover:bg-[#d8ebf5] flex items-center justify-center gap-3 font-bold`}
          >
            {item.icon} {item.name}
          </button>
        ))}
      </div>
      <div className="w-full max-h-[320px] border bg-[#d8ecf7] flex flex-col gap-3 p-4 rounded-tr-xl">
        <h1 className="font-bold text-xl">Users</h1>
        <div className="w-full space-y-1 overflow-y-scroll flex flex-col gap-2">
          {usersInHobby?.map((item, index) => (
            <div
              key={index}
              className="w-[162px] h-[68px] rounded-xl flex gap-3 relative"
            >
              <div className="flex justify-center items-center">
                <p>{item?.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm flex items-center">
          <input
            className="border w-full bg-white rounded-xl p-3 font-sans"
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <IoMdCloseCircle
              className="text-xl cursor-pointer"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>
    </div>
  );
};
