import React, { useState } from "react";

export const Context = React.createContext();

export const CardContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
    </>
  );
};

export default CardContext;
