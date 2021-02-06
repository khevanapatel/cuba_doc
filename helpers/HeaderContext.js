import React, { createContext, useState } from "react";

  
export const Context = createContext({});

export const Provider = props => {

  const [fontSize, setFontSize] = useState(''); 
  const [layoutMode, setLayoutMode] = useState(''); 

  const HeaderContext = {
    fontSize,
    setFontSize,
    layoutMode,
    setLayoutMode
  };

  const {value} = props

  return (
      <Context.Provider value={{
          fontSize:fontSize,
          HeaderContext:HeaderContext
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
