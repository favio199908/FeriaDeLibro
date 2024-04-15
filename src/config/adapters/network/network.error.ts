// Define una clase NetworkError para representar errores de red
export class NetworkError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
