"use client";
import { Category, Hobby } from "@/components/utils/AuthProvider";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [hobbyVisible, setHobbyVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [hobbyName, setHobbyName] = useState("");
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName) {
      try {
        const response = await api.post(
          "/category",
          { name: categoryName },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Категори үүсгэгдлээ:", response);
        setCategoryName("");
        setVisible(false);
        getCategory();
      } catch (error) {
        console.error("Категори үүсгэхэд алдаа гарлаа:", error);
      }
    } else {
      console.log("Категорийн нэр оруулах шаардлагатай");
    }
  };

  const createHobby = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hobbyName && selectedCategory) {
      try {
        const response = await api.post(
          "/hobby",
          {
            name: hobbyName,
            categoryId: selectedCategory._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Хобби үүсгэгдлээ:", response);
        setHobbyName("");
        setHobbyVisible(false);
        getHobbies(selectedCategory._id);
      } catch (error) {
        console.error("Хобби үүсгэхэд алдаа гарлаа:", error);
      }
    } else {
      console.log("Хоббийн нэр болон категори сонгох шаардлагатай");
    }
  };

  const getCategory = async () => {
    try {
      const response = await api.get("/category", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Категорийн жагсаалт авахад алдаа гарлаа:", error);
    }
  };

  const getHobbies = async (categoryId?: string) => {
    try {
      const response = await api.get("/hobby", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      let hobbiesData = response.data;

      // If categoryId is provided, filter the hobbies
      if (categoryId) {
        hobbiesData = hobbiesData.filter(
          (hobby: Hobby) => hobby.category === categoryId
        );
      }

      setHobbies(hobbiesData);
    } catch (error) {
      console.error("Хобби жагсаалт авахад алдаа гарлаа:", error);
      setHobbies([]);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getHobbies(selectedCategory._id);
    }
  }, [selectedCategory]);

  const deleteCategory = async (_id: string) => {
    try {
      const response = await api.delete(`/category/${_id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("Категори устгагдлаа:", response);
      getCategory();
      if (selectedCategory && selectedCategory._id === _id) {
        setSelectedCategory(null);
        setHobbies([]); // Clear hobbies when the selected category is deleted
      }
    } catch (error) {
      console.error("Категори устгахад алдаа гарлаа:", error);
    }
  };

  const deleteHobby = async (hobbyId: string) => {
    try {
      const response = await api.delete(`/hobby/${hobbyId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("Хобби устгагдлаа:", response);
      if (selectedCategory) {
        getHobbies(selectedCategory._id);
      }
    } catch (error) {
      console.error("Хобби устгахад алдаа гарлаа:", error);
    }
  };

  return (
    <div className="container m-auto border">
      <div className="p-3 w-fit grid gap-3">
        <p className="text-black font-semibold">Categories</p>
        <div className="bg-gray-100 w-full max-h-[500px] overflow-scroll py-2 px-12 grid gap-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="border-b-2 flex justify-between items-center gap-3 cursor-pointer hover:bg-white"
              onClick={() => {
                setSelectedCategory(category);
                setHobbyVisible(true);
              }}
            >
              <p>{category.name}</p>
              <FaRegTrashAlt
                className="text-red-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCategory(category._id);
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="flex gap-2 p-2 border rounded-xl my-3"
          onClick={() => setVisible(!visible)}
        >
          <p>+</p>
          <p>Create Category</p>
        </button>
      </div>

      {visible && (
        <div className="w-full h-full bg-[#00000080] absolute left-0 top-0 flex justify-center items-center">
          <div className="w-200px rounded-2xl bg-black p-8 relative">
            <form onSubmit={createCategory} className="grid gap-6 h-fit">
              <input
                type="text"
                placeholder="Category"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="bg-black text-white px-2 py-1"
              />
              <button
                className="p-2 rounded-xl border text-white mt-3"
                type="submit"
              >
                Create category
              </button>
              <p
                className="text-white absolute top-2 text-[20px] cursor-pointer right-4"
                onClick={() => setVisible(false)}
              >
                x
              </p>
            </form>
          </div>
        </div>
      )}

      {hobbyVisible && (
        <div className="w-full h-full bg-[#00000080] absolute left-0 top-0 flex justify-center items-center">
          <div className="w-200px rounded-2xl bg-black p-8 relative">
            <form onSubmit={createHobby} className="grid gap-6 h-fit">
              <p className="text-white">Category: {selectedCategory?.name}</p>
              <input
                type="text"
                placeholder="Hobby"
                value={hobbyName}
                onChange={(e) => setHobbyName(e.target.value)}
                className="bg-black text-white px-2 py-1"
              />
              <button
                className="p-2 rounded-xl border text-white mt-3"
                type="submit"
              >
                Create Hobby
              </button>
              <p
                className="text-white absolute top-2 text-[20px] cursor-pointer right-4"
                onClick={() => setHobbyVisible(false)}
              >
                x
              </p>
            </form>
            <div className="mt-4">
              <p className="text-white">Hobbies:</p>
              <ul className="text-white">
                {hobbies.length > 0 ? (
                  hobbies.map((hobby) => (
                    <li
                      key={hobby._id}
                      className="flex justify-between items-center"
                    >
                      <p>{hobby.name}</p>
                      <FaRegTrashAlt
                        className="text-red-500 cursor-pointer"
                        onClick={() => deleteHobby(hobby._id)}
                      />
                    </li>
                  ))
                ) : (
                  <li>No hobbies found.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
