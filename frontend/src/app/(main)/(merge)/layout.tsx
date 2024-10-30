import { Chat, Post, SideBar } from "@/components/main";
import { PropsWithChildren } from "react";

export default function MergeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-5 h-screen max-w-screen-xl m-auto">
      {children}
      <SideBar />
      <Post />
      <Chat />
    </div>
  );
}
