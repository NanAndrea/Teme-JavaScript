//sa se calculeze, folosind instructiunea while, suma primelor n numere pare numere pare



let n = 6;
let suma = 0;
let par = 2;

while( n > 0) {
   
    suma = suma + par;
    par = par + 2;
    n = n - 1;
 
}
console.log("Suma numerelor pare este: ", suma);



