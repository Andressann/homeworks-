// mapeado 
const array1 = [1, 2, 3, 4, 5]
const mapeado = array1.map(element =>element + 20);
console.log(mapeado);

//filter
const array2 = [6, 7, 8, 9] 
const filtrado = array2.filter(element => element === 6 || element === 8);
console.log(filtrado);

// sort 

// en orden decendente 
descendete = array3.sort((a, b) => a > b ? -1 : 1);
console.log(descendete);

//en orden ascendete 
ascendete = array3.sort((a, b) => a > b ? 1 : 1-);

//for each
const array4 = [1, 2, 3, 4, 5, 6] 
array4.forEach(element => { console.log(element);
});

//concat 

console.log(array1.concat(array2));

//every
const mayor = array2.every(numero => numero > 5);
console.log(mayor)