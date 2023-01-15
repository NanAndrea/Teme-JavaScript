//Sa se calculeze min si max dintre trei numere.

const a = 30;
const b = 19;
const c = 31;
let max, min ;


//min
if (a > b && c > b) {
    min = b;
    console.log("Minimul este: ", min);

} else if (b > c && a > c) {
   min = c;
    console.log("Minimul este: ", min);
} else if (c > a && b > a) {
    min = a;
    console.log("Minimul este: ", min);
}


//max
if (a < b && c < b) {
    max = b;
    console.log("Maximul este: ", max);

} else if (b < c && a < c) {
   max = c;
    console.log("Maximul este: ", max);
} else if (c < a && b < a) {
    max = a;
    console.log("Maximul este: ", max);
}




