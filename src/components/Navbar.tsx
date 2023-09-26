import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="w-full flex h-[64px] items-center rounded-b-2xl bg-[#FFFFFF] px-[16px]">
      <div className="flex-grow text-center">
        <Link to="/">
          <img src="path to logo" alt="Pai" />
        </Link>
      </div>
      <div className="ml-auto flex items-center cursor-pointer">
        <Link to="/account">
          <GoQuestion className="ml-auto w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
