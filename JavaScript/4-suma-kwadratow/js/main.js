function sumaKwadratu(array) {

    let suma = 0;
    let kwadrat = 0;
    
    let wynik = array.forEach(function (element, index) {
        
        kwadrat = Math.pow(array[index],2);
        suma = suma + kwadrat;

    });
    
    return("Suma kwadratu = " + suma);

}

let liczby = [0, 1, 2, 3, 4, 5];

console.log(sumaKwadratu(liczby));
