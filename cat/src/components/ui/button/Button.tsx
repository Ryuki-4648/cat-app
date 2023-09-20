import { ReactNode, useState } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={`bg-white w-64 h-12 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
