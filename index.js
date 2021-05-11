/*
    Calculator
    Keypad.
    -> adding event listeners to Keypad so that whenever a person clicks on the buttons 
    the details should be displayed. on the calculator
*/
const KEYPAD=document.getElementsByClassName("cKeypad");
const CDISP=document.getElementById("c-display");
const COP=document.getElementsByClassName("Coperator");
for (let i=0;i<KEYPAD.length;i++){
        KEYPAD[i].addEventListener('click',function(){
            CDISP.innerHTML +=KEYPAD[i].value;

         });
}


/*
Adding event listeners to the operator keyboard.
*/

for(let i=0;i<COP.length;i++){
        COP[i].addEventListener('click',function(){
            CDISP.innerHTML+=COP[i].value;
        });
}


/*
Adding event listener to the '=' button.
*/

const COMPUTE=document.getElementById("compute");

COMPUTE.addEventListener('click',function(){
    console.log(CDISP.innerText);
});


/*
Adding event listeners to the clear and backspace buttons.
*/

const CLR=document.getElementById('clr');
const BSPACE=document.getElementById('bspace');
CLR.addEventListener('click',function(){
    CDISP.innerHTML="";
});

BSPACE.addEventListener('click',function(){
    const string=CDISP.innerText;
    let resArr=string.split("");
    resArr.pop();
    console.log(resArr);
    let rString=resArr.join("");
    CDISP.innerHTML=rString;
}); 