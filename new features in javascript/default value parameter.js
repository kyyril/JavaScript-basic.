//default value parameter

const sapa = function (name,msg = "selamat datang"){ //pastikan default value di belakang
    return name + msg;
}
console.log(sapa('kiki'))
console.log()

const sapa2 = function (msg = "selamat datang", name){ 
    return name + msg;
}
console.log(sapa2('jamal'))
//jika default value di awal maka default value akan undefined dan parameter yg diisi biasa akan diisi ke parameter yg kosong(name)