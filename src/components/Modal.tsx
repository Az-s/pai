import { useNavigate } from "react-router-dom";

interface props {
  title: string;
  content: string;
  onClose: () => void;
  img: string;
}

const Modal = ({ title, content, onClose, img }: props) => {
  const navigate = useNavigate();

  const handleExit = () => {
    onClose();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 py-[32px] px-[16px]">
      <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center">
        <img src={img} alt="atention" />
        <h4 className="font-bold text-[20px]">{title}</h4>
        <p className="font-[400] text-[14px] text-center text-[#8A898E]">
          {content}
        </p>
        <button
          className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-[10px] text-white my-[24px]"
          onClick={handleExit}
        >
          Подтвердить выход
        </button>
      </div>
    </div>
  );
};

export default Modal;
