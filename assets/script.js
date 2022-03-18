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


    };

   
}




// document.createElement()
// .appendChild