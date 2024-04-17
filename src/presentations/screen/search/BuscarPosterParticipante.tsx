// Importa los componentes necesarios de react-native
import { ScrollView, View, Text } from "react-native";

// Importa la interfaz Participante desde la entidad participante.entity del directorio core/entities
import { Participante } from "../../../core/entities/participante.entity";

// Importa el componente ParticipantePoster desde el directorio actual

import { BuscarParticipantePoster } from "./BuscarParticipantePoster";

// Define una interfaz Props para especificar las propiedades esperadas por el componente PosterCarusel
interface Props {
  participantes: Participante[]; // Lista de participantes
  height?: number; // Altura opcional del carrusel de pósters
}

// Define un componente funcional PosterCarusel que muestra un carrusel de pósters de participantes
export const BuscarPosterParticipante = ({
  height = 100,
  participantes,
}: Props) => {
  return (
    <View style={{ height }}>
      {/* Mapea cada participante y muestra su póster utilizando el componente ParticipantePoster */}
      {participantes.map((participante) => (
        <BuscarParticipantePoster
          key={participante.id} // Clave única para cada póster
          participante={participante} // Participante correspondiente al póster
        />
      ))}
    </View>
  );
};
