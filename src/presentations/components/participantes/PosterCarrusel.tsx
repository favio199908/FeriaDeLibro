// Importa los componentes necesarios de react-native
import { ScrollView, View } from "react-native";

// Importa la interfaz Participante desde la entidad participante.entity del directorio core/entities
import { Participante } from "../../../core/entities/participante.entity";

// Importa el componente ParticipantePoster desde el directorio actual
import { ParticipantePoster } from "./ParticipantePoster";

// Define una interfaz Props para especificar las propiedades esperadas por el componente PosterCarusel
interface Props {
  participantes: Participante[]; // Lista de participantes
  height?: number; // Altura opcional del carrusel de pósters
}

// Define un componente funcional PosterCarusel que muestra un carrusel de pósters de participantes
export const PosterCarusel = ({ height = 440, participantes }: Props) => {
  return (
    <View style={{ height }}>
      {/* ScrollView horizontal que contiene los pósters de los participantes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Mapea cada participante y muestra su póster utilizando el componente ParticipantePoster */}
        {participantes.map((participante) => (
          <ParticipantePoster
            key={participante.id} // Clave única para cada póster
            participante={participante} // Participante correspondiente al póster
          />
        ))}
      </ScrollView>
    </View>
  );
};
