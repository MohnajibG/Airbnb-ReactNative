import { AuthProvider } from "../context/AuthContext";
import { Slot, router } from "expo-router";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function RootLayout() {
  return (
    <AuthProvider>
      <NavigationWrapper>
        <Slot />
      </NavigationWrapper>
    </AuthProvider>
  );
}

const NavigationWrapper = ({ children }) => {
  const { userID, userToken } = useContext(AuthContext);
  useEffect(() => {
    if (userID && userToken) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [userID, userToken]);

  return children;
};
