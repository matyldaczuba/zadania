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

let pracownik = jsonPracownicy.pracownicy;

pracownik.forEach(function(element, index){
    let wyswietl = `Index: ${index} Imię: ${jsonPracownicy.pracownicy[index].firstName} Nazwisko: ${jsonPracownicy.pracownicy[index].lastName}`;
    console.log(wyswietl);
});


