/*let n = 5;
let variable = 2;
for (let j = 1; j <= n; j++) {
  for(let i = 1; i <= 2; i=i+2){
    console.log(i);
  }
  n++;
}*/

/*ejerciciio 2
15

1 2 4 8 
2 3 8 12 16
3 4 16 20 24 28*/

let n = 15;
let contador = 4;
let variable = 1;
let variable2 = 1;
let contador2 = 1;

for (let j = 1; j <= n; j++) {
  if(contador2 <= contador){
        console.log(variable);
        variable = variable * 2;
        contador2++;
  }
  else{
    contador++;
    variable = variable2 + 1;
    variable2=1;
    contador2 = 1;
  }
}


/*
let meta = 9500;
let ahorro = 5;
let semanas = 1;
while(ahorro <= meta){
    ahorro = ahorro * 2;
    semanas++;
}
console.log("se necesitan " + semanas + " semanas para alcanzar la meta de ahorro de " + meta);
*/
/*

let notas:number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let acumulador = 0;
for (let i = 0; i < notas.length; i++) {
  acumulador = acumulador + notas[i];
}

console.log("el promedio de las notas es: " + acumulador / notas.length);
*//*
let par:number = 0;
let impar:number = 0;

let numeros:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        par ++;}
    else{
        impar++;
    }
}
console.log("la cantidad de numeros pares es: " + par);
console.log("la cantidad de numeros impares es: " + impar);
*/






//j++   ..... j = j + 1
/*
let n = 5;
for (let j = 1; j <= n; j++) {
    console.log("j:"+ j); 
    console.log("n: " + n); 
    console.log("1"); 
}

let n = 5;
let j = 1;
while(j<=n){
    console.log("j:"+ j); 
    console.log("n: " + n); 
    console.log("1"); 
    j++
}*/

/*

let arr:number[] = [0, 1, 2, -3, 4, -5];
let arr2:number[]= [];

for(let i = 0;i< arr.length;i++){
    for(let j = 0;j< arr2.length;j++){
        if(arr[i] == arr2[j]){
            break;
        }
    
    }
}

console.log(arr2);



*/











