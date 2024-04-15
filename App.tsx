import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { MaterialBottomNavigator } from "./src/presentations/navegations/MaterialBottomNavigator";

// Define un tema personalizado extendiendo el tema por defecto
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#008DDA", // Color primario personalizado
    // Puedes agregar los colores restantes o dejarlos como están en el tema por defecto
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MaterialBottomNavigator />
    </NavigationContainer>
  );
}
