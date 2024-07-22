import { useState, useEffect } from "react";
import styles from "./WeatherWidget.module.css";
import formatDate from "../utils/formatDate";
import axios from "axios";
function WeatherWidget() {
	const [weather, setWeather] = useState();
	const formattedDate = formatDate(new Date());

	useEffect(() => {
		getWeather();
	}, []);

	const getWeather = async () => {
		try {
			const API_KEY = "f9f0629e451c480aa08144000240804";
			const BASE_URL = "http://api.weatherapi.com/v1";
			const params = {
				key: API_KEY,
				q: "Delhi",
			};
			const response = await axios.get(`${BASE_URL}/current.json`, {
				params,
			});
			console.log(response.data.current);
			setWeather(response.data.current);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.date}>{formattedDate[0]}</p>
				<p className={styles.time}>{formattedDate[1]}</p>
			</div>
			{/* weather forecast, temp, pressure, wind and humidity*/}
			{weather && (
				<div className={styles.weather}>
					<div className={styles.cell}>
						<img src={weather.condition.icon} alt="Weather Icon" />
						<p>{weather.condition.text}</p>
					</div>
					<div className={styles.cell}>
						<p>Temperature: {weather.temp_c}°C</p>
						<p>Pressure: {weather.pressure_mb} mb</p>
					</div>
					<div className={styles.cell}>
						<p>Humidity: {weather.humidity}%</p>
						<p>Wind: {weather.wind_kph} km/h</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default WeatherWidget;
