"use client";
import { createContext, ReactNode, useContext } from "react";

export const HotelContext = createContext({});

export const HotelContextProvider = ({ children }: { children: ReactNode }) => {
  return <HotelContext.Provider value={{}}>{children}</HotelContext.Provider>;
};
export const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error(
      "useHotelContext must be used within a HotelContextProvider"
    );
  }
  return context;
};
