import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./NewsWidget.module.css";
import formatDate from "../utils/formatDate";
const NewsWidget = () => {
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchRandomArticle();
	}, []);

	const fetchRandomArticle = async () => {
		setLoading(true);
		setError(null);
		try {
			const url =
				"https://newsapi.org/v2/top-headlines?country=in&apiKey=f2e03942dc6c42cb98c69b9650b469d1";

			const response = await axios.get(url);
			const randomIndex = Math.floor(
				Math.random() * response.data.articles.length
			);
			setArticle(response.data.articles[randomIndex]);
			console.log(response.data.articles[randomIndex]);
		} catch (err) {
			setError(`Failed to fetch article: ${err.message}`);
		} finally {
			setLoading(false);
		}
	};

	if (loading) return <div className={styles.loading}>Loading...</div>;
	if (error) return <div className={styles.error}>{error}</div>;
	if (!article) return null;

	return (
		<div className={styles.widget}>
			<div className={styles.thumbnailContainer}>
				<img
					src={article.urlToImage || "https://via.placeholder.com/150"}
					className={styles.thumbnail}
					alt={article.title}
				/>
				<div className={styles.footer}>
					<h2 className={styles.title}>{article.title}</h2>
					<p className={styles.publishedAt}>
						{formatDate(article.publishedAt)}
					</p>
				</div>
			</div>
			<p className={styles.description}>{article.description}</p>
		</div>
	);
};

export default NewsWidget;
