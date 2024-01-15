import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

let parsedUser = null;
let parsedToken = null;

try {
  parsedUser = JSON.parse(user);
  parsedToken = JSON.parse(token);
} catch (error) {
  console.error(error);
}

const INITIAL_STATE = {
  user: parsedUser,
  token: parsedToken,
  isFetching: false,
  error: false
};

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")),
//   token: JSON.parse(localStorage.getItem("token")),
//   isFetching: false,
//   error: false
// };

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));

    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state.user, state.token]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        token: state.token,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};
