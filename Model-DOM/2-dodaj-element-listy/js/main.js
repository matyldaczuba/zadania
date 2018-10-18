function addItem() {
    
    let ul = document.querySelector('#items');

    let number = ul.childElementCount;

    let li = document.createElement('li');
    
    li.setAttribute('class', 'item');
    
    ul.appendChild(li);
    
    let liText = document.createTextNode(`Item ${number+1}`);
    
    li.appendChild(liText);

}

let btn = document.querySelector('button');

btn.onclick = addItem;
