import React from "react";
import styles from "./LandingPage.module.css";
import Register from "../components/Register";

function LandingPage() {
	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<div className={styles.backgroundImage}></div>
			</div>
			<div className={styles.rightSide}>
				<Register />
			</div>
		</div>
	);
}

export default LandingPage;
