<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
    <link rel="stylesheet" href="src/styles.css" />
    <title>My weather application</title>
  </head>
  <body>
    <div class="weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div class="current-weather">
          <div>
            <h1 class="current-city" id="current-city">Paris</h1>
            <p class="current-details">
              <span id="current-date"></span>, <span id="description"></span>
              <br />
              Humidity: <strong id="humidity"></strong>, Wind:
              <strong id="wind-speed"></strong>
            </p>
          </div>
          <div class="current-temperature">
            <span id="icon"></span
            ><span class="current-temperature-value" id="current-temperature"
              >24</span
            ><span class="current-temperature-unit">°C</span>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/marta-lucja-weglinska-761603211/"
            target="_blank"
            >Marta Lucja Weglinska</a
          >
          and is
          <a
            href="https://github.com/marya479/forecast.app/tree/main"
            target="_blank"
          >
            on GitHub</a
          >
          and
          <a href="https://forecastappie.netlify.app/" target="_blank"
            >hosted on Netlify</a
          >
        </p>
      </footer>
    </div>
  </body>
  <script src="src/index.js"></script>
</html>