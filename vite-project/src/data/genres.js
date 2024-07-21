import actionThumbnail from "../assets/action.jpg";
const genres = ["Action", "Drama", "Fantasy", "Horror", "Music", "Romance", "Western", "Thriller", "Fiction"];

const genreData = genres.map((genre) => {
    return {
        name: genre,
        thumbnail: actionThumbnail,
    };
});

export default genreData;