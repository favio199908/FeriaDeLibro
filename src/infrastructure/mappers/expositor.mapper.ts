import { Expositor } from "../../core/entities/expositor.entity";
import { ExpositorResponse } from "../interfaces/api-db.responses";

export class expositorMapper {
  // Método estático que convierte un objeto ParticipanteResponses en un objeto Participante
  static fromApiDBExpositorToEntity(expositorR: ExpositorResponse): Expositor {
    let fotoUrl: string;

    // Construye la URL de la foto del participante
    if (expositorR.foto === null) {
      fotoUrl = "http://feria.programatupotencial.com/Logotipos/user.png";
    } else {
      fotoUrl = `http://feria.programatupotencial.com/images/${expositorR.foto}`;
    }

    // Retorna un objeto Participante con los datos mapeados desde el objeto ParticipanteResponses
    return {
      id: expositorR.id,
      nombre: expositorR.nombre,
      profesion: expositorR.profesion,
      nacionalidad: expositorR.nacionalidad,
      ciudad: expositorR.ciudad,
      radicatoria: expositorR.radicatoria,
      telefono1: expositorR.telefono1,

      fecha_nacimiento: expositorR.fecha_nacimiento,
      foto: fotoUrl,
      biografia: expositorR.biografia,
      pabellon: expositorR.pabellon,
      local: expositorR.local,
      favorito: expositorR.favorito,
      cantidad_fav: expositorR.cantidad_fav,
    };
  }
}
