import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import axios from "axios";

export default function RoomScreen() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
        );
        setData(data);
        setIsLoading(FontFaceSetLoadEvent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Aucune donnée trouvée</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.photos[0].url }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>{data.price}€</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: "green",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
});
