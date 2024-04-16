export interface Agendass {
  fecha: number;
  fecha_completa: string;
  dia: string;
  mes: string;
}

export interface Fecha {
  pabellon: string;
  expositor: string;
  profesion: string;
  id: number;
  titulo: string;
  hora: string;
  fecha: string;
  local: string;
  foto: string;
  icono_salon: string;
  nacionalidad: string;
}

export interface FullAgenda extends Agendass {
  fechaCompleta: string;
  agenda: string[];
}
export interface FullFecha extends Fecha {
  fechaDia: string;
}
