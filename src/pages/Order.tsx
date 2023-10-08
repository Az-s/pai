import AddCardButton from "../components/AddCardButton";
import Navbar from "../components/Navbar";
import OrderDetails from "../components/OrderDetails";
import Payment from "../components/Payment";

const Order: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <OrderDetails />
        <Payment />
        <AddCardButton />
      </div>
    </>
  );
};

export default Order;
