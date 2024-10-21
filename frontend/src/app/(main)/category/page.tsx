"use client";

import { api } from "@/components/lib/axios";
import {
  Category as CategoryType,
  UserContextType,
  useUser,
} from "@/components/utils/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

const Category = () => {
  const { user, setUser, getUser } = (useUser() as UserContextType) || {};

  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getCategories = async () => {
    try {
      const response = await api.get(`/category/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const CategoriesSaveToUser = async () => {
    if (user) {
      try {
        const response = await api.post(
          "/users",
          {
            userId: user.id,
            productId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        getUser();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("User not logged in");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="max-w-screen-xl m-auto h-screen border px-32">
      <div className="flex flex-col mt-[60px]">
        <div className=" flex justify-center">
          <Image src="/HobbyMerge.png" width={486} height={117} alt="logo" />
        </div>
        <div className="mt-20 mb-10">
          <h1 className="text-[#06B6D4] font-semibold text-[30px] ">
            Сонирхол
          </h1>
          <p className="text-[#6F6C90]">Сонирхолоо сонгоно уу</p>
        </div>
        <div className="flex gap-2 flex-wrap h-fit ">
          {categories.map((category, index) => (
            <div
              key={index}
              role="button"
              aria-label={`Category: ${category?.name}`}
              className="border border-[#dddddd] text-[#6f7079] px-2 py-1 rounded-full flex items-center justify-center "
            >
              {category?.name}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <button className="text-white bg-[942AE7] rounded-full w-64 p-2">
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
