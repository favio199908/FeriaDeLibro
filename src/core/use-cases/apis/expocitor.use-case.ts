// Importa el adaptador HTTP desde la ubicación correspondiente en tu proyecto
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";

// Importa el tipo de datos ParticipanteResponses desde la ubicación correspondiente en tu proyecto
import { ExpositorResponse } from "../../../infrastructure/interfaces/api-db.responses";

// Importa el mapeador de API desde la ubicación correspondiente en tu proyecto

import { expositorMapper } from "../../../infrastructure/mappers/expositor.mapper";
import { Expositor } from "../../entities/expositor.entity";

// Importa la entidad Participante desde la ubicación correspondiente en tu proyecto
import { Participante } from "../../entities/participante.entity";

// Define una interfaz Options que especifica las opciones que se pueden pasar a la función apiParticipanteUseCase
interface Options {
  page?: number; // Número de página (opcional)
  limint?: number; // Límite de participantes por página (opcional)
}

// Define una función asincrónica llamada apiParticipanteUseCase que toma un fetcher (adaptador HTTP) y opciones como argumentos y devuelve una promesa de tipo array de Participante
export const apiExpositorUseCase = async (
  fetcher: HttpAdapter,
  options?: Options // Opciones para la solicitud (opcional)
): Promise<Expositor[]> => {
  try {
    // Realiza una solicitud GET al endpoint de participante con las opciones proporcionadas
    const participante = await fetcher.get<ExpositorResponse[]>("/expositor", {
      params: {
        page: options?.page ?? 1, // Página obtenida de las opciones, o predeterminada a 1 si no se proporciona ninguna página
      },
    });

    // Mapea los participantes obtenidos de la base de datos a un array de objetos Participante utilizando el mapeador de API
    return participante.map(expositorMapper.fromApiDBExpositorToEntity);
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
    console.error(error);
    throw new Error("Error fetching api-expositor");
  }
};
