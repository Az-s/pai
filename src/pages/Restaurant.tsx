import Navbar from "../components/Navbar";
import PrevOrders from "../components/PrevOrders";

const Restaurant = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <PrevOrders />
      </div>
    </>
  );
};

export default Restaurant;
