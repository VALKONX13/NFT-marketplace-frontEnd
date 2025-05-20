import MockData from "@/utils/mockData";
import ScoreAnalysis from "../ScoreAnalysis";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ScanReport = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-20 text-white">
      {/* Central Score Box */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center relative z-20 px-3">
        <h2 className="text-white tracking-widest font-mokoto lg:text-2xl uppercase mb-2">
          Scan Report
        </h2>
        <div className="bg-redark-purple/6 2xl:w-[612px] xl:w-[35.5vw] mt-4 mb-0 border border-redark-purple lg:px-14 px-8 py-4.5 rounded-2xl text-center relative">
          <h1 className="xl:text-[128px] text-6xl mt-5 leading-none tracking-widest font-mokoto">
            801
          </h1>
          <p className="text-sm tracking-widest uppercase text-gray-400 font-azeret xl:-mt-4 mt-1">
            ARK Score
          </p>
        </div>
      </motion.div>
      {/* Mobile vertical line */}
      <svg className="xl:hidden" width="2" height="22" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0L1 22" stroke="#8C52FF" stroke-opacity="0.53" />
      </svg>

      {/* Desktop connecting lines */}
      <svg
        className="absolute 2xl:top-[13.7rem] xl:top-[14rem] z-10 hidden xl:flex xl:w-[78%]"
        width="971"
        height="155"
        viewBox="0 0 971 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M180 1H41C18.9086 1 1 18.9086 1 41V155M791 1H930C952.091 1 970 18.9086 970 41V155M322 98V155M649 98V155"
          stroke="#8C52FF"
          stroke-opacity="0.53"
        />
      </svg>

      {/* Report Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-10 2xl:mt-14 xl:mt-[4.6%] xl:!mb-2 z-10 px-3">
        {MockData.scanCardData.map((card, index) => (
          <motion.div initial="initial"
          animate="animate"
          variants={fadeInUp} 
          key={index} className="flex flex-col items-center">
            <div
              className="bg-redark-purple/13 h-full w-full lg:p-6 px-2 pt-4 lg:gap-4 rounded-[20px] flex flex-col text-white text-sm items-start max-w-2xs"
            >
              <div className="flex items-center gap-4 mb-2 pl-3">
                <div className="relative w-[42px] h-[42px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-redark-purple rounded-full" />
                  <svg
                    className="z-10"
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.13226 21.3933C2.69106 21.8111 1.30867 22.3684 0 23.0478L10.4895 0V0.246636L10.5 0L20.9878 23.0478C19.6791 22.3684 18.2967 21.8111 16.8555 21.3933L16.5317 21.0817L10.4992 7.93011L10.4886 7.77651V7.93011L4.45613 21.0817L4.13226 21.3933ZM15.4158 21.0264C13.8306 20.6771 12.184 20.4919 10.4936 20.4919C8.79871 20.4919 7.14862 20.678 5.55908 21.0291L7.48215 16.8362H13.4936L15.4158 21.0264Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="uppercase text-xs tracking-wide flex flex-col font-azeret text-gray-400">
                  Index {card.index}: <p className="text-white">{card.title}</p>
                </p>
              </div>
              <div className="self-center flex flex-col items-center">
                <h2 className="text-3xl mb-1 font-mokoto">{card.value}</h2>
                <p className="text-xs mb-4 text-gray-400">{card.label}</p>
              </div>
              <p className="text-xs text-gray-400 leading-6 hidden lg:flex">
                {card.description}
              </p>
            </div>
            {/* Mobile vertical line */}
            <svg className="xl:hidden" width="2" height="22" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0L1 22" stroke="#8C52FF" stroke-opacity="0.53" />
            </svg>
          </motion.div>
        ))}
      </div>


      {/* Desktop connecting lines */}
      <svg className="hidden h-fit xl:flex xl:w-[78%] max-w-[969px] 2xl:!h-auto xl:-mt-2 z-0" width="971" height="141" viewBox="0 0 971 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0V33C1 55.0914 18.9086 73 41 73H453.5C475.591 73 493.5 90.9086 493.5 113V140.5M970 0V33C970 55.0914 952.091 73 930 73H534C511.909 73 494 90.9086 494 113V140.5M322 0V73M649 0V73" stroke="#8C52FF" stroke-opacity="0.53" />
      </svg>
      <ScoreAnalysis />
    </div>
  );
};

export default ScanReport;
