import React from "react";
import RedarkButton from "@/components/RedarkButton";

export default function PromptInputSection() {
  return (
    <div className="bg-white/13 flex flex-col justify-around border border-redark-purple rounded-[40px] p-10 w-full mx-auto h-[700px] font-azeret">
      <label className="text-white font-medium text-sm">Prompt</label>
      <textarea
        placeholder="Type your prompt here..."
        className="w-full mt-2 p-4 bg-white/25 h-[650px] text-white text-sm rounded-[20px] resize-none outline-none"
      />
      <div className="flex justify-between mt-4 space-x-4 gap-20">
        <button className="rounded-full bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto border border-white text-white text-[16px] pt-3 pb-2.5 px-5 tracking-wide">
          AUTOGENERATE
        </button>
        <RedarkButton
          title="GENERATE BY PROMPT"
          className="!px-5"
        />
      </div>

      <div className="flex items-center justify-between mt-6 text-sm text-white font-mono">
        <button>{"<"}</button>
        <span>Click to zoom generated Artwork (Attempt 01)</span>
        <button>{">"}</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 font-azeret">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-white/25 text-white text-sm rounded-[20px] flex items-center justify-center h-[209px] w-[201px] cursor-pointer hover:opacity-80"
          >
            Attempt {num}
          </div>
        ))}
      </div>
    </div>
  );
}
