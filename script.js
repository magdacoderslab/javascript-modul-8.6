var a=-4,
    b=3,
    value=(a * a) - (2 * a * b) - (b * b);

console.log(value);

/*
var userName = 'Piotr';
// change the above value to check how the 'if' works
if (userName == 'Piotr') {
    document.write('Witaj Piotrze!');
} else if (userName.length == 0) {
    document.write('Nie wprowadziłeś imienia!');
} else {
    document.write('Witaj ' + userName);
}
*/

if (value >= 0) {
    console.log('wynik dodatni');
} else  {
    console.log('wynik ujemny');
}
if (value == 0) {
    console.log('wynik=0')
}

/*
var value >= 0 ? 'wynik dodatni' : 'wynik ujemny'
console.log(value);


var whatIsBigger = a > b ? 'Variable a is bigger' : 'Variable b is bigger';
console.log(whatIsBigger);
*/