// Importa el adaptador HTTP desde la ubicación correspondiente en tu proyecto
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { AgendaResponses } from "../../../infrastructure/interfaces/api-db.responses";

// Importa el mapeador de API desde la ubicación correspondiente en tu proyecto
import { ApiMapper } from "../../../infrastructure/mappers/api.mapper";
import { Agendass } from "../../entities/agenda.entity";

// Define una interfaz Options que especifica las opciones que se pueden pasar a la función apiParticipanteUseCase
interface Options {
  page?: number; // Número de página (opcional)
  limint?: number; // Límite de participantes por página (opcional)
}

export const apiAgendaFechasUseCase = async (
  fetcher: HttpAdapter,
  options?: Options // Opciones para la solicitud (opcional)
): Promise<Agendass[]> => {
  try {
    // Realiza una solicitud GET al endpoint de participante con las opciones proporcionadas
    const agenda = await fetcher.get<AgendaResponses[]>("/agendaferia/fechas", {
      params: {
        page: options?.page ?? 1, // Página obtenida de las opciones, o predeterminada a 1 si no se proporciona ninguna página
      },
    });

    // Mapea los participantes obtenidos de la base de datos a un array de objetos Participante utilizando el mapeador de API
    return agenda.map(ApiMapper.fromAgendaFechasDBToEntity);
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
    console.error(error);
    throw new Error("Error fetching api-expositor");
  }
};
