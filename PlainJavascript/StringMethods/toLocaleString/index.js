let num = 1200;

/*
toLocaleString() convierte un numero en formato de dinero osea 3500 lo convierte en 3,500 tambien podemos agregarle decimales y podemos especificar que la moneda es americana u de otro pais. veamos como se pudiera usar
*/

// con el metodo ahora el numero es 3,500 en formato monetario. Si cambias el numero de 1200 a 1200100 veras que el numero ahora tendra dos comas 1,200,100 y asi sucesivamente.
console.log(num.toLocaleString());

/*
veamos un caso mas real. Supongamos que de una llamada a un api nos regrese datos monetarios que necesitamos agarrar y plasmar en el view para que el usuario pueda ver lo que a gastado
*/

const purchasesExampleOne = [
    {
        product: 'screw driver',
        price: 2099
    },
    {
        product: 'ceiling fan',
        price: 4599
    }
]

// podemos usar un map para modificar la propiedad price que esta en los objetos del array. veamos

const money = purchasesExampleOne.map(function(purchase){
    purchase.price = purchase.price.toLocaleString();
    return purchase;
});

// como ves ahora tiene comas los numeros
console.log('money format: ',money);

const purchasesExampleTwo = [
    {
        product: 'screw driver',
        price: 2099.2
    },
    {
        product: 'ceiling fan',
        price: 4599.244
    }
]

// podriamos utilizar el mismo map e ir un paso mas modificando el precio podemos agregarle decimales para que represente mas moneda/dinero PERO OJO ESTA FORMA DE AGREGAR DECIMALES REDONDEA SI HAY MAS DECIMALES DE LOS QUE TU REQUIERES. ABAJO ESTAMOS REQUIRIENDO MINIMO DOS DECIMALES MAXIMO DOS DECIMALES OSEA SI EL NUMERO ES 245.125 SE CONVERTIRIA EN 245.13 EL 5 SE REDONDEA HACIA ARRIBA Y SI EL NUMERO FUERA 245.124 QEUDARIA 245.12 PORQYE EL 4 SE REDONDEA HACIA ABAJO 
const moneyWithDecimals = purchasesExampleTwo.map(function(purchase){
    // pasamos undefined ya que segun la documentacion si hacemos eso entonces seria el pais donde esten viendo nuestra pagina web pero si quieres forzar un pais en especifico o paises se pasaria en vez de undefined asi toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) o si varios paises asi toLocaleString(['en-US','de-DE'], {minimumFractionDigits: 2, maximumFractionDigits: 2})
    purchase.price = purchase.price.toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2});
    return purchase;
});

console.log('money format with Decimals: ',moneyWithDecimals);


// te piden le agregues decimales y signo de dinero bueno puedes hacer lo siguiente

const purchasesExampleThree = [
    {
        product: 'screw driver',
        price: 2099.2
    },
    {
        product: 'ceiling fan',
        price: 4599.244
    }
]

const moneySymbolDecimals =  purchasesExampleThree.map(function(purchase){
    purchase.price = '$' + purchase.price.toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2});
    return purchase;
});

console.log('money format with symbol and rounded decimals: ',moneySymbolDecimals);

// ahora te piden que conviertas el numero en dinero pero que las decimales no se redondeen bueno entonces pueden usar el metodo toFixed() antes de usar toLocalString()

const purchasesExampleFour = [
    {
        product: 'screw driver',
        price: 2099.2
    },
    {
        product: 'ceiling fan',
        price: 4599.244
    }
]

const moneyDecimalsNotRounded = purchasesExampleFour.map(function(purchase){
    purchase.price = purchase.price.toFixed(2);
    purchase.price = purchase.price.toLocaleString();
    return purchase;
});

// como te puedes dar cuenta este metodo no redondea simplemente agrega ceros si hacen falta decimals y quita decimales si hay mas decimales que 2 que fue el numero que le pasamos a toFixed(2)
console.log('money format with decimals not rounded: ',moneyDecimalsNotRounded);