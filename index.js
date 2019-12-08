$('#searchBtn').click(function(){

var city = $("#citySearch").val();

weatherURL = "https:/api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=4c49b7e3072570a9b1185bf403e88ab9";

$.ajax({
url: weatherURL,
method: "GET"
}).then(function(response) {
        console.log(response);

        var citySave = $("<div id='new'>").text(city);
        $("#previousSearch").append(citySave);

        $("#basicInfo").empty();

        var cityName = response.name;
        var cityHead = $("<h1>").text(cityName);
        $("#basicInfo").append(cityHead);

        var convertTemp = (response.main.temp - 273.15) * 1.80 + 32;
        var tempRound = Math.round(convertTemp);
        var cityTemp = $("<p>").text("Temperature: " + tempRound + " ℉");
        $("#basicInfo").append(cityTemp);

        var humidity = response.main.humidity;
        var cityHumidity = $("<p>").text("Humidity: " + humidity + "%");
        $("#basicInfo").append(cityHumidity);

        var windspeed = response.wind.speed;
        var cityWind = $("<p>").text("Wind speed: " + windspeed + " MPH");
        $("#basicInfo").append(cityWind);
        
        var uvIndex = response.wind.speed;
        var cityWind = $("<p>").text("Wind speed: " + windspeed + " MPH");
        $("#basicInfo").append(cityWind);
        
var key = "4c49b7e3072570a9b1185bf403e88ab9";

forecastURL = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
url: forecastURL,
    method: "GET",
    data: {
        q: city,
        appid: key,
    }
    }).then(function(response2) {
        console.log(response2);

        $("#forecast").empty();
        
            var oneDay = response2.list[0].main.temp;
            var convertTemp2 = (oneDay - 273.15) * 1.80 + 32;
            var tempRound2 = Math.round(convertTemp2);

            var oneDayDate = response2.list[0].dt_txt;
            console.log(oneDay);
            var firstDayDate = $("<div id='days'>").text(oneDayDate);
            var firstDay = $("<p>").text("Temperature: " + tempRound2 + " ℉");

            var dayTitle1 = $("<h2>").text("Today");
            $("#forecast").append(dayTitle1);
            $("#forecast").append(firstDayDate);
            $("#forecast").append(firstDay);

            var twoDay = response2.list[5].main.temp;
            var convertTemp3 = (twoDay - 273.15) * 1.80 + 32;
            var tempRound3 = Math.round(convertTemp3);

            var twoDayDate = response2.list[5].dt_txt;
            console.log(twoDay);
            var secondDayDate = $("<div id='days'>").text(twoDayDate);
            var secondDay = $("<p>").text("Temperature: " + tempRound3 + " ℉");

            var dayTitle2 = $("<h2>").text("Day 2");
            $("#forecast").append(dayTitle2);
            $("#forecast").append(secondDayDate);
            $("#forecast").append(secondDay);
        
  });
});
});