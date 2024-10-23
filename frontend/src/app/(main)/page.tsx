"use client"
import { useUser } from "@/components/utils/AuthProvider";
import { RightSideBar } from "./components";

export default function Home() {
  const { user } = useUser();
  return <div className="flex justify-between">Hi! {user?.name}<RightSideBar /></div>;
}
