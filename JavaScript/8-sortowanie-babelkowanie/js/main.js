let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(`Przed sortowaniem: ${tablica}`);

function sort(array){
    
    let length = array.length;
    let tmp;
    for(let i = 0; i < length-1; i++) {
        
        for(let j = 0; j < length-1-i; j++){
            
            if(array[j] > array[j+1]){
                
                tmp = array[j+1];
                array[j+1] = array[j];
                array[j] = tmp;
                
            }
        }
        
    }
    
    return array;
   
}



console.log(`Po sortowaniu: ${sort(tablica)}`);





