// Define una interfaz llamada Participante que describe la estructura de un participante
export interface Participante {
  id: number; // Identificador único del participante (número)
  nombre: string; // Nombre del participante (cadena de caracteres)
  profesion: null | string; // Profesión del participante (puede ser una cadena de caracteres o null)
  nacionalidad: null | string; // Nacionalidad del participante (puede ser una cadena de caracteres o null)
  ciudad: null | string; // Ciudad del participante (puede ser una cadena de caracteres o null)
  radicatoria: null | string; // Radicatoria del participante (puede ser una cadena de caracteres o null)
  telefono1: null | string; // Teléfono principal del participante (puede ser una cadena de caracteres o null)
  telefono2: null | string; // Teléfono secundario del participante (puede ser una cadena de caracteres o null)
  fecha_nacimiento: null | string; // Fecha de nacimiento del participante (puede ser una cadena de caracteres o null)
  tipo: null | string; // Tipo de participante (puede ser una cadena de caracteres o null)
  foto: string; // URL de la foto del participante (puede ser una cadena de caracteres o null)
  biografia: null | string; // Biografía del participante (puede ser una cadena de caracteres o null)
}

// Define una interfaz llamada FullParticipante que extiende la interfaz Participante e incluye propiedades adicionales
export interface FullParticipante extends Participante {
  salones: string[]; // Lista de salones asociados al participante (arreglo de cadenas de caracteres)
  pabellones: string[]; // Lista de pabellones asociados al participante (arreglo de cadenas de caracteres)
}
