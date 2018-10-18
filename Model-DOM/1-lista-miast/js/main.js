let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let body = document.body;
let ol = document.createElement('ol');

cities.forEach(function(el, ind){
    ol.appendChild(document.createElement('li'));
    
})

console.log(ol.children)
