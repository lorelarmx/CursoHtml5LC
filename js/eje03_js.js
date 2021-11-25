//eje03_js.js
function alerta() {
    var contador;

    texto = 'Este es un texto con comillas simples.';
    texto2 = "Este es un texto con comillas dobles.";
    texto3 = 'Este es un texto con \'comillas simples\' dentro del mismo.';
    console.log(contador);
    console.log(typeof contador);
    contador = null;
    if (contador == null){
        console.log('Tiene valor');
    }else{
        console.log(typeof contador);
    }
    //alert(texto + ' ' + texto2 + ' ' + texto3);            
}
function hacerclic() {
    document.getElementsByTagName('p')[1].onclick = alerta;
    document.getElementById('uno').onclick = alerta;
}
window.onload = hacerclic;