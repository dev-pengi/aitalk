"use client";

import {
  createContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

export type messageType = {
  message: string;
  author: string;
  error?: boolean;
};
export type ChatContextType = {
  messages: messageType[];
  sendMessage: (message: messageType) => boolean;
  generating: boolean;
  setGenerating: Dispatch<SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatContextProviderProps = {
  children: ReactNode;
};

export const ChatContextProvider: FC<ChatContextProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<messageType[]>([]);
  const [generating, setGenerating] = useState<boolean>(false);

  const sendMessage = (message: messageType) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    return true;
  };

  return (
    <ChatContext.Provider
      value={{ generating, setGenerating, messages, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
