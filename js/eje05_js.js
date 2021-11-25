//eje05_js.js



//let f = () => {console.log('Funcion flecha sin parametros')); }

/*let f = () => { return 'Funcion flecha sin parametros'; }
let f1 = (x) => x*x;
let f2 = (x,y,z) => { return x + y + z; }

console.log( f() );
console.log( f1(4) );
console.log( f2(3,5,7) );

alert('Esta es una alerta informativa');
let valor = prompt('Deme la cantidad:', '');
console.log(typeof valor);

let confirmar = confirm('¿Seguro de eliminar?');
console.log(confirmar);

//if (!confirmar) Negación
//if (confirmar == true)
if (confirmar)
    console.log ('Se eliminó');
else 
    console.log('El usuario canceló');
*/

/*
window.onload = getEdad;
function getEdad(){
    var edad = prompt('Introduce tu edad', '');
    if (isNaN(edad)) {
        alert('Introduce un número válido');
    }else {
        if (Number(edad) > 0 && Number(edad) < 18) {
            alert('Menor de edad');
        } else {
            if (Number(edad) >= 18 && Number(edad) < 60) {
                alert('Persona Adulta');        
        } else {
            alert('Adulto mayor');
        }
    }
    }
}
*/


window.onload = getColor;
function getColor(){

    var color = prompt('¿Cuál es tu color favorito?', '');

    switch(color) {
        case 'rojo': 
            alert('El color rojo es una buena opción!');
            break;
        case 'negro':
            alert('El color negro combina con todo!');
            break;
        case 'blanco':
            alert('Es genial este color');
            break;
        default:
            alert('El color: '+ color + ' no está en la lista');
            break;
        }
    }






