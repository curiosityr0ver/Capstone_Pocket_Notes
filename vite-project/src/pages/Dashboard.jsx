import styles from "./Dashboard.module.css";
import TimerWidget from "../components/TimerWidget";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import NotesWidget from "../components/NotesWidget";
1;

function Dashboard() {
	return (
		<div className={styles.container}>
			<div className={styles.user}>
				<ProfileWidget />
			</div>
			<div className={styles.timer}>
				<TimerWidget />
			</div>
			<div className={styles.notes}>
				<NotesWidget />
			</div>
			<div className={styles.weather}>
				<WeatherWidget />
			</div>
			<div className={styles.news}>
				<NewsWidget />
			</div>
		</div>
	);
}

export default Dashboard;
