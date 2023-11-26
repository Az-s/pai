// import axios from 'axios';

// export async function closeOrder(spotId: string, transactionId: string, payedCard: string, paymentMethodId: string) {
//   try {
//     const dataToSend = `spot_id=${spotId}&spot_tablet_id=1&transaction_id=${transactionId}&payed_card=${payedCard}&payment_method_id=${paymentMethodId}`;
//     const response = await axios.post<CloseOrderResponse>('https://pai.kg/api/closeOrder', dataToSend, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Ошибка при закрытии заказа:', error);
//     throw error;
//   }
// }

import axios from 'axios';

export async function closeOrder(
  spotId: string,
  transactionId: string,
  payedCard: string,
  paymentMethodId: string,
) {
  try {
    const requestData = {
      spot_id: spotId,
      spot_tablet_id: '1',
      transaction_id: transactionId,
      payed_card: payedCard,
      payment_method_id: paymentMethodId,
    };

    const response = await axios.post<CloseOrderResponse>('https://pai.kg/api/closeOrder', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при закрытии заказа:', error);
    throw error;
  }
}

