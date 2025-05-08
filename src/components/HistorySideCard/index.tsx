import Image from "next/image";

type HistoryItem = {
  id: string;
  avatar?: string;
  title: string;
  subtitle?: string;
  time: string;
};

type Props = {
  items: HistoryItem[];
};

export default function HistorySideCard({ items }: Props) {
  return (
    <div className="bg-redark-purple/13 mb-6 text-white p-4 rounded-tl-3xl rounded-bl-3xl w-full max-w-md space-y-6">
      <h2 className="text-xl font-mokoto w-fit mx-auto tracking-widest mb-6 mt-2">
        HISTORY
      </h2>
      {items.map((item) => (
        <div key={item.id} className="space-y-5 flex gap-6 items-center">
          {item.avatar ? (
            <div className="flex items-center gap-6 space-x-4 min-w-[50px] m-0">
              <Image
                src={item.avatar}
                alt="avatar"
                width={50}
                height={53}
                className="rounded-full m-0"
              />
            </div>
          ) : (
            <div className="w-[50px] h-[53px]" />
          )}
          <div className="w-full">
            <p className="font-semibold text-[10px] font-azeret">
              {item.title}
            </p>
            <div className="flex">
              {item.subtitle && (
                <p className="text-gray-400 text-[10px] grow font-azeret">
                  {item.subtitle}
                </p>
              )}
              <p className="text-[10px] font-azeret text-gray-400 whitespace-nowrap">
                {item.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
