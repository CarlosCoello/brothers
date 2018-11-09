/*
const users es Mock Data, ese es el termino que se usa para imitar lo que un http get request nos va regresar de la base de datos
*/


const users = [
    {
        id: 1,
        name: 'john smith',
        username: 'johnatello',
        email: 'john@example.com',
        age: 20
    }, 
    {
        id: 2,
        name: 'carlos lopez',
        username: 'carlos90',
        email: 'carlos@example.com',
        age: 25
    },
    {
        id: 3,
        name: 'luis young',
        username: 'luisito20',
        email: 'luis@example.com',
        age: 40
    }, 
    {
        id: 4,
        name: 'david orourke',
        username: 'david_90',
        email: 'david@example.com',
        age: 80
    }
];


const getEmails = users.sort(function(a,b){
    if(a.email < b.email){
        return -1;
    } else if(a.email > b.email){
        return 1;
    } else {
        return 0;
    }
});


/*
supongamos que users array viene de un api GET y nos piden hacer un <select> dropdown con informacion de users array. Aqui lo veremos :)
*/

for(let i = 0; i < getEmails.length; i++){
    /*
    cada vuelta que da el for loop hace todo el codigo que le metimos en su body (adentro del for loop pues)
    */
    // primero escogemos el <select> tag por su id
    const select = document.getElementById('select');
    // luego creamos un elemento de html <option>
    const option = document.createElement('option');
    // luego le asignamos un atributo value al option. Se lo asigna asi <option value="john@example.com"></option>
    option.setAttribute('value', getEmails[i].email);
    // luego le insertamos text al <option value="john@example.com"> john@example.com </option> que acabamos de crear
    option.text = getEmails[i].email;
    // luego con el metodo add que ya existe en javascript para agregar options al <select> tag logramos meter en cada vuelta un <option> nuevo :)
    select.add(option);
}

document.getElementById('select').addEventListener('change', function(event){
    console.log(event.target.value);
});