//eje06_js.js

window.onload = function() {
    
var ingredientes = new Array();
ingredientes[0] = 'Azúcar';
ingredientes[1] = 'Leche';
ingredientes[2] = 'Café';
ingredientes[4] = true;
ingredientes[8] = 'Pan';
console.log(ingredientes[2]);
console.log(ingredientes);
console.log('longitud del arreglo: ', ingredientes.length);

var scores= new Array();
console.log(scores);

var scores2 = Array();

var scores3 = [];

var ingredientes2 = new Array('Elemento 1', 'Elemento 2', true, false, 89.5);
var ingredientes3 = ['Elemento 3', 'Elemento 4', true, false, 89.5];
console.log(ingredientes2[4]);
console.log(ingredientes2[5]);

for(let i=0; i < ingredientes2.length; i++)
    console.log(ingredientes2[i]);

for (let i of ingredientes3) {
    console.log(i);
}

var todos = ingredientes2.concat(ingredientes3);
console.log(todos);
console.log(typeof todos);

var index = ingredientes2.indexOf('Elemento 2');
console.log(index);

var index2 = ingredientes2.lastIndexOf(true);
console.log(index2);

var str = ingredientes2.join('@');
console.log(str);
console.log(typeof str);

var lastElement = ingredientes2.pop();
console.log(lastElement);
console.log(ingredientes2);

var newSize = ingredientes2.push('Nuevo Elemento');
console.log(ingredientes2);
console.log(newSize);
console.log(ingredientes2.length);

console.log(ingredientes2.reverse());

var firstElement = ingredientes2.shift();
console.log(ingredientes2);
console.log(firstElement);
console.log(ingredientes2.length);

//var pedazos = ingredientes2.slice(1,3);
var pedazos = ingredientes2.slice(-1);
console.log(pedazos);

var numeros = [8, 9, 2, 5, 1, 3, 4];
console.log(numeros.sort());

var cadena = numeros.toString();
console.log(cadena);
let elemento = numeros.unshift(20);
console.log(numeros);
console.log(elemento);
}

