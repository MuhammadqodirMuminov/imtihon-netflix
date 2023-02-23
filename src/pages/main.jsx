import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer, Hero, Navbar, SliderWrapper } from "../components";

import { GetItem } from "../helpers/storage";
import AuthService from "../service/auth";
import { signUserSuccess } from "../slice/authSlice";
import loader from "../assets/images/loader/loader.gif";
import styles from "../styles/movies.module.css";

const Main = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading } = useSelector((state) => state.auth);

	const getUser = async () => {
		const responce = await AuthService.getUser();

		dispatch(signUserSuccess(responce.user));
	};

	useEffect(() => {
		const token = GetItem("token");

		token ? getUser() : navigate("/login");
	}, []);

	return (
		<>
			<Navbar />
			{isLoading ? (
				<div className={styles.loaderMain}>
					<img src={loader} alt="loader" />
				</div>
			) : (
				<>
					<Hero />
					<SliderWrapper />
				</>
			)}

			<Footer />
		</>
	);
};

export default Main;
