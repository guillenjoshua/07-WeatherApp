





$("#enterCity").on("click", function() {
    return getWeather();
 
    });



function getWeather(){

  var city = $("#city").val();

  if (city != ''){

      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
            var application = results(data) 

          $("#displayWeather").html(application);
          $("#city").val('');

        }

      })

  }else{
    $("#error").html("<div>Text Cannot Be Empty</div>"); 
  }

}

function results(data){
    return "<p>" + data.name + "</p>" + 
             "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
              "<p>Humidity: " + data.main.humidity + "%</p>" +
              "<p>Wind Speed: " + data.wind.speed + " MPH</p>"

}