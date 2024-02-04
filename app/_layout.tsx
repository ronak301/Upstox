import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack initialRouteName="holdings">
      <Stack.Screen
        name="holdings"
        options={{ headerShown: true, headerTitle: "Holdings" }}
      />
    </Stack>
  );
}
