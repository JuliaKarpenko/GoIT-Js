
let timeZone = document.querySelector('.location-timezone');
let temperatureDegree =  document.querySelector('.temperature-degree');
let temperatureDescription =  document.querySelector('.temperature-description');
let iconClass = document.querySelector('.icon');
let temperatureSection = document.querySelector('.temperature-section');
let temperatureUnit = document.querySelector('.temperature-unit');
let weatherForAWeek = document.querySelector('.weather-for-a-week');
let celsus;
let description;



onLoad = () => {
    let lat;
    let long;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            lat = position.coords.latitude;
            long = position.coords.longitude;

            let proxy = 'https://cors-anywhere.herokuapp.com/';
            let api = `${proxy}https://api.darksky.net/forecast/a5efb13247e6cf1d4648bc0388c36003/${lat},${long}`;

            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const{icon, summary, temperature }  = data.currently;
                    description = temperature;
                    temperatureDegree.innerHTML = temperature;
                    temperatureDescription.innerHTML = summary;
                    timeZone.innerHTML = data.timezone;
                    celsus = Math.floor(5/9*(temperature-32));
                    setIcon(iconClass, icon);

                    temperatureSection.addEventListener('click', setTemperature);
                    // weatherForAWeek.innerHTML = data.reduce((acc , i) => acc + `<div><p>${i.daily.data.time}</p><p>${i.daily.data.summary}</p></div>`, '');
                });
        });

    } 
    
    function setTemperature() {
        if (temperatureUnit.textContent === "F") {
            temperatureUnit.textContent = "C";
            temperatureDegree.textContent = celsus;
        } else {
            temperatureUnit.textContent = "F";
            temperatureDegree.textContent = description;
        }
    }

    function setIcon(iconId, icon) {
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
       return skycons.set(iconId, Skycons[currentIcon]);
    }
};

 

window.addEventListener('load', onLoad);