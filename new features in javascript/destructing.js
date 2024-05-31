//Bongkar Element Array Ke Masing-Masing Variabel
const nama = ['kiki','wahyu','jamal','cakmin','asep','amop','ucup'];
const [par1,par2,par3,...lainnya] = nama;
console.log(par1)
console.log(par2)
console.log(par3)
console.log(...lainnya)



console.log('######')



//Bongkar Juga Properti Object Ke Masing-Masing Variabel    
const person = {
    name:"khairil",
    nim:2217020020
};
//kalau dia object, kita bisa memberikan nama destruc alias pada property
const {name:namaa, nim, noHp='0837227653' } = person;
// console.log(name);//undifined
console.log(namaa);//khairil
console.log(noHp);//0837227653
console.log(person.name);//khairil
console.log(person.namaa);//undifined


console.log()


//Bongkar Properti Object Bisa Dilakukan Di Dalam Function
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

const animesDetail = animes.map(({tittle,rating}) => {
    return `${tittle} | rating: ${rating}`;
});
console.log(animesDetail)