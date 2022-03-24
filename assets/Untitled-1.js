
// var getCityWeather = function (city) {
//     //format the weather api url to call for exact city, state, country 
//     // the goal is to just get the lat, and long to use for the next api call
//     var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&units=imperial&appid=${apiKey}`;

//     // Get lat, and long data
//     fetch(apiUrl)
//         .then((res) => res.json())
//         .then(function (data) {
//             // We get the lat, and long here [{ lat: "", long: ""}]
//             var location = data[0];
//             console.log("First Data Call: ", data);
//             displayCityForecast(location);
//         });


//     // get city forecast

// }
// var displayCityForecast = function (location) {
//     console.log(location);
//     var lat = location.lat;
//     var lon = location.lon;
//     var cityName = location.name;
//     console.log(cityName);
//     var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

//     //make a request to the url
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             //if request was successful
//             console.log(data);
//             console.log("Second Data Call: ", data);
//             var cityHeaderEl = document.getElementById("city-container");
//             cityHeaderEl.innerHTML = "<h1>" + cityName + "</h1>";

//             showCurrentWeather(data.current, data.timezone);
//             showForecastCard(forecast, timezone);


//         })

//         .catch(function (error) {
//             console.log(error);
//             alert("Unable to connect to OpenWeather");
//         });


    // currentCity.textContent = cityName;

    // //** TODO: apply city, weather and timezone  */
    // function showCurrentWeather(currentWeather, timezone) {
    //     console.log(currentWeather);
    //     console.log(currentWeather.weather[0].icon);
    //     var iconcode = currentWeather.weather[0].icon;
    //     var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    //     console.log(iconUrl);
    // }

    // // function to show a forecast card when given data form open weather API
    // function showForecastCard(forecast, timezone) {
    //     console.log(ForecastCard);
    //     var fiveDayForecastEL = document.getElementById("forecast-continer");
    //     fiveDayForecastEL.innerHTML = ""
    // }    // TODO: add the data to elements above
    //data from API
    // var unixTs = forecast.dt; //unix time stamp to get most precise current time 
    // var iconUrl = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    // var iconInfo = forecast.weather[0].description;
    // var tempF = forecast.temp.day;
    // var { humidity } = forecast;
    // var windSpeed = forecast.wind_speed;
    // //have five-day forecast display for current city 
    // function showForecast(dailyForecast, timezone) {
    //     // unix time stamps to start and end of five days
    //     var startDate = dayjs().tz(timezone).add(1, 'day').startOf('day').unix();
    //     var endDate = dayjs().tz(timezone).add(6, 'day').startOf('day').unix();

    //     var headingCol = document.createElement('div');
    //     var heading = document.createElement('h4');
