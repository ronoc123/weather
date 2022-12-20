import { useReducer, useContext, createContext } from "react";
import reducer from "./reducer";

interface Values {
  name: string;
}

const initialState = {
  name: "conor",
};

const AppContext = createContext<Values | null>(null);

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
