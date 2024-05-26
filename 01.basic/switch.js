const pilihan = 'abcd';

for (let iFirst = 1; iFirst <= 10; iFirst++){
    console.log(`${iFirst}.`);
    for (let iSecond = 0; iSecond < pilihan.length; iSecond++){
        console.log(`${pilihan[iSecond]}. soal`);
    }
}