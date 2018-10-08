let string = "Akademia108";

console.log("Przed sortowaniem: " + string);
function sort(text){
    let array = text.split("");
    let sortedArray = array.sort();
    
    console.log("Po sortowaniu: " + array.join(""));
}

sort(string);