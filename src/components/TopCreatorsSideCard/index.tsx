import Image from "next/image";
import { motion } from 'framer-motion';

type Creator = {
  id: number | string;
  name: string;
  avatar: string;
};

type TopCreatorsProps = {
  title: string;
  creators: Creator[];
};

export default function TopCreators({ title, creators }: TopCreatorsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-redark-purple/13 rounded-tl-3xl rounded-bl-3xl p-4 w-full text-white md:max-w-[60%] xl:max-w-full">
      <h2 className="lg:text-xl font-mokoto w-fit mx-auto tracking-widest mb-6 mt-2">{title}</h2>
      <div className="space-y-5">
        {creators.map((creator) => (
          <div key={creator.id} className="flex items-center lg:gap-6 gap-3 space-x-4">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={50}
              height={50}
              className="rounded-full m-0"
            />
            <div>
              <p className="text-[10px] font-azeret font-medium">{creator.name}</p>
              <button className="text-[10px] font-azeret text-gray-400">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
