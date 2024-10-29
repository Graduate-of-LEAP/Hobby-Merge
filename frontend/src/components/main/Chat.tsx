import React from "react";
import { MainChat } from "./assets";
import { Suggest } from "./assets/Suggest";

export const Chat = () => {
  return (
    <div className="w-80">
      <div>Search</div>
      <div className="flex flex-col justify-between h-full">
        <Suggest />
        <MainChat />
      </div>
    </div>
  );
};
