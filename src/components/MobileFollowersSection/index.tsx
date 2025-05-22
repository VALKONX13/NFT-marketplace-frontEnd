import PaginationContainer from '@/components/PaginationContainer';
import UserCard from '@/components/UserCard';
import { motion } from 'framer-motion';


type ListItem = {
  id: string;
  avatar?: string;
  title: string;
  subtitle?: string;
  time: string;
};

type Props = {
  items?: ListItem[];
  title: string;
};

const dummyAvatars = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: "Nicolaus Kozlowsky",
  avatar: "/assets/img/thumb1.jpg"
}));

export default function MobileFollowersSection({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-6 inline md:hidden text-white w-max space-y-6">
      <h2 className="lg:text-xl font-mokoto text-center uppercase w-fit mx-auto tracking-widest mb-6 mt-2">
        {title} ({dummyAvatars.length})
      </h2>
      <PaginationContainer title="" display="flex flex-col" className="bg-transparent" position="absolute mt-8 left-[38%]" itemsPerPage={5}>
        {dummyAvatars.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
          />
        ))}
      </PaginationContainer>
    </motion.div>
  );
}
