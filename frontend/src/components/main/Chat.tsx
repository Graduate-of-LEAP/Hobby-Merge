import React from "react";
import { MainChat } from "./assets";
import { Suggest } from "./assets/Suggest";

export const Chat = () => {
  return (
    <div className="min-w-80 flex flex-col justify-between">
      <div>Search</div>
      <Suggest />
      <MainChat />
    </div>
  );
};
