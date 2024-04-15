// Importa el adaptador HTTP desde la ubicación correspondiente en tu proyecto
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";

// Importa el tipo de datos ParticipanteIDParticipante desde la ubicación correspondiente en tu proyecto
import { ParticipanteIDParticipante } from "../../../infrastructure/interfaces/api-db.responses";

// Importa el mapeador de API desde la ubicación correspondiente en tu proyecto
import { ApiMapper } from "../../../infrastructure/mappers/api.mapper";

// Importa la interfaz FullParticipante desde la ubicación correspondiente en tu proyecto
import { FullParticipante } from "../../entities/participante.entity";

// Define una función asincrónica llamada getParticipanteByIdUseCase que toma un fetcher (adaptador HTTP) y un ID de participante como argumentos y devuelve una promesa de tipo FullParticipante
export const getParticipanteByIdUseCase = async (
  fetcher: HttpAdapter,
  participanteId: number
): Promise<FullParticipante> => {
  try {
    // Realiza una solicitud GET al endpoint de participante con el ID proporcionado
    const participante = await fetcher.get<ParticipanteIDParticipante>(
      `/participante/${participanteId}`
    );

    // Mapea el participante obtenido de la base de datos a un objeto FullParticipante utilizando el mapeador de API
    const fullParticipante =
      ApiMapper.fromParticipanteDBToParticipanteID(participante);

    // Devuelve el participante mapeado
    return fullParticipante;
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
    throw new Error(`Cannot get movie by id: ${participanteId}`);
  }
};
