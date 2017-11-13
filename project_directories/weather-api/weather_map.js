"use strict";
//IIFE function
// (function(){
// })();


var callWeather = function (location) {

    var weatherOptionsMap = {
        APPID: "14585416169d73d956f6321f3f0c5253",
        units: "imperial",
        cnt: 3
    };

    $.extend(weatherOptionsMap, location);

    $.get("http://api.openweathermap.org/data/2.5/forecast", weatherOptionsMap).done(function (data) {
        console.log(data);
        console.log($("#lat-input").val());
        console.log($("#lon-input").val());

        var weatherArray = ["#present", "#one-day", "#two-day"];
        var titleArray = ["<h3>Present Weather</h3>", "<h3>+3 hours</h3>", "<h3>+6 hours</h3>"];
        var weather = "";
        var j = 0;

        // WEATHER BOXES
        (data.list).forEach(function (daily) {
            var icon = daily.weather[0].icon;
            console.log(icon);
            var url = "http://openweathermap.org/img/w/" + icon + ".png";
            var img = "<img class='icon' src='" + url + "'>";
            console.log(img);

            weather =

                titleArray[j] + "<h3>" + Math.round(daily.main.temp_max) + "°/" + Math.round(daily.main.temp_min) + "°</h3>" +
                img +
                //list for weather info
                "<ul>" +
                "<li><strong>Humidity</strong>: " + daily.main.humidity + "%</li>" +
                "<li><strong>Wind</strong>: " + Math.round(daily.wind.speed) + " mph</li>" +
                "<li><strong>Pressure</strong>: " + daily.main.pressure + " hPa</li>" +
                "</ul>";

            $(weatherArray[j]).html(weather);

            j++;



        });

        $("#heading").text("It's Always Sunny in " + data.city.name + ":");

    });

};
var sa = {lat: 29.423017, lon: -98.48527};
callWeather(sa);

//callWeather($("#lon-input").val(),$("#lat-input").val(),)

    var callCityWeather = function () {
        var location = {q: $("#city").val() + ",US"};
        callWeather(location);

        //geocoder

    };

    $("#weather-submit").click(callCityWeather);

    $("#city").keydown(function(event) {
        if (event.which === 13) {
            $("#weather-submit").trigger("click");
        }
    });

    var mapOptions = {

        zoom: 4,

        center: {
            lat: 29.42,
            lng: -98.49
        }
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var marker = new google.maps.Marker({
    position: {
        lat: 29.42,
        lng: -98.49
    },
    map: map,
    draggable:true,
    title:"Drag me!"
    });

    console.log(marker);

    google.maps.event.addListener(marker, "dragend", function(event) {

        var location = {lat: event.latLng.lat(), lon: event.latLng.lng()};
        callWeather(location);
        console.log(event);

    });
