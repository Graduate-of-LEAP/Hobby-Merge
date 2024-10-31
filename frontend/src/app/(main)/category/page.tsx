"use client";

import { api } from "@/lib/axios";
import {
  Category as CategoryType,
  UserContextType,
  useUser,
} from "@/components/utils/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

const Category = () => {
  const { user, getUser } = (useUser() as UserContextType) || {};

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const getCategories = async () => {
    try {
      const response = await api.get(`http://localhost:3030/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {}
  };

  const toggleCategorySelection = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const saveSelectedCategories = async () => {
    if (user) {
      console.log("User ID:", user._id);
      try {
        const response = await api.post(
          "http://localhost:3030/user/category",
          {
            userId: user._id,
            categoryIds: selectedCategories,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        getUser();
        toast.success("Таны сонирхолуудыг амжилттай хадгаллаа");
      } catch (error) {
        console.error("Error saving selected categories:", error);
        toast.error("Сонирхол хадгалахад алдаа гарлаа.");
      }
    } else {
      console.log("User not logged in");
    }
  };

  useEffect(() => {
    getCategories();
    getUser();
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
              onClick={() => toggleCategorySelection(category._id)}
              className={`border px-2 py-1 rounded-full flex items-center justify-center cursor-pointer ${
                selectedCategories.includes(category._id)
                  ? "border-[#06B6D4]"
                  : "border-[#dddddd] text-[#6f7079]"
              }`}
            >
              {category?.name}
            </div>
          ))}
        </div>
        <Link href={`/hobby`}>
          <div className="mt-16">
            <button
              onClick={saveSelectedCategories}
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

export default Category;
