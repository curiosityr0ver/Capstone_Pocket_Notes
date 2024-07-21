import React, { useState, useEffect } from "react";
import axios from "axios";

const WikiplaceWidget = () => {
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
			const response = await axios.get(
				"https://en.wikipedia.org/api/rest_v1/page/random/summary"
			);

			if (response.data.type === "standard" && response.data.coordinates) {
				setArticle(response.data);
			} else {
				// If the article is not about a place, fetch another one
				fetchRandomArticle();
			}
		} catch (err) {
			setError("Failed to fetch article. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	if (!article) return null;

	return (
		<div className="wikiplace-widget">
			<h2>{article.title}</h2>
			{article.thumbnail && (
				<img
					src={article.thumbnail.source}
					alt={article.title}
					width={article.thumbnail.width}
					height={article.thumbnail.height}
				/>
			)}
			<p>{article.extract}</p>
			<button onClick={fetchRandomArticle}>Get Another Place</button>
		</div>
	);
};

export default WikiplaceWidget;
