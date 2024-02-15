export default class User {
  #id;
  #name;
  #email;
  #password;

  constructor(name, email, password, id = null) {
    this.#name = name;
    this.#email = email;
    this.#password = password;
    this.#id = id;
  }

  getAll() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      password: this.#password
    }
  }

  // Getters
  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }

  // Setters
  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  setEmail(email) {
    this.#email = email;
  }

  setPassword(password) {
    this.#password = password;
  }
}
