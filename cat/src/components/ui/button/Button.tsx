import { ReactNode, useState } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  // const onButtonClick = () => {
  //   if (modalOpen) {
  //     setModalOpen(false);
  //   } else {
  //     setModalOpen(true);
  //   }
  // };

  return (
    <button className={`bg-white w-64 h-12 ${className}`} onClick={toggleModal}>{children}</button>
  );
};
