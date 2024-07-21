import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./NewsWidget.module.css";
import formatDate from "../utils/formatDate";
import altThumbnail from "../assets/alt.png";
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
				"https://newsapi.org/v2/everything?q=India&apiKey=0c5c92401f634682b413d8fb58fb70a2";

			const response = await axios.get(url);
			console.log(response.data.articles[0]);
			const randomArticle = Math.floor(
				Math.random() * response.data.articles.length
			);
			setArticle(response.data.articles[randomArticle]);
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
				<img src={article.urlToImage} className={styles.thumbnail} alt={alt} />
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
