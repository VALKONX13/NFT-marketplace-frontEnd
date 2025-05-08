import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function RedarkButton({
  title,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClass =
    "font-mokoto bg-white rounded-[21px] text-redark-purple text-[16px] pb-2.5 pt-3 px-[45px] uppercase hover:bg-redark-purple hover:text-white";

  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <button className={combinedClass}>{title}</button>
      </Link>
    );
  }

  return (
    <button className={combinedClass} onClick={onClick}>
      {title}
    </button>
  );
}
