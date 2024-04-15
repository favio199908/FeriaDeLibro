// Define una clase HttpError para representar errores HTTP
export class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}
