//meilih data tertentu dalam data array menggunakan filter method

const angka = [1,2,3,4,5,6,7,8,9,10];

const angkaGanjil = angka.filter((n) => {
    return n % 2 === 1;
});
console.log(angkaGanjil)


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

const animeBagus = animes.filter((anime) => anime.rating >= 80)
const namaAnimeBagus = animeBagus.map((anime) => anime.tittle);
console.log(animeBagus)
console.log(namaAnimeBagus)