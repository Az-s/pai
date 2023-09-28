import { FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrevOrders = () => {
  return (
    <>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-1 p-4">
        <div className="">
          <h2 className="font-[700] text-[28px]">Flask Coffee</h2>
          <p className="font-[400] text-[14px]">Speciality coffee</p>
        </div>
        <img src="#" alt="Logo" className="w-[64px] h-[64px]" />
      </div>
      <section className="bg-[#fff] w-full flex flex-col items-center rounded-2xl mt-1 p-5">
        <p className="font-[700] text-[24px]">Заказы</p>
        <Link
          to="/orders"
          className="flex flex-row items-center justify-between w-full py-1"
        >
          <div>
            <div className="flex flex-row">
              <FaReceipt className="w-[24px] h-[24px]" />
              <span className="font-[600] text-[16px] p-1">Американо</span>
            </div>
            <p className="font-[400] text-[14px]">5 сентября - 12:32</p>
          </div>
          <div>
            <p className="font-[600] text-[16px]">735 сом</p>
            <p className="font-[400] text-[14px] text-orange p-1">Открыт</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default PrevOrders;
