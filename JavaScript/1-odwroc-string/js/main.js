function reverse(text){
    let array = text.split("");
    let reverseArray = array.reverse();
    return(reverseArray.join(""));
}

let string = "Akademia108";
console.log("Przed odwróceniem: " + string);
console.log("Po odwróceniu: " + reverse(string));
