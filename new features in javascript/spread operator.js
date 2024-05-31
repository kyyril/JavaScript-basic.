//array
const angka = [1,2,3,4,5,6,7,8,9,10];
const str = ['kiki','wahyu']

const angkaBaru = [...angka,...str]
console.log(angkaBaru)


//object
const user = {
    name:"khairil",
    nim:2217020020
};

const userBaru = {...user, status:"mahasiswa"}
console.log(userBaru)
const userPremium = {...user,userBaru}
console.log(userPremium)