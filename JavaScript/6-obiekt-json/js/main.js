let jsonPracownicy = {

    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}

console.log(jsonPracownicy);

let pracownik = `Imię: ${jsonPracownicy.pracownicy[0].firstName} Nazwisko: ${jsonPracownicy.pracownicy[0].lastName}`;

console.log(pracownik);

//jsonPracownicy.forEach(function(element, index){
//    console.log(`Index: ${index} Imię: ${jsonPracownicy.pracownicy[index].firstName} Nazwisko: ${jsonPracownicy.pracownicy[index].lastName}`);
//});
//

//jsonPracownicy.forEach(function (el,ind){
//    pracownik = `Index: ${ind} Imię: ${jsonPracownicy.pracownicy[ind].firstName} Nazwisko: ${jsonPracownicy.pracownicy[ind].lastName}`;
//    console.log(pracownik);
//});