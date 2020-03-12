import React, { useEffect } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

export default function SplashScreen(props) {
  const { setIsLoading } = props;

  // TimeOut of SplashScreen //
  useEffect(() => {
    setTimeout(function() {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.box}>
      <ImageBackground
        source={require("../assets/img/wait.gif")}
        style={styles.background}
      >
        <View style={styles.imgContain}>
          <Image
            style={styles.img}
            source={require("../assets/img/logo.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

// Styles //

const styles = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "center"
  },

  background: {
    display: "flex",
    width: "100%",
    height: "100%"
  },

  imgContain: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 150,
    justifyContent: "center",
    alignItems: "center"
  },

  img: {
    width: 300,
    resizeMode: "contain"
  }
});
