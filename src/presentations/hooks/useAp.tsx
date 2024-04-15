// Importa los hooks useEffect y useState de react
import { useEffect, useState } from "react";

// Importa todos los casos de uso desde el directorio core/use-cases
import * as UseCases from "../../../src/core/use-cases";

// Importa la interfaz FullParticipante desde la entidad participante.entity del directorio core/entities
import { FullParticipante } from "../../core/entities/participante.entity";

// Importa el fetcher de la API desde el adaptador apiDB.adapters del directorio config/adapters
import { apiDBFetcher } from "../../config/adapters/apiDB.adapters";

// Define el hook useAp que maneja la lógica para cargar un participante específico
export const useAp = (participanteId: number) => {
  // Define el estado isLoading para indicar si se está cargando el participante
  const [isLoading, setisLoading] = useState(true);

  // Define el estado participante para almacenar la información del participante cargado
  const [participante, setParticipante] = useState<FullParticipante>();

  // Efecto para cargar el participante cuando cambia el ID del participante
  useEffect(() => {
    loadAp();
  }, [participanteId]);

  // Función asincrónica para cargar el participante
  const loadAp = async () => {
    // Indica que se está cargando el participante
    setisLoading(true);

    // Utiliza el caso de uso getParticipanteByIdUseCase para obtener el participante por su ID
    const fullParticipante = await UseCases.getParticipanteByIdUseCase(
      apiDBFetcher, // Utiliza el fetcher de la API
      participanteId // ID del participante a cargar
    );

    // Almacena el participante cargado en el estado
    setParticipante(fullParticipante);

    // Indica que se ha completado la carga del participante
    setisLoading(false);

    // Imprime en la consola el participante cargado (solo para propósitos de depuración)
    console.log({ fullParticipante });
  };

  // Retorna el estado de carga y la información del participante
  return { isLoading, participante };
};
