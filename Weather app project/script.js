

const weatherForm = document.querySelector(".weatherForm");
// querySelector return thr first element in the class
const cityInput =document.querySelector(".cityInput");

const card = document.querySelector(".card");
const apiKey = "845e1d242307ee3a85a8339ffc074a78";

weatherForm.addEventListener("submit",event=>{

    // forms have a default behaviur where they refresh the page we need to prevent that
    event.preventDefault();
    const city = cityInput.value;

    if(city){

    }else{
        displayError("Please eneter a city");
    }
});

async function getweatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmojis(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
     
}``