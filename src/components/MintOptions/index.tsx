import Image from "next/image";
import RedarkButton from "@/components/RedarkButton/index";
import { motion } from 'framer-motion';

interface MintOptionsProps {
  onSelect: (option: string) => void;
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function MintOptions({ onSelect }: MintOptionsProps) {
  return (
    <div className="items-center text-center text-white font-azeret lg:px-4 lg:py-6 py-3 md:flex-row md:justify-center gap-6">
      <div className="grid xl:grid-cols-12 grid-cols-4 lg:gap-8">
        {/* Mint Your Own NFT Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-redark-purple/13 rounded-2xl lg:p-6 w-full lg:col-span-6 col-span-4 lg:mb-0 mb-4">
          <h2 className="tracking-wider font-mokoto lg:text-xl lg:py-8 pt-5 pb-3 px-6 xl:px-2 text-xs text-start border-b border-b-white/25">
            MINT YOUR OWN NFT
          </h2>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="flex lg:gap-4 gap-2 justify-around lg:py-8 py-4 px-2">
            <Image
              src="/assets/img/NFT-art.png"
              alt="NFT 1"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <Image
              src="/assets/img/duck-nft.jpg"
              alt="NFT 2"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <Image
              src="/assets/img/lizard-main.jpg"
              alt="NFT 3"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
          </motion.div>
          <p className="text-gray-400 mb-6 text-start lg:text-lg text-xs px-3">
            Take full control of your creation process. Upload your artwork, set
            properties, and mint directly to the blockchain.
          </p>
          <motion.ul
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-left space-y-2 mb-6 lg:text-sm text-xs px-3 text-gray-400">
            <li className="flex items-center lg:gap-5 gap-3 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Create one-of-a-kind masterpieces</p>
            </li>
            <li className="flex items-center lg:gap-5 gap-3 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Build entire collections</p>
            </li>
            <li className="flex items-center lg:gap-5 gap-3 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Set custom meta-data and properties</p>
            </li>
          </motion.ul>
          <RedarkButton
            onClick={() => onSelect("Mint Your Own NFT")}
            title="START CREATING"
            className="text-xs lg:text-lg !pt-3 !pb-2 lg:mt-6"
          />
          <p className="text-gray-500 text-xs lg:text-start text-center lg:mt-16 my-4 px-3">
            Submitting: 100.00 ARKV, no additional costs
          </p>
        </motion.div>
        {/* AI Generated Artwork Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-redark-purple/13 rounded-2xl lg:p-6 w-full lg:col-span-6 col-span-4">
          <h2 className="tracking-wider font-mokoto lg:text-xl lg:py-8 pt-5 pb-3 px-6 xl:px-2 text-xs text-start border-b border-b-white/25">
            AI GENERATED ARTWORK MINTING
          </h2>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="flex lg:gap-4 gap-2 justify-around lg:py-8 py-4 px-2">
            <Image
              src="/assets/img/NFT-art.png"
              alt="NFT 1"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <Image
              src="/assets/img/duck-nft.jpg"
              alt="NFT 2"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <Image
              src="/assets/img/lizard-main.jpg"
              alt="NFT 3"
              width={200}
              height={208}
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
          </motion.div>
          <p className="text-gray-400 mb-6 lg:text-lg text-xs lg:px-0 px-3 text-start">
            A NEW WAY to create Digital Assets. Let our AI technology transform
            your vision into stunning digital art.
          </p>
          <motion.ul
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-left space-y-2 mb-6 lg:text-sm text-xs text-gray-400 lg:px-0 px-3">
            <li className="flex items-center gap-5 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Text-to-image generation</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Style-customization options</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
              <svg className="w-[8%] lg:w-fit"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                  fill="#8C52FF"
                />
              </svg>
              <p className="flex-1">Multiple variations to choose from</p>
            </li>
          </motion.ul>
          <button
            onClick={() => onSelect("AI GENERATED ARTWORK MINTING")}
            className="bg-gradient-to-r from-[#8C52FF] to-[#543199] border border-white font-mokoto lg:mt-6
            lg:px-11 px-6 pb-2 pt-3 font-medium lg:text-[16px] text-xs rounded-full hover:opacity-90 transition"
          >
            GENERATE WITH AI
          </button>
          <p className="text-gray-500 text-xs lg:mt-16 my-4 lg:text-start text-center px-3">
            Submitting: 100.00 ARKV, Generating: 10.00 ARKV /3 attempt
          </p>
        </motion.div>
      </div>

      {/* Wallet Info */}
      <motion.p
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="lg:text-sm text-xs text-gray-300 w-full text-center lg:mt-12 mt-6">
        Your current wallet Balance is{" "}
        <span className="text-redark-purple">107.68 ARKV</span> – you
        are all set to mint your NFT.
      </motion.p>
    </div>
  );
}
