import Header from "@/app/components/Header";
import { HotelContextProvider } from "@/app/context/contextapi";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HotelContextProvider>
        <Header />
        {children}
      </HotelContextProvider>
    </div>
  );
};

export default layout;
