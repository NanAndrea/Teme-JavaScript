//sa se calculeze, folosind instructiunea while, suma primelor n numere pare.

// n = 4; 
//suma: 2+4+6+8= 20;


const limita = 8;
let suma = 0;
let par = 0;

while( par < limita) {
   
    par = par + 2;
    suma = suma + par;
 
}
console.log("Suma primelor 4 numere pare este: ", suma);



