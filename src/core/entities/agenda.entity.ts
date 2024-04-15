import { Agenda } from "../../infrastructure/interfaces/api-db.responses";

export interface Agendass {
  fecha: number;
  fecha_completa: string;
  dia: string;
  mes: string;
}

export interface FullAgenda extends Agenda {
  fecha: string;
  agenda: Agenda[];
}
