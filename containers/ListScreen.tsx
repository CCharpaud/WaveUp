import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";

// Components //
import Header from "../components/Header";
import BackButton from "../components/BackButton";

// Axios Call for Data
import Axios from "axios";

export default function ListScreen() {
  // States for data Axios call and Loading of informations //
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API Call with Axios //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (response.data) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        alert("Une Erreur est survenue");
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/home.png")}
        style={styles.background}
      >
        <Header />
        {isLoading === true ? (
          <View>
            <ActivityIndicator size="large" color="#EE6F61" />
          </View>
        ) : (
          <>
            <StatusBar barStyle="light-content" />
            <BackButton />
            <FlatList
              style={styles.flat}
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Text style={{ color: "white", padding: 10 }}>
                  {item.title}
                </Text>
              )}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
}

// Styles //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  background: {
    width: "100%",
    height: "100%"
  },

  flat: {
    padding: 10
  }
});
