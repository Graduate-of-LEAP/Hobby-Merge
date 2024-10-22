"use client";

import { api } from "@/components/lib/axios";
import { Category } from "@/components/utils/AuthProvider";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [categoryName, setCategoryName] = useState(""); // Категорийн нэр хадгалах state
  const [categories, setCategories] = useState<Category[]>([]);

  // Шинэ категори үүсгэх функц
  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault(); // Form илгээхэд default үйлдлийг болиулах
    if (categoryName) {
      try {
        const response = await api.post("/category", { name: categoryName });
        console.log("Категори үүсгэгдлээ:", response);
        setCategoryName(""); // Инпутын утгыг хоосон болгох
        setVisible(false); // Модалыг хаах
        getCategory(); // Категорийн жагсаалтыг шинэчлэх
      } catch (error) {
        console.error("Категори үүсгэхэд алдаа гарлаа:", error);
      }
    } else {
      console.log("Категорийн нэр оруулах шаардлагатай");
    }
  };

  // Категорийн жагсаалт авах функц
  const getCategory = async () => {
    try {
      const response = await api.get("/category");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Категорийн жагсаалт авахад алдаа гарлаа:", error);
    }
  };

  // Категори устгах функц
  const deleteCategory = async (_id: string) => {
    try {
      const response = await api.delete(`/category/${_id}`);
      console.log("Категори устгагдлаа:", response);
      getCategory(); // Устгасны дараа жагсаалтыг шинэчлэх
    } catch (error) {
      console.error("Категори устгахад алдаа гарлаа:", error);
    }
  };

  useEffect(() => {
    getCategory(); // Компонент ачаалагдсаны дараа категорийн жагсаалтыг авах
  }, []);

  return (
    <div className="container m-auto border">
      <div className="p-3 w-fit grid gap-3">
        <p className="text-black font-semibold">Categories</p>
        <div className="bg-gray-100 w-full max-h-[500px] overflow-scroll py-2 px-12 grid gap-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="border-b-2 flex justify-between items-center gap-3"
            >
              <p>{category.name}</p>
              <FaRegTrashAlt
                className="text-red-500 cursor-pointer"
                onClick={() => deleteCategory(category._id)}
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

      {/* Шинэ категори нэмэх модал */}
      <div
        className={`w-full h-full bg-[#00000080] absolute left-0 top-0 flex justify-center items-center ${
          visible ? "visible" : "hidden"
        } duration-1000`}
      >
        <div className="w-200px rounded-2xl bg-black p-8 relative">
          <form onSubmit={createCategory} className="grid gap-6 h-fit">
            {/* Form илгээх */}
            <input
              type="text"
              placeholder="Category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)} // Инпут өөрчлөгдөхөд state-г шинэчлэх
              className="bg-black text-white px-2 py-1"
            />
            <button
              className="p-2 rounded-xl border text-white mt-3"
              type="submit" // Button-д submit төрлийг тохируулах
            >
              Create category
            </button>
            <p
              className="text-white absolute top-2 text-[20px] cursor-pointer right-4"
              onClick={() => setVisible(false)} // Модал хаах
            >
              x
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
