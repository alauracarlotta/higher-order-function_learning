// *--------- array ---------*
// | 9 | 2 | 3 | 12 | 28 | 45 | 9 | => indice * 2
//   |   |    |   |    |    |   |
//| 18 | 4 | 6 | 24 | 56 | 90 | 18 |

// o map retorna um array modificado


/* ---------------------
    Meu proprio exemplo
------------------------ */

const listNumbers = [9 , 2 , 3 , 12 , 28 , 45 , 9];

var returnDoMap = doMap = (item) => {
    console.log(item);
    return item * 2;
}

console.log(listNumbers.map(doMap));

/* ---------------------
    Exemplo Coder
------------------------ */
// GENERICO

const numbers = [3 , 4 , 7 , 1 , 9 , 7];

function getMap (num) {
    return num * 3;
}

let result = numbers.map(getMap);
console.log(result);


// APLICAR DESCONTO => QUERO PEGAR O PREÇO DO PRODUTO, SUBTRAIR O DESCONTO E GERAR OUTRO ARRAY

const listProducts = [
    {
        name: 'Bolsa',
        price: 23.90,
        discount: .10
    },
    {
        name: 'Sapato',
        price: 82.99,
        discount: .5
    },
    {
        name: 'Mochila',
        price: 123.85,
        discount: .15
    },
    {
        name: 'Sandalia',
        price: 42.87,
        discount:.8
    },
    {
        name: 'Blusa',
        price: 87.45,
        discount: .25
    },
];

/* function getDiscount (prod) {
    return `R$ ${String((prod.price * (1 - prod.discount)).toFixed(2))}`;
}

let getDiscountList = listProducts.map(getDiscount);

function listConvertBrasilianNumber (price) {
    return price.replace('.',',');
}

let listConvertBrasilianNumberConvertYet = getDiscountList.map(listConvertBrasilianNumber);

console.log('ultimaLista', listConvertBrasilianNumberConvertYet); */



// OU AINDA

function getDiscount (prod) {
    return `R$ ${String((prod.price * (1 - prod.discount)).toFixed(2))}`;
}

function listConvertBrasilianNumber (price) {
    return price.replace('.',',');
}

let valurFinalConvert = listProducts
    .map(getDiscount)
    .map(listConvertBrasilianNumber);

// let valurFinalConvert = listProducts.map(getDiscount).map(listConvertBrasilianNumber);

console.log('ultimaLista', valurFinalConvert);
