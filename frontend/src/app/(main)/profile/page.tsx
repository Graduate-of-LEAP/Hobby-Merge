"use client";
import { SideBar } from "@/components/main";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { useUser } from "@/components/utils/AuthProvider";
import { DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Profile() {
  const { user, LogOut, updateProfilePicture } = useUser(); // Assuming you have this function in your context
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Assuming you have a function to handle the upload
      await updateProfilePicture(selectedFile);
      // Optionally reset selected file after upload
      setSelectedFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full justify-center gap-5 bg-blue-100">
      <Image src="/profile.jpg" alt="Profile" width={200} height={200} className="rounded-full" />
      <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-rose-500  border rounded-full bg-black p-2 text-white" >
                    Edit Profile
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mb-4 mr-48 bg-blue-400 text-teal-50  flex flex-col gap-5 p-4 rounded ">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2 bg-transparent" />
                      <DropdownMenuGroup className="flex items-center gap-5 ">

                      <Button onClick={() => updateProfilePicture(null)} className="font-large bg-transparent">Remove Picture</Button>
                      </DropdownMenuGroup>
                     
                      <DropdownMenuGroup className="flex items-center gap-5 ">
                      <Button onClick={handleUpload} className="font-large bg-transparent">Upload New Picture</Button>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
    
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>
        Hobbies:
        {user?.hobby.map((item, i) => (
          <span className="w-fit h-fit bg-blue-300 border rounded-full p-2" key={i}>{item.name}</span>
        ))}
      </p>
      <Button type="button" onClick={LogOut}>Log out</Button>
    </div>
  );
}
