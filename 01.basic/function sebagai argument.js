//function sebagai argument untuk function
//menampilkan lempar dadu 3 kali


function lemparDadu (){
    let hasil = Math.floor(Math.random() * 6 + 1);
    console.log(hasil)
};

function func(func){
    func();
    func();
    func();
};

func(lemparDadu)//maka function lempar dadu akan dipanggil sebanyak 3 kali