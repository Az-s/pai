import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLottie } from "lottie-react";
import CheckMark from "../assets/DIU_PKA0369 1.svg";
import animation from "../assets/Animation - 1696874997912.json";
import  useCloseOrderStore  from "../store/completeOrderStore";
import { useReceiptStore } from "../store/receiptStore";

interface ModalProps {
  stage: number;
  nextStage: () => void;
}

const stages = [
  {
    loader: true,
    heading: "Оплата проходит",
    buttonText: "Подождите чуть-чуть",
  },
  { image: CheckMark, heading: "Оплачено", buttonText: "Закрыть" },
];

const ShowCaseModal: React.FC<ModalProps> = ({ stage, nextStage }) => {
  const navigate = useNavigate();
  const { loader, image, heading, paragraph, buttonText } = stages[stage];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View: LottieAnimation } = useLottie(defaultOptions);

  const receiptStore = useReceiptStore();
  const closeOrderStore = useCloseOrderStore();

  const handlePostRequest = async () => {
    try {
      if (receiptStore.isLoading) {
        console.log(receiptStore)
      } else {
        const receiptData = receiptStore.data;
        // console.log(receiptData);
        const { spot_id, transaction_id, payed_card, payment_method_id , sum} = receiptData; // Важно использовать нижний регистр
        await closeOrderStore.closeOrder(spot_id, transaction_id, payed_card, payment_method_id, sum);
        navigate("/restaurants");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loader) {
      const timer = setTimeout(() => {
        nextStage();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loader, nextStage]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 py-[32px] px-[16px]">
      <div className="bg-white px-4 rounded-3xl flex flex-col items-center justify-center w-full">
        {loader && <div className="m-0 p-0">{LottieAnimation}</div>}
        {image && <img src={image} alt="" className="pt-8" />}
        <h2 className="font-bold text-[20px] text-center pt-[24px]">
          {heading}
        </h2>
        {paragraph && (
          <p className="font-[400] text-[14px] text-center text-[#8A898E] pt-[24px]">
            {paragraph}
          </p>
        )}
        <button
          onClick={handlePostRequest}
          disabled={loader}
          className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-[10px] text-white my-[24px]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ShowCaseModal;
