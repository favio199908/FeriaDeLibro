import { StyleSheet } from "react-native";

export const globalColors = {
  primary: "#F2A71B",
  secondary: "#f72585",
  tertiary: "#3a0ca3",
  success: "#4cc9f0",
  warning: "#fca311",
  danger: "#e71d36",
  dark: "#22223b",
  background: "#1261A6",
};

export const globalStyles = StyleSheet.create({
  iconCircle: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "#F2A71B", // Puedes cambiar el color del círculo aquí
    marginBottom: 10,
  },

  icon: {
    width: 300,
    height: 250,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: "30%", // Ancho del contenedor del icono
    aspectRatio: 1, // Relación de aspecto 1:1 para mantener los íconos cuadrados
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Espacio entre los íconos
  },
  globalmargin: {
    marginHorizontal: 20,
  },

  container: {
    flex: 1,
    padding: 5,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#F2A71B",
    fontSize: 10,
  },
  contentContainer: {
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
});
