let btn = $('button');
let square = $('.square');


square.css({
    'background': 'red',
    'width': '200px',
    'height': '200px',
    'margin-top': '20px',
    'position': 'relative'
});

btn.click(function () {
    console.log('Guzik został naciśnięty.');
    square.animate({
        'right': '-100px',
        'width': '100px',
        'height': '100px',

    }, 3000, function () {

        square.css({
            'background': 'blue',
            'transition': '5s'
        });

        window.setTimeout(function () {
            square.append("<h2>Animacja zakończona</h2>");

        }, 5000);

    })
});
