import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// import { useNavigation } from "@react-navigation/core";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

export default function Button(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => alert(props.alert)}>
        <View
          style={{
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
