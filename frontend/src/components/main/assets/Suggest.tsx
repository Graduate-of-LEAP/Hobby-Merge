"use client";
import {
  Hobby,
  UserContextType,
  useUser,
} from "@/components/utils/AuthProvider";
import Image from "next/image";
import { useEffect } from "react";

export const Suggest = () => {
  const { user, getUser } = useUser() as UserContextType;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-fit">
      <div>
        <h1 className="text-[20px] font-semibold mb-4">Suggestion</h1>
        <div className="flex flex-col gap-6">
          {user?.hobby.map((hobby: Hobby, index) => (
            <div
              key={index}
              className="flex gap-2 items-center font-semibold cursor-pointer"
            >
              <div className="w-[50px] h-[50px] relative rounded-full overflow-hidden">
                <Image
                  src={hobby.cover_image || "/2.jpg"}
                  alt={hobby.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p>{hobby.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
