var temp;
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
						var city = data.name;
						var country = data.sys.country;
						var weather = data.weather[0].main;
						var icon = data.weather.icon;
						console.log(data.main.temp);
						console.log(data.name);
						console.log(data.sys.country);
						console.log(data.weather[0].main);
						console.log(data.weather[0].icon);
						console.log("showWeather() function is working");
						$(".weather").empty("");
						$("#temp").append(data.main.temp + "&#176; C");
						$("#city").append(data.name);
						$("#country").append(data.sys.country);
						$("#icon").append("<img src='" + data.weather[0].icon + "'>");


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
