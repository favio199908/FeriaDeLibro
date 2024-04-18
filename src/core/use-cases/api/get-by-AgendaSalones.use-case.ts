import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { AgendaSalon } from "../../../infrastructure/interfaces/api-db.responses";
import { agendaSMapper } from "../../../infrastructure/mappers/agendaS.mapper";

import { AgendaS } from "../../entities/agendaSalon.entity";

export const getAgendaSaloneByFechaUseCase = async (
  fetcher: HttpAdapter,
  agendaSa: string,
  salonS: number
): Promise<AgendaS[]> => {
  try {
    const agenda = await fetcher.get<AgendaSalon[]>(
      `/agendaferia/agendafechasalon/${agendaSa}/${salonS}`
    );

    const salon = agenda.map(agendaSMapper.fromAgendaSDBCastToEntity);
    console.log({ salon });
    return salon;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching api - agendaferia/agendafecha");
  }
};
