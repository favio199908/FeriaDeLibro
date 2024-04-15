// Importa los componentes necesarios de react-native
import { ScrollView, View } from "react-native";

// Importa la interfaz Participante desde la entidad participante.entity del directorio core/entities

import { Agendass } from "../../../core/entities/agenda.entity";
import { AgendaFechasPoster } from "./AgendaFechaPoster";

// Define una interfaz Props para especificar las propiedades esperadas por el componente PosterCarusel
interface Props {
  agendas: Agendass[]; // Lista de participantes
  height?: number; // Altura opcional del carrusel de pósters
}

// Define un componente funcional PosterCarusel que muestra un carrusel de pósters de participantes
export const APosterCarusel = ({ height = 440, agendas }: Props) => {
  return (
    <View style={{ height }}>
      {/* ScrollView horizontal que contiene los pósters de los participantes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Mapea cada participante y muestra su póster utilizando el componente ParticipantePoster */}
        {agendas.map((agenda) => (
          <AgendaFechasPoster
            key={agenda.fecha_completa} // Clave única para cada póster
            agenda={agenda} // Participante correspondiente al póster
          />
        ))}
      </ScrollView>
    </View>
  );
};
