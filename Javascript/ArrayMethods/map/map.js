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
el metodo map nos permite accessar cada elemento dentro de un array
el argumento user es simplemente una palabra que nos permite accessar propiedas o metodos que tiene cada objeto dentro del array. Ese nombre no tiene que ser user, puede ser panchito y el metodo map funcionaria exactamente igual y accessariamos cada objeto escribiendo dentro de la funciton panchito.email 
*/
let getEmails = users.map(function(user){
    return user.email;
});

/*
en la primer vuelta del metodo map sucedio lo siguiente
user = {
    id: 1,
    name: 'john smith',
    username: 'johnatello',
    email: 'john@example.com',
    age: 20
}
en la segunda vuelta
user = {
    id: 2,
    name: 'carlos lopez',
    username: 'carlos90',
    email: 'carlos@example.com',
    age: 25
}
en la tercera vuelta
user = {
    id: 3,
    name: 'luis young',
    username: 'luisito20',
    email: 'luis@example.com',
    age: 40
}
en la cuarta vuelta
user = {
    id: 4,
    name: 'david orourke',
    username: 'david_90',
    age: 80
}
y como el array solo tiene 4 elementos pues ya no hay mas vuelta, el map termina y map regresa un nuevo array con los nuevos valores que le pedimos ['john@example.com', 'carlos@example.com', 'luis@example.com','david@example.com']
*/

// extraimos del array original users todo los emails con el map :)
console.log(getEmails); // ['john@example.com', 'carlos@example.com', 'luis@example.com','david@example.com']

let getNames = users.map(function(user){
    return user.name;
});

// extraimos del array original en esta ocasion los nombres con el map :)
console.log(getNames); // ['john smith', 'carlos lopez', 'luis young','david orourke']

let capitalizeName = users.map(function(user){
   user.name = user.name.toUpperCase();
   return user;
})

console.log(capitalizeName);