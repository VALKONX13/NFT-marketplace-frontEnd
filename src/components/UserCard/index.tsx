import Image from "next/image";
import { motion } from 'framer-motion';

interface UserCardProps {
  id: number;
  name: string;
  avatar: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, avatar }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      key={id}
      className="flex xl:flex-row md:flex-col w-full gap-4 font-azeret items-center text-white text-sm md:py-6"
    >
      <Image
        src={avatar}
        alt={`User ${id}`}
        width={40}
        height={40}
        className="rounded-full object-cover mb-2 w-[50px] h-[50px] aspect-square"
      />
      <div>
        <p className="text-xs w-max">{name}</p>
        <button className="text-gray-500 text-xs mt-1">Follow</button>
      </div>
    </motion.div>
  );
};

export default UserCard;
