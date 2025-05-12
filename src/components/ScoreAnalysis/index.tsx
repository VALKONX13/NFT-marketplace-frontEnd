import Image from "next/image";
import React from "react";

function ScoreAnalysis() {
  return (
    <div className="bg-redark-purple/6 border border-redark-purple rounded-xl px-8 py-5 w-full max-w-3xl text-center relative">
      <div className="pb-4">
        <p className="text-xs mb-1 font-azeret text-gray-400">Analysis</p>
        <p className="text-sm font-semibold tracking-wide font-azeret">
          SCORE SIGNIFICANCE
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 flex items-center justify-center relative">
        <div className="w-[90%] h-8 bg-[#3A3457] rounded-full overflow-hidden relative flex">
          <div className="w-[30%] bg-[#C9AEFF]" />
          <div className="w-[40%] bg-redark-purple" />
          <div className="w-[30%]" />
        </div>

        {/* Astronaut & Label */}
        <div className="absolute -top-5 left-[65%] flex flex-col items-center">
          <div className="absolute top-[-20%] left-[20%]">
            <p className="text-xs font-mokoto absolute bottom-[10%] left-[50px]">
              801
            </p>
            <svg
              className="absolute left-[30%] z-10"
              width="84"
              height="51"
              viewBox="0 0 84 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 50L49.1816 1L84 1" stroke="white" />
            </svg>
          </div>
          <Image
            className="z-20 mt-4"
            src="/assets/img/astronaut.png"
            alt="score"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="mt-4 flex justify-between text-xs px-12 font-azeret">
        <div>
          <p>EXPLORER TIER</p>
          <p className="text-gray-400">300-599</p>
        </div>
        <div>
          <p>CORE OPERATOR</p>
          <p className="text-gray-400">600-799</p>
        </div>
        <div>
          <p>ELITE ARCORBITER</p>
          <p className="text-gray-400">800-999</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreAnalysis;
