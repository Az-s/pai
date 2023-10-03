import { useState } from 'react';
import Modal from './Modal';
import Check from '../assets/cheked.png'

const AddCardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-t-2xl bg-[#fff] pt-[16px] pb-[32px] px-[16px] fixed bottom-0 w-full">
      <button
        className="bg-purple rounded-xl w-full py-[12px] font-[600] text-[16px] px-3 text-white"
        type="button"
        onClick={handleOpenModal}
      >
        Прикрепить банковскую карту
      </button>
      {isModalOpen && <Modal img={Check} title="Оплачено" content='При выходе вам потребуется заново вводить номер телефона и получить СМС' onClose={handleCloseModal} />}
    </div>
  );
};

export default AddCardButton;
