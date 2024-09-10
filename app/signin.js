import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import logo from "../assets/images/logo.jpg";
import styles from "../assets/styles/style";
import { Link, router } from "expo-router";
import { useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";

export default Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        { email: email, password: password }
      );
      Alert.alert("Bravo!", "Vous etes connecter!", [
        {
          text: "OK",
          onPress: () => router.push("/"),
        },
      ]);

      console.log(response.data);
    } catch (error) {
      Alert.alert(
        "Erreur",
        "Email ou Mot de passe non valide. Merci de ressayer."
      );
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <Image source={logo} style={{ width: 100, height: 100, margin: 10 }} />
        <Text style={{ color: "#717171", fontSize: 32 }}>Sign in</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          autoCapitalize="none"
        ></TextInput>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
        >
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            secureTextEntry={!passwordVisible} // Contrôle de la visibilité du texte
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "eye" : "eye-slash"} // Utilisation de l'icône "œil"
              size={20}
              color="#717171"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Button title="Sign in" onPress={handleSubmit} style={styles.button} />

        <View style={{ flexDirection: "row", color: "#717171" }}>
          <Text style={{ color: "#717171" }}> No account ?</Text>
          <Link href={"/signup"}> Register</Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
