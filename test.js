let sentence = "Hallo mein Name ist Kirsch. Ich bin achtundvierzig. Ich lerne javascript."
//let lowerCase = sentence.toLowerCase();
var str = sentence.toLowerCase().split('. ');
for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
}


//console.log(lowerCase);
console.log(str);
console.log(str.join('. '));