import { useState } from "react";
import { motion } from 'framer-motion';

export default function BalanceWarningModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-[#EBE0FF] to-[#FFFFFF] text-center border border-redark-purple text-[#543199] sm:mx-5 sm:rounded-[40px] h-full sm:h-auto w-full max-w-2xl px-6 py-16 shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-4 text-redark-purple text-2xl font-bold"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6476 2.05186C16.1175 1.58201 16.1175 0.822243 15.6476 0.357388C15.1778 -0.107467 14.418 -0.112465 13.9531 0.357388L8.005 6.30553L2.05186 0.35239C1.58201 -0.117463 0.822243 -0.117463 0.357388 0.35239C-0.107467 0.822243 -0.112465 1.58201 0.357388 2.04686L6.30553 7.995L0.35239 13.9481C-0.117463 14.418 -0.117463 15.1778 0.35239 15.6426C0.822243 16.1075 1.58201 16.1125 2.04686 15.6426L7.995 9.69447L13.9481 15.6476C14.418 16.1175 15.1778 16.1175 15.6426 15.6476C16.1075 15.1778 16.1125 14.418 15.6426 13.9531L9.69447 8.005L15.6476 2.05186Z"
                  fill="#543199"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-lg font-bold tracking-widest mb-2 font-mokoto">
              BALANCE WARNING
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              Wallet Balance below necessary threshold
            </h3>

            {/* Message */}
            <p className="text-sm mb-6 leading-relaxed text-[#543199] font-azeret">
              Please top up your Wallet balance to be able to mint your NFT
              Artwork. <br />
              The minimum necessary balance is at least 100 ARKV ($5.25). <br />
              You can use the below sources to replenish your wallet:
            </p>

            {/* Buttons */}
            <div className="flex sm:flex-row flex-col justify-center gap-4 mt-4">
              <button className="bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto text-white px-8 pt-3 pb-2.5 rounded-full text-sm">
                CHECK ICO
              </button>
              <button className="bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto text-white px-8 pt-3 pb-2.5 rounded-full text-sm">
                RAYDIUM
              </button>
              <button className="bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto text-white px-8 pt-3 pb-2.5 rounded-full text-sm">
                UNLOCK
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
