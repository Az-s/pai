import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex h-[64px] items-center justify-center rounded-b-2xl bg-[#FFFFFF] px-[16px] relative">
      <div className="flex items-center ">
        <Link to="/" className="self-center">
          <img src={Logo} alt="Pai" />
        </Link>
        <Link to="/account" className="cursor-pointer absolute right-0 mr-[16px]">
          <GoQuestion className="ml-auto w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
