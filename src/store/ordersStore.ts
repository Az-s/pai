import create from "zustand";
import {
  fetchOrders,
  // OrderResponse,
  OrderData,
  // Product,
} from "../store/api/ordersApi";

interface OrderStore {
  orders: { success: boolean; data: OrderData[] } | null;
  fetchOrders: () => Promise<void>;
}

const useOrderStore = create<OrderStore>((set) => ({
  orders: null,
  fetchOrders: async () => {
    const response = await fetchOrders();
    set({ orders: response });
  },
}));

export default useOrderStore;
