import { useEffect } from "react";
import Receipt from "../assets/Receipt.svg";
import { Link } from "react-router-dom";
import FlaskLogo from "../assets/flaskCoffee.jpg";
import useOrderStore from "../store/ordersStore";

const PrevOrders = () => {
  const { orders, fetchOrders } = useOrderStore();

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-b-2xl p-4">
        <div>
          <h2 className="font-[700] text-[28px]">Flask Coffee</h2>
          <p className="font-[400] text-[14px] text-[#8A898E]">
            Speciality coffee
          </p>
        </div>
        <img
          src={FlaskLogo}
          alt="Logo"
          className="w-[64px] h-[64px] rounded-full border border-[#8A898E]"
        />
      </div>
      <div className="bg-[#fff] w-full ">
            <p className="font-[700] text-[24px] self-start py-[20px] mt-[8px] px-5">
              Заказы
            </p>

      {orders?.data ? (
        orders?.data.map((orderData, index) => (
          <section
            className="bg-[#fff] w-full flex flex-col items-center rounded-2xl mt-[8px] px-5"
            key={index}
          >
            <Link
              to="/orders"
              className="flex flex-col items-center justify-between w-full"
            >
              {/* {orderData.products.map((product, productIndex) => (
                <div
                  className="flex justify-between items-center w-full"
                  key={productIndex}
                >
                  <div className="flex flex-row items-center">
                    <img
                      src={Receipt}
                      alt="Receipt"
                      className="w-[24px] h-[24px]"
                    />
                    <span className="font-[600] text-[16px] pl-1">
                      {product.product_name}
                    </span>
                  </div>
                  <p className="font-[600] text-[16px]">
                    {parseInt(orderData.sum) / 100} сом
                  </p>
                </div>
              ))} */}
                <div
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex flex-row items-center">
                    <img
                      src={Receipt}
                      alt="Receipt"
                      className="w-[24px] h-[24px]"
                    />
                    <span className="font-[600] text-[16px] pl-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-[220px]">
                    {orderData.products.map(product => product.product_name).join(', ')}
                    </span>
                  </div>
                  <p className="font-[600] text-[16px]">
                    {parseInt(orderData.sum) / 100} сом
                  </p>
                </div>
              <div className="flex justify-between items-center w-full pt-[12px] pb-[20px] border-b-[1px] border-[#e9e9e9]">
                <p className="font-[400] text-[14px] text-[#8A898E]">
                  {orderData.date_close_date}
                </p>
                <p
                  className={`font-[600] text-[16px] ${
                    orderData.status === "1" ? `text-orange` : "text-[#6DC339]"
                  }`}
                >
                  {orderData.status === "1" ? "Открыт" : "Оплачен"}
                </p>
                {/* <p
                  className={`font-[600] text-[16px] text-[#6DC339] `}
                >
                  Оплачен
                </p> */}
              </div>
            </Link>
          </section>
        ))
      ) : (
        <div className="flex justify-center items-center pt-10">
          <img
            src={Receipt}
            alt="Receipt"
            className="w-[64px] h-[64px]"
          />
        </div>
      )}
      </div>
    </>
  );
};

export default PrevOrders;
