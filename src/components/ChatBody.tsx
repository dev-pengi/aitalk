"use client";

import { FC, useContext } from "react";

import InitContent from "./InitContent";
import { MessageInput } from ".";
import ChatContext, {
  ChatContextType,
  messageType,
} from "../contexts/ChatContext";
import logo from "../../public/logo.png";
import Image from "next/image";

interface Props {}

const MyComponent: FC<Props> = () => {
  const { generating, messages } = useContext(ChatContext) as ChatContextType;

  const ShowMessage: FC = () => {
    return (
      <div className="flex flex-col items-center justify-start">
        <div className="max-w-[800px] w-full flex flex-col items-start">
          {messages.map((message: messageType) => {
            const system: boolean = message.author == "system";
            return (
              <div
                className={`${
                  system
                    ? `${
                        message.error ? "border-red-600" : "border-primary"
                      } border-0 border-l-4 border-solid flex items-start bg-dark2`
                    : " bg-dark"
                } px-3 py-4 w-full`}
              >
                {system && !message.error && (
                  <Image src={logo} alt="system logo" className="w-6 mr-2" />
                )}
                <p className={`${message.error ? "text-red-600" : ""}`}>
                  {message.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen max-w-screen pb-10">
      {messages.length ? <ShowMessage /> : <InitContent />}
      <MessageInput />
    </div>
  );
};

export default MyComponent;
