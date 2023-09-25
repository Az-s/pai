import { FaReceipt } from "react-icons/fa";

const PrevOrders = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Flask Coffee</h2>
          <p>Scpeciality coffee</p>
        </div>
        <img src="#" alt="Logo" />
      </div>
      <section>
        <h3>Заказы</h3>
        <div>
          <div>
            <div>
              <FaReceipt />
              <span>Американо</span>
            </div>
            <p>5 сентября - 12:32</p>
          </div>
          <div>
            <p>735 сом</p>
            <p>Открыт</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrevOrders;
