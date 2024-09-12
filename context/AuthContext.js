import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState("");

  const login = (id, token) => {
    if (id && token) {
      setUserID(id);
      setUserToken(token);
    }
  };
  const logout = () => {
    setUserID()(null);
    setUserToken("");
  };

  return (
    <AuthContext.Provider value={{ userID, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
