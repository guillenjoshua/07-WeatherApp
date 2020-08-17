
$("#enterCity").on("click", function() {

  return getForecast();

 });


// Run Ajax with API Key

function getForecast(){

 $(".container").show();

var city = $("#city").val();

var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=6" + "&appid=6b4758acdbe25a3b3e8b792b8978ee96"

if (city != ''){

   $.ajax({
     url: queryForecast,
     type: "GET",
     dataType: "jsonp",
     success: function(data){
      

         var table = "";

         for (var i = 0; i < 6; i++){

                 table += "<table>"

                       table += "<td>"+ moment().add(i+1, 'days').calendar(i); +"</td>"
                       table += "<td>"+ data.list[i].weather[0].description +"</td>"
                       table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>"
                       table += "<td>"+ data.list[i].main.temp +"</td>"
                       table += "<td>"+ data.list[i].main.humidity +"</td>"


                 table += "</table>"; 
         }
             $("#displayForecast").html(table);
             $("#city").val('');
     }

   })

}

}




