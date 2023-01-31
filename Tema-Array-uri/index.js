const products = [
    {
      id: 67,
      name: "Firestrata",
      price: 26,
      brewery: "Hop Hooligans",
    },
    {
      id: 212,
      name: "Punch the Clock",
      price: 21,
      brewery: "Bereta",
    },
    {
      id: 111,
      name: "The Guardian",
      price: 21,
      brewery: "Noah",
    },
    {
      id: 345,
      name: "Pudge",
      price: 30,
      brewery: "Hop Hooligans",
    },
  ];

  
 // Folosind metode care nu modifica array-ul, rezolvați următoarele probleme:
 //Sa se afiseze produsul cu numele “The Guardian”

 

const Name = products.find(product => product.name === "The Guardian");
console.log(Name);

//Folosind filter, returnati un array care contine doar produsele de la “Hop Hooligans”

const returnArray = products.filter(product => product.brewery === "Hop Hooligans");
console.log(returnArray);

//Folosind filter, returnati un array care sa nu contina produsul cu id-ul 111

const returnArray2 = products.filter(product => product.id !== 111);
console.log(returnArray2);


//Calculati suma prețurilor din array

const sumaPreturi = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
console.log("Suma preturilor este:", sumaPreturi);

//Fara sa modificati array-ul initial, returnati un array nou, în care fiecare element va avea o proprietate nouă numita “isFavorite”, cu valoarea false. 

function copyProducts (product) {
  const newProducts = {... product};
  newProducts.isFavorite = false;
  return newProducts;
}

const NewProducts = products.map(copyProducts);
console.log("Noul array este :", NewProducts);


/* Probleme extra:
1. Calculati suma fiecărui element pozitiv dintr-un array. Dacă nu exista nici un număr pozitiv sau array-ul este gol, suma va fi 0. TIP: Filter + reduce 
*/

const input = [1, -4, 12, 0, -3, 29, -150];

function sum(rezultat, n) {
  return rezultat + n;
}

const numerePare = input.filter(n => n > 0);

console.log("Suma numerelor pozitive este: ", numerePare.reduce(sum,0));


//2. Folosind map,filter si reduce, calculati media tuturor notelor pentru fiecare student, apoi filtrati studenții care au media mai mare de 90

const students = [
  {name: 'Ionut', scores: [90, 85, 92]},
  {name: 'Gigel', scores: [75, 80, 85]},
  {name: 'Marius', scores: [90, 95, 85]},
  {name: 'David', scores: [100, 100, 100]},
];

 const copyStudent = students.map( student => {
  const sumaNote = student.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
 return {
  name: student.name,
  average: sumaNote / student.scores.length
}
});

console.log(copyStudent);
 
const mediiBune = copyStudent.filter(student => student.average > 90);
console.log(mediiBune);













