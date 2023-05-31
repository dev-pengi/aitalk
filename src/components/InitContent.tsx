"use client";
import { heroVerbs } from "@/constants";
import { InitContentTitle } from "@/styles";
import { FC, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const InitContent: FC = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: heroVerbs,
      autoStart: true,
      loop: true,
      delay: 150,
      deleteSpeed: 20,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center -mt-[120px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className={`${InitContentTitle} text-textcolorLighter text-center`}>
          Together, Let's{" "}
          <span ref={typewriterRef} className="text-primary"></span>
        </h1>
        <p className="text-textcolorLighter max-w-[650px] text-center">
          AI based chat bot, you can ask it about math, coding, food, chat with him, you can even text it with an image! enjoy these features a lot more
        </p>
      </div>
    </div>
  );
};

export default InitContent;
