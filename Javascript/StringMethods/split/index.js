/*
el metodo split nos ayuda a partir/dividir una string en secciones y estas secciones nos la regresa en un array
*/

// supongamos tienes un url y necesitas agarrar dinamicamente la ultima palabra del url con split es posible veamos :)
let url = 'https://google.com/products/cookware';

// como ves url.split('/') divide el url string antes, despues y entre cada diagonal por eso nos regresa ["https:", "", "google.com", "products", "cookware"] el "" que esta en el array es el espacio que esta entre // despues del https:// eso tambien lo regreso pues eso le pedimos divide todo lo que esta antes, despues y entre diagonales
console.log(url.split('/'));

// si lo anterior le agregamos el metodo pop() de un array eso nos va regresar la ultima palabra del url :) y ahora si podemos utilizar esa palabra en el codigo para otra cosa
console.log(url.split('/').pop());

/* 
Otro posible escenario de uso, supongamos que nuestro jefe nos pide que hagamos la primer palabra de cada enunciado en un parrafo capitalize letter, bueno una forma de hacerlos es com split veamos como :)
*/

let parrafo = 'hola hermanos que bonita es la luna cuando es de noche. las estrellas se ven hermosas en las afueras de la ciudad. el mar es impresionante, tan extenso y lleno de vida. que tacos te gustan, a mi los de pastor.'

// usemos split para modificar la letra y luego unamos el array para regresar el parrafo pero ya con capitalize letters :) OJO este es un metodo de seguro hay metodos mas sencillos y rapidos solo quiero demostrar como se pudiera usar el metodo split() :)
function capitalizeFirstLetter(parrafo){
    parrafo = parrafo.split('.');
    return parrafo.map(function(enunciado){
        // tengo un if condicion porque pudiera ser que un elemento del array este vacio o undefined por lo tanto es innecesario correr este codigo
        if(enunciado){
            enunciado = enunciado.trim().split('');
            enunciado[0] = enunciado[0].toUpperCase();
            enunciado = enunciado.join('');
        }
        return enunciado;
    })
}

// aqui ya tenemos en un array cada enunciado con la primer letra en Mayuscula ahora nos falta unirlo otra vez en un parrafo osea en una string
const convertParrafoToStringAgain = capitalizeFirstLetter(parrafo);

// aqui unimos el array con un join y como argumento pasamos el punto/dot seguido por un espacio para que quede igualito de como lo agarramos :)
console.log(convertParrafoToStringAgain.join('. '));