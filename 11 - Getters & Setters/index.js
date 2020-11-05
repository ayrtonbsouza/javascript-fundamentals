const person = {
  _name: '',
  _age: 20,
  get name () {
    return this._name
  },
  set name (value) {
    this._name = value.toUpperCase()
  },
  get canDrive() {
    return this._age > 18
  },
  set age(value) {
    this._age = value
  }
}

person.name = 'Tony Stark';
console.log(person.name)
person.age = 16
console.log(person.canDrive)