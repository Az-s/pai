import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CodeInput: React.FC = () => {
  const [digits, setDigits] = useState<string[]>(Array(4).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const focusNextInput = (index: number) => {
    if (index < 3 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length === 1) {
        setDigits([
          ...digits.slice(0, index),
          event.target.value,
          ...digits.slice(index + 1),
        ]);
        focusNextInput(index);
      }
    };

  const handleClick = () => {
    if (digits.length === 14) {
      // Здесь будет логика отправки СМС
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center rounded-2xl mt-10">
      <h2 className="font-bold text-[24px]">Введите код из СМС</h2>
      <div className="flex flex-row my-5">
        {digits.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="w-[58px] h-[64px] m-1 text-center rounded-2xl bg-gray-light font-bold text-[20px]"
            value={digit}
            onChange={handleChange(index)}
            ref={(ref) => (inputsRef.current[index] = ref)}
          />
        ))}
      </div>
      {digits.length === 4 ? (
        <Link to="/restaurants">
          <button
            onClick={handleClick}
            className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white"
          >
            Отправить код снова
          </button>
        </Link>
      ) : (
        <button className="bg-gray-dark rounded-xl w-full py-[10px] font-[600] text-[16px] px-3">
          Отправить код снова
        </button>
      )}
    </div>
  );
};

export default CodeInput;
