import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import styles from "../styles/movies.module.css";
import { BASE_URL } from "../constants";
import { GetItem } from "../helpers/storage";
import CardSevice from "../service/cardsApi";
import { getCardsSuccess } from "../slice/cardsSlice";
import { Link } from "react-router-dom";
import loader from "../assets/images/loader/loader.gif";


const Movies = () => {
	const dispatch = useDispatch();
	const { popular,isLoading  } = useSelector((state) => state.cards);

	const getmovies = async () => {
		const responce = await CardSevice.getCards("popular");
		dispatch(getCardsSuccess(responce.results));
	};

	useEffect(() => {
		const token = GetItem("token");

		token && getmovies();
	}, []);

	return (
		<>
			<Navbar />
			<div className={styles.wrapper}>
				{isLoading ? (
					<div className={styles.loader}>
						<img src={loader} alt="loader" />
					</div>
				) : (
					<>
						<h1 className={styles.title}>Movies is trend on Netflix </h1>
						<div className={styles.cards}>
							{popular.map((item, i) => (
								<div className={styles.item} key={i}>
									<Link to={`/more-about/${item.id}`}>
										<img
											className={styles.img}
											src={BASE_URL + item.poster_path}
											alt="movies"
										/>
									</Link>
								</div>
							))}
						</div>
					</>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Movies;
