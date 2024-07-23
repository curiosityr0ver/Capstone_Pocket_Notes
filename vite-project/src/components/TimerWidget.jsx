import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./TimerWidget.module.css";

const TimerWidget = () => {
	const [totalSeconds, setTotalSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [key, setKey] = useState(0);

	// Update key to reset the CountdownCircleTimer
	useEffect(() => {
		if (isRunning) {
			setKey((prevKey) => prevKey + 1);
		}
	}, [isRunning]);

	// Use effect to stop timer when totalSeconds is 0
	useEffect(() => {
		if (totalSeconds <= 0) {
			setIsRunning(false);
		}
	}, [totalSeconds]);

	const increment = (value) => () => {
		setTotalSeconds((prev) => prev + value);
	};

	const decrement = (value) => () => {
		setTotalSeconds((prev) => (prev - value >= 0 ? prev - value : 0));
	};

	const handleStartStop = () => {
		if (totalSeconds > 0) {
			setIsRunning((prev) => !prev);
		}
	};

	const formatTime = (time) => String(time).padStart(2, "0");

	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return (
		<div className={styles.container}>
			<div className={styles.progress}>
				<CountdownCircleTimer
					key={key}
					isPlaying={isRunning}
					duration={totalSeconds}
					colors={["#FF6A6A"]} // Example thresholds for color changes
					size={170}
					strokeWidth={6}
					strokeLinecap="round"
					trailColor="transparent"
					onComplete={() => setIsRunning(false)}
				>
					{({ remainingTime }) => (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontSize: "2rem",
								fontWeight: "bold",
							}}
						>
							{`${formatTime(Math.floor(remainingTime / 3600))}:${formatTime(
								Math.floor((remainingTime % 3600) / 60)
							)}:${formatTime(remainingTime % 60)}`}
						</div>
					)}
				</CountdownCircleTimer>
			</div>
			<div className={styles.configure}>
				<div className={styles.timeUnits}>
					<div className={styles.timeUnit}>
						<p>Hours</p>
						<i onClick={increment(3600)} className="fas fa-chevron-up" />
						<span>{formatTime(hours)}</span>
						<i onClick={decrement(3600)} className="fas fa-chevron-down" />
					</div>
					<div className={styles.timeUnit}>
						<p>Minutes</p>
						<i onClick={increment(60)} className="fas fa-chevron-up" />
						<span>{formatTime(minutes)}</span>
						<i onClick={decrement(60)} className="fas fa-chevron-down" />
					</div>
					<div className={styles.timeUnit}>
						<p>Seconds</p>
						<i onClick={increment(1)} className="fas fa-chevron-up" />
						<span>{formatTime(seconds)}</span>
						<i onClick={decrement(1)} className="fas fa-chevron-down" />
					</div>
				</div>
				<button onClick={handleStartStop} className={styles.startStopButton}>
					{isRunning ? "Stop" : "Start"}
				</button>
			</div>
		</div>
	);
};

export default TimerWidget;
