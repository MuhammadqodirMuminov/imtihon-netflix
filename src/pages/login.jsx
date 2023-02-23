import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ValidationError } from "../components";

import { logo } from "../constants";
import AuthService from "../service/auth";
import {
	signUSerFailore,
	signUserStart,
	signUserSuccess,
} from "../slice/authSlice";
import styles from "../styles/login.module.css";
import { Input } from "../ui/index";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, loggedIn } = useSelector((state) => state.auth);

	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn]);

	const loginHandler = async (e) => {
		e.preventDefault();

		const user = { email, password };

		dispatch(signUserStart());

		try {
			const responce = await AuthService.userLogin(user);

			dispatch(signUserSuccess(responce.user));
			navigate("/");
		} catch (error) {
			dispatch(signUSerFailore(error.response.data.errors));
		}
	};

	return (
		<div className={styles.showcase}>
			<div className={styles.logo}>
				<img width={"100%"} src={logo} alt="logo" />
			</div>

			<div className={styles["showcase-content"]}>
				<form onSubmit={loginHandler} className={styles.formm}>
					<h1 className={styles.title}>Sign In</h1>

					<ValidationError />

					<div className="info">
						<Input
							placeholder={"Email"}
							className={styles.email}
							type={"email"}
							state={email}
							setState={setEmail}
						/>

						<br />

						<Input
							placeholder={"Password"}
							className={styles.email}
							type={"password"}
							state={password}
							setState={setPassword}
						/>
					</div>

					<button
						className={styles["btn-primary"]}
						disabled={isLoading}
						type="submit">
						{isLoading ? "Loading..." : "Sign In"}
					</button>
				</form>
				<div className={styles.signup}>
					<p className={styles.p}>New to Netflix ?</p>
					<Link className={styles.signUpLink} to="/register">
						Sign up now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
