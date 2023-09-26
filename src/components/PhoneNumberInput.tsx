import { useState } from "react";
import Modal from "./Modal";
import CodeInput from "./CodeInput";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("+996 ");
  const [isNumberNotFound, setIsNumberNotFound] = useState(false);
  const [isCodeInputVisible, setIsCodeInputVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 5) {
      setPhoneNumber("+996 ");
    } else if (event.target.value.length > 14) {
      setPhoneNumber(phoneNumber);
    } else {
      setPhoneNumber(event.target.value);
    }
  };

  const handleClick = () => {
    if (phoneNumber.length === 14) {
      setIsCodeInputVisible(true);
      // Здесь будет логика отправки СМС
    }
  };

  return (
    <div className="bg-[#FFFFFF] px-[16px] w-full h-[270px] flex justify-center flex-col items-center rounded-2xl mt-10">
      {!isCodeInputVisible ? (
        <>
          <h2 className="font-bold text-[24px]">Введите номер телефона</h2>
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            className="rounded-xl w-full bg-gray-light py-[10px] font-bold text-[20px] px-3 my-5"
          />
          {phoneNumber.length === 14 ? (
            <button onClick={handleClick} className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white">Получить СМС код</button>
          ) : (
            <button className="bg-gray-dark rounded-xl w-full py-[10px] font-[600] text-[16px] px-3">Получить СМС код</button>
          )}
          {isNumberNotFound && <Modal message="Номер не найден" />}
        </>
      ) : (
        <CodeInput />
      )}
    </div>
  );
};

export default PhoneNumberInput;