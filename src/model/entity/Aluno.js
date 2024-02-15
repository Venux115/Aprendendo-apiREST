export default class Aluno {
  #id;
  #name;
  #birth;
  #studentClass;

  constructor(name, birth, studentClass, id = null) {
    this.#name = name;
    this.#birth = birth;
    this.#studentClass = studentClass;
    this.#id = id;
  }

  getAll(){
    return {
      name: this.name,
      brith: this.birth,
      studentClass: this.studentClass,
      id: this.id
    }
  }

  // Getter para id
  get id() {
    return this.#id;
  }

  // Getter para name
  get name() {
    return this.#name;
  }

  // Getter para birth
  get birth() {
    return this.#birth;
  }

  // Getter para studentClass
  get studentClass() {
    return this.#studentClass;
  }

  // Setter para id
  setId(id) {
    this.#id = id;
  }

  // Setter para name
  setName(name) {
    this.#name = name;
  }

  // Setter para birth
  setBirth(birth) {
    this.#birth = birth;
  }

  // Setter para studentClass
  setStudentClass(studentClass) {
    this.#studentClass = studentClass;
  }
}
