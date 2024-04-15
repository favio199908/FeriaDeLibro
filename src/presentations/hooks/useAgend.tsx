// Importa los hooks useEffect y useState de react
import { useEffect, useState } from "react";

// Importa todos los casos de uso desde el directorio core/use-cases
import * as UseCases from "../../../src/core/use-cases";

// Importa el fetcher de la API desde el adaptador apiDB.adapters del directorio config/adapters
import { apiDBFetcher } from "../../config/adapters/apiDB.adapters";
import { FullAgenda } from "../../core/entities/agenda.entity";

// Define el hook useAp que maneja la lógica para cargar un participante específico
export const useAgend = (fecha: string) => {
  // Define el estado isLoading para indicar si se está cargando el participante
  const [isLoading, setisLoading] = useState(true);

  // Define el estado participante para almacenar la información del participante cargado
  const [agenda, setagenda] = useState<FullAgenda>();

  // Efecto para cargar el participante cuando cambia el ID del participante
  useEffect(() => {
    loadAp();
  }, [fecha]);

  // Función asincrónica para cargar el participante
  const loadAp = async () => {
    // Indica que se está cargando el participante
    console.log("Cargando agenda...");

    // Utiliza el caso de uso getFechaByFechaUseCase para obtener la agenda por su fecha
    try {
      const fullAgenda = await UseCases.getFechaByFechaUseCase(
        apiDBFetcher, // Utiliza el fetcher de la API
        fecha // Fecha de la agenda a cargar
      );

      // Almacena la agenda cargada en el estado
      setagenda(fullAgenda);

      // Indica que se ha completado la carga de la agenda
      console.log("Agenda cargada exitosamente.");

      // Imprime en la consola la agenda cargada (solo para propósitos de depuración)
      console.log({ fullAgenda });
    } catch (error) {
      // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
      console.error(`Error al cargar la agenda para la fecha: ${fecha}`, error);
      throw new Error(`Cannot load agenda for fecha: ${fecha}`);
    }

    // Indica que se ha completado la carga de la agenda
    console.log("Fin de la carga de la agenda.");
  };

  // Retorna el estado de carga y la información de la agenda
  return { isLoading, agenda };
};
