import { GoQuestion } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="w-full flex h-[64px] items-center rounded-b-lg bg-[#FFFFFF] px-[16px]">
      <div className="flex-grow text-center">
        <img src="path to logo" alt="Pai" />
      </div>
      <div className="ml-auto flex items-center">
        <GoQuestion className="ml-auto w-[24px] h-[24px]" />
      </div>
    </div>
  );
};
export default Navbar;