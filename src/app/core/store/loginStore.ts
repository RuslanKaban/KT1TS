import { createStore } from 'zustand';

// Типизация состояния
export type LoginState = {
  username: string;
};

// Типизация экшнов
export type LoginActions = {
  setUsername: (newUsername: string) => void;
  logout: () => void;
};

export type LoginStore = LoginState & LoginActions;

const getStoredUsername = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('username') || '';
  }
  return '';
};

// Начальное состояние
export const defaultInitState: LoginState = {
  username: getStoredUsername(),
};

// Инициализация 
export const initLoginStore = (): LoginState => {
  return defaultInitState;
};

// Создание 
export const createLoginStore = (initState: LoginState = defaultInitState) => {
  return createStore<LoginStore>()(set => ({
    ...initState,
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
