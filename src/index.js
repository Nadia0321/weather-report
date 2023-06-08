'use strict';

// const temperature = 1  // for now CHANGE LATER
// const state = {
let tempIncreaseButton = null;
let tempDecreaseButton = null;
let getRealTimeTemp = null;
let tempValue = null;
let gardenContent = null;
let temperature = 79;
let headerCity = null;
let cityNameUserInput = null;
let defaultCityName = 'Princeton'
let skyTemplate = null
let skyOption = null
let skyInput = null
// const optionArray = null
// }

const selectTag = () => {
    tempIncreaseButton = document.getElementById('increaseTempControl')
    tempDecreaseButton = document.getElementById('decreaseTempControl')
    tempValue = document.getElementById('tempValue');
    gardenContent = document.getElementById('landscape');
    headerCity = document.getElementById('headerCityName');
    cityNameUserInput = document.getElementById('cityNameInput');
    skyInput = document.getElementById('skySelect')
    skyTemplate = document.getElementById('sky')
}
const createOptions = () => {
    const optionArray = ['Sunny', 'Cloudy', 'Snowy', 'Rainy']
    for (let i = 0; i < optionArray.length; ++i) {
        skyOption = document.createElement('option');
        skyOption.textContent = optionArray[i]
        skyInput.appendChild(skyOption)
    }
}

const registerClickEvent = () => {
    tempIncreaseButton.addEventListener('click', handleIncreaseTempClick)
    tempDecreaseButton.addEventListener('click', handleDecreaseTempClick)

}

const registerSkyEvent = () => {
    skyInput.addEventListener('change', skyInputHandler)
}

const registerInputEvent = () => {
    cityNameUserInput.addEventListener('input', headerCityFunction)
}
const handleIncreaseTempClick = () => {
    ++temperature;
    showTemp();
}

const handleDecreaseTempClick = () => {
    --temperature
    showTemp();
}

const showTemp = () => {
    tempValue.textContent = temperature;
    updateTempColor()
}

const headerCityFunction = () => {
    headerCity.textContent = cityNameUserInput.value; //defaultCityName;
}

const skyInputHandler = () => {
    const input = skyInput.value
    // con
    skyTemplate.textContent = sky[input]
}


const updateTempColor = () => {
    if (temperature >= 80) {
        tempValue.classList.add('red');
        tempValue.classList.remove('orange', 'yellow', 'yellow-green', 'teal');
        gardenContent.textContent = garden.summer;
    } else if (temperature >= 70 && temperature < 80) {
        tempValue.classList.add('orange');
        tempValue.classList.remove('red', 'yellow', 'yellow-green', 'teal')
        gardenContent.textContent = garden.spring;
    } else if (temperature >= 60 && temperature < 70) {
        tempValue.classList.add('yellow');
        tempValue.classList.remove('orange', 'red', 'yellow-green', 'teal')
        gardenContent.textContent = garden.fall;
    } else if (temperature >= 50 && temperature < 60) {
        tempValue.classList.add('yellow-green');
        tempValue.classList.remove('orange', 'yellow', 'red', 'teal')
        gardenContent.textContent = garden.winter;
    } else {
        tempValue.classList.add('teal')
        tempValue.classList.remove('orange', 'yellow-green', 'red', 'yellow')
        gardenContent.textContent = garden.winter;
    }
}

const sky = {
    Sunny: `☀️☀️☀️☀️☀️☀️☀️☀️`,
    Cloudy: `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`,
    Rainy: `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`,
    Snowy: `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`
}

const garden = {
    summer: '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂',
    spring: '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
    fall: '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
    winter: '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
}
const onLoad = () => {
    selectTag()
    showTemp()
    registerClickEvent()
    registerInputEvent()
    cityNameUserInput.value = defaultCityName
    headerCityFunction()
    createOptions()
    skyTemplate.textContent = sky.Sunny
    registerSkyEvent()
    console.log('hi')
}
// onLoad()
document.addEventListener('DOMContentLoaded', onLoad)
