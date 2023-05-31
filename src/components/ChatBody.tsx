"use client";

import { FC, useContext } from "react";

import InitContent from "./InitContent";
import YourContext from "../contexts/ChatContext";
import { MessageInput } from ".";

interface Props {}

const MyComponent: FC<Props> = () => {
  return (
    <div className="h-screen ">
      <InitContent />
      <MessageInput />
    </div>
  );
};

export default MyComponent;
