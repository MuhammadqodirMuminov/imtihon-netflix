import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/NetflixLogoSvg.svg";
import styles from "../styles/navbar.module.css";

const Navigations = () => {
	return (
		<div className={styles.left}>
			<Link to={'/'}>
				<img src={logo} alt="logo" width={"111px"} height={"30px"} />
			</Link>
			<div className={styles.list}>
				<Link className={styles.item} to={"/"}>
					Home
				</Link>
				<Link className={styles.item} to={"/movies"}>
					Movies
				</Link>
				<Link className={styles.item} to={"/multfilm"}>
					Cartons
				</Link>
				<Link className={styles.item} to={"/"}>
					Fovorite
				</Link>
			</div>
		</div>
	);
};

export default Navigations;
