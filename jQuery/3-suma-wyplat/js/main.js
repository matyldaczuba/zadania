let btn = $('#count-sum');
let output = $('#sum');

btn.click(function(){
    
    let salary = $('.salary');
    let suma = 0;


    salary.each(function (index, element){
        
        suma += parseInt($(this).html());
        
        console.log(suma);
        
        output.html(suma);
    });

});