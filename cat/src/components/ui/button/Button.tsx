import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`bg-white w-40 ${className}`}>
      {children}
    </button>
  );
};