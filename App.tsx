import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { MaterialBottomNavigator } from "./src/presentations/navegations/MaterialBottomNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <MaterialBottomNavigator />
    </NavigationContainer>
  );
}
