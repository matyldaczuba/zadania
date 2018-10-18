class Ksiazka {

    constructor(tytul, autor, przeczytana) {

        this.title = tytul;
        this.author = autor;
        this.ifRead = przeczytana;

    }

    opiszKsiazke() {
        let read = this.ifRead;

        function czyt() {

            if (read == true) {
                return ("przeczytana");
            } else {

                return ("nieprzeczytana");

            }
        }


        let string = `Książka ma tytuł ${this.title}, autorem jest ${this.author} i została ${czyt()}`;
        return (string);
    }

}

let ksiazka1 = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', false);

let ksiazka2 = new Ksiazka('Włam się do mózgu', 'Radosław Kotarski', true);

let ksiazka3 = new Ksiazka('W pustyni i w puszczy', 'Henryk Sienkiewicz', false);


let tablicaKsiazek = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tablicaKsiazek) {

    let przeczytaneKsiazki = 0;

    tablicaKsiazek.forEach(function (el, ind) {

        console.log(el.opiszKsiazke());

        if (el.ifRead === true) {

            przeczytaneKsiazki++;

        }

    });
    
    console.log("Ilość przeczytanych książek: " + przeczytaneKsiazki);

}


iloscPrzeczytanych(tablicaKsiazek);
