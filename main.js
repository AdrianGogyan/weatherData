import "./styles/main.scss";
import { constructApi, fetchConstructedApi } from "./fetchingApi.js";
// import bPic from "/assets/weather.jpg";

const weatherApi_key = "f64be6df2ee44509b3f50906241707";
const weatherApi_location = "Mannheim";
const weatherApi_lang = "de";

const maincity = document.querySelector(".main-city");
const maintemp = document.querySelector(".main-temp");
const maincondition = document.querySelector(".main-condition");
const mainstuff = document.querySelector(".main-stuff");
const appBody = document.getElementById("app");

const hourContainerHeader = document.querySelector(".hourContainer-header");
const imageOfCondition = document.querySelector(".hourContainer-hours__now__icon");
const hourContainerHoursNowTemp = document.querySelector(".hourContainer-hours__now__temp");

// document.addEventListener("DOMContentLoaded", () => {
//     appBody.style.background = `no-repeat center url(${bPic})`;
// });
const weatherapi = constructApi(weatherApi_key,weatherApi_lang, weatherApi_location);

document.addEventListener("DOMContentLoaded", async ()=> {
    try{
        const data = await fetchConstructedApi(weatherapi);
        console.log(data);
        hourContainerHeader.innerText =`Heute ist ` + data.current.condition.text + `. Wind: ` + data.current.wind_kph +`km/h.`;
        imageOfCondition.src = data.current.condition.icon;
        maincity.innerText = data.location.name;
        maintemp.innerText = data.current.temp_c;
        hourContainerHoursNowTemp.innerText = data.current.temp_c; 
        maincondition.innerText = data.current.condition.text;
        mainstuff.innerText = data.location.lat + " " + data.location.lon;
    } catch(error) {
        console.error(error);
    }

});