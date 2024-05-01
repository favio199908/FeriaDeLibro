// Importa la clase AxiosAdapter desde el archivo './http/axios/axios.adapter'

import { AxiosAdapter } from "./http/axios/axios.adapter";

// Crea una instancia de AxiosAdapter para realizar solicitudes a la API de la base de datos
export const apiDBFetcher = new AxiosAdapter({
  baseUrl: "https://feriasc.programatupotencial.com/api", // URL base para todas las solicitudes HTTP a la API
  params: {}, // Parámetros de consulta (en este caso, no se proporcionan)
});
