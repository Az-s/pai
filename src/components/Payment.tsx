import { Link } from "react-router-dom";
import Addbutton from "../assets/plus-3 1.svg";

const Payment = () => {
  return (
    <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
      <h4 className="font-[700] text-[24px] text-left self-start">Оплата</h4>
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
