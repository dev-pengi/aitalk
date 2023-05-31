"use client";

import {
  createContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextType {
  messages: string[];
  sendMessage: (message: string) => void;
  generating: boolean;
  setGenerating: Dispatch<SetStateAction<boolean>>;
}

const ChatContext = createContext<ContextType | undefined>(undefined);

interface ChatContextProviderProps {
  children: ReactNode;
}

export const ChatContextProvider: FC<ChatContextProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [generating, setGenerating] = useState<boolean>(false);

  const sendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, generating, setGenerating }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
