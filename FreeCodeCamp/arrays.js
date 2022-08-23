// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName;
console.log('Longitud es = ' + lastNameLength.length);
console.log('Primera letra es = ' + lastNameLength[0]);

const lastName2 = 'Lovelace';
// Cambia solo el código debajo de esta línea
const lastLetterOfLastName =lastName2[lastName2.length-1]; // Obtenemos el ultimo caracter
console.log('Resultado es = '+ lastLetterOfLastName);

const myArray = [50, 60, 70];//Array
const myArrayBi = [["Dylan",11],["Italo",10]];
console.log(myArrayBi)
console.log("*******************************")

//Arrays Multidimensionales

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
  
  console.log(arr[3]);
  console.log(arr[3][0]);
  console.log(arr[3][0][1]);


//Agregar datos a un Array con push al final 
const arr1 = [1, 2, 3];
arr1.push(4); //Aqui añadimos el numero 4 al final
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2)

//Sacar ultimo dato con pop y añadirlo a otra variable
console.log("Array Pop sacar ultimo dato")
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//Sacar primer dato con shift y añadirlo a otra variable
console.log("Array shift sacar primer dato")
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray)
console.log(ourArray)

//Añadir un registro al principio de un Array
console.log("Array - unshift añade un primer valor")
const ourArrayy = ["Stimpson", "J", ["cat"]];
ourArrayy.unshift("Primer registro añadido ")
console.log(ourArrayy)