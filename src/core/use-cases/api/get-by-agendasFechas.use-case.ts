import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { AgendaFechaAgenda } from "../../../infrastructure/interfaces/api-db.responses";

import { fechaMapper } from "../../../infrastructure/mappers/fecha.mapper";
import { Fecha } from "../../entities/agenda.entity";

export const getAgendaByFechaUseCase = async (
  fetcher: HttpAdapter,
  agendaFecha: string
): Promise<Fecha[]> => {
  try {
    const { agenda } = await fetcher.get<AgendaFechaAgenda>(
      `/agendaferia/agendafecha/${agendaFecha}`
    );

    const fecha = agenda.map(fechaMapper.fromMovieDBCastToEntity);

    return fecha;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching api - agendaferia/agendafecha");
  }
};
