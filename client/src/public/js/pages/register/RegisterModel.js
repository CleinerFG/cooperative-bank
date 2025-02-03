export class RegisterModel {
  #params;
  constructor(params) {
    this.#params = params;
  }

  get dataToApi() {
    return {
      cpf: this.#params.cpf,
      name: this.#params.name,
      birth: this.#params.birth,
      email: this.#params.email,
      password: this.#params.password,
    };
  }
}
