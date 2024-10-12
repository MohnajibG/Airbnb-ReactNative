import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "react-native"; // Utiliser Image de react-native pour le logo
import { logo } from "../../assets/images/logo.jpg"; // Importer l'image directement

export default function RootLayoutApp() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#F35369", // Correction de couleur
      }}
    >
      {/* <Tabs.Screen
        name="home"
        options={{
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 100, height: 40 }}
            />
          ),
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />, // Utilisation correcte de FontAwesome
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: () => <FontAwesome name="map" size={24} color="black" />, // Correction de l'icône FontAwesome
          tabBarLabel: "Map",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />, // Utilisation de l'icône utilisateur
          tabBarLabel: "My Profile",
        }}
      /> */}
    </Tabs>
  );
}
