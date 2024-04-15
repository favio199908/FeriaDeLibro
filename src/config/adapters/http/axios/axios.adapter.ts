// Importa la biblioteca Axios y desestructura los tipos AxiosInstance y AxiosResponse de la misma
import axios, { AxiosInstance, AxiosResponse } from "axios";

// Importa la interfaz HttpAdapter desde el archivo "../http.adapter"
import { HttpAdapter } from "../http.adapter";

// Define una interfaz Options que especifica las opciones que se pueden pasar al constructor de AxiosAdapter
interface Options {
  baseUrl: string; // URL base para todas las solicitudes HTTP
  params?: Record<string, string>; // Parámetros de consulta opcionales (objeto con claves de cadena y valores de cadena)
}

// Define la clase AxiosAdapter que implementa la interfaz HttpAdapter
export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance; // Instancia privada de Axios

  // Constructor de la clase AxiosAdapter que toma opciones como argumento
  constructor(options: Options) {
    // Crea una instancia de Axios con la URL base y los parámetros proporcionados en las opciones
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  // Método para realizar una solicitud GET
  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      // Realiza la solicitud GET utilizando la instancia de Axios y espera la respuesta
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
        url,
        options
      );
      // Devuelve solo los datos de la respuesta obtenida
      return response.data;
    } catch (error) {
      // Captura cualquier error que ocurra durante la solicitud y lo lanza como una nueva instancia de Error
      throw new Error(`Error fetching get: ${url}`);
    }
  }
}
