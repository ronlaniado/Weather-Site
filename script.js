$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var weatherUrl ="https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "5&lon=" + longitude;
      $.ajax({
        url: weatherUrl, success: function(data) {
          var temp = data.main.temp;
          var city = data.name;
          var country = data.sys.country;
          var weather = data.weather[0].main;
          console.log(data.main.temp);
          console.log(data.name);
          console.log(data.sys.country);
          console.log(data.weather[0].main);
        }
      });
    });
  }
});
