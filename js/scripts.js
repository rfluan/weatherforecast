// Variáveis e seleção de elementos
const apiKey = "ea0e322b3953e5e7f95acdc440ee2c56";
const apiContryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

//Funções
const showWeatherData = (city) => {
    console.log(city)
}

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

        const city = cityInput.value;

    showWeatherData(city);
});