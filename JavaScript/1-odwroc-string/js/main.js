function reverse(text){
    let array = text.split("");
    let reverseArray = array.reverse();
    
    console.log("Po odwróceniu: " + array.join(""));
}

let string = "Akademia108";
console.log("Przed odwróceniem: " + string);

reverse(string);