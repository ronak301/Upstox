import { View, Text } from "react-native";
import React from "react";

const ErrorComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
      <Text style={{ fontSize: 18, color: "black" }}>
        Something went wrong.
      </Text>
      <Text style={{ fontSize: 14, color: "#212121", paddingTop: 8 }}>
        Please try again later.
      </Text>
    </View>
  );
};

export default ErrorComponent;
