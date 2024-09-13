import { Image } from "react-native";
import { Stack, Tabs } from "expo-router";
import logo from "../../../assets/images/logo.jpg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default rootLayouHome = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: true,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: () => (
            <Image
              source={logo}
              style={{ width: 100, height: 40 }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: "Home",
        }}
      />
    </Stack>
  );
};
