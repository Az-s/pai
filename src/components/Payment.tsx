import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
      <h4 className="font-[700] text-[24px] text-left">Оплата</h4>
      <Link to="/add-bank-card" className="w-full">
        <button
          type="button"
          className="rounded-xl w-full bg-gray-dark py-[10px] px-3 my-5 font-[400] text-[14px] text-center"
        >
          + Добавить карту
        </button>
      </Link>
      <button
        className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white"
        type="button"
      >
        Прикрепить банковскую карту
      </button>
    </div>
  );
};

export default Payment;
