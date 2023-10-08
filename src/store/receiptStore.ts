import create from 'zustand';
import { ReceiptData, fetchReceiptData } from './api/receiptApi';

interface ReceiptStore {
  receiptData: ReceiptData | null;
  fetchReceiptData: (tabletId: string) => Promise<void>;
}

const useReceiptStore = create<ReceiptStore>((set) => ({
  receiptData: null,
  fetchReceiptData: async (tabletId) => {
    const data = await fetchReceiptData(tabletId);
    set({ receiptData: data });
  },
}));

export default useReceiptStore;