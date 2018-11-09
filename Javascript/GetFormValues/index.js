/*
lo importante de esta forma son los id selectors que tiene. Si te puedes dar cuenta que <form> tiene un id, los <input> tienen sus propios id con sus nombres y el <textarea> tiene su propio id.

un id es un selector que identifica un html tag como unico e independiente. Para escoger elementos de html desde javascript se utiliza el id selector comunmente

<form id="form">
    <div class="form-group">
        <label for="name">name:</label>
        <input type="text" id="name" placeholder="name..">
    </div>
    <div class="form-group">
        <label for="email">email:</label>
        <input type="email" id="email" placeholder="email..">
    </div>
    <div class="form-group">
        <label for="message">message</label>
        <textarea id="message" cols="30" rows="10"></textarea>
    </div>
    <input type="submit" value="Send">
</form>
*/


/*
con document.getElementById() estamos escogiendo un elemento html que tiene como selector id especifico.
cuando lees document.getElementById('form') estamos escogiendo <form> 
al document.getElementById('form').addEventListener aqui estamos diciendo quiero que me digas cuando trigger un evento el html tag <form> ¿que evento? en este caso le estamos pasando 'submit'
al metodo/funcion addEventListener le estamos pasando un callback en este caso una anonymous funcion
entonces cuando la forma ejecute un submit javascript va detectar eso con este codigo y nuestro anonymous callback va ejecutar todo el codigo que tiene adentro es donde pondremos la logica en este caso agarrar los valores de los inputs y text area antes de hacer algo con esa informacion :)
*/
document.getElementById('form').addEventListener('submit', function(e){
    // 'e' se refiere a evento. aqui estamos deteniendo el default behavior de submit que es cargar la pagina. Quita esta linea de codigo y guarda tus cambios para que veas que la pagina se cargara y comunmente queremos evitar para no dañar la experiencia del usuario y regresar un mensaje de exito o de informacion de que su informacion fue guardada u tuvo exito lo que tenia que pasar
    e.preventDefault();
    // creamos un empty object ¿porque? pues para guardar la informacion que viene de la forma en una sola parte y ademas sera mas facil pasar los datos a donde los tengas que pasar como en un http request a un api route 
    const obj = {};
    // aqui estamos guardando el valor del input con id='name' .value es lo que nos da el valor de ese input
    obj.name = document.getElementById('name').value;
    // aqui estamos guardando el valor del input con id='email' .value es lo que nos da el valor de ese input
    obj.email = document.getElementById('email').value;
    // aqui estamos guardando el valor del textarea con id='message' .value es lo que nos da el valor de ese input
    obj.message = document.getElementById('message').value;

    console.log('object with values ', obj);
});

/*
otra forma de hacerlo es abstracting la anonymous function que estamos pasando al addEventListener('submit', function()e){}) ¿abstracting? si haz una funcion afuera en el mismo archivo y luego pasale el nombre de esa funcion que hiciste al addEventListener veamos a continuacion como se veria
*/

// un comment code below to run it but before comment the code above with the other document.getElementById code on line 31
// document.getElementById('form').addEventListener('submit', formLogic);

// function formLogic(e){
//     e.preventDefault();
//     const obj = {};
//     obj.name = document.getElementById('name').value;
//     obj.email = document.getElementById('email').value;
//     obj.message = document.getElementById('message').value;
//     console.log('object with values ', obj);
// }