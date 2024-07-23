import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import { AppContext } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CarouselPage from "./pages/CarouselPage";
import Dashboard from "./pages/Dashboard";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
	const { user, setUser, selectedGenres, setSelectedGenres } =
		useContext(AppContext);

	useEffect(() => {
		console.log(user, selectedGenres);
	}, [user, selectedGenres]);

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
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/movies"
					element={
						<ProtectedRoute>
							<MoviePage />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
export default App;
