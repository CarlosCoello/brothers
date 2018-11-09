/*
parte importante de programacion es hacer condicions antes de hacer nuestro codigo para evitar que la app se rompa o tipicamente nos de un white screen cuando deberia aparecer html
asi que vamos a ver como hacer ese tipo de checking :)
*/

// variables creadas pero no tiene valor asignado aun. Una base de datos podria arrojarnos un elemento undefined o sin valor aun y no queremos desplegar un elemento vacio al browser. Como prevenir esto vemos :)
let name, age, email, username;

/*
un elemento undefined sin ser comparado no funciona en un if, nos regresa false osea no entra dentro del if y de esta forma decimos if value exists then come inside the if condition and do something
*/

if(name){
    // do this if name value exists pero como no existe no funcionara
    console.log('hola brothers');
}

// ahora asignemosle simplemente empty string y veras que ahora si va entrar al if
name = '';

// si le asignamos un empty string tampoco entra al if condition
if(name){
    console.log('still does not work');
}

// ya si le asignamos un valor vemos que si entra en el if
name = 'hi';

if(name){
    // ya con un valor funciono
    console.log('it worked');
}

/*
Todo lo anterior nos ayuda a proteger que una funcion se rompa por culpa de una variable vacia o porque el tipo de dato no es el que buscamos.
*/

// ejemplo de como se usaria en una posible funcion en una empresa supongamos que te dicen haz una funcion que reciba dos numeros y los sume

function sumFunc(a,b) {
    if(a && b){
        if(typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else {
            alert('numbers are only allowed');
        }
    } else {
        alert('two number arguments are required for this function');
    }
}

// al correr la funcion con un solo argumento vemos que la primer condicion 'if(a && b)' no se cumple por lo cual logramos que la funcion no se rompa o nos regrese un resultado equivocado
sumFunc(2);

// al correr la funcion con un argument de tipo numero y el otro de tipo string la condicion if(typeof a === 'number' && typeof b === 'number') no se cumple por lo cual hemos salvado que la funcion no nos arroje un resultado equivocado.
sumFunc(2, '5');

// al correr la funcion con los argumentos adecuados vemos que las condiciones se cumplen y nos regresa la respuesta correcta sumanddo los numeros pasados.
const res = sumFunc(2,5);
console.log(res);

/*
Tambien se usan condiciones para ahorrar tiempo en la logica, para que correr codigo si no tenemosla informacion correcta
*/