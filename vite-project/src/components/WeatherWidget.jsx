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
			const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
			const BASE_URL = "https://api.weatherapi.com/v1";
			const params = {
				key: API_KEY,
				q: "Delhi",
			};
			const response = await axios.get(`${BASE_URL}/current.json`, { params });
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
			{weather && (
				<div className={styles.weather}>
					<div className={styles.column}>
						<i className="fas fa-cloud-showers-heavy"></i>
						<p>{weather.condition.text}</p>
					</div>
					<div className={styles.column}>
						<p className={styles.temperature}>{weather.temp_c}°C</p>
						<p className={styles.infoItem}>
							<i className="fas fa-tachometer-alt"></i>
							<span>{weather.pressure_mb} mbar Pressure</span>
						</p>
					</div>
					<div className={styles.column}>
						<p className={styles.infoItem}>
							<i className="fas fa-wind"></i>
							<span>{weather.wind_kph} km/h Wind</span>
						</p>
						<p className={styles.infoItem}>
							<i className="fas fa-tint"></i>
							<span>{weather.humidity}% Humidity</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default WeatherWidget;
