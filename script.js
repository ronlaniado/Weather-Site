var celsiusTemp;
var fahrenheitTemp;
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
						temp = Math.round(data.main.temp);
						city = data.name;
						country = data.sys.country;
						weather = data.weather[0].main;
						icon = data.weather[0].icon;
						celsiusTemp = Math.round(data.main.temp)
						console.log(temp);
						console.log(city);
						console.log(country);
						console.log(weather);
						console.log(icon);
						console.log("showWeather() function is working");
						$(".weather").empty("");
						$("#city").append(data.name);
						$("#country").append(data.sys.country);
						$("#icon").append("<img src='" + data.weather[0].icon + "'>");
						if (country == "US") {
							console.log("US is working");
							temp = Math.round(temp * 1.8 + 32);
							$("#temp").append(temp + "&#176;F");
							function toFahrenheit() {
								fahrenheitTemp = Math.round(temp);
								console.log(fahrenheitTemp);
							}
							$(".fahrenheit").click(function () {
								toFahrenheit();
								$("#temp").empty();
								$("#temp").append(fahrenheitTemp + "&#176;F");
						})
						$(".celsius").click(function() {
							$("#temp").empty();
							$("#temp").append(celsiusTemp + "&#176;C");
							console.log("Temp changed to celsius");
						})

					} else {
							console.log("Other country");
						function toFahrenheit() {
							fahrenheitTemp = Math.round(temp * 1.8 + 32);
							console.log(fahrenheitTemp);
						}
						$(".fahrenheit").click(function () {
							toFahrenheit();
							$("#temp").empty();
							$("#temp").append(fahrenheitTemp + "&#176;F");

						});
							function toCelsius() {
								celsiusTemp = Math.round(temp);
								console.log(celsiusTemp);
							}
							$(".celsius").click(function() {
								$("#temp").empty();
								$("#temp").append(celsiusTemp + "&#176;C");
								console.log("Temp changed to celsius");
							});
					}
					}
				});
			}

			$(".weatherButton").click(function () {
				showWeather();
				console.log("Weather was refreshed.");
					});
	showWeather();
		});
	}
});
