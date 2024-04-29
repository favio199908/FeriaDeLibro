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
        {/* Título "Nacionalidad" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Nacionalidad
        </Text>
        {/* Texto que muestra la nacionalidad del participante */}
        <Text style={{ marginLeft: 5, color: "#F2F2F2" }}>{participante.nacionalidad}</Text>
        {/* Título "Ciudad" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Ciudad
        </Text>
        {/* Texto que muestra la ciudad del participante */}
        <Text style={{ marginLeft: 5, color: "#F2F2F2" }}>{participante.ciudad}</Text>
        {/* Título "Radicatoria" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Radicatoria
        </Text>
        {/* Texto que muestra la radicatoria del participante */}
        <Text style={{ marginLeft: 5, color: "#F2F2F2" }}>{participante.radicatoria}</Text>
        {/* Título "Celular" con estilo */}

        {/* Contenedor para mostrar el celular del participante en una fila */}

        {/* Título "Fecha De Nacimiento" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Fecha De Nacimiento
        </Text>
        {/* Texto que muestra la fecha de nacimiento del participante */}
        <Text style={{ marginLeft: 5, color: "#F2F2F2" }}>{participante.fecha_nacimiento}</Text>
        {/* Título "Biografia" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Biografia
        </Text>
        {/* Texto que muestra la biografía del participante */}
        <Text style={{ fontSize: 16, color: "#F2F2F2" }}>{participante.biografia}</Text>
        {/* Título "Salon" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Salon
        </Text>
        {/* Texto que muestra los salones del participante */}
        <Text style={{ fontSize: 16, color: "#F2F2F2" }}>{participante.salones}</Text>
        {/* Título "Pabellon" con estilo */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
          Pabellon
        </Text>
        {/* Texto que muestra los pabellones del participante */}
        <Text style={{ fontSize: 16, color: "#F2F2F2" }}>{participante.pabellones}</Text>
      </View>
      {/* Espacio en blanco en la parte inferior */}
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        {/* Texto vacío */}
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
