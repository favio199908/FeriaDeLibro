// Define una clase abstracta HttpAdapter
export abstract class HttpAdapter {
  // Método abstracto para realizar una solicitud GET
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
