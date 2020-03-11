import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

// Components //
import Header from "../components/Header";
import Button from "../components/Button";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/home.png")}
        style={styles.background}
      >
        <Header />
        <View style={styles.menu}>
          <Button
            // Props //
            name="List"
            colorIcon="#EE6F61"
            background={0.8}
            colorText="#EE6F61"
            destination={"listScreen"}
          />
          <Button
            // Props //
            name="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.2}
            colorText="#EFEFEF"
            destination={"menuScreen"}
          />
          <Button
            // Props //
            name="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.2}
            colorText="#EFEFEF"
            destination={"menuScreen"}
          />
          <Button
            // Props //
            name="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.2}
            colorText="#EFEFEF"
            destination={"menuScreen"}
          />
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
  menu: {
    marginTop: 60,
    display: "flex",
    alignSelf: "center"
  }
});
