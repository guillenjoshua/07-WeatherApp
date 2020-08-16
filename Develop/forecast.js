
$("#enterCity").on("click", function() {
    return getForecast();
 
    });


// Run Ajax with API Key

function getForecast(){

  var city = $("#city").val();

  var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=5" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96"

  if (city != ''){

      $.ajax({
        url: queryForecast,
        type: "GET",
        dataType: "jsonp",
        success: function(data){
         

            var table = "";

            for (var i = 0; i < 5; i++){

                    table += "<tr>"

                          table += "<td>"+ data.list[i].weather[0].icon +"</td>"
                          table += "<td>"+ data.list[i].weather[0].description +"</td>"
                          table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>"
                          table += "<td>"+ data.list[i].main.temp +"</td>"
                          table += "<td>"+ data.list[i].main.humidity +"</td>"


                    table += "</tr>"; 
            }
                $("#displayForecast").html(table);
                $("#city").val('');
        }

      })

  }
  
}



// function results(data){
//     // return "<h2>" + data.name + ", " + data.sys.country + "</h2>" + 
//     //           "<p>Weather: " + data.weather[0].description + "<img src = http://openweathermap.org/img/wn/" + data.weather[0].icon+ ".png>"  + "</p>" +
//               "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
//               "<p>Humidity: " + data.main.humidity + "%</p>" +
//             //   "<p>Wind Speed: " + data.wind.speed + " MPH</p>"

           
// }