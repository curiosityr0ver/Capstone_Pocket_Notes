import { useState } from "react";
import styles from "./NotesWidget.module.css";

function NotesWidget() {
	const [note, setNote] = useState();

	return (
		<div className={styles.container}>
			<p className={styles.title}>All Notes</p>
			<textarea
				className={styles.textarea}
				value={note}
				onChange={(e) => setNote(e.target.value)}
				placeholder="Enter your notes here"
			></textarea>
		</div>
	);
}

export default NotesWidget;
