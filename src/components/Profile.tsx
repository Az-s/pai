import { RxExit } from "react-icons/rx";

const Profile = () => {
  return (
    <div>
      <div>
        <h1>Профиль</h1>
        <RxExit />
      </div>
      <div>
        <h4>Номер телефона</h4>
        <p>+996 777 324234</p>
        <button>Оставить отзыв</button>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Profile;
