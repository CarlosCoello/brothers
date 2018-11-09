function addNumbers(a,b) {
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            let error = new Error('a or be need to be numbers');
            reject(error);
        }
    })
};

const sum = addNumbers(4,6);

sum.then(function(result){
    return result;
}).catch(function(error){
    return error;
});

// promise fue exitoso porque los dos argumentos que pase son numeros y la promesa nos regreso la suma de esos numeros que en este caso seria 10
console.log(sum);

// hagamos que nos regrese reject la promise pasando una string en vez de numero

const sumExampleTwo = addNumbers(2, '1');

sumExampleTwo.then(function(result){
    return result;
}).catch(function(error){
    return error;
});

// como puedes ver fue rechazada porque pasamos un string como argumento cuando la promise pide que sean de tipo numeros los arguments de la promise
console.log(sumExampleTwo);

/*
tambien podemos crear una promise que nos regrese aparte de la suma nos regrese mas informacion.
*/

function addNumbersTwo(a,b) {
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            const success = {
                boolean: true,
                resolve: a + b
            }
            resolve(success);
        } else {
            let error = {
                boolean: false,
                message: new Error('a or be need to be numbers')
            }
            reject(error);
        }
    })
};

const twoNumbers = addNumbersTwo(2,6);

twoNumbers.then(function(result){
    return result;
}).catch(function(error){
    return error;
});

// ahora nos regresa en el resolve mas informacion en forma de object
console.log(twoNumbers);
// podriamos usar el boolean dentro del object para muchas cosas, ejemplo:
if(twoNumbers.boolean){
    console.log('hey user the promise function returned resolved because boolean set to true');
}
