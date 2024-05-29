//reduce adalah method pembanding nilai array diawal dengan nilai di sampingnya

const nilaiUjian = [10,20,30,40,50]; 
// 10+20=30 30+30=60....150

let totalAngka = nilaiUjian.reduce((total,nilai) => { //parAwal:10,parAkhir:20 dan hasil nya pindah ke parAwal (total menjadi 30 dan sekarang berada di index di sampingnya, dan seterusnya hingga index habis)
    return total + nilai;
})

console.log('mencari total nilai array')//150
console.log(totalAngka)//150
console.log()



let animes = [
    {
        tittle:"naruto",
        rating:80
    },
    {
        tittle:"one piece",
        rating:50
    },
    {
        tittle:"erased",
        rating:75
    },
    {
        tittle:"attack on titan",
        rating:95
    },
]


const animeAmpass = animes.reduce((animePar1,animePar2) => {
    if (animePar1.rating < animePar2.rating){
        return animePar1;
    }
    return animePar2;
})
console.log("mencari anime low rating")
console.log(animeAmpass)//one piece
console.log()


const num = [2,3,5,8,10,3,9,4,8,1];
const bigNum = num.reduce((firstNum,secondNum) => {
    if (firstNum > secondNum){
        return firstNum;
    }
    return secondNum;
})
console.log("mencari angka terbesar")
console.log(bigNum)//10