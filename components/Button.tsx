import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Import of Navigation //
import { useNavigation } from "@react-navigation/core";

// Icons //
import { MaterialIcons } from "@expo/vector-icons";

export default function Button(props) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(props.destination)}>
        <View
          // I use the online style because i receive a props and it is impossible to recover it in the stylesheet //
          style={{
            backgroundColor: "#808080",
            height: 50,
            width: 150,
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
