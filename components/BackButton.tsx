import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import { goBack } from "@react-navigation/routers/lib/typescript/src/CommonActions";

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
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            opacity: props.background,
            marginBottom: 30
          }}
        >
          <MaterialIcons name="list" color={props.colorIcon} size={30} />
          <Text style={{ color: props.colorText }}> {props.name} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
