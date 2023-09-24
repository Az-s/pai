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
    <div className="bg-[#FFFFFF] px-[16px] w-full h-[270px] flex justify-center flex-col items-center">
      {!isCodeInputVisible ? (
        <>
          <h1>Введите номер телефона</h1>
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            className="rounded-bg-lg p-[10px]"
          />
          {phoneNumber.length === 14 ? (
            <button onClick={handleClick} className="bg-purple">Получить СМС код</button>
          ) : (
            <button className="bg-gray-dark">Получить СМС код</button>
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
