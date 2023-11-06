  import {create} from 'zustand';
  import { fetchReceiptData, ReceiptData } from '../store/api/receiptApi';

  interface State {
    data: ReceiptData | null ;
    // data: { success: boolean; data: ReceiptData[] } | null ;
    error: Error | null;
    fetchReceipt: (tablet_id: string) => Promise<void>;
    isLoading: boolean;
  }

  export const useReceiptStore = create<State>((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchReceipt: async (tablet_id) => {
      set({ isLoading: true });
      try {
        const response = await fetchReceiptData(tablet_id);
        set({ data: response.data, isLoading: false });
      } catch (error) {
        console.error('Ошибка при запросе данных чека:', error);
        set({ isLoading: false });
        throw error;
      }
    },
  }));