"use client";
import {
  UserContextType,
  useUser,
  Hobby as HobbyType,
} from "@/components/utils/AuthProvider";
import { api } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Hobby = () => {
  const { user, getUser } = (useUser() as UserContextType) || {};

  const [hobbies, setHobbies] = useState<HobbyType[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const getHobbies = async () => {
    try {
      const response = await api.get(`/hobby`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setHobbies(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error saving selected hobbies:", error);
      toast.error("Hobby хадгалахад алдаа гарлаа.");
    }
  };

  const toggleCategorySelection = (hobbyId: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobbyId)
        ? prev.filter((id) => id !== hobbyId)
        : [...prev, hobbyId]
    );
  };

  const saveSelectedHobbies = async () => {
    if (user) {
      console.log("User ID:", user._id);
      try {
        const response = await api.post(
          "/user/hobby",
          {
            userId: user._id,
            hobbyIds: selectedHobbies,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        getUser();
        toast.success("Таны hobby амжилттай хадгаллаа");
      } catch (error) {
        console.error("Error saving selected hobbies:", error);
        toast.error("Hobby хадгалахад алдаа гарлаа.");
      }
    } else {
      console.log("User not logged in");
    }
  };

  useEffect(() => {
    getHobbies();
    getUser();
  }, []);
  return (
    <div className="max-w-screen-xl m-auto h-screen border px-32">
      <div className="flex flex-col mt-[60px]">
        <div className=" flex justify-center">
          <Image src="/HobbyMerge.png" width={486} height={117} alt="logo" />
        </div>
        <div className="mt-20 mb-10">
          <h1 className="text-[#06B6D4] font-semibold text-[30px] ">Hobby</h1>
          <p className="text-[#6F6C90]"> Choose your hobbies</p>
        </div>
        <div className="flex gap-2 flex-wrap h-fit ">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              role="button"
              onClick={() => toggleCategorySelection(hobby._id)}
              className={`border px-2 py-1 rounded-full flex items-center justify-center cursor-pointer ${
                selectedHobbies.includes(hobby._id)
                  ? "border-[#06B6D4]"
                  : "border-[#dddddd] text-[#6f7079]"
              }`}
            >
              {hobby?.name}
            </div>
          ))}
        </div>
        <Link href={`/`}>
          <div className="mt-16">
            <button
              onClick={saveSelectedHobbies}
              className="text-white bg-[942AE7] rounded-full w-64 p-2"
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hobby;
