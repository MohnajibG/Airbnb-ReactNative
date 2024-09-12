import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Profil Page</Text>
      <Button title="Deconnexion" onPress={logout} style={styles.button} />
    </View>
  );
}
