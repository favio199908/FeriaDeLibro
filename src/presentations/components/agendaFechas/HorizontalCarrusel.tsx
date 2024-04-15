// Importa los hooks useEffect y useRef desde la librería react
import { useEffect, useRef } from "react";

// Importa componentes y tipos necesarios de react-native
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text,
  FlatList,
} from "react-native";
import { Agendass } from "../../../core/entities/agenda.entity";
import { AgendaFechasPoster } from "./AgendaFechaPoster";

// Define una interfaz Props para especificar las propiedades esperadas por el componente HorizontalCarrusel
interface Props {
  agenda: Agendass[]; // Lista de participantes
  nombre?: string; // Nombre opcional del carrusel
  loadNextPage?: () => void; // Función opcional para cargar la siguiente página de participantes
}

// Define un componente funcional HorizontalCarrusel que muestra un carrusel horizontal de participantes
export const HorizontalCarrusel = ({ agenda, nombre, loadNextPage }: Props) => {
  // Crea una referencia mutable para controlar el estado de carga
  const isLoading = useRef(false);

  // Efecto que se ejecuta cada vez que cambia la lista de participantes
  useEffect(() => {
    // Establece isLoading en falso después de 200 milisegundos
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [agenda]); // Este efecto se ejecuta cuando participante cambia

  // Función que se ejecuta cuando se realiza un desplazamiento en el carrusel
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Si isLoading es true, no hacer nada
    if (isLoading.current) return;

    // Obtiene información sobre el desplazamiento del evento
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Verifica si se ha alcanzado el final del carrusel
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    // Si se ha alcanzado el final del carrusel, no hacer nada
    if (isEndReached) return;

    // Marca isLoading como true para evitar cargas múltiples
    isLoading.current = true;

    // Si existe loadNextPage, llama a esta función para cargar la siguiente página de participantes
    loadNextPage && loadNextPage();
  };

  // Retorna la estructura del carrusel horizontal
  return (
    <View style={{ height: nombre ? 260 : 220 }}>
      {/* Si se proporciona un nombre, mostrarlo como título */}
      {nombre && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "300",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {nombre}
        </Text>
      )}

      {/* FlatList que muestra los participantes en un carrusel horizontal */}
      <FlatList
        data={agenda} // Lista de participantes
        renderItem={(
          { item } // Renderiza cada participante utilizando el componente ParticipantePoster
        ) => <AgendaFechasPoster agenda={item} width={140} height={200} />}
        keyExtractor={(item, index) => `${item.fecha_completa}-${index}`} // Función para generar claves únicas para los elementos de la lista
        horizontal // Establece el carrusel en dirección horizontal
        showsHorizontalScrollIndicator={false} // Oculta la barra de desplazamiento horizontal
        onScroll={onScroll} // Función que se ejecuta cuando se desplaza el carrusel
      />
    </View>
  );
};
