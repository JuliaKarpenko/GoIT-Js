let timeZone = document.querySelector('.location-timezone');
let temperatureDegree = document.querySelector('.temperature-degree');
let temperatureDescription = document.querySelector('.temperature-description');
let iconHeader = document.querySelector('#icon-header');
let temperatureSection = document.querySelector('.temperature-section');
let weatherForAWeek = document.querySelector('.weather-for-a-week');
let weekWeatherTemperature = document.querySelector('.week-weather-temperature');

let descriptionValue;
let timeZoneValue;
let summaryValue;
let headerIconValue;

let items = [];
let format = "F";


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
                    const {
                        icon,
                        summary,
                        temperature
                    } = data.currently;

                    descriptionValue = temperature;
                    summaryValue = summary;
                    timeZoneValue = data.timezone;
                    headerIconValue = icon; 
                    items = data.daily.data;

                    setHeader();
                    setItems();

                    temperatureSection.addEventListener('click', () => {
                        toggleFormat();
                        setHeader();
                        setItems();
                    });
                });
        });

    }

    function setItems() {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        weatherForAWeek.innerHTML = items.reduce((acc, item, i) =>
            acc + `<div class='week-weather'><p class="week-weather-date">${(new Date(item.time*1000)).toLocaleString('Uk-uk', options)}</p>
        <div><p class="week-weather-temperature">max <span class="week-weather-temperature-size">t: </span><span class="js-temp">${getFormattedTemperature(item.temperatureHigh)}</span></p>
        <p class="week-weather-temperature">min <span class="week-weather-temperature-size">t: </span><span class="js-temp">${getFormattedTemperature(item.temperatureMin)}</span></p></div>
        <p><canvas class="iconItem" id="${item.icon}" width="50" height="50"></canvas></p><p class="week-weather-summary">${item.summary}</p></div>`, '');

        setItemsIcon();
    }

    function getFormattedTemperature(t) {
        return format === "C" ? Math.floor(5 / 9 * (t - 32)) + " " + format : t + " " + format + " ";
    }

    function setHeader() {
        temperatureDegree.textContent = getFormattedTemperature(descriptionValue);
        temperatureDescription.innerHTML = summaryValue;
        timeZone.innerHTML = timeZoneValue;
        setHeaderIcon(iconHeader, headerIconValue, 'white');
    }

    function toggleFormat() {
        format = format === "F" ? "C" : "F";
    }

    function setItemsIcon() {
        let iconItems = document.querySelectorAll('.iconItem');

        iconItems.forEach(icon => {
            console.log(icon);
            setHeaderIcon(icon, icon.getAttribute("id"), '#30739b');
        });
    }

    function setHeaderIcon(iconId, icon, color) {
        
        const skycons = new Skycons({
            "color": color
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
};

window.addEventListener('load', onLoad);