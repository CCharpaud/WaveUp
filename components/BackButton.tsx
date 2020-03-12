import React from "react";
import { View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/core";
import { Entypo } from "@expo/vector-icons";

export default function BackButton(props) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            // I use the online style because I receive a props and it is impossible to recover it in the stylesheet //
            backgroundColor: "#808080",
            height: 50,
            width: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            opacity: 0.5,
            marginBottom: 50
          }}
        >
          <Entypo name="back" color={props.colorIcon} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
