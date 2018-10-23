const url = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php';

var btn = $("#get-data-btn");

btn.after($("<div></div>").attr('id', 'dane-programisty'));

var output = $("#dane-programisty");


btn.click(function () {

    $.getJSON(url, function (data) {

        console.log(data);

        let txt = `
            Imię: ${data.imie} <br>
            Nazwisko: ${data.nazwisko} <br>
            Zawód: ${data.zawod} <br>
            Firma: ${data.firma} <br> 
        `;

        output.html(txt);
        
    });

});
