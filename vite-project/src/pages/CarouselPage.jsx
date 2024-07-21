import React from "react";
import styles from "./CarouselPage.module.css";
import WikiplaceWidget from "../components/NewsWidget";

function CarouselPage() {
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>profileWidget</div>
			<div className={styles.weatherWidget}>profileWidget</div>
			<div className={styles.newsWidget}>
				<WikiplaceWidget />
			</div>
		</div>
	);
}

export default CarouselPage;
