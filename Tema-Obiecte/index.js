// 1. Creați un obiect care descrie să descrie o masina. Obiectul va avea următoarele proprietăți:  brand , model,  year, price, km bord



const car = {
    brand: "Mazda",
    model: "CX-5",
    year: 2021,
    price: 20000,
    "km-bord": 1000
}

console.log(car);

// Modificați numărul de km cu o valoare mai mica

car["km-bord"] = 800 ;
console.log(car["km-bord"]);

//Adaugati o proprietate nouă, description, cu o valoare corespunzătoare

car.description = "Fiabil";
console.log(car);

//Stergeti proprietatea description

delete car.description;
console.log(car);


//CERINTE OPTIONALE


function CreateOrDeletePropr(key, value) {
    if(value !== undefined) {
        car[key] = value
    } else {
        delete car[key]
    }
}

CreateOrDeletePropr("description", "Fiabil");
console.log("Descriere: ", car.description);
console.log(car);

CreateOrDeletePropr("description", undefined);
console.log("Descriere: ", car.description);
console.log(car);

CreateOrDeletePropr("description");
console.log("Descriere: ", car.description);
console.log(car);





/* 2. Faceti o functie tuneCar, care ia ca parametru o masina. Funcția va returna un obiect nou, fără să îl modifice pe cel trimis ca parametru.
 Obiectul returnat de funcția va avea km injumatatiti, iar prețul cu 50% mai mare. */


function TuneCar(sursa) {
    const dest = {};
    for (const key in sursa)
        {
        const valoare = sursa[key];
        dest [key] = valoare;
        dest["km-bord"] = sursa["km-bord"] / 2;
        dest.price = sursa.price + (sursa.price / 2);
    }
    return dest;
}

const car2 = TuneCar(car);


console.log({car, car2});




/* 3. Folosind metodele de pe obiectul Date, afișează data curentă în următorul format: HH:MM:SS
Formatul de mai sus descrie practic ce va vedea utilizatorul, ex: 17:03:30 */


const time = new Date();
const hours = time.getHours() ;   
const minutes = time.getMinutes()  ;   
const seconds = time.getSeconds() ; 

function numberWithZero(number){
    if(number <=9 ){
      return "0" + number;
    }
    return number;
  }


    console.log("Este ora: ", hours + ":" + numberWithZero(minutes) + ":" + numberWithZero(seconds));



// Afișați ziua curentă în formatul MMMM DD YYYY, HH:MM:SS


const day = new Date();
const curr_day = day.getDate();
const curr_month = day.getMonth() + 1; // luna ianuarie sa fie luna 1 nu 0
const curr_year = day.getFullYear();
const curr_hours = day.getHours();
const curr_minutes = day.getMinutes();
const curr_seconds = day.getSeconds();




    console.log(numberWithZero(curr_month) + "." + curr_day + "." + curr_year + ", " + curr_hours + ":" + numberWithZero (curr_minutes )+ ":" + numberWithZero (curr_seconds));




 
// Calculati și afișați cat timp a trecut de la o data până în data de azi, formatul in care il afisati e la latitudinea voastra.
//cat timp a trecut de la 01.01.2023 - 24.01.2023

const today = new Date();
const firstDate = new Date(2023, 0, 1 );

const today_ms = today.getTime();
const firstDate_ms = firstDate.getTime();

const diff_ms = firstDate_ms - today_ms; // diferenta in milisecunde
console.log("Acum " + Math.abs(diff_ms) + " milisecunde");

const diff_s = Math.round(diff_ms / 1000 )// diferenta in secunde
console.log("Acum " + Math.abs(diff_s) + " secunde");

const diff_m = Math.round(diff_ms / 1000 / 60); // diferenta in minute
console.log("Acum " + Math.abs(diff_m) + " minute");

const diff_h = (Math.round(diff_ms / 1000 / 60 / 60)); // diferenta in ore
console.log("Acum " + Math.abs(diff_h) + " ore");

const diff_d = (Math.round(diff_ms / 1000 / 60 / 60 / 24)); // diferenta in zile
console.log("Acum " + Math.abs(diff_d) + " zile");



