import styles from "../styles/navbar.module.css";

import { Link, useNavigate } from "react-router-dom";
import {
	ArrowDropDown,
	Notifications,
	Redeem,
	Search,
} from "@mui/icons-material";
import { useState } from "react";
import Navigations from "./navigations";
import { useDispatch, useSelector } from "react-redux";
import { logOutUSer } from "../slice/authSlice";
import { Autocomplete, Modal, TextField, Tooltip } from "@mui/material";
import ModalContent from "./modal-content";
import { Stack } from "@mui/system";
import { film } from "../constants";

const Navbar = () => {
	const [scroll, setScroll] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	const [display, setDIsplay] = useState(false);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	window.onscroll = () => {
		setScroll(window.scrollY);
	};

	const loaOutHandler = () => {
		dispatch(logOutUSer());
		navigate("/login");
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const searchValue = value.split(" ").join("-");

		navigate(`search/${searchValue}`);
	};

	return (
		<div className={scroll === 0 ? styles.unstyled : styles.navbar}>
			<div className={styles.container}>
				<Navigations />

				<div className={styles.right}>
					<div className={styles.src}>
						<Link to={"/"}>
							<Search
								onClick={() => setDIsplay((prev) => !prev)}
								sx={{
									cursor: "pointer",
									color: "white",
									position: "absolute",
									top: 18,
									right: 10,
									zIndex: 100,
								}}
							/>
						</Link>

						<Stack spacing={2} sx={{ width: 500 }}>
							<Autocomplete
								sx={
									display ? { display: "block" } : { display: "none" }
								}
								freeSolo
								id="free-solo-2-demo"
								disableClearable
								options={film.map((option) => option.title)}
								renderInput={(params) => (
									<form onSubmit={submitHandler}>
										<TextField
											{...params}
											label="Search input"
											InputProps={{
												...params.InputProps,
												type: "search",
											}}
											type="submit"
											sx={{
												color: "white",
												backgroundColor: "rgba(255,255,255,0.2)",
												borderRadius: "5px",
											}}
											value={value}
											onChange={(e) => setValue(e.target.value)}
										/>
									</form>
								)}
							/>
						</Stack>
					</div>
					<Tooltip title="Your Account">
						<p onClick={handleOpen} className={styles.profile}>
							{user?.username}
						</p>
					</Tooltip>

					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<ModalContent user={user} />
					</Modal>

					<Redeem />

					<Tooltip title="Notifications">
						<Notifications />
					</Tooltip>

					<div className={styles.personal}>
						<img
							className={styles.person}
							src={user?.image}
							alt="person"
						/>

						<ArrowDropDown className={styles.drop} />

						<div className={styles.dropped}>
							<Link className={styles.item} to={"/"}>
								Settings
							</Link>
							<Link
								onClick={loaOutHandler}
								className={styles.item}
								to={"/login"}>
								Log out
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
