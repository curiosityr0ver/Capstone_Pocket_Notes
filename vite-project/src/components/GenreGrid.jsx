import PropTypes from "prop-types";
import genres from "../data/genres";
import styles from "./GenreGrid.module.css";

function GenreGrid({ selectedGenres, setSelectedGenres }) {
	const handleGenreClick = (genre) => {
		if (selectedGenres.includes(genre)) {
			setSelectedGenres(
				selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
			);
		} else {
			setSelectedGenres([...selectedGenres, genre]);
		}
	};

	return (
		<div className={styles.container}>
			{genres.map((genre) => (
				<div
					onClick={() => handleGenreClick(genre.name)}
					key={genre.name}
					className={styles.genreCard}
				>
					<p>{genre.name}</p>
					<img src={genre.thumbnail} alt={genre.name} />
				</div>
			))}
		</div>
	);
}

GenreGrid.propTypes = {
	selectedGenres: PropTypes.array.isRequired,
	setSelectedGenres: PropTypes.func.isRequired,
};

export default GenreGrid;
