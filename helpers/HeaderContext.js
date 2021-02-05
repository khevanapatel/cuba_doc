import React, { createContext, useState } from "react";

  
export const Context = createContext({});

export const Provider = props => {

  const [fontSize, setFontSize] = useState('increase'); 

  const HeaderContext = {
    fontSize
  };

  const {value} = props

  return (
      <Context.Provider value={{
          fontSize:fontSize
        }}>
        {props.children}
      </Context.Provider>
    );
  
};

export const { Consumer } = Context;

export {
  Context as HeaderContext,
  Provider as HeaderContextProvider,
} from "./HeaderContext";
