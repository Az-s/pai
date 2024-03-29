import { useState } from "react";
import ShowCaseModal from "./ShowCaseModal";
import { useCardStore } from "../store/CardStore";

const AddCardButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isCardAdded = useCardStore((state) => state.isCardAdded);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const [stage, setStage] = useState(0);

  const nextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  return (
    <div className="rounded-t-2xl bg-[#fff] pt-[16px] pb-[32px] px-[16px]  bottom-0 w-full mt-[8px] sticky">
      <button
        className="bg-purple rounded-xl w-full py-[12px] font-[600] text-[16px] px-3 text-white"
        type="button"
        onClick={handleOpenModal}
      >
        {isCardAdded ? "Оплатить" : "Прикрепить банковскую карту"}
      </button>
      {isModalOpen && <ShowCaseModal stage={stage} nextStage={nextStage} />}
    </div>
  );
};

export default AddCardButton;
