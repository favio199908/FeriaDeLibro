import { Agenda } from "../interfaces/api-db.responses";
import { Fecha } from "../../core/entities/agenda.entity";

export class fechaMapper {
  static fromMovieDBCastToEntity(agenda: Agenda): Fecha {
    let fotoUrl: string;

    // Construye la URL de la foto del participante
    if (agenda.foto === null) {
      fotoUrl = "https://feriasc.programatupotencial.com/Logotipos/user.png";
    } else {
      fotoUrl = `https://feriasc.programatupotencial.com/images/${agenda.foto}`;
    }

    return {
      fecha: agenda.fecha,
      pabellon: agenda.pabellon,
      expositor: agenda.expositor,
      profesion: agenda.profesion,
      id: agenda.id,
      titulo: agenda.titulo,
      hora: agenda.hora,
      local: agenda.local,
      foto: fotoUrl,
      icono_salon: agenda.icono_salon,
      nacionalidad: agenda.nacionalidad,
    };
  }
}
