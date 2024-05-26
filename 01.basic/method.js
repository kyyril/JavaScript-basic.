// di namai method karena ada function di dalam object/properti
// sebagai contoh pada method Math. maka dia memiliki banyak function di dalam nya, contoh nya florr,random dll.

const myMath = {
    perkalian: function(a,b){ //method
        console.log(a * b)
    },
    penjumlahan: function(a,b){ //method
        console.log( a + b)
    }
}
myMath.perkalian(5,5)
myMath.penjumlahan(5,5)