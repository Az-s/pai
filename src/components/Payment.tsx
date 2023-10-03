import { useState } from "react";
import { Link } from "react-router-dom";
import Addbutton from "../assets/plus-3 1.svg";
import { useCardStore } from "../store/CardStore";
import Card from "../assets/DIU_PKA0403 2.svg";
import Checked from '../assets/cheked.png'

const Payment: React.FC = () => {
  const { selectedCards } = useCardStore();
  const [selected, setSelected] = useState(false);

  return (
    <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
      <h4 className="font-[700] text-[24px] text-left self-start">Оплата</h4>
      {selectedCards.length > 0 && (
        <div className="w-full flex flex-row justify-between items-center py-4">
          <div className="w-full flex flex-row items-center">
            <img src={Card} alt="Card" />
            <ul>
              {selectedCards.map((card, index) => (
                <li
                  key={index}
                  className="font-[400] text-[14px] text-[#8A898E] border-b-1 pl-3"
                >
                  {card}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`w-8 h-8 flex justify-center items-center rounded-full border-2 ${
              selected ? "border-[#ffff00] bg-[#ffff00]" : "border-gray-dark"
            }`}
            onClick={() => setSelected(!selected)}
          >
            {selected && <div className="w-8 h-8 rounded-full bg-white"><img src={Checked} alt="" /></div>}
          </div>
        </div>
      )}
      <Link to="/add-bank-card" className="w-full">
        <button
          type="button"
          className="rounded-xl w-full bg-gray-dark py-[10px] px-3 my-5 font-[400] text-[14px] text-[#8A898E] text-center flex justify-center items-center"
        >
          <img src={Addbutton} alt="plus" /> Добавить карту
        </button>
      </Link>
    </div>
  );
};

export default Payment;
