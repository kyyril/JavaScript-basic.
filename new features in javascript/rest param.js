// const angka = [1,2,3,4,5,6,7,8,9,10];

// const hitung = angka.reduce((awal,akhir) => {
//     return awal+akhir
// });
// console.log(hitung)


//
const nama = ['kiki','wahyu','jamal','cakmin','asep','amop','ucup'];

const winner = (par1,par2,par3,...sisa) => {
    console.log(`${par1} juara 1`);
    console.log(`${par2} juara 2`);
    console.log(`${par3} juara 3`);
    console.log(`sisa peserta : ${sisa}`);
};
winner(...nama)