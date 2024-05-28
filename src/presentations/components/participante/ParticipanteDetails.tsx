// Importa los componentes Text y View de react-native
import { Text, View } from "react-native";

import React from "react"; // Importa React desde el paquete "react"
import { FullParticipante } from "../../../core/entities/participante.entity"; // Importa la interfaz FullParticipante desde su ubicación

// Define una interfaz Props para especificar las propiedades esperadas por el componente
interface Props {
  participante: FullParticipante; // Propiedad "participante" de tipo FullParticipante
}

// Define un componente funcional ParticipanteDetails que muestra los detalles de un participante
export const ParticipanteDetails = ({ participante }: Props) => {
  return (
    <>
      {/* Fragmento para envolver múltiples elementos sin crear un nodo adicional en el DOM */}
      {/* Contenedor principal con margen horizontal de 20 */}
      <View style={{ marginHorizontal: 20 }}>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Salón
        </Text>
        {/* Texto que muestra los salones del participante */}
        <Text style={{ fontSize: 16, color: "#F2F2F2" }}>{participante.salones}</Text>

        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        ></Text>
      </View>
    </>
  );
};
