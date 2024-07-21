import React from "react";
import styles from "./CarouselPage.module.css";
import newsWidget from "../components/NewsWidget";

function CarouselPage() {
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>profileWidget</div>
			<div className={styles.weatherWidget}>profileWidget</div>
			<div className={styles.newsWidget}>profileWidget</div>
		</div>
	);
}

export default CarouselPage;
