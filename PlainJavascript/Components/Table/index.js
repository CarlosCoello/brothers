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

function createTable(array){
    const table = document.getElementById('table');
    const header = table.createTHead();
    const body = table.createTBody();

    for(let i = 0; i < array.length; i++){
        if(i === 0){
            const keys = Object.keys(array[i]);
            const row = header.insertRow(0);
            for(let k = 0; k < keys.length; k++){
                this['hcell' + k] = row.insertCell(k);
                this['hcell' + k].innerHTML = keys[k];
            }
        } // cero index
        const keys = Object.keys(array[i]);
        const row = body.insertRow(i);
        for(let j = 0; j < keys.length; j++){
            this['bcell' + j] = row.insertCell(j);
            this['bcell' + j].innerHTML = array[i][keys[j]];
        }
    }
}

createTable(users);