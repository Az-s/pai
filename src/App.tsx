// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Order from "./pages/Order";
import Otps from "./pages/Otps";
import Restaurant from "./pages/Restaurant";
import AddCard from "./components/AddCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otps />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="/add-bank-card" element={<AddCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
