// Importa los hooks useEffect y useState de react
import { useEffect, useState } from "react";

// Importa todos los casos de uso desde el archivo use-cases en el directorio src/core/use-cases
import * as UseCases from "../../core/use-cases";

// Importa el fetcher de la API desde el adaptador apiDB.adapters en el directorio config/adapters
import { apiDBFetcher } from "../../config/adapters/apiDB.adapters";
import { Agendass } from "../../core/entities/agenda.entity";

// Define el número de página inicial para la carga de participantes

// Define el hook useApi que maneja la lógica para cargar participantes desde la API
export const useAgenda = () => {
  // Define el estado isLoading para indicar si se está cargando
  const [isLoading, setIsLoading] = useState(true);

  // Define el estado paricipante para almacenar la lista de participantes
  const [agenda, setAgenda] = useState<Agendass[]>([]);

  // Efecto para cargar participantes al montar el componente
  useEffect(() => {
    initialLoad();
  }, []);

  // Función asincrónica para la carga inicial de participantes
  const initialLoad = async () => {
    // Obtiene la lista de participantes desde la API utilizando el caso de uso apiParticipanteUseCase
    const agendaPromise = await UseCases.apiAgendaFechasUseCase(
      apiDBFetcher // Utiliza el fetcher de la API
    );

    // Espera a que la promesa de participantes se resuelva y almacena los resultados
    const [agendaApi] = await Promise.all([agendaPromise]);

    // Almacena la lista de participantes en el estado
    setAgenda(agendaApi);

    // Indica que la carga ha finalizado
    setIsLoading(false);
    console.log({ agendaApi });
  };

  // Retorna el estado de carga y la lista de participantes
  return {
    isLoading,
    agenda,
  };
};
