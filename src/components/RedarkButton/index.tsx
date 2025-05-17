import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function RedarkButton({
  title,
  href,
  type,
  onClick,
  disabled,
  className = "",
}: ButtonProps) {
  const baseClass =
    "font-mokoto bg-white rounded-full text-redark-purple pb-2.5 pt-3 px-8 uppercase hover:bg-redark-purple hover:text-white";

  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <button type={type} disabled={disabled} className={combinedClass}>{title}</button>
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={combinedClass} onClick={onClick}>
      {title}
    </button>
  );
}
