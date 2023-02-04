let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

//  Verifica daca numele “Daniel” se afla pe lista

let badKid = badKids.includes("Daniel");
console.log(badKid);

//  Dacă numele “Daniel” se afla pe lista, modifica string-ul, astfel incat in locul lui “Daniel” să fie “Gigel”

const badKids2 = badKids.replace("Daniel", "Gigel");
console.log(badKids2);

const testGrades = "9.80/6.85/9.10/7.80/8.20";

//Sa se calculeze media aritmetica a notelor

const array = testGrades.split("/").map(Number);
console.log(array);


const average = (array) => {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum/ array.length;
}
       
console.log("Media aritmetica a notelor este:" ,average(array));

//Fie urmatorul obiect:
const props = {
    nume: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
}

//Destructureaza din obiect urmatoarele proprietati: name, price, currency

const {nume, price, currency} = props;

console.log(`Produsul ${nume} are pretul ${price} ${currency}.`);

//Fie urmatorul obiect:
const additionalProps = {
    isAvailable: true
};

//Creeaza un obiect nou, care sa contina proprietatile obiectelor props si aditionalProps

const newObject = {...props, ...additionalProps};
console.log(newObject);

/*
Sa se scrie un regex pentru a valida daca un string este un CNP valid. Un CNP este valid daca respecta urmatoarele reguli:

Formatul este SAALLZZJJNNNC, unde 
S reprezinta o valoare intre 1 si 8
AA reprezinta o valoare intre 00 si 99
LL reprezinta o luna valida, valoare intre 01 si 12
ZZ reprezinta ultimele dou cifre ale anului, valoare intre 00 si 99
JJ reprezinta codul judetului, valoare intre 01 si 52
NNN reprezinta orice numar intre 001 si 999
C reprezinta orice cifra intre 0 si 9


*/

const cnpRegex = /^[1-8]([0-9][0-9])(0[1-9]|1[0-2])([0-9]{2})(0[1-9]|[1-4][0-9]|5[0-2])(00[1-9]|0[1-9][0-9]|[1-9][0-9][0-9])[0-9]$/gm

const testCnp = "5050707406725";
    if(cnpRegex.test(testCnp)) {
        console.log(`Cnp-ul ${testCnp} este un cnp valid`)
    } else {
        console.log(`Cnp-ul ${testCnp} este invalid`)
    }


/* Sa se scrie o functie cu un numar nedeterminat de parametri. 
Primul parametru va reprezenta o descriere a operatiei(un string), care va fi afisat, iar restul de parametrii vor fi numere reale.
 Sa se inmulteasca aceste numere si sa se afiseze descrierea */

 function multiply (operatie, ...args) {
    let total = 1;
    for(let i in args) {
        total = total * args[i];
    }
            
    return console.log(operatie + ":" , total);
 }

 (multiply("inmultire ", 1, 2, 3));


 //Ex 2
 const values = [-1, 100, -500, 2, 3, 4, 5];

 //Folosind spread operator, sa se afiseze cea mai mica valoare din array

 const min = [...values].reduce(function(acc, curr){
                    if(acc > curr) {
                       acc = curr;
                    } 
                    return acc;
 });
 console.log(min);
