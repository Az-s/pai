interface props {
  message: string
}

const Modal = ({ message }: props) => {
  return (
    <div className="">
      <p>{message}</p>
    </div>
  );
};

export default Modal;
