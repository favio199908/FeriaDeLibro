// Importa los hooks useEffect y useState de react
import { useEffect, useState } from "react";

// Importa la entidad Participante desde el archivo participante.entity en el directorio core/entities
import { Participante } from "../../core/entities/participante.entity";

// Importa todos los casos de uso desde el archivo use-cases en el directorio src/core/use-cases
import * as UseCases from "../../../src/core/use-cases";

// Importa el fetcher de la API desde el adaptador apiDB.adapters en el directorio config/adapters
import { apiDBFetcher } from "../../config/adapters/apiDB.adapters";

// Define el número de página inicial para la carga de participantes
let paricipantePageNumber = 1;

// Define el hook useApi que maneja la lógica para cargar participantes desde la API
export const useApi = () => {
  // Define el estado isLoading para indicar si se está cargando
  const [isLoading, setIsLoading] = useState(true);

  // Define el estado paricipante para almacenar la lista de participantes
  const [paricipante, setParicipante] = useState<Participante[]>([]);

  // Efecto para cargar participantes al montar el componente
  useEffect(() => {
    initialLoad();
  }, []);

  // Función asincrónica para la carga inicial de participantes
  const initialLoad = async () => {
    // Obtiene la lista de participantes desde la API utilizando el caso de uso apiParticipanteUseCase
    const participantePromise = await UseCases.apiParticipanteUseCase(
      apiDBFetcher // Utiliza el fetcher de la API
    );

    // Espera a que la promesa de participantes se resuelva y almacena los resultados
    const [participanteApi] = await Promise.all([participantePromise]);

    // Almacena la lista de participantes en el estado
    setParicipante(participanteApi);

    // Indica que la carga ha finalizado
    setIsLoading(false);
  };

  // Retorna el estado de carga y la lista de participantes
  return {
    isLoading,
    paricipante,
  };
};
