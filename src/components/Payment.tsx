
const Payment = () => {
  return (
    <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
        <h4 className="font-[700] text-[24px] text-left">Оплата</h4>
        <form action="">
        <input
            type="text"
            className="rounded-xl w-full bg-gray-dark py-[10px] px-3 my-5 font-[400] text-[14px] text-center"
            placeholder="+ Добавить карту"
          />
            <button className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white" type="submit">Прикрепить банковскую карту</button>
        </form>
    </div>
  )
}

export default Payment;