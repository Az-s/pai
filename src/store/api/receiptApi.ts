import axios from 'axios';

export async function fetchReceiptData(tabletId: string) {
  try {
    const response = await axios.get<ReceiptData>('http://127.0.0.1:8080/api/getReceipt', {
      params: { tablet_id: tabletId },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе данных чека:', error);
    throw error;
  }
}

export interface ReceiptData {
  // Другие поля
}