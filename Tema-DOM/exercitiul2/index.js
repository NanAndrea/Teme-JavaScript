const displayBox1 = document.querySelector("#display-box1");
const displayBox2 = document.querySelector("#display-box2");
const addButton = document.querySelector(".add");
const substractButton = document.querySelector(".substract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");

const result = document.querySelector(".result");

const errorMessage = document.querySelector(".error-message");



function checkInp(value){
    const inputRegex = /^[0-9]+$/i;
    if (value.length === 0) {
        errorMessage.innerHTML= "Trebuie introdus cel putin o cifra!";
    } else if (!inputRegex.test(value)) {
        errorMessage.innerHTML = "Trebuie introdus doar cifre!";
    } else {
        errorMessage.innerHTML = "";
    } return errorMessage.innerHTML === "";
}
   


displayBox1.addEventListener("change", function(event) {
    const value = event.target.value;
    checkInp(value);
});



displayBox2.addEventListener("change", function(event) {
    const value = event.target.value;
    checkInp(value);
}); 




addButton.addEventListener("click", function(){
    let nr1 = Number(displayBox1.value);
    let nr2 = Number(displayBox2.value);
    let adunare = nr1 + nr2;
    //console.log(adunare);
    result.innerHTML = `<p>Rezultatul operatiei este ${adunare}</p>`

});

substractButton.addEventListener("click", function(){
    let nr1 = Number(displayBox1.value);
    let nr2 = Number(displayBox2.value);
    let scadere = nr1 - nr2;
    //console.log(scadere);
    result.innerHTML = `<p>Rezultatul operatiei este ${scadere}</p>`

});

multiplyButton.addEventListener("click", function(){
    let nr1 = Number(displayBox1.value);
    let nr2 = Number(displayBox2.value);
    let inmultire = nr1 * nr2;
    //console.log(inmultire);
    result.innerHTML = `<p>Rezultatul operatiei este ${inmultire}</p>`

});

divideButton.addEventListener("click", function(){
    let nr1 = Number(displayBox1.value);
    let nr2 = Number(displayBox2.value);
    let impartire = nr1 / nr2;
    //console.log(impartire);
    result.innerHTML = `<p>Rezultatul operatiei este ${impartire}</p>`

});


