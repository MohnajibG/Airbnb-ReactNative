import { Link } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);
  const renderStars = (ratingValue) => {
    const stars = [];

    // Ajouter des étoiles dorées pour la valeur de ratingValue
    for (let i = 0; i < ratingValue; i++) {
      stars.push(
        <Entypo key={`gold-${i}`} name="star" size={24} color="gold" />
      );
    }

    // Ajouter des étoiles grises pour compléter jusqu'à 5
    for (let i = ratingValue; i < 5; i++) {
      stars.push(
        <Entypo key={`grey-${i}`} name="star" size={24} color="grey" />
      );
    }
  };
  return isLoading ? (
    <Text style={{ justifyContent: "center", alignItems: "center" }}>
      ... LOADING
    </Text>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.t}>
            <Image
              style={{ height: 200, width: 400, position: "default" }}
              source={{ uri: item.photos[0].url }}
            />
            <Text
              style={{
                backgroundColor: "black",
                width: 80,
                height: 40,
                color: "#FFFFFF",
                textAlign: "center",
                paddingTop: 10,
                position: "relative",
                bottom: 150,
                fontSize: 18,
              }}
            >
              {item.price}€
            </Text>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 100, width: 100, borderRadius: 50 }}
                source={{ uri: item.user.account.photo.url }}
              />
              <Text style={{ color: "#090909" }}>{item.reviews} reviews</Text>
              <View style={{ flexDirection: "row" }}>
                {renderStars(item.ratingValue)}
              </View>
            </View>
          </View>
        )}
      />
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
});
