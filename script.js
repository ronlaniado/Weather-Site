$(document).ready( function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
    function getPosition(position) {
      var Longitude = position.coords.longitude;
      var Latitude = position.coords.latitude;
      console.log(Longitude + " " + Latitude);
      var weatherUrl = "https://api.forecast.io/forecast/" + "94fc02d101411e20817bb1871a7dee34" + "/" + Longitude + "," + Latitude;
      console.log(weatherUrl);
  }
      console.log("Geolocation is working");
  } else {
      alert("Geolocation is not supported on your browser.");
  }

  function getWeather() {
  }
})
//Super Secret DarkSky API Key: 94fc02d101411e20817bb1871a7dee34
