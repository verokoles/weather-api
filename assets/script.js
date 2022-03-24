var cityButtonsEl = document.querySelector("#city-buttons");
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city");
var btnSearchCity = document.querySelector("#search-btn");
var recentSearchEl = document.querySelector("#searched");

var tempEl = document.querySelector("#display-temp");
var humEl = document.querySelector("#display-hum");
var windEl = document.querySelector("#display-wind");
var uviEl = document.querySelector("#display-uvi");


// //card elements 
var col = document.createElement('div');
var card = document.createElement('div');
var cardBody = document.createElement('div');
var cardTitle = document.createElement('h5');
var weatherIcon = document.createElement('img');


var searchIdCounter = 0;

var apiKey = "a7bb95be4838dc9c0a3fe02492f27fb9";

btnSearchCity.onclick = function (event) {
    console.log("Hello World!!!");
    event.preventDefault();

    formSubmitHandler();
};

var formSubmitHandler = function () {
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
            console.log("First Data Call: ", json);
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
            console.log("Second Data Call: ", json);
            // getWeather.json = json;

            // TODO - display the 5 days weather forecast
            displayWeather(json);
            console.log(json);
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
            getForecast.json = json;
            console.log(json);
        },
        error: function (err) {
            console.log(err);
        }
    });
};
function displayWeather(json) {
    var displayCity = citySearchTerm.value.trim();
    displayCity.textContent = "Displaying Current Weather For: " + displayCity;


    // TODO - replace this with the current values
    var current = json.current;
    tempEl.textContent = current.temp;
    humEl.textContent = current.humidity;
    windEl.textContent = current.wind_speed;
    uviEl.textContent = current.uvi;
};

function showRecentSearches(city) {
    var searchBtnEl = document.createElement("button");
    searchBtnEl.classList = "button is-fullwidth is-info";
    searchBtnEl.setAttribute("data-id", searchIdCounter);
    btnSearchCity.textContent = city;

    searchIdCounter++;
    recentSearchEl.appendChild(searchBtnEl);
}



var loadSearch;
//getting current date and weather icon
function showCurrentWeather(currentWeather, timezone) {
    console.log(currentWeather);
    console.log(currentWeather.weather[0].icon);
    var iconCode = currentWeather.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconUrl);
}


// // set variables for the next five day forecast (date)
// var currentDate = moment().format('MMMM Do YYYY, h:mm a');
// var displayCurrentDate = document.getElementById('current-date');
// displayCurrentDate.innerHTML = currentDate.format('MM-DD-YYYY');

// var displayDay1 = document.getElementById('day-1-date');
// displayDay1.innerHTML = currentDate.add(1, 'days').format('MM-DD-YYYY');
// var displayDay2 = document.getElementById('day-2-date');
// displayDay2.innerHTML = currentDate.add(2, 'days').format('MM-DD-YYYY');
// var displayDay3 = document.getElementById('day-3-date');
// displayDay3.innerHTML = currentDate.add(3, 'days').format('MM-DD-YYYY');
// var displayDay4 = document.getElementById('day-4-date');
// displayDay4.innerHTML = currentDate.add(4, 'days').format('MM-DD-YYYY');
// var displayDay5 = document.getElementById('day-5-date');
// displayDay5.innerHTML = currentDate.add(5, 'days').format('MM-DD-YYYY');
// console.log(days);
// get temp, humidity, wind speed, and uvi for next five days

//uv index should show color code
// 0-2 is low danger = green
// 3-5 is moderate = yellow
// 6-7 is high = orange
// 8-10 is very high = red
// higher than 10 is extreme = purple
// save recent searches to display

function runSearches(event) {


}
var saveSearches = function () {

}
//make weather appear for searched city
function loadWeatherSearch(searchId, search) {
    localStorage.setItem(searchId, search.textContent);

}
var loadSearch = function () { }

//runs formsubmithandler when someone click search or press enter 
cityInputEl.addEventListener("submit", formSubmitHandler);
recentSearchEl.addEventListener('click', runSearches);


// TODO - please add the correct values
loadWeatherSearch("", "");
