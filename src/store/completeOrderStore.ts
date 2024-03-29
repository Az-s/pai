// XMLHttpRequest!
// import { create } from 'zustand';
// import axios from 'axios';

// interface CloseOrderStore {
//   closeOrderData: CloseOrderResponse | null;
//   closeOrder: (spotId: string, transactionId: string, payedCard: string, paymentMethodId: string) => Promise<void>;
// }

// const useCloseOrderStore = create<CloseOrderStore>((set) => ({
//   closeOrderData: null,
//   closeOrder: async (spotId, transactionId, payedCard, paymentMethodId) => {
//     try {
//       const dataToSend = `spot_id=${spotId}&spot_tablet_id=1&transaction_id=${transactionId}&payed_card=${payedCard}&payment_method_id=${paymentMethodId}`;
//       const response = await axios.post<CloseOrderResponse>('https://pai.kg/api/closeOrder', dataToSend, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//       set({ closeOrderData: response.data });
//     } catch (error) {
//       console.error('Ошибка при закрытии заказа:', error);
//       throw error;
//     }
//   },
// }));

// export default useCloseOrderStore;

//JSON!

import { create } from 'zustand';
import axios from 'axios';

interface CloseOrderStore {
  closeOrderData: CloseOrderResponse | null;
  closeOrder: (spotId: string, transactionId: string, payedCard: string, paymentMethodId: string, sum: string) => Promise<void>;
}

const useCloseOrderStore = create<CloseOrderStore>((set) => ({
  closeOrderData: null,
  closeOrder: async (spotId, transactionId, payedCard, paymentMethodId, sum) => {
    try {
      const dataToSend = {
        spot_id: "1",
        spot_tablet_id: "1",
        transaction_id: transactionId,
        payed_card: (parseInt(sum)/100).toString(),
        payment_method_id: "11",
        // sum:(parseInt(sum)/100).toString(),
        // sum: "100",
      };
      console.log(dataToSend)
      const response = await axios.post<CloseOrderResponse>('https://pai.kg/api/closeOrder', JSON.stringify(dataToSend), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      set({ closeOrderData: response.data });
    } catch (error) {
      console.error('Ошибка при закрытии заказа:', error);
      throw error;
    }
  },
}));

export default useCloseOrderStore;
