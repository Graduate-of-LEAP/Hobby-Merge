"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/components/utils/AuthProvider";
import Image from "next/image";

export default function Profile() {
  const { user, LogOut } = useUser();
  return (
    <div className="flex flex-col items-center w-full h-full justify-center gap-5">
      <Image src="/profile.jpg" alt="Profile" width={200} height={200} />
      <h1>Profile </h1>
      <p>Welcome:{user?.name}</p>
      <p>Your email: {user?.email}</p>

      <p>
        Your hobbies:
        {user?.hobby.map((item, i) => (
          <span key={i}>{item.name}</span>
        ))}
      </p>
      <Button type="button" onClick={LogOut}>Log out</Button>
    </div>
  );
}
