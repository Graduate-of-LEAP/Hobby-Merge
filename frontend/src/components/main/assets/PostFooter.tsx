"use client";

import { Input } from "@/components/ui/input";
import { UserContextType, useUser } from "@/components/utils/AuthProvider";
import { api } from "@/lib/axios";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { PiArrowFatLinesRightBold } from "react-icons/pi";
import { toast } from "react-toastify";

export const PostFooter = () => {
  const { user } = useUser() as UserContextType;
  const [loading, setLoading] = useState(false);
  const [, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      const file = files[0];
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      await handleUpload(file);
    }
  };

  const handleUpload = async (selectedImage: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const res = await api.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl((prevUrls) => [...prevUrls, res.data.secure_url]);
    } catch (error) {
      console.log("Upload failed", error);
      toast.error("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    try {
      await api.post(
        "/post",
        { user: user?._id, content, postImages: imageUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Post created successfully!");
      setContent("");
      setImage(null);
      setPreviewUrl(null);
    } catch (error) {
      console.log(error);
      toast.error("Error creating post");
    }
  };

  return (
    <div className="container mx-auto px-6 py-6 bg-[#f7fafc] rounded-lg shadow-lg flex flex-col items-center">
      <Input
        onChange={(event) => setContent(event.target.value)}
        value={content}
        placeholder="Share something . . ."
        className="w-full px-4 py-3 mb-4 border rounded-md shadow-sm text-lg focus:ring-2 focus:ring-blue-300"
      />
      <div className="flex items-center gap-4 w-full">
        <FaRegFaceSmileWink className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-500 transition" />

        <div className="relative">
          <BsImage
            className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-500 transition"
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChangeFile}
            className="hidden"
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 rounded-full animate-spin">
              <div className="w-4 h-4 border-t-2 border-blue-500 rounded-full"></div>
            </div>
          )}
        </div>

        <PiArrowFatLinesRightBold
          className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-500 transition"
          onClick={createPost}
        />
      </div>

      {previewUrl && (
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="w-32 h-32 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={previewUrl}
              fill
              alt="Selected Image Preview"
              className="object-cover"
              onLoad={() => URL.revokeObjectURL(previewUrl)}
            />
            {loading && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
