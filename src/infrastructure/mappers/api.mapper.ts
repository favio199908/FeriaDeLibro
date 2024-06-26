// Importa las interfaces relevantes desde sus ubicaciones correspondientes en tu proyecto
import { Agendass, Fecha, FullAgenda } from "../../core/entities/agenda.entity";
import {
  FullParticipante,
  Participante,
} from "../../core/entities/participante.entity";
import {
  AgendaResponses,
  Agenda,
  ParticipanteIDParticipante,
  ParticipanteResponses,
  AgendaFechaAgenda,
} from "../interfaces/api-db.responses";

// Define una clase estática llamada ApiMapper
export class ApiMapper {
  // Método estático que convierte un objeto ParticipanteResponses en un objeto Participante
  static fromApiDBParticipanteToEntity(
    participanteResponse: ParticipanteResponses
  ): Participante {
    let fotoUrl: string;

    // Construye la URL de la foto del participante
    if (participanteResponse.foto === null) {
      fotoUrl = "https://feriasc.programatupotencial.com/Logotipos/user.png";
    } else {
      fotoUrl = `https://feriasc.programatupotencial.com/images/${participanteResponse.foto}`;
    }

    // Retorna un objeto Participante con los datos mapeados desde el objeto ParticipanteResponses
    return {
      id: participanteResponse.id,
      nombre: participanteResponse.nombre,
      profesion: participanteResponse.profesion,
      nacionalidad: participanteResponse.nacionalidad,
      ciudad: participanteResponse.ciudad,
      radicatoria: participanteResponse.radicatoria,
      telefono1: participanteResponse.telefono1,
      telefono2: participanteResponse.telefono2,
      fecha_nacimiento: participanteResponse.fecha_nacimiento,
      foto: fotoUrl,
      biografia: participanteResponse.biografia,
      tipo: participanteResponse.tipo,
    };
  }

  // Método estático que convierte un objeto ParticipanteIDParticipante en un objeto FullParticipante
  static fromParticipanteDBToParticipanteID(
    ParticipanteID: ParticipanteIDParticipante
  ): FullParticipante {
    let fotoUrl: string;

    // Construye la URL de la foto del participante
    if (ParticipanteID.foto === null) {
      fotoUrl = "https://feriasc.programatupotencial.com/Logotipos/user.png";
    } else {
      fotoUrl = `https://feriasc.programatupotencial.com/images/${ParticipanteID.foto}`;
    }

    // Retorna un objeto FullParticipante con los datos mapeados desde el objeto ParticipanteIDParticipante
    return {
      id: ParticipanteID.id,
      nombre: ParticipanteID.nombre,
      profesion: ParticipanteID.profesion,
      nacionalidad: ParticipanteID.nacionalidad,
      ciudad: ParticipanteID.ciudad,
      radicatoria: ParticipanteID.radicatoria,
      telefono1: ParticipanteID.telefono1,
      telefono2: ParticipanteID.telefono2,
      fecha_nacimiento: ParticipanteID.fecha_nacimiento,
      foto: fotoUrl,
      biografia: ParticipanteID.biografia,
      tipo: ParticipanteID.tipo,
      salones: ParticipanteID.salones.map((salone) => salone.salon), // Mapea la lista de salones a una lista de nombres de salones
      pabellones: ParticipanteID.pabellones.map(
        (pabellone) => pabellone.pabellon
      ), // Mapea la lista de pabellones a una lista de nombres de pabellones
    };
  }

  static fromAgendaFechasDBToEntity(agendafechas: AgendaResponses): Agendass {
    return {
      fecha: agendafechas.fecha,
      fecha_completa: agendafechas.fecha_completa,
      dia: agendafechas.dia,
      mes: agendafechas.mes,
    };
  }
}
