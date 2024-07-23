import styles from "./MoviePage.module.css";
import profileImg from "../assets/profile.png";

function MoviePage() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.heading}>Super App</h3>
				<div className={styles.avatar}>
					<img src={profileImg} alt="" />
				</div>
			</div>
		</div>
	);
}

export default MoviePage;
