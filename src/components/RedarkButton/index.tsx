import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";
import { motion } from 'framer-motion';

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
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} type={type} disabled={disabled} className={combinedClass}>{title}</motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} type={type} disabled={disabled} className={combinedClass} onClick={onClick}>
      {title}
    </motion.button>
  );
}
