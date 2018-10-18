let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(`Przed sortowaniem: ${tablica}`);

function sort(array){
    let n = array.length;
    do {
        for(let i = 0; i < n-1; i++){
            if(array[i] > array [i+1]){
                let tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;
                
                console.log("dzzialaa");

            }
        }
        console.log(array);
    }
    while(n>1);

}

let posortowanaTablica = sort(tablica);

console.log(`Po sortowaniu: ${posortowanaTablica}`);
//
//procedure bubbleSort( A : lista elementów do posortowania )
//  n = liczba_elementów(A)
//   do
//    for (i = 0; i < n-1; i++) do:
//      if A[i] > A[i+1] then
//        swap(A[i], A[i+1])
//      end if
//    end for
//    n = n-1
//  while n > 1
//end procedure

