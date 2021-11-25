//eje03_js.js
function sumar(x, y) {
    return x + y;
}

var a= sumar(4,5);
console.log(a);

function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}

function myfun(fun,arr){
    //console.log(typeof fun);
    //console.log(typeof arr);
    let result = [];
    for(let i=0; i < arr.length; i++){
        result[i] = fun(arr[i]);
    }

    return result;
}

const cubo = function(x){
    return x * x * x;
}

let array = [2,4,6,8,10];
let valores = myfun(cubo, array);
console.log('Arreglo valores', valores);

var num1 = 23, num2=24, name='Luis';

function multiplicar(x,y){
    return x*y;
}

console.log(multiplicar(3,4));

function adicionar(){
    var num1 = 10, num2 = 20;

    function add(){
        return this.name + ' anotó ' + (num1 + num2);
    }
    return add();

}

console.log(adicionar());




