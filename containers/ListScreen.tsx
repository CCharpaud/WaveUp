import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  StyleSheet
} from "react-native";

// Components //
import Header from "../components/Header";
import BackButton from "../components/BackButton";

// Icons //
import { MaterialIcons } from "@expo/vector-icons";

// Axios Call for Data //
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
          // Set the data state //
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
            <FlatList
              style={styles.flat}
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <>
                  {/* ternary limitation of results (20) */}
                  {item.id <= 20 ? (
                    <View style={styles.containOfData}>
                      <Text style={styles.text}> ID : {item.id}</Text>

                      <Text style={styles.text}>Title : {item.title}</Text>
                      {String(item.completed) === "true" ? (
                        <View style={styles.containOfCompleted}>
                          <Text style={styles.text}>Completed :</Text>
                          <MaterialIcons
                            name="thumb-up"
                            color="#a6cc47"
                            size={20}
                          />
                        </View>
                      ) : (
                        <View style={styles.containOfCompleted}>
                          <Text style={styles.text}>Completed :</Text>
                          <MaterialIcons
                            name="thumb-down"
                            color="#d1403b"
                            size={20}
                          />
                        </View>
                      )}
                    </View>
                  ) : null}
                </>
              )}
            />
          </>
        )}
        <View style={styles.containOfBackButton}>
          <BackButton />
        </View>
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
    padding: 20
  },

  containOfData: {
    padding: 10,
    backgroundColor: "#EE6F61",
    opacity: 0.9,
    borderRadius: 10,
    marginBottom: 10
  },

  text: {
    color: "white",
    paddingLeft: 10,
    paddingRight: 10
  },

  containOfCompleted: {
    flexDirection: "row",
    alignItems: "center"
  },

  containOfBackButton: {
    display: "flex",
    alignSelf: "center",
    marginTop: 20
  }
});
