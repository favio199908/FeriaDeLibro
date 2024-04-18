// Importa los componentes y hooks necesarios de react-native y react-navigation
import { StyleSheet, Text, View } from "react-native";

// Define una interfaz Props para especificar las propiedades esperadas por el componente
interface Props {
  fecha: string; // Propiedad obligatoria que representa el nombre del participante
}

// Define un componente funcional ParticipanteHeader que muestra el encabezado de un participante
export const AgendaHeader = ({ fecha }: Props) => {
  return (
    <>
      <View>
        <Text style={styles.title}>Para la fecha : {fecha}</Text>
      </View>
    </>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
