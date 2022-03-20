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


var formSubmitHandler = function (event) {
    event.preventDefault();
    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCoordinates(city);

        // //clear old 
        // cityContainerEl.textContent = "";
        // cityInputEl.value = "";
    } else {
        alert("Please enter a valid city name");
    }
};


    function getCoordinates(city) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey,
            async: true,
            dataType: "json",
            success: function (json) {
                console.log(json);
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
    };
    function showRecentSearches(city) {};
    //execute upon form submission browser event
    



//runs formsubmithandler when soeone click search or press enter 
cityInputEl.addEventListener("submit", formSubmitHandler);