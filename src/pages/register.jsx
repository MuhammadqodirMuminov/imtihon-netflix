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

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUserName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  
  	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn]);

	const registerHandler = async (e) => {
		e.preventDefault();

		const user = { email, password, username };

		dispatch(signUserStart());

		try {
			const responce = await AuthService.userRegister(user);

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
				<form onSubmit={registerHandler} className={styles.formm}>
					<h1 className={styles.title}>Sign In</h1>

					<ValidationError />

					<div className="info">
						<Input
							placeholder="Username"
							className={styles.email}
							state={username}
							setState={setUserName}
						/>

						<br />

						<Input
							placeholder="Email"
							className={styles.email}
							type={"email"}
							state={email}
							setState={setEmail}
						/>

						<br />

						<Input
							placeholder="Password"
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

export default Register;
