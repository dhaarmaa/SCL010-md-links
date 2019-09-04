//recursividad
//en programación es hacer ua f(x) que autollame
//el factorial nace porla cantidas de permutaciones o base que hay
/*caso base cuando hay un archivo
//caso recursiv cuando hay un directorio
// hay tres elementos importantes
//nombre- numero-retorno
//retorna una promesa que retonr?
// que tipo de solucion: es un array de objetos 
//mdLink recibe la ruta o el archivo que quiere procesar y las opciones, retorn aun prmesa con un arreglo de objetos 
que otras cosas se puede hacer con recursividad?:
bubble sort no bueno
quick sort (LR pointers medio
    merge sorto bueno*/
    //5! = 5*4*3*2*1
//5! = 5*4!
const fact = (num)=>{
    if(num <= 1) return 1; // Caso base
    return num * fact(num-1); // Caso recursivo
}
​
console.log(fact(5));
​
const miArregloPorOrdenar = [69, 7, 22, 3, 7, -4, 227, 0, 5.6, 15800, 3.14, -104431, 8, 43, 42];
​
const mergeSort = (arr) => {
    if(arr.length <= 1){
    return arr;
    }

    const firstHalf = arr.slice(0, Math.floor(arr.length/2));
    const secondHalf = arr.slice(Math.floor(arr.length/2));
    const firstHalfOrdered = mergeSort(firstHalf);
    const secondHalfOrdered = mergeSort(secondHalf);
    const orderedArray = [];
    for(;firstHalfOrdered.length != 0 ||
        secondHalfOrdered.length != 0;){
    if(firstHalfOrdered.length == 0){
        orderedArray.push(secondHalfOrdered.splice(0,1)[0]);
        continue;
    }
    if(secondHalfOrdered.length == 0){
        orderedArray.push(firstHalfOrdered.splice(0,1)[0]);
        continue;
    }
    if(firstHalfOrdered[0] > secondHalfOrdered[0]){
        orderedArray.push(secondHalfOrdered.splice(0,1)[0]);
    }else{
        orderedArray.push(firstHalfOrdered.splice(0,1)[0]);
    }
    }
    return orderedArray;
}
​
console.log(JSON.stringify(mergeSort(miArregloPorOrdenar)));

