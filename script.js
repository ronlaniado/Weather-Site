if (navigator.geolocation) {
  //Get Latitude and Longitude
  navigator.geolocation.getCurrentPosition(getPosition);
  function getPosition(position) {
      var Longitude = position.coords.longitude;
      var Latitude = position.coords.latitude;
  console.log(Longitude + " " + Latitude);
}
  console.log("Geolocation is working");
} else {
  alert("Geolocation is not supported on your browser.");
}
