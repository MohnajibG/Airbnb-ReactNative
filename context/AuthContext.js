import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const addedToken = await AsyncStorage.getItem("token");
        const addedId = await AsyncStorage.getItem("id");

        if (addedToken && addedId) {
          setUserID(addedId);
          setUserToken(addedToken);
          console.log(addedId, addedToken);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    loadUserData();
  }, []);
  const login = async (id, token) => {
    if (id && token) {
      setUserID(id);
      setUserToken(token);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("id", id);
      console.log("User logged in with ID:", id, "and token:", token);
    }
  };
  const logout = async () => {
    setUserID(null);
    setUserToken("");
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("id");
    console.log("User logged out.");
  };

  return (
    <AuthContext.Provider value={{ userID, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
