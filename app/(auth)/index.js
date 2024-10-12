import { View, Text, Image } from "react-native";
import logo from "../../assets/images/logo.jpg";
import styles from "../../assets/styles/style";
import { Link, Redirect } from "expo-router";
import signin from "./signin";

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
      <Link href="/signin">
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </Link>
      <Text style={{ fontSize: 32 }}>Welcome !</Text>
      <Link href={"/signin"} style={styles.button} asChild>
        Sign in
      </Link>
      <Link href={"/signup"} style={styles.button} asChild>
        Sign up
      </Link>
    </View>
  );
};
