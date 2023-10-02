import Receipt from '../assets/Receipt.svg';
import { Link } from "react-router-dom";
import FlaskLogo from '../assets/flaskCoffee.jpg';

const PrevOrders = () => {
  return (
    <>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-b-2xl p-4">
        <div className="">
          <h2 className="font-[700] text-[28px]">Flask Coffee</h2>
          <p className="font-[400] text-[14px] text-[#8A898E]">Speciality coffee</p>
        </div>
        <img src={FlaskLogo} alt="Logo" className="w-[64px] h-[64px] rounded-full border border-[#8A898E]" />
      </div>
      <section className="bg-[#fff] w-full flex flex-col items-center rounded-2xl mt-[8px] px-5">
        <p className="font-[700] text-[24px] self-start py-[20px]">Заказы</p>
        <Link
          to="/orders"
          className="flex flex-row items-center justify-between w-full"
        >
          <div>
            <div className="flex flex-row items-center">
              <img src={Receipt} alt="Receipt" className="w-[24px] h-[24px]"/>
              <span className="font-[600] text-[16px] p-1">Американо</span>
            </div>
            <p className="font-[400] text-[14px] pt-[12px] pb-[20px] text-[#8A898E]">5 сентября - 12:32</p>
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
