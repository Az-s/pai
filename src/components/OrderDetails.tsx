import { FaReceipt } from "react-icons/fa";

const ORderDetails = () => {
  return (
    <section>
      <div>
        <span>Сумма к оплате</span>
        <span>735 сом</span>
      </div>
      <div>
        <h2>Детали заказа</h2>
        <div>
          <div>
            <span>Американо</span>
            <span>340 сом</span>
          </div>
          <div>
            <p>170 сом</p>
            <p>х2</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <FaReceipt />
          <div>
            <span>Заказ №2531</span>
            <p>5 сентября - 12:32</p>
          </div>
          <span>Открыт</span>
        </div>
      </div>
    </section>
  );
};

export default ORderDetails;
