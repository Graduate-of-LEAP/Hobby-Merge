"use client";
import { useUser } from "@/components/utils/AuthProvider";
import { useHobby } from "@/components/utils/HobbyProvider";
import { api } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Hobby {
  _id: string;
  name: string;
  cover_image: string;
}

export const Suggest = () => {
  const { user } = useUser();
  const { setMyHobby } = useHobby();
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    const getHobbyForUser = async (hobbyId: string) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found");
          return;
        }
        const res = await api.get(`/hobby/${hobbyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data;
      } catch (err) {
        console.error(err);
        return null;
      }
    };
    const fetchHobbies = async () => {
      if (user.hobby && user.hobby.length > 0) {
        const hobbyPromises = user.hobby.map((hobbyId) => getHobbyForUser(hobbyId));
        const hobbyResults = await Promise.all(hobbyPromises);
        setHobbies(hobbyResults.filter((hobby): hobby is Hobby => hobby !== null));
      }
    };
    fetchHobbies();
  }, [user.hobby]);
  return (
    <div className="h-fit">
      <div>
        <h1 className="text-2xl mt-2 font-semibold mb-4">Hobbies</h1>
        <div className="flex flex-col gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              onClick={() => setMyHobby(hobby._id)}
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
