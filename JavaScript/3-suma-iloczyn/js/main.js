function sumaIloczyn (numArray){
    
    console.log(numArray);
    numArray= [];
    let wynik = numArray.forEach( function(element, index){
        suma=numArray[index]+numArray[index+1];
        console.log("literacja");
    })
    

    
}

let liczby = [1, 2, 3, 4, 5, 6];

sumaIloczyn(liczby);