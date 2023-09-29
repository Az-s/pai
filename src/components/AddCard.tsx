import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Visa from "../assets/visa-10.svg";
import MC from "../assets/mastercard-2.svg";

const AddCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center p-4 rounded-2xl  bg-white">
        <div className="w-full flex justify-center items-center">
          <TbArrowBackUp
            onClick={() => navigate(-1)}
            className="cursor-pointer mr-auto"
          />
          <span className="text-center">Онлайн оплата</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span>KG</span>
          <span>RUS</span>
        </div>
      </div>
      <h4 className="font-[400] text-[14px] text-[#a4a4a4] m-4">Заказ №237</h4>
      <div className="w-full h-[270px] rounded-2xl  bg-white mx-4 p-3 ">
        <div className="flex gap-2 p-4 justify-end">
          <img width={25} height={25} src={Visa} alt="Visa" />
          <img width={25} height={25} src={MC} alt="MasterCard" />
        </div>
        <form >
          <div className="mb-4">
            <input
              className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
              type="text"
              placeholder="Номер карты"
            />  
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-full pr-2">
              <input
                className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
                type="text"
                placeholder="MM / YY"
              />
            </div>
            <div className="w-full pl-2">
              <input
                className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
                type="text"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
              type="text"
              placeholder="Имя владельца"
            />
          </div>
        </form>
      </div>
      <div className="w-full p-4 bg-transparent">
        <form className="">
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
            <input
              type="text"
              placeholder="Номер телефона"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
        </form>
        <p className="font-[500] text-[8px] text-[#a4a4a4] text-center">
          Продолжая оплату, Вы соглашаетесь{" "}
          <span className="text-[#4362e4]">
            на сбор и обработку персональных данных
          </span>
        </p>
      </div>
    </>
  );
};

export default AddCard;
