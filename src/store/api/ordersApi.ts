import axios from "axios";

export async function fetchOrders() {
  try {
    const response = await axios.get<OrderData>(
      "https://pai.kg/api/orders"
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе заказов:", error);
    throw error;
  }
}

export interface OrderResponse {
  success: boolean;
  data: OrderData[];
}

export interface OrderData {
  table_id: string;
  status: string;
  date_close_date: string;
  sum: string;
  products: Product[];
}

export interface Product {
  product_id: string;
  product_name: string;
  product_sum: string;
}
