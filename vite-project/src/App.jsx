import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CarouselPage from "./pages/CarouselPage";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		setUser(storedUser);
		setLoading(false);
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return user ? children : <Navigate to="/register" replace />;
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<LandingPage />} />
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/carousel"
					element={
						<ProtectedRoute>
							<CarouselPage />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
