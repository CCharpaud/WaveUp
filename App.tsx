import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

// Components
import Header from "./components/Header";
import Button from "./components/Button";

// Screen
import List from "./containers/ListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/home.png")}
        style={styles.background}
      >
        <Header />
        <View>{/* <List /> */}</View>
        <View style={styles.menu}>
          <Button
            name="List"
            alert="List"
            colorIcon="#EE6F61"
            background={0.8}
            colorText="#EE6F61"
          />
          <Button
            name="Coming Soon"
            alert="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.5}
            colorText="#EFEFEF"
          />
          <Button
            name="Coming Soon"
            alert="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.5}
            colorText="#EFEFEF"
          />
          <Button
            name="Coming Soon"
            alert="Coming Soon"
            colorIcon="#EFEFEF"
            background={0.5}
            colorText="#EFEFEF"
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
    // opacity: 0.8
  },
  menu: {
    display: "flex",
    alignSelf: "center"
  }
});
