//Funcion 1
function functionName() { //Esta es una funcion
    console.log("Hello World");
}

functionName();//Llamamos a la funcion

console.log("**************************************")

//Funcion con argumentos

function functionWithArgsSuma(arg1,arg2){
    const resultado = arg1+arg2
    console.log(resultado)
}

functionWithArgsSuma(1,2);
functionWithArgsSuma(7,9);

function timesFive(arg) {
    return arg * 5; 
}
console.log(timesFive(5));

console.log("**************************************")

//La Variable local se sobreescribe de la variable global

const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater"
    return outerWear;
}
console.log(myOutfit());

console.log("**************************************")

/*El método JSON.stringify() convierte un objeto o valor de JavaScript 
en una cadena de texto JSON*/
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

console.log("**************************************")

function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item)
    const removido = arr.shift();
    return removido;
    // Cambia solo el código encima de esta línea
}
  // Configuración
  const testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  console.log("**************************************")
  
  /*
  Nota: En JavaScript, puedes determinar el tipo de una variable 
  o un valor con el operador typeof, de la siguiente manera:

    typeof 3 = es un numero 
    typeof '3' = es un string
                                                                */ 

    function compareEquality(a, b) {
        if (a === b) { // Comparacion de igualdad estricta ===
          return "Equal";
        }
        return "Not Equal";
      }
      
    console.log(compareEquality(10, "10"));  

  console.log("**************************************")
  function testSize(num) {
    
    if(num < 5) return "Tiny"
    else if (num < 10) return "Small"
    else if (num < 15) return "Medium"
    else if (num < 20) return "Large"
    else if (num >= 20) return "Huge"
    else return "Change Me";
  }
  console.log(testSize(7));

  console.log("**************************************")

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
      
    if(strokes == 1) return names[0]
    else if(strokes <= par - 2 ) return names[1]
    else if(strokes == par - 1 ) return names[2]
    else if(strokes == par) return names[3]
    else if(strokes == par + 1) return names[4]
    else if(strokes == par + 2) return names[5]
    else if(strokes >= par + 3) return names[6] 
    else return "Change Me";
  }

  console.log(golfScore(4, 1));
  console.log(golfScore(4, 2));
  console.log(golfScore(5, 2));
  console.log(golfScore(4, 3));
  console.log(golfScore(4, 4));
  console.log(golfScore(1, 1));
  console.log(golfScore(5, 5));
  console.log(golfScore(4, 5));
  console.log(golfScore(4, 6));
  console.log(golfScore(4, 7));
  console.log(golfScore(5, 9));

  console.log("**************************************")

  function caseInSwitch(val) {
    let answer = "";
    
    switch (val) {
      case 1:
        if (val === 1) answer = "alpha"
        break;
      case 2:
        if (val === 2) answer = "beta" 
        break;
      case 3:
        if (val === 3) answer = "gamma"
        break;
      case 4:
        if (val === 4) answer = "delta"    
        break;
    }


    return answer;
  }
  
  console.log(caseInSwitch(2));


  console.log("**************************************")
  
  let count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
  	//alert("2 3 4 5 6");
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return String(count) + " Hold";
  }
  else {
  	return String(count) + " Bet";
  }
  
}
function imprimir(val){
  console.log(val)
}

imprimir(cc(2)); 
imprimir(cc(3)); 
imprimir(cc(7)); 
imprimir(cc('K')); 
imprimir(cc('A'));

  console.log("**************************************")

  
  console.log("**************************************")



  console.log("**************************************")