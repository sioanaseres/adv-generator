"use strict"

const dice = document.querySelector(".Dice");
const adviceTitle = document.querySelector(".Title");
const advice = document.querySelector(".Advice");
const card = document.querySelector(".Card");

const getAdvice = async function() {
    try{
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
         adviceTitle.textContent = `Advice # ${data.slip.id}`;
        advice.textContent = data.slip.advice;
        return data;
      
        
    } catch (err){
        console.error(err)
    }
    
}


dice.addEventListener("click" , function(){
getAdvice();

})

