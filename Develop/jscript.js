
$(document).ready(function(){

$("#enterCity").on("click keydown", function() {
     
  return getWeather();

});



// Run API for Current Weather

function getWeather(){

$(".container").show();

var city = $("#city").val();


var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96"


  $.ajax({
    url: queryCity, 
    method: "GET",
  }).then(function(city){
        var application = cityResults(city) 

      $("#displayWeather").html(application);

      // Run API for UV Index - Use Current Weather API for LAT/Long
      
      var queryUVIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=6b4758acdbe25a3b3e8b792b8978ee96&lat="+ city.coord.lat + "&lon=" + city.coord.lon

      $.ajax({
              url: queryUVIndex, 
              type: "GET",
      }).then(function(index){
                  var ultraViolet = uvResult(index) 
        
                $("#Index").html(ultraViolet);
                
        
              });
        

            });

              //Functions to display Current Weather and UVIndex Results
              
            var currentDate = moment().format("MMM Do YY");

            function cityResults(city){
              
        
              
              return "<h2>" + city.name + ", " + city.sys.country + " - " + currentDate + "</h2>" + 
                        "<p>Weather: " + city.weather[0].description + "<img src = http://openweathermap.org/img/wn/" + city.weather[0].icon+ ".png>"  + "</p>" +
                        "<p>Temperature: " + city.main.temp + "&deg;F</p>" +
                        "<p>Humidity: " + city.main.humidity + "%</p>" +
                        "<p>Wind Speed: " + city.wind.speed + " MPH</p>"
                                       
                              }

            function uvResult(index){
              return "<p> UVIndex: " + index.value + "</p>"
                    }
 
    }

  

function setLocalStorage(){

let store = $("#city").val();

localStorage.setItem('cityName', store); 

}

});