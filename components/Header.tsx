import React from "react";
import { Image, StyleSheet, View, StatusBar } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Apply the white status-bar on the whole application where the Header component is called */}
      <StatusBar barStyle="light-content" />
      <Image source={require("../assets/img/logo.png")} style={styles.logo} />
    </View>
  );
}

// Styles //
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40
  },

  logo: {
    resizeMode: "contain",
    height: 100,
    width: 300
  }
});
