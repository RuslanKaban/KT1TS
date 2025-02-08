  // state + actions

  import { createStore } from 'zustand';

  // типизация состояния
  export type BasketState = {
    basketItems: number[];
    username: string;
  };

  // типизация экшнов
  export type BasketActions = {
    basketAction: (id: number) => void;
    setUsername: (newUsername:string) => void;
    logout: () => void; 
  };

  export type BasketStore = BasketState & BasketActions;

  const getStoredUsername = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username') || '';
    }
    return '';
  };

  // начальное состояние
  export const defaultInitState: BasketState = {
    basketItems: [],
    username: getStoredUsername()
  };

  // инициализация начального состояния
  export const initBasketStore = (): BasketState => {
    return defaultInitState;
  };

  export const createBasketStore = (initState: BasketState = defaultInitState) => {
    return createStore<BasketStore>()(set => ({
      ...initState,
      basketAction: id =>
        set(state => ({
          basketItems: state.basketItems.includes(id)
            ? state.basketItems.filter(e => e !== id)
            : state.basketItems.concat(id),
        })),
        setUsername: (newUsername: string) => {
          localStorage.setItem('username', newUsername); 
          set(() => ({ username: newUsername }));
        },
        logout: () => {
          localStorage.removeItem('username');
          set(() => ({ username: '' }));
        },
    }));
  };

  /* ... -> спред оператор

  let data = {
      basket: [],
      user: {},
      token: "",
      getToken: () => "",
      getUser: () => {} 
  }

  let data2 = {
  ...data
  }

  data2 = data
  */
