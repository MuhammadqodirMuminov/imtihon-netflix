import { Route, Routes } from "react-router-dom";
import { Login, Main, Movies, Multfilm, Register, Search, SinglePage } from "./pages";

const App = () => {
	return (
		<div style={{ maxWidth: "1920px", width: "100%", margin: "0 auto" }}>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/more-about/:id" element={<SinglePage />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/multfilm" element={<Multfilm />} />
				<Route path="/search/:quary" element={<Search />} />
			</Routes>
		</div>
	);
};

export default App;
