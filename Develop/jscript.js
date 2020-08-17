


$("#enterCity").on("click", function() {
     
  return getWeather();

});


// Run API for Current Weather

function getWeather(){

$(".container").show();

var city = $("#city").val();

var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96"

if (city != ''){

  $.ajax({
    url: queryCity, 
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        var application = results(data) 

      $("#displayWeather").html(application);
      $("#city").val('');

    }

  })

}

}



// Current Weather from OpenWeather

var currentDate = moment().format("MMM Do YY");

function results(data){

const lat = data.coord.lat
const lon = data.coord.lon

uvLat = lat
uvLon = lon

return "<h2>" + data.name + ", " + data.sys.country + " - " + currentDate + "</h2>" + 
          "<p>Weather: " + data.weather[0].description + "<img src = http://openweathermap.org/img/wn/" + data.weather[0].icon+ ".png>"  + "</p>" +
          "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
          "<p>Humidity: " + data.main.humidity + "%</p>" +
          "<p>Wind Speed: " + data.wind.speed + " MPH</p>" +
          "<p>lat: " + data.coord.lat + " MPH</p>"

          
      
}



// // Run API for UV Index

// $("#enterCity").on("click", function() {
//   return getUVIndex();

//   });


// function getUVIndex(){

// var city = $("#city").val();

// var queryUVIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=6b4758acdbe25a3b3e8b792b8978ee96&lat=37.75&lon=-122.37"

// if (city != ''){

//     $.ajax({
//       url: queryUVIndex, 
//       type: "GET",
//       dataType: "jsonp",
//       success: function(data){
//           var application = results(data) 

//         $("#displayWeather").html(application);
//         $("#city").val('');

//       }

//     })

//   }

// }

// // Current Weather from OpenWeather

// function results(data){
//   "<p>UVIndex: " + data.value + "</p>"

// }




// function setLocalStorage(){

// let store = $("#city").val();

// localStorage.setItem('cityName', store); 

// }

