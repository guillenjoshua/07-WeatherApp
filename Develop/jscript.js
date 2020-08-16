


$("#enterCity").on("click", function() {
  return getWeather();

  });


// Run Ajax with API Key

function getWeather(){

var city = $("#city").val();
var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96"
var queryIVIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=6b4758acdbe25a3b3e8b792b8978ee96" + "&lat={lat}" + "&lon={lon}"


if (city != ''){

    $.ajax({
      url: queryCity, 
      type: "GET",
      dataType: "jsonp",
      success: function(data){
          var application = results(data) 

        $("#displayWeather").html(application);
        $("#city").val('');


          var forecast = "";

          for (var i=0; i<data.list; i++){

            
          }




      }

    })

}

}


// Cuurent Weather from OpenWeather

var currentCityDiv = $("#currentCity");

var currentDate = moment().format("MMM Do YY");

const results = function results(data){
  return "<h2>" + data.name + ", " + data.sys.country + " - " + currentDate + "</h2>" + 
            "<p>Weather: " + data.weather[0].description + "<img src = http://openweathermap.org/img/wn/" + data.weather[0].icon+ ".png>"  + "</p>" +
            "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
            "<p>Humidity: " + data.main.humidity + "%</p>" +
            "<p>Wind Speed: " + data.wind.speed + " MPH</p>"

         
}


//Keep Display
for (var i = 0; i < results; i++) {
  
  if (localStorage.getItem(i)) {
      $("#" + i).val(localStorage.getItem(i))
  }

}