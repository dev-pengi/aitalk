import { ChatContextProvider } from "@/contexts/ChatContext";
import { ChatBody } from "@/components";
export default function Home() {
  return (
    <>
      <ChatContextProvider>
        <ChatBody />
      </ChatContextProvider>
    </>
  );
}
