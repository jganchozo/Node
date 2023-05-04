
// function sumar(a, b = 10) {
//     return a + b;
// }

//console.log(sumar(5));

const sumar = (a, b = 9) => a + b;
const saludar = () => 'Hola Mundo';
const sayHi = name => `Hello ${name}`;


console.log(sumar(5, 4));
console.log(sayHi('Jose Manuel'));
console.log(saludar());