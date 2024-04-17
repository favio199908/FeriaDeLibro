// Importa los componentes y hooks necesarios de react-native
import { View, Image, StyleSheet, Pressable } from "react-native";

// Importa el hook useNavigation y NavigationProp de react-navigation/native
import { NavigationProp, useNavigation } from "@react-navigation/native";

// Importa la interfaz Participante y RootStackParams desde las ubicaciones correspondientes
import { Participante } from "../../../core/entities/participante.entity";
import { RootStackParams } from "../../navegations/Navegations";

// Define una interfaz Props para especificar las propiedades esperadas por el componente ParticipantePoster
interface Props {
  participante: Participante; // Objeto del participante
  height?: number; // Altura opcional de la imagen del participante
  width?: number; // Ancho opcional de la imagen del participante
}

// Define un componente funcional ParticipantePoster que muestra un póster de participante
export const ParticipantePoster = ({
  participante,
  height = 420,
  width = 300,
}: Props) => {
  // Obtiene la instancia de navegación
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    // Componente Pressable que envuelve la imagen del participante y permite la navegación a los detalles del participante al presionar
    <Pressable
      onPress={() =>
        navigation.navigate("Details", { participanteId: participante.id })
      }
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1, // Reduce la opacidad al presionar
      })}
    >
      {/* Contenedor de la imagen del participante */}
      <View style={styles.imagecontainer}>
        {/* Imagen del participante */}
        <Image
          style={styles.image}
          source={{
            uri: participante.foto
              ? participante.foto
              : "http://feria.programatupotencial.com/Logotipos/user.png",
          }}
        />
      </View>
    </Pressable>
  );
};

// Estilos para el componente ParticipantePoster
const styles = StyleSheet.create({
  // Estilos para la imagen
  image: {
    flex: 1,
    borderRadius: 18,
  },
  // Estilos para el contenedor de la imagen
  imagecontainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
});
