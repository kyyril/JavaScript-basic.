//method this dalam arrow function tidak bisa dilakukan

const person = {
    firstName:"khairil",
    lastName:"Hakiki",
    fullName:function(){ //regular
        console.log(this.firstName + this.lastName)    
    },
    secondFullName:() => { //undifined / NaN
        console.log(this.firstName + this.lastName)
    }
}
person.fullName()
person.secondFullName()