import styles from "./CarouselPage.module.css";
import WikiplaceWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";

function CarouselPage() {
	const user = JSON.parse(localStorage.getItem("user"));
	const selectedGenres = JSON.parse(localStorage.getItem("selectedGenres"));
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>
				<ProfileWidget
					name={user.name}
					email={user.email}
					userName={user.userName}
					selectedGenres={selectedGenres}
				/>
			</div>
			<div className={styles.weatherWidget}>
				<WeatherWidget />
			</div>
			<div className={styles.newsWidget}>
				<WikiplaceWidget />
			</div>
		</div>
	);
}

export default CarouselPage;
