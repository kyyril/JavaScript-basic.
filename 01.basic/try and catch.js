//ini berfungsi untuk menangani error tanpa menghentikan program atau memblok baris code

function test (pesan) {
    try{
        console.log(pesan.toUpperCase())//ini mengconvert string menjadi upper case
    }catch (error){
        console.log(error);
        console.log("pesan harus string")
    }
}

test("berhasil di convert 1")
test(123)//error
test("berhasil di convert 2")