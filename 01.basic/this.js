// this. mengembalikan nilai pada object

const person = {
    firstName:"Khairil",
    lastName:"Hakiki",
    fullName: function() {
        return `Halo saya ${this.firstName} biasa di panggil ${this.lastName}`
    }
}
console.log(person.fullName())