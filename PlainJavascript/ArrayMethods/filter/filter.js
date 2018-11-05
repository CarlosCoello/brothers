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
        email: 'david@example',
        age: 80
    }
];

/*
asi como en map podemos accessar cada elemento de un array, filter tambien nos permite eso. la diferencia esta en que filter va regresarnos solo los elementos que pasen una condicion que requiere el body de la funcion de filter
veamos un ejemplo
*/

let agesOver25 = users.filter(function(user){
    return user.age > 25;
});

// nos regresa solo los objects que pasaron la condicion user.age > 25
console.log(agesOver25);

/* 
si hacemos lo mismo con map nos va regresar un array con booleans true false en vez de regresarnos los elementos completitos que pasaron la prueba. e aqui la diferencia entre map y filter
*/

let mapAgeOver25 = users.map(function(user){
    return user.age > 25;
});

console.log(mapAgeOver25);

// otro ejemplo de como filter nos puede servir
let onlyFormattedEmails = users.filter(function(user){
    return user.email.match(/[a-z0-9._%+-\S]+@[a-z0-9.-\S]+\.[a-z]{2,}$/gi);
});

// como puedes ver no nos regresa el ultimo objeto con id 4 ¿porque? porque el email del id 4 no esta bien formateado deberia terminar en .com o .algo
console.log(onlyFormattedEmails);
