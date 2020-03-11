import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen(props) {
  const { setIsLoading } = props;

  // TimeOut of SplashScreen //
  useEffect(() => {
    setTimeout(function() {
      setIsLoading(false);
    }, 2500);
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
          <ActivityIndicator size="large" color="#EE6F61" />
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
