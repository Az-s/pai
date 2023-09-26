import { FaReceipt } from "react-icons/fa";

const OrderDetails = () => {
  return (
    <>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-1 p-4">
        <span className="font-[600] text-[16px]">Сумма к оплате</span>
        <span className="font-[700] text-[24px]">735 сом</span>
      </div>
      <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
        <h2 className="font-[700] text-[24px]">Детали заказа</h2>
        <div className="w-full p-3">
          <div className="flex items-center justify-between">
            <span className="font-[600] text-[16px]">Американо</span>
            <span className="font-[600] text-[16px]">340 сом</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="font-[400] text-[14px]">170 сом</p>
            <p className="font-[400] text-[14px]">х2</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-1 p-4">
        <div className="flex flex-row items-center">
          <FaReceipt className="w-[32px] h-[32px]" />
          <div>
            <span className="font-[600] text-[16px]">Заказ №2531</span>
            <p className="font-[400] text-[14px]">5 сентября - 12:32</p>
          </div>
        </div>
        <span className="font-[600] text-[16px] text-orange">Открыт</span>
      </div>
    </>
  );
};

export default OrderDetails;
