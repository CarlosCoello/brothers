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

/*
supongamos que users array viene de un api GET y nos piden hacer un <select> dropdown con informacion de users array. Aqui lo veremos :)
*/

for(let i = 0; i < users.length; i++){
    /*
    cada vuelta que da el for loop hace todo el codigo que le metimos en su body (adentro del for loop pues)
    */
    // primero escogemos el <select> tag por su id
    const select = document.getElementById('select');
    // luego creamos un elemento de html <option>
    const option = document.createElement('option');
    // luego le asignamos un atributo value al option. Se lo asigna asi <option value="john@example.com"></option>
    option.setAttribute('value', users[i].email);
    // luego le insertamos text al <option value="john@example.com"> john@example.com </option> que acabamos de crear
    option.text = users[i].email;
    // luego con el metodo add que ya existe en javascript para agregar options al <select> tag logramos meter en cada vuelta un <option> nuevo :)
    select.add(option);
}