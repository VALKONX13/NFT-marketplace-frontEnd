import Image from "next/image";

type RecentItem = {
  id: number | string;
  thumbnail: string;
  name: string;
  date: string;
};

type RecentlyAddedSideCardProps = {
  title: string;
  mainImage: {
    src: string;
    alt?: string;
    category: string;
    timestamp: string;
  };
  items: RecentItem[];
};

export default function RecentlyAddedSideCard({ title, mainImage, items }: RecentlyAddedSideCardProps) {
  return (
    <div className="bg-redark-purple/13 rounded-tl-3xl rounded-bl-3xl p-5 w-full max-w-xs text-white">
      {/* Header */}
      <h2 className="text-lg w-fit mx-auto font-mokoto tracking-widest mb-4">{title}</h2>

      {/* Main Image */}
      <div className="rounded-[20px] overflow-hidden mb-3 relative">
        <Image
          src={mainImage?.src}
          alt={mainImage?.alt || "Featured"}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#180857d1]/90 px-4 py-5 flex justify-between text-xs">
          <span className="text-white font-semibold">{mainImage?.category}</span>
          <span className="text-gray-300 font-azeret">{mainImage?.timestamp}</span>
        </div>
      </div>

      {/* Recent Items List */}
      <div className="space-y-4 mt-6 flex flex-col gap-6">
        {items.map((item) => (
          <div key={item?.id} className="flex items-center space-x-3 gap-6 m-0">
            <Image
              src={item?.thumbnail}
              alt={item?.name}
              width={50}
              height={53}
              className="rounded-[10px] m-0"
            />
            <div className="flex gap-2 flex-col">
              <p className="text-[10px] font-semibold font-azeret">{item?.name}</p>
              <p className="text-[10px] text-gray-400 font-azeret">{item?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
