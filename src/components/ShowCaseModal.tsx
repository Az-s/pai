import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLottie } from "lottie-react";
import CheckMark from '../assets/DIU_PKA0369 1.svg';
import Attention from '../assets/Vector.svg'; 
import animation from '../assets/animation_lnhuat53.json'

interface ModalProps {
  stage: number;
  nextStage: () => void;
}

const stages = [
  { loader: true, heading: "Оплата проходит", buttonText: "Подождите чуть-чуть" },
  { image: CheckMark, heading: "Оплачено", buttonText: "Закрыть" },
  {
    image: Attention,
    heading: "Недостаточно средств",
    paragraph: "Проверьте свой баланс или попробуйте прикрепить другую карту",
    buttonText: "Попробовать снова",
  },
  {
    image: Attention,
    heading: "Ошибка перевода",
    paragraph: "Возможно ваш банк испытывает проблемы. Попробуйте еще раз оплатить или прикрепить другую карту",
    buttonText: "Попробовать снова",
  },
];

const ShowCaseModal: React.FC<ModalProps> = ({ stage, nextStage }) => {
    const [loading, setLoading] = useState(stages[stage].loader);
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


  useEffect(() => {
    if (loader) {
      const timer = setTimeout(() => {
        setLoading(false);
        nextStage();
      }, 2000); // Загрузка будет длиться 2 секунды

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }
  }, [loader, nextStage]);

  if (loading) {
    return <div>{LottieAnimation}</div>; // Отображение загрузчика
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 py-[32px] px-[16px]">
      <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center w-full">
        {image && <img src={image} alt="" />}
        <h2 className="font-bold text-[20px] text-center">{heading}</h2>
        {paragraph && (
          <p className="font-[400] text-[14px] text-center text-[#8A898E]">
            {paragraph}
          </p>
        )}
        <button
          onClick={stage === stages.length - 1 ? () => navigate("/") : nextStage}
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