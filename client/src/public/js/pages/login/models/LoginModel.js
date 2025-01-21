export class LoginModel {
  #params;
  constructor(params) {
    this.#params = params;
  }

  get dataToApi() {
    return {
      email: this.#params.email,
      password: this.#params.password,
    };
  }
}
