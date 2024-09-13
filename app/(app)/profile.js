import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Profil Page
      </Text>
      <Button
        title="Deconnexion"
        onPress={logout}
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    </View>
  );
}
