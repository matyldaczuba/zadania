let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let body = document.body;
let ol = document.createElement('ol');
let li;
let liText;
cities.forEach(function(el, ind){
    
    li = ol.appendChild(document.createElement('li'));
    
    li.setAttribute("class", "city");
    
    liText = document.createTextNode(el);
    
    li.appendChild(liText);
});

body.appendChild(ol);

