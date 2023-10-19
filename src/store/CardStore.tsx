import create from 'zustand';

interface CardState {
  selectedCards: string[];
  showModal: boolean;
  isCardAdded: boolean;
  addCard: (card: string) => void;
  removeCard: (card: string) => void;
  toggleModal: () => void;
  setCardAdded: (value: boolean) => void;
}

export const useCardStore = create<CardState>((set) => ({
  selectedCards: [],
  showModal: false,
  isCardAdded: false,
  // addCard: (card) => set((state) => ({ selectedCards: [...state.selectedCards, card] })),
  // removeCard: (card) => set((state) => ({ selectedCards: state.selectedCards.filter((c) => c !== card) })),
  addCard: (card) => set((state) => ({ selectedCards: [...state.selectedCards, card], isCardAdded: true })),
  removeCard: (card) => set((state) => ({ selectedCards: state.selectedCards.filter((c) => c !== card), isCardAdded: state.selectedCards.length > 1 })),
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
  setCardAdded: (value) => set(() => ({ isCardAdded: value })),
}));