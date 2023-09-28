import Navbar from "../components/Navbar";
import OrderDetails from "../components/OrderDetails";
import Payment from "../components/Payment";

const Order = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <OrderDetails />
        <Payment />
      </div>
    </>
  );
};

export default Order;
