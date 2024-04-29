export interface Expositor {
  id: number;
  nombre: string;
  profesion: null | string;
  nacionalidad: null | string;
  ciudad: null | string;
  radicatoria: null | string;
  telefono1: null | string;

  fecha_nacimiento: null | string;
  foto: null | string;
  biografia: null | string;
  pabellon: string;
  local: string;
  favorito: boolean;
  cantidad_fav: number;
}
