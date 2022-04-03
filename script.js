"use strict"

const dice = document.querySelector(".Dice");
const adviceTitle = document.querySelector(".Title");
const advice = document.querySelector(".Advice");
const card = document.querySelector(".Card");

const getAdvice = async function() {
    try{
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data.slip);
        card.innerHTML = "";
        const html = `
        <h1 class="Title">Advice # ${data.slip.id}</h1>
        <p class="Advice">"${data.slip.advice}"</p>
        <img srcset="./images/pattern-divider-mobile.svg 480w,
        ./images/pattern-divider-desktop.svg 800w"
          sizes="(max-width: 600px) 480px, 800px"
          src="./images/pattern-divider-mobile.svg"
          alt="Pattern divider" class="Divider">
          <div class="Dice">
            <img src="./images/icon-dice.svg" alt="Image with a dice" >`

 
        card.insertAdjacentHTML("afterbegin", html);
 

    } catch (err){
        console.error(err)
    }
    
}

dice.addEventListener("click" , function(){
   
getAdvice();

})

