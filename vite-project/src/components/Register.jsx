import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
	const [name, setName] = useState();
	const [userName, setUserName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [consent, setConsent] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Super App</h1>
				<h3 className={styles.subheading}>Create your new account</h3>
			</div>
			<div className={styles.form}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="tel"
					placeholder="Mobile"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
				/>
				<label>
					<input
						type="checkbox"
						checked={consent}
						onChange={(e) => setConsent(e.target.checked)}
					/>
					Share my registration data with Superapp
				</label>
				<button
					className={styles.button}
					disabled={!consent}
					onClick={() => {
						alert("Registered successfully");
					}}
				>
					SIGN UP
				</button>
			</div>
			<div className={styles.footer}>
				<p>
					By clicking on Sign up. you agree to Superapp{" "}
					<span>Terms and Conditions of Use</span>
				</p>
				<p>
					To learn more about how Superapp collects, uses, shares and protects
					your personal data please head Superapp <span>Privacy Policy</span>
				</p>
			</div>
		</div>
	);
}

export default Register;
