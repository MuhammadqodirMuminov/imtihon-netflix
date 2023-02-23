import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import styles from "../styles/movies.module.css";
import { BASE_URL } from "../constants";
import { GetItem } from "../helpers/storage";
import CardSevice from "../service/cardsApi";
import {
	searchcardsFailore,
	searchCardsStart,
	searchCardsSuccess,
} from "../slice/cardsSlice";
import { Link } from "react-router-dom";
import loader from "../assets/images/loader/loader.gif";

const Movies = () => {
	const dispatch = useDispatch();
	const { searchCards, isLoading } = useSelector((state) => state.cards);

	const getmovies = async () => {
		dispatch(searchCardsStart());
		try {
			const responce = await CardSevice.searchCards("kung fu panda");

			dispatch(searchCardsSuccess(responce.results));
		} catch (error) {
			dispatch(searchcardsFailore(error.message));
		}
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
						<h1 className={styles.title}>Cartons is trend on Netflix </h1>

						<div className={styles.cards}>
							{searchCards?.map((item, i) => (
								<div className={styles.item} key={i}>
									<Link to={`/more-about/${item.id}`}>
										<img
											width={500}
											height={750}
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
