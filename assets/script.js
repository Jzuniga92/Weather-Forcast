// API Key - Weather Update
var weatherUpdate = "2a4c2ee2b6787cbd83f362f34c0a9184";
var city;
var btnSearch = document.querySelector("#search")
var searchCity = document.querySelector("#city-search")
var fetchBtn = document.querySelector("#forecast")
var listCity = "searchHistory";
var temp = document.querySelector("#temperature")
var humid = document.querySelector("#humidity")
var wind = document.querySelector("#windspeed")
var ultVio = document.querySelector("#uv")

btnSearch.addEventListener("click",function() {
    console.log (searchCity.value)
})
// Here is my local storage
//function liCity(){
  //  var recentSearch=[]
  //  recentSearch.push($("#search")).val();

  //  $.each(recentSearch, function(value){
 //       const p = document.createElement("p");
 //       p.innerHTML = value;
     //   document.getElementById("#search").appendChild("p");
//    })
//}

//calling my API
function weatherUpdate() {
 var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={API key}appid={2a4c2ee2b6787cbd83f362f34c0a9184};"

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
}

    
// data search to be saved and posted on the site.
// when data is entered I want the city and date to display with current forecast.
// When the city and date are displayed I want the 5 day forecast to diplay.
// All data entered needs to be saved on local stroage.
  