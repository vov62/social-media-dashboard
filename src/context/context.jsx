import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, fetchDataReducer } from "./reducer";

import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);

  // console.log("the state:", state);

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://graph.facebook.com/7020092948014586?fields=id,name,email,picture&access_token=${
          import.meta.env.VITE_API_FACEBOOK_KEY
        }`
      );

      // const data = response.data;
      // console.log(data);

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
