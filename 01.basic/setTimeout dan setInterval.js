//setTimeout memanggil aksi berdasarkan waktu yang ditentukan
//setInterval memanggil aksi berdasarkan waktu yang ditentukan dan berjalan secara realtime atau looping
  //untuk menghentikan set interval gunakan clearInterval(variable)


// setTimeout(() => {
//     console.log("halo 2 detik")
// },2000)
// console.log("halo")


const variable = setInterval(() => {
    console.log("halo dalam setiap 3 detik")//realtime
},3000)

clearInterval(variable)
//untuk menghentikan setInterval 

