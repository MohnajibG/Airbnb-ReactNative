import { View, Text, Image } from "react-native";
import logo from "../assets/images/logo.jpg";
import { StyleSheet } from "react-native";
import styles from "../assets/styles/style";
import { Link, router } from "expo-router";

export default Home = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        flex: 1,
      }}
    >
      <Image source={logo} style={{ width: 300, height: 300 }} />

      <Link href={"/signin"} style={styles.button}>
        Sign in
      </Link>

      <Link href={"/signup"} style={styles.button}>
        Sing up
      </Link>
    </View>
  );
};
