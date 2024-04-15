// Importa los componentes y hooks necesarios de react-native y react-navigation
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Define una interfaz Props para especificar las propiedades esperadas por el componente
interface Props {
  fecha: string; // Propiedad obligatoria que representa el nombre del participante
}

// Define un componente funcional ParticipanteHeader que muestra el encabezado de un participante
export const AgendaHeader = ({ fecha }: Props) => {
  // Obtiene la altura de la ventana actual
  const { height: screenHeight } = useWindowDimensions();
  // Obtiene el objeto de navegación
  const navigation = useNavigation();

  return (
    <>
      {/* Contenedor del encabezado de la imagen del participante */}
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        {/* Borde de la imagen */}
        <View style={styles.imageBorder}></View>
      </View>
      {/* Contenedor del texto y botón de regreso */}
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{fecha}</Text>
      </View>
      {/* Botón de regreso */}
      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Regresar</Text>
        </Pressable>
      </View>
    </>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
