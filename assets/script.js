var cityButtonsEl = document.querySelector("#city-buttons");
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var btnSearchCity = document.querySelector("#btn-search-city");

var apiKey = "a7bb95be4838dc9c0a3fe02492f27fb9";

btnSearchCity.onclick = function (event) {
    console.log("Hello World!!!");
    event.preventDefault();

    formSubmitHandler();
};

//execute upon form submission browser event
var formSubmitHandler = function () {

    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCityWeather(city);

        //clear old content
        cityContainerEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid city name");
    }
};


// https://api.openweathermap.org/geo/1.0/direct?q=SanAntonio&limit=5&appid=a7bb95be4838dc9c0a3fe02492f27fb9

// https://api.openweathermap.org/data/2.5/onecall?lat=29.4246002&lon=-98.4951405&units=imperial&exclude=minutely,hourly&appid=a7bb95be4838dc9c0a3fe02492f27fb9


var getCityWeather = function (city) {
    //format the weather api url to call for exact city, state, country 
    // the goal is to just get the lat, and long to use for the next api call
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&units=imperial&appid=${apiKey}`;

    // Get lat, and long data
    fetch(apiUrl)
        .then((res) => res.json())
        .then(function (data) {
            // We get the lat, and long here [{ lat: "", long: ""}]
            var location = data[0];
            console.log("First Data Call: ", data);
            getCityForecast(location);
        })

    // get city forecast
    var getCityForecast = function (location) {
        var lat = location.lat;
        var lon = location.lon

        var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

        //make a request to the url
        fetch(url)
            .then(function (response) {
                //if request was successful
                if (response.ok) {
                    console.log(response);
                    response.json().then(function (data) {
                        console.log("Second Data Call: ", data);
                        // displayRepos(data, user);
                    });
                } else {
                    alert('Error: ' + response.statusText);
                }
            })
            .catch(function (error) {
                alert.apply("Unable to connect to OpenWeather");
            });
        //** TODO: apply city, weather and timezone  */
        function showCurrentWeather(city, weather, timezone) {
        }

        // function to show a forecast card when given data form open weather API
        function showForecastCard(forecast, timezone) {

        }
        //data from API
        var unixTs = forecast.dt; //unix time stamp to get most precise current time 
        var iconUrl = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        var iconInfo = forecast.weather[0].description;
        var tempF = forecast.temp.day;
        var { humidity } = forecast;
        var windSpeed = forecast.wind_speed;
        //card elements 
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
        // TODO: add the data to elements above

        //have five-day forecast display for current city 
        function showForecast(dailyForecast, timezone) {
            // unix time stamps to start and end of five days
            var startDate = dayjs().tz(timezone).add(1, 'day').startOf('day').unix();
            var endDate = dayjs().tz(timezone).add(6, 'day').startOf('day').unix();

            var headingCol = document.createElement('div');
            var heading = document.createElement('h4');
        }
    }
}