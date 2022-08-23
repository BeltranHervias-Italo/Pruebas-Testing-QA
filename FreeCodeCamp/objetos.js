function imprimir(arg1){
    console.log(arg1);    
}

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/*Lee los valores de las propiedades de testObj utilizando la notación de puntos. 
  Asigna la variable hatValue igual a la propiedad hat del objeto y asigna la variable shirtValue 
  igual a la propiedad shirt del objeto.

*/

const testObj = {
    "ha t": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  const hatValue = testObj["ha t"]; //Cuando la propiedad tiene espacios se usa []
  const shirtValue = testObj.shirt; //Cuando no tiene espacios se puede usar un punto
  

//Accede a propiedades de objetos con variables  
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);  
  const otroperro = dogs.Fido;
  imprimir(otroperro);

/*
Establece la variable playerNumber a 16. 
Luego, usa la variable para buscar el nombre del jugador y asignarlo a player.
*/
// Configuración
const testObj2= {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Cambia solo el código debajo de esta línea

const playerNumber = 16;  // Cambia esta línea
const player = testObj[playerNumber];   // Cambia esta línea
imprimir(player)

//Actualizar propiedades de un objeto
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

ourDog.name = "Happy Camper"
imprimir(ourDog)
//Añadimos una propiedad al objeto ourDog
//Si queremos eliminar un objeto seria asi:
//        delete ourDog.bark;
ourDog.bark = "bow - wow"
imprimir(ourDog)
//Si queremos saber si tiene una propiedad name es: hasOwnProperty
imprimir("Respuesta es : " + ourDog.hasOwnProperty("name"))

imprimir("***********Objetos Anidados**********************")

const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  imprimir(ourStorage.cabinet["top drawer"].folder2)    
  imprimir(ourStorage.desk.drawer)


imprimir("************* Ejercicio *************************")
/* Accede al objeto myStorage y asigna el contenido de la propiedad 
glove box a la variable gloveBoxContents. 
Utiliza la notación de puntos para todas las propiedades 
cuando sea posible, de lo contrario utiliza la notación de corchetes.
*/

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];
  imprimir(gloveBoxContents)


  imprimir("**************** Arreglos Anidados *****************")

  const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  imprimir(ourPets[0].names[1]);
  imprimir(ourPets[1].names[0]);


  //************************************************** */

  // Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if(prop !== "tracks" && value !== " "){
    records[id][prop] = value;
  }
  else if (prop == tracks && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = value;
  }else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }

  return records;
}

imprimir(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

//************otro metodo */
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

//*********************************************************************** */

imprimir("********************Ejercicio while con array *******************")
// Descendente *******************
const myArray = [];
let i = 5;

while(i>=0){
  myArray.push(i);
  i--;
}
imprimir(myArray)

// Ascendente ********************
const ourArray = [];
let j = 0;

while (j <= 5) {
  ourArray.push(j);
  j++;
}
imprimir(ourArray)

// Solo pares Ascendente ********************
const ourArray1 = [];
let k = 0;

while (k <= 50) {
  ourArray1.push(k);
  k+=2;
}
imprimir(ourArray1)

imprimir("********************Ejercicio For con array *******************")
//Usando el Bucle For 
const myArrayy = [];

for(let l = 1;l <= 5 ; l++){
  myArrayy.push(l)
}

imprimir(myArrayy)

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

imprimir("*************** Arrays anidados usando FOR ****************")
//Bucles for Array anidados

const array = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
   
  }
}

imprimir("*************** Arrays anidados usando FOR parte 2 ****************")
//************************************************************************ */

function multiplyAll(arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

imprimir(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

imprimir("*************** Arrays anidados usando DO WHILE ****************")


const ejercicio = [];
let contador = 10;

do {
  ejercicio.push(contador)
  contador++;
} while (contador <= 10);

imprimir(ejercicio)


imprimir("////////// Ejemplo de Recursividad ///////////")
function cuentaRegresiva(num){
  if (num === 0) {
    return;
  }
  imprimir(num)
  return cuentaRegresiva(num-1)
}

cuentaRegresiva(10)


imprimir("////////// Ejemplo de Recursividad Par /Impar ///////////")

function parImpar(num){
  if(num === 0) return "Par"
  else if (num === 1) return " Impar "
  else return parImpar(num - 2)
  
}
imprimir(parImpar(50))


//************************************************** */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
  for(let i = 0; i<contacts.lenght;i++){
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]      
      }else{
        return "No such contact"
      }
    }
  }
  return "No such property"
}

imprimir(lookUpProfile("Akira", "likes"))



//***************************************************/

const numeroaleatorio = Math.random() * 20
imprimir(numeroaleatorio)

const numeroredondeado = Math.floor(numeroaleatorio)

//const numeroaleatorio = 15.65;
//const numeroredondeado = Math.floor(numeroaleatorio)
imprimir(numeroredondeado) 
 
//***************************************************** */

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

//******************************************************/


function countdown(n){

  if(n < 1) {
    return [];
  } else{
    const array = countdown(n-1);
    array.unshift(n)
    return array;
  }

}
imprimir(countdown(10))
imprimir(countdown(5))

//Ingresar datos de forma creciente mediante una funcion

const array2 = []

function ingresardatos(n){
  for (let i = 0; i <= n; i++) {
    array2.push(i);
  }
}

ingresardatos(20)
imprimir(array2)

// Forma decreciente
const array3 = []

function ingresardates(num){
  for (let i = 0; i < num; i++) {
    array3.unshift(i)
  }
}
ingresardates(10)
imprimir(array3)