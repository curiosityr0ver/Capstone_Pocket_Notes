import styles from "./ProfileWidget.module.css";
import profileImg from "../assets/profile.png";
import PropTypes from "prop-types";

function ProfileWidget({ name, email, userName, selectedGenres = [] }) {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<img src={profileImg} alt="profile" />
			</div>
			<div className={styles.profile}>
				<p className={styles.name}>{name}</p>
				<p className={styles.email}>{email}</p>
				<p className={styles.username}>{userName}</p>
				<div className={styles.selectedGenres}>
					{selectedGenres?.slice(0, 4).map((genre, index) => (
						<div key={index} className={styles.genre}>
							{genre}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

ProfileWidget.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	selectedGenres: PropTypes.array,
};

export default ProfileWidget;
