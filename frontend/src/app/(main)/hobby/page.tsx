"use client";

import {
  UserContextType,
  useUser,
  Hobby as Hobbies,
} from "@/components/utils/AuthProvider";
import { api } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Hobby = () => {
  const { user, getUser } = (useUser() as UserContextType) || {};
  const router = useRouter();

  const [hobbies, setHobbies] = useState<Hobbies[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const getHobbies = async () => {
    try {
      const response = await api.get(`http://localhost:3030/hobby`, {
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

  const addUserToHobby = async (hobbyId: string, userId: string) => {
    try {
      const response = await api.post(
<<<<<<< HEAD
        "http://localhost:3030/hobby/addUser",
=======
        "/hobby/addUser",
>>>>>>> 3cef845ba4718e58416aec8a5bcbc878c657c391
        { hobbyId, userId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("User added to hobby:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding user to hobby:", error);
      toast.error("Failed to add user to hobby.");
      return { error };
    }
  };

  const saveSelectedHobbies = async () => {
    if (user) {
      console.log("User ID:", user._id);
      try {
<<<<<<< HEAD
        await Promise.all(
          selectedHobbies.map((hobbyId) => addUserToHobby(hobbyId, user._id))
        );

        const response = await api.post(
          "http://localhost:3030/user/hobby",
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

=======
        const promises = selectedHobbies.map((hobbyId) =>
          addUserToHobby(hobbyId, user._id)
        );
        await Promise.all(promises);
        getUser();
        toast.success("Таны hobby амжилттай хадгаллаа");
        setSelectedHobbies([]);
>>>>>>> 3cef845ba4718e58416aec8a5bcbc878c657c391
        router.push("/");
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
          <p className="text-[#6F6C90]">Choose your hobbies</p>
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
              className="text-white bg-[#942AE7] rounded-full w-64 p-2"
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
