"use client";

import { FC } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const MyComponent: FC<Props> = () => {
  const handleGenerate = () => {};

  return (
    <div className="flex items-center rounded-[7px] shadow-sm overflow-auto justify-center w-[93%] max-w-[800px] max-h-96 px-5 pr-1 py-4 bg-dark3 fixed bottom-5 right-0 left-0 m-auto">
      <TextareaAutosize
        className="bg-transparent scr resize-none max-h-[22rem] pr-8 overflow-auto overflow-x-hidden w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
        placeholder="Type your promot here"
      ></TextareaAutosize>
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="absolute h-max w-max right-4 bottom-[19px] text-lg cursor-pointer hover:text-primary duration-300"
      />
    </div>
  );
};

export default MyComponent;