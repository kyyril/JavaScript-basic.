
const pangkat = function (n){
    console.log(n * n) 
}
pangkat(5) //outout 25
// ini function expression

console.log()

const randomNum = (n) => { //ini arrow function
    console.log(Math.floor(Math.random() * n))
}
randomNum(1000) // random number