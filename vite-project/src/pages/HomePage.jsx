import { useState } from "react";
import styles from "./HomePage.module.css";
import GenreGrid from "../components/GenreGrid";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const navigate = useNavigate();

	const handleGenreClick = (genre) => {
		setSelectedGenres(
			selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
		);
	};

	const handleNext = () => {
		localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
		navigate("/carousel");
	};

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<div className={styles.header}>
					<h3 className={styles.heading}>Super App</h3>
					<h2 className={styles.subHeading}>
						Choose your entertainment category
					</h2>
				</div>
				<div>
					{selectedGenres.length > 0 && (
						<div className={styles.selectedGenres}>
							{selectedGenres.map((genre) => (
								<div key={genre} className={styles.selectedGenre}>
									{genre}
									<span
										onClick={() => handleGenreClick(genre)}
										className={styles.closeBtn}
									>
										X
									</span>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.genreGrid}>
					<GenreGrid
						selectedGenres={selectedGenres}
						setSelectedGenres={setSelectedGenres}
					/>
				</div>
				<button onClick={handleNext} className={styles.nextBtn}>
					Next Page
				</button>
			</div>
		</div>
	);
}

export default HomePage;
