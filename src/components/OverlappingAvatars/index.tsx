import Image from "next/image";

const OverlappingAvatars = ({ images }: { images: string[] }) => {
  const visibleImages = images.slice(0, 3);
  const remaining = images.length - visibleImages.length;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-3">
        {visibleImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full w-12 h-12 object-cover aspect-square"
          />
        ))}
      </div>
      {remaining > 0 && (
        <span className="ml-2 text-sm text-white">+{remaining}</span>
      )}
    </div>
  );
};

export default OverlappingAvatars;