function sumaIloczyn1(numArray) {

    let suma = 0;
    let iloczyn = 1;
    let wynik = numArray.forEach(function (element, index) {

        suma = suma + numArray[index];
        iloczyn = iloczyn * numArray[index];


    });
    console.log("Suma z forEach = " + suma);
    console.log("Iloczyn z forEach = " + iloczyn);


}

let liczby = [1, 2, 3, 4, 5, 6];

sumaIloczyn1(liczby);




function sumaIloczyn2(tablica) {

    let length = tablica.length;
    let suma = 0;
    let iloczyn = 1;

    for (let i = 0; i < length; i++) {

        suma = suma + tablica[i];
        iloczyn = iloczyn * tablica[i];

    }
    
    console.log("Suma z for = " + suma);
    console.log("Iloczyn z for = " + iloczyn);

}

sumaIloczyn2(liczby);
