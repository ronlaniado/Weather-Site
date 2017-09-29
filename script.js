var temp;
var weather;
var city;
var country;
var icon;
$(document).ready(function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "5&lon=" + longitude;
			console.log(weatherUrl);
			function showWeather() {
				$.ajax({
					url: weatherUrl,
					success: function (data) {
						temp = data.main.temp;
						city = data.name;
						country = data.sys.country;
						weather = data.weather[0].main;
						icon = data.weather[0].icon;
						console.log(temp);
						console.log(city);
						console.log(country);
						console.log(weather);
						console.log(icon);
						console.log("showWeather() function is working");
						$(".weather").empty("");
						$("#temp").append(data.main.temp + "&#176; C");
						$("#city").append(data.name);
						$("#country").append(data.sys.country);
						$("#icon").append("<img src='" + data.weather[0].icon + "'>");
					}
				});
			}
			function toFahrenheit() {
				var convertedTemp = temp;
				console.log(convertedTemp);
			}
			$(".weatherButton").click(function () {
				showWeather();
				console.log("Weather was refreshed.");
					});
			showWeather();
			toFahrenheit();
		});
	}
});
