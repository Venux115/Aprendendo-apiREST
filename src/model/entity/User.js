class User {
  constructor(name, email, password, id) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._id = id;
  }

  getAll() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      password: this._password,
    };
  }

  // Getters
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  // Setters
  setId(id) {
    this._id = id;
  }

  setName(name) {
    this._name = name;
  }

  setEmail(email) {
    this._email = email;
  }

  setPassword(password) {
    this._password = password;
  }
}

module.exports = User;
