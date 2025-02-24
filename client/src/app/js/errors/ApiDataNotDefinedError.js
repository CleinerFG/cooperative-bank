export class ApiDataNotDefinedError extends Error {
  constructor() {
    super('Api data was not defined');
  }
}
