function imprimir(arg1){
    console.log(arg1)
}

const s = [5, 6, 7];
//s = [1, 2, 3];
s[2] = 45;
console.log(s);

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
Object.freeze(obj);
//sirve para no alterar el valor

imprimir(obj)

//Funciones Flechas******************

let imp = () => "Dylan Yhadiel"
const myFunc = () => "value"

const mmyFunc = function() {
    const myVar = "value";
    return myVar;
}

const doubler = (item) => item * 2;
doubler(4);

//***************************************************** */
const myConcat = (arr1,arr2)=> arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]));
//***************************************************** */

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

//***************************************************** */
//Parametro Rest = ...args
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

//****************************************************** */


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  
const {today , tomorrow} = HIGH_TEMPERATURES
  
imprimir(HIGH_TEMPERATURES)

//******************************************************* */
imprimir("Ejercicioooooooooo")
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
imprimir(a,b)
imprimir(arr)