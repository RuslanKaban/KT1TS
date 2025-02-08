'use client';
import { createContext, ReactNode, useContext, useRef } from 'react';
import { LoginStore, createLoginStore, initLoginStore } from '../store/loginStore';
import { useStore } from 'zustand';

// Типизация API стора
export type LoginStoreApi = ReturnType<typeof createLoginStore>;

// Создаём контекст
export const LoginStoreContext = createContext<LoginStoreApi | undefined>(undefined);

// Провайдер
export const LoginStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<LoginStoreApi>(undefined);
  if (!storeRef.current) {
    storeRef.current = createLoginStore(initLoginStore());
  }
  return <LoginStoreContext.Provider value={storeRef.current}>{children}</LoginStoreContext.Provider>;
};

// Хук для использования 
export const useLoginStore = <T,>(selector: (store: LoginStore) => T): T => {
  const storeContext = useContext(LoginStoreContext);
  if (!storeContext) {
    throw new Error(`useLoginStore must be used within LoginStoreProvider`);
  }
  return useStore(storeContext, selector);
};
