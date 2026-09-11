import { useState } from "react";

const cities = {
  kathmandu: { lat: 27.7172, lon: 85.324, name: "Kathmandu" },
  newyork: { lat: 40.7128, lon: -74.006, name: "New York" },
  london: { lat: 51.5074, lon: -0.1278, name: "London" },
  tokyo: { lat: 35.6762, lon: 139.6503, name: "Tokyo" },
  dubai: { lat: 25.2048, lon: 55.2708, name: "Dubai" },
};

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setError("");
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setWeather(data.current_weather);
    } catch (err) {
      setError("Could not fetch weather.");
    }
  };

  return (
    <article className="card">
      <h3>{city.name}</h3>
      {weather ? (
        <>
          <p className="temp">{Math.round(weather.temperature)}°C</p>
          <p>{weather.weathercode === 0 ? "☀️ Clear" : weather.weathercode === 1 ? "🌤 Partly cloudy" : "☁️ Cloudy"}</p>
          <p>Wind {weather.windspeed} km/h</p>
        </>
      ) : (
        <p className="muted">{error || "No data loaded"}</p>
      )}
      <button onClick={fetchWeather}>Load Weather</button>
    </article>
  );
};

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Project 9 — Weather App</h1>
        <p>Live data via Open-Meteo API</p>
      </header>
      <div className="grid">
        {Object.values(cities).map((city) => (
          <WeatherCard key={city.name} city={city} />
        ))}
      </div>
    </div>
  );
};

export default App;