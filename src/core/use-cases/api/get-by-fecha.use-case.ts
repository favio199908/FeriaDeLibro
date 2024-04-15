// Importa el adaptador HTTP desde la ubicación correspondiente en tu proyecto
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { AgendaFechaAgenda } from "../../../infrastructure/interfaces/api-db.responses";

// Importa el mapeador de API desde la ubicación correspondiente en tu proyecto
import { ApiMapper } from "../../../infrastructure/mappers/api.mapper";
import { FullAgenda } from "../../entities/agenda.entity";

// Define una función asincrónica llamada getParticipanteByIdUseCase que toma un fetcher (adaptador HTTP) y un ID de participante como argumentos y devuelve una promesa de tipo FullParticipante
export const getFechaByFechaUseCase = async (
  fetcher: HttpAdapter,
  agendaFecha: string
): Promise<FullAgenda> => {
  try {
    // Registro para ver que la función se está ejecutando y con qué argumentos
    console.log(
      "getFechaByFechaUseCase ejecutándose con agendaFecha:",
      agendaFecha
    );

    // Realiza una solicitud GET al endpoint de participante con el ID proporcionado
    const fecha = await fetcher.get<AgendaFechaAgenda>(
      `/agendaferia/agendafecha/${agendaFecha}`
    );

    // Registro para ver la respuesta de la solicitud
    console.log("Respuesta de la solicitud:", fecha);

    // Mapea el participante obtenido de la base de datos a un objeto FullParticipante utilizando el mapeador de API
    const fullFecha = ApiMapper.fromAgendaFechasDBToFecha(fecha);
    console.log("los object:", fullFecha.agenda);

    // Registro para ver el resultado del mapeo
    console.log("Fecha mapeada:", fullFecha);

    // Devuelve el participante mapeado
    return fullFecha;
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
    console.error(
      `Error al obtener la agenda por fecha: ${agendaFecha}`,
      error
    );
    throw new Error(`Cannot get agenda by fecha: ${agendaFecha}`);
  }
};
