import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { AuthProvider } from './context/AuthContext'

import PrivateRoute from "./utils/PrivateRoute.jsx";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ClassroomsPage from "./pages/ClassroomsPage";
import ClassroomPage from "./pages/ClassroomPage";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/about-us" element={<AboutUsPage />} />

						<Route element={<PrivateRoute />}>
							<Route path="/classrooms" element={<ClassroomsPage />} />
							<Route path="/classrooms/:id" element={<ClassroomPage />} />
						</Route>
					</Routes>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
