import React from "react";
import { PostHeader } from "./assets";
import { PostFooter } from "./assets/PostFooter";

export const Post = () => {
  return (
    <div className="h-fit border">
      <PostHeader />
      <PostFooter />
    </div>
  );
};
