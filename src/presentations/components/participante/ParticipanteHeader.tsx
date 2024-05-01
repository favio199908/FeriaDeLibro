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
  foto: null | string; // Propiedad opcional que representa la URL de la foto del participante
  nombre: string; // Propiedad obligatoria que representa el nombre del participante
  profesion: null | string; // Propiedad opcional que representa la profesión del participante
}

// Define un componente funcional ParticipanteHeader que muestra el encabezado de un participante
export const ParticipanteHeader = ({ foto, nombre, profesion }: Props) => {
  // Obtiene la altura de la ventana actual
  const { height: screenHeight } = useWindowDimensions();
  // Obtiene el objeto de navegación
  const navigation = useNavigation();

  return (
    <>
      {/* Contenedor del encabezado de la imagen del participante */}
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        {/* Borde de la imagen */}
        <View style={styles.imageBorder}>
          {/* Imagen del participante */}
          <Image
            style={styles.posterImage}
            source={{
              uri: foto
                ? foto
                : "https://feriasc.programatupotencial.com/Logotipos/user.png",
            }}
          />
        </View>
      </View>
      {/* Contenedor del texto y botón de regreso */}
      <View style={styles.marginContainer}>
        {/* Nombre del participante */}
        <Text style={styles.subTitle}>{nombre}</Text>
        {/* Profesión del participante (si está disponible) */}
        <Text style={styles.title}>{profesion}</Text>
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
    elevation: 0,
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
    color: "#F2F2F2"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2A71B"
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
