"use client";

import {
  FC,
  useContext,
  useState,
  ChangeEventHandler,
  useEffect,
  useRef,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

import ChatContext, {
  ChatContextType,
  messageType,
} from "../contexts/ChatContext";
import Image from "next/image";

interface Props {}

const MyComponent: FC<Props> = () => {
  const [message, setMessage] = useState("");
  const inputRef: any = useRef(null);

  const { sendMessage, messages, generating, setGenerating } = useContext(
    ChatContext
  ) as ChatContextType;
  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);
  const handleGenerate = async () => {
    if (!message.trim().length) return;
    try {
      setGenerating(true);
      setMessage("");
      const newMessage: messageType = {
        message,
        author: "user",
      };

      sendMessage(newMessage);
      const { data }: { data: string } = await axios.post(
        "https://api.sifedine.lol/api/aitalk/messages",
        {
          prompt: message,
        }
      );
      const systemMessage: messageType = {
        message: data,
        author: "system",
      };
      sendMessage(systemMessage);
      console.log(data);
    } catch (err) {
      const newMessage: messageType = {
        message: "an error occurred while generating the message",
        author: "system",
        error: true,
      };
      sendMessage(newMessage);
    } finally {
      setGenerating(false);
    }
  };

  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setMessage(inputValue);
  };

  return (
    <div
      className="fixed -bottom-3 h-16 w-full bg-dark"
      style={{ boxShadow: "box-shadow: 0px -10px 20px 10px #ff0000" }}
    >
      <div className="flex items-center rounded-[7px] shadow-sm overflow-auto justify-center w-[93%] max-w-[800px] max-h-96 px-5 pr-1 py-4 bg-dark3 fixed bottom-5 right-0 left-0 m-auto">
        <TextareaAutosize
          className="bg-transparent scr resize-none max-h-[22rem] pr-8 overflow-auto overflow-x-hidden w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
          placeholder="Type your promot here"
          autoFocus
          ref={inputRef}
          value={message}
          onChange={handleTextareaChange}
        />
        {generating ? (
          <FontAwesomeIcon
            icon={faSpinner}
            className="fa-spin-pulse absolute h-max w-max right-4 bottom-[19px] text-lg cursor-not-allowed duration-300"
          />
        ) : (
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`absolute h-max w-max right-4 bottom-[19px] text-lg ${
              message.trim().length
                ? "cursor-pointer hover:text-primary"
                : "cursor-not-allowed"
            } duration-300`}
            onClick={handleGenerate}
          />
        )}
      </div>
    </div>
  );
};

export default MyComponent;
