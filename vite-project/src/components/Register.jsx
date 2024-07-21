import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [consent, setConsent] = useState(false);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateForm = () => {
		let newErrors = {};
		if (!name) newErrors.name = "Field is required";
		if (!userName) newErrors.userName = "Field is required";
		if (!email) newErrors.email = "Field is required";
		if (!mobile) newErrors.mobile = "Field is required";
		if (!consent) newErrors.consent = "Check this box if you want to proceed";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = () => {
		if (validateForm()) {
			console.log("Form submitted successfully");
			localStorage.setItem(
				"user",
				JSON.stringify({
					name,
					userName,
					email,
				})
			);
			navigate("/");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.heading}>Super App</h3>
				<h4 className={styles.subheading}>Create your new account</h4>
			</div>
			<div className={styles.form}>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className={errors.name ? styles.errorInput : ""}
					/>
					{errors.name && (
						<span className={styles.errorText}>{errors.name}</span>
					)}
				</div>
				<div className={styles.inputWrapper}>
					<input
						type="text"
						placeholder="Username"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						className={errors.userName ? styles.errorInput : ""}
					/>
					{errors.userName && (
						<span className={styles.errorText}>{errors.userName}</span>
					)}
				</div>
				<div className={styles.inputWrapper}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={errors.email ? styles.errorInput : ""}
					/>
					{errors.email && (
						<span className={styles.errorText}>{errors.email}</span>
					)}
				</div>
				<div className={styles.inputWrapper}>
					<input
						type="tel"
						placeholder="Mobile"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						className={errors.mobile ? styles.errorInput : ""}
					/>
					{errors.mobile && (
						<span className={styles.errorText}>{errors.mobile}</span>
					)}
				</div>
				<div className={styles.checkboxWrapper}>
					<label className={styles.checkboxLabel}>
						<input
							type="checkbox"
							checked={consent}
							onChange={(e) => setConsent(e.target.checked)}
						/>
						Share my registration data with Superapp
					</label>
					{errors.consent && (
						<span className={styles.errorText}>{errors.consent}</span>
					)}
				</div>
				<button className={styles.button} onClick={handleSubmit}>
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
