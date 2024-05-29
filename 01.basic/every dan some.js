//every : true apabila setiap semua kodisi benar/nilai yang ditentukan sesuai
//some : true apabila salah satu terpenuhi


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

//some
const animeTerbaik = animes.every((anime) => anime.rating >= 80)
console.log(animeTerbaik)//false

const animeSalahSatuTerbaik = animes.some((anime) => anime.rating > 80)
console.log(animeSalahSatuTerbaik)//true
