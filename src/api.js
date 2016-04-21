var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=02a0900e6eb6a56f45d7f3e7c5019257';
var kelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + '°C';
}
module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
  	.then(function(response) {
  	  return response.json();
  	})
  	.catch(function(error) {
  		console.log(error);
  	})
  	.then(function(json) {
  	  return {
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: json.weather[0].description
  	  };
  	})
  	.catch(function(error) {
  		console.log(error);
  	})
}