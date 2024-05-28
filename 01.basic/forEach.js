//for each
console.log('first example')
const angka = [1,2,3,4,5,6,7,8,9,10];

angka.forEach(function(el){
    if( el % 2 === 0){
        console.log(`ini genap ${el}`)
    }else{
        console.log(`ini ganjil ${el}`)
    }
})


console.log('')
console.log('second example')

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

animes.forEach(function(anime){
    console.log(`${anime.tittle} - ${anime.rating}/100`)
})