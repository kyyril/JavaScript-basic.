//map
// output nya adalah array baru yang sudah dimodifikasi

const angka = [1,2,3,4,5,6,7,8,9,10];

const angkaDouble = angka.map(function(n){
    console.log(`ini angka ganda ${n * 2}`)
})


console.log(`ini angka biasa ${angka}`);


console.log()
console.log("ini animeList")
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

const animeList = animes.map(function(anime){
    console.log(anime.tittle.toUpperCase()) //list anime to upperCase
})
