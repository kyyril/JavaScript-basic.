//return function di dalam function
//mirip expression func


function cekAngka () {
    let angka = Math.random

    if (angka > 0.1){
        return function(){
            console.log("angka lebih besar")
        }
    }else{
        return function(){
            console.log("angka lebih kecil")
        }
    }
}
// cekAngka()  // maka ini kosong

const simpan = cekAngka()//harus di simpan dulu
simpan()