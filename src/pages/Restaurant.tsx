import Navbar from "../components/Navbar";
import PrevOrders from "../components/PrevOrders";

const Restaurant = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <PrevOrders />
      </div>
    </>
  );
};

export default Restaurant;
