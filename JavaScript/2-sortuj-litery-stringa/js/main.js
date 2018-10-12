function sort(text){
    let array = text.split("");
    let sortedArray = array.sort();
    return(array.join(""));
}

let string = "Akademia108";
console.log("Przed sortowaniem: " + string);
console.log("Po sortowaniu: " + sort(string));

