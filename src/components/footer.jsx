import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";

import styles from "../styles/footer.module.css";

const Footer = () => {
	return (
		<footer>
			<div className={styles["grid-container"]}>
				<div className={styles["grid-item"]}>
					<div className={styles.icons}>
						<span className={styles.span}>
							<Facebook sx={{ fontSize: "42px" }} />
						</span>
						<span className={styles.span}>
							<Instagram sx={{ fontSize: "42px" }} />
						</span>
						<span className={styles.span}>
							<Twitter sx={{ fontSize: "42px" }} />
						</span>
						<span className={styles.span}>
							<YouTube sx={{ fontSize: "42px" }} />
						</span>
					</div>
					<p className={styles.item}>Audio and Subtitle</p>
					<p className={styles.item}>Media Center</p>
					<p className={styles.item}>Privacy</p>
					<p className={styles.item}>Contact Us</p>
					<p className={styles.item}>Service code</p>
					<p className={styles.item}>
						&copy;2021-2023 Netflix,
						inc,(7cBab736-9ae4-4251-9ea9-cf9fdd09f7cc)
					</p>
				</div>
				<div className={styles["grid-item"]}>
					<p className={styles.item}>Audio Description</p>
					<p className={styles.item}>Investor Relations</p>
					<p className={styles.item}>Legal Notices</p>
				</div>
				<div className={styles["grid-item"]}>
					<p className={styles.item}>Help Center</p>
					<p className={styles.item}>Jobs</p>
					<p className={styles.item}>Cookie Preference</p>
				</div>
				<div className={styles["grid-item"]}>
					<p className={styles.item}>Gift Cards</p>
					<p className={styles.item}>Terms Of Use</p>
					<p className={styles.item}>Corperate Information</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
