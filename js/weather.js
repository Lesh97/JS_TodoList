const API_KEY = "0019fd7a0ed2cc1a11d99d741345006b";

onGeolocation = (position) => {   
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });

}

onGeoError = () => alert("I Can't find you.");

navigator.geolocation.getCurrentPosition(onGeolocation, onGeoError);