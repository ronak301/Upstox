import { View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme } from "../theme";

const LoadingComponent = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={colors?.primary} />
    </View>
  );
};

export default LoadingComponent;
