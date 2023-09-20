export type ModalProps = {
  isModalOpen: boolean;
  onModalClose: () => void;
};

export const Modal = ({ isModalOpen, onModalClose }: ModalProps) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div>
      <div>modal01</div>
      <button onClick={onModalClose}>close</button>
    </div>
  );
};
