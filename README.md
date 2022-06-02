<img src="https://github.com/judithmg/weather-app-rapiapi/blob/main/public/logo.png?raw=true" width='200'/>
<img src="https://github.com/judithmg/weather-app-rapiapi/blob/main/public/rapid-api.png?raw=true" width='200'/>


# Midudev & RapidApi Hackathon 💻

Created for [Midudev](https://midu.dev/)'s hackathon in collaboration with [Rapidapi](https://rapidapi.com/hub), using [WeatherAPI.com](https://rapidapi.com/weatherapi/api/weatherapi-com/) API.

## About 🤓

<img src="https://github.com/judithmg/weather-app-rapiapi/blob/main/public/mobb.png?raw=true"/>

This project was created with [Vite](https://vitejs.dev/)'s build tool, using `react` with `TypeScript`. It was deployed in [Vercel](https://vercel.com/).

<img src="https://github.com/judithmg/weather-app-rapiapi/blob/main/public/deskt.png?raw=true"/>

The app is responsive, with two different views (mobile and deskptop). 

* Click on hamburger menu to see previous searches. They'll be saved in `localStorage` thanks to `zustand`'s `persist` middleware.
* Search for any city using `RapidApi`'s API
* You'll be able to check today's weather, as well as 3 days' forecast! Click on each day to check the forecast.
* Chart created with `react-chartjs-2` showing today's temperature
* See today's temperature hourly

Test environment was set but due to lack of time, not many tests were written.



## Folder structure 📁
```
weather-app-rapiapi/src
├───components  
├───constants
├───hooks
├───store
├───styles
├───types
└───utils
```
## Live preview 📳

[Deployed at Vercel](https://judith-weather.vercel.app/)


## Run this project 🏃‍♀️

```
git clone https://github.com/judithmg/weather-app-rapiapi
cd weather-app-rapiapi
npm i 
```

To run the project, use
```
npm run dev
```

To run tests, use
```
npm run test
```

## Author 👩‍💻

- Judith Martínez (judithmg)
