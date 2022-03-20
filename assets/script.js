var cityButtonsEl = document.querySelector("#city-buttons");
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var btnSearchCity = document.querySelector("#btn-search-city");
// //card elements 
var col = document.createElement('div');
var card = document.createElement('div');
var cardBody = document.createElement('div');
var cardTitle = document.createElement('h5');
var weatherIcon = document.createElement('img');
var tempEl = document.createElement('p');
var windEl = document.createElement('p');
var humidityEl = document.createElement('p');
// append card elements 
col.append(card);
card.append(cardBody);
cardBody.append(cardTitle, weatherIcon, tempEl, windEl, humidityEl);

col.setAttribute('class', 'col-md');
col.classList.add('five-day-forecast');
card.setAttribute('class', 'card big-primary h-100 text-white');
cardBody.setAttribute('class', 'card-body p-2');
cardTitle.setAttribute('class', 'card-title');
tempEl.setAttribute('card', 'card-text');
windEl.setAttribute('card', 'card-text');
humidityEl.setAttribute('card', 'card-text');

var apiKey = "a7bb95be4838dc9c0a3fe02492f27fb9";

// btnSearchCity.onclick = function (event) {
//     console.log("Hello World!!!");
//     event.preventDefault();

//     formSubmitHandler();
// };

var formSubmitHandler = function (event) {
    event.preventDefault();
    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCoordinates(city);

    } else {
        alert("Please enter a valid city name");
    }
};

// using AJAX like jquery (asynchronous JS) to pull data and display
function getCoordinates(city) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            console.log("First Data Call: ", data);
            getCoordinates.json = json;
            getWeather(json.coord);
            getForecast(json.coord);
        },
        error: function (err) {
            console.log(err);
        }
    });
};

function getWeather(coord) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + coord.lat + "&lon=" + coord.lon + "&units=imperial&appid=" + apiKey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            console.log("Second Data Call: ", data);
            getWeather.json = json;
            displayWeather(json);
        },
        error: function (err) {
            console.log(err);
        }
    });
};

function getForecast(coord) {
    console.log(coord)
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + coord.lat + "&lon=" + coord.lon + "&units=imperial&appid=" + apiKey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            getForecast.json = json;
        },
        error: function (err) {
            console.log(err);
        }
    });
};
function displayWeather(json) {
    var displayCity = citySearchTerm.value.trim();
    displayCity.textContent = "Displaying Current Weather For: " + displayCity;
};

function showRecentSearches(city) {
    var displayCity = citySearchTerm.value.trim();
    var btnSearchCity = document.createElement("button");
    btnSearchCity.classList = "button is-fullwidth is-info";
    btnSearchCity.textContent = displayCity;

    recentSearchEl.appendChild();

};
//execute upon form submission browser event
//getting current date and weather icon
function showCurrentWeather(currentWeather, timezone) {
    console.log(currentWeather);
    console.log(currentWeather.weather[0].icon);
    var iconcode = currentWeather.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconUrl);
}
var moment = require('moment');
//load moment.js library
let now = moment();
console.log(now.format());

// set variables for the next five day forecast (date)
var currentDate = moment();
var displayCurrentDate = document.getElementById('current-date');
displayCurrentDate.innerHTML = currentDate.format('MM-DD-YYYY');

var displayDay1 = document.getElementById('day-1-date');
displayDay1.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');
var displayDay2 = document.getElementById('day-2-date');
displayDay2.innerHTML = currentDate.add(2, 'days').format('MM-DD-YYYY');
var displayDay3 = document.getElementById('day-3-date');
displayDay3.innerHTML = currentDate.add(3, 'days').format('MM-DD-YYYY');
var displayDay4 = document.getElementById('day-4-date');
displayDay4.innerHTML = currentDate.add(4, 'days').format('MM-DD-YYYY');
var displayDay5 = document.getElementById('day-5-date');
displayDay5.innerHTML = currentDate.add(5, 'days').format('MM-DD-YYYY');
console.log(days);
// get temp, humidity, wind speed, and uvi for next five days

//uv index should show oclor code
// 0-2 is low danger = green
// 3-5 is moderate = yellow
// 6-7 is high = orange
// 8-10 is very high = red
// higher than 10 is extreme = purple





//runs formsubmithandler when someone click search or press enter 
cityInputEl.addEventListener("submit", formSubmitHandler);