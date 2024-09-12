import { View, Text, Image, TextInput, Button, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import logo from "../../assets/images/logo.jpg";
import styles from "../../assets/styles/style";
import { Link, router } from "expo-router";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const content = useContext(AuthContext);

  const handleSubmit = async () => {
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up", // Assurez-vous que cette URL est correcte
        {
          email: email,
          username: username,
          password: password,
          description: description,
        }
      );
      console.log(response.data);

      Alert.alert("Success", "Votre compte a été créé avec succès!", [
        {
          text: "OK",
          onPress: () => router.push("/signin"),
        },
      ]);
    } catch (error) {
      console.log("error ==> ", error);
      if (error.response && error.response.status === 409) {
        setErrorMessage("Cet email est déjà utilisé");
      } else if (
        error.response &&
        error.response.data.message === "Missing parameters"
      ) {
        setErrorMessage("Veuillez remplir tous les champs");
      } else {
        setErrorMessage("Une erreur est survenue, veuillez réessayer");
      }
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
          padding: 20,
        }}
      >
        <Image
          source={logo}
          style={{ width: 100, height: 50, margin: 10, resizeMode: "contain" }}
        />
        <Text style={{ color: "#717171", fontSize: 32 }}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.description}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={6}
          value={description}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />

        {errorMessage ? (
          <Text style={{ color: "red", marginBottom: 10 }}>{errorMessage}</Text>
        ) : null}

        <Button
          title="Sign up"
          onPress={handleSubmit}
          style={styles.button}
          asChild
        />

        <View style={{ flexDirection: "row", color: "#717171", marginTop: 20 }}>
          <Text style={{ color: "#717171" }}>Already have an account?</Text>
          <Link href={"/signin"}> Sign in </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
