import { RxExit } from "react-icons/rx";

const Profile = () => {
  return (
    <div className="bg-[#fff] w-full flex flex-col items-center rounded-2xl mt-10 p-5 max-w-4xl mx-auto">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="font-bold text-[24px]">Профиль</h1>
        <RxExit className="w-[24px] h-[24px]"/>
      </div>
      <div className="w-full py-2">
        <h4 className="font-[600] text-[16px]">Номер телефона</h4>
        <p className="font-[400] text-[14px]">+996 777 324234</p>
        <button className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white my-2">Оставить отзыв</button>
        <p className="font-[400] text-[14px] text-purple">Пользовательское соглашение</p>
        <p className="font-[400] text-[14px] text-purple">Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Profile;
