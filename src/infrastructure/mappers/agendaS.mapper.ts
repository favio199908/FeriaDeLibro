import { AgendaS } from "../../core/entities/agendaSalon.entity";
import { AgendaSalon } from "../interfaces/api-db.responses";

export class agendaSMapper {
  static fromAgendaSDBCastToEntity(agendaS: AgendaSalon): AgendaS {
    return {
      salon: agendaS.pabellon,
      expositor: agendaS.expositor,
      id: agendaS.id,
      titulo: agendaS.titulo,
      expositor_id: agendaS.expositor_id,
      salon_id: agendaS.salon_id,
      hora: agendaS.hora,
      fecha: agendaS.fecha,
    };
  }
}
