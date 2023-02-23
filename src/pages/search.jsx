import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { BASE_URL } from "../constants";
import CardSevice from "../service/cardsApi";
import {
	searchCardFailore,
	searchCardStart,
	searchCardSuccess,
} from "../slice/searchSlice";
import styles from "../styles/movies.module.css";
import loader from "../assets/images/loader/loader.gif";

const Search = () => {
	const { quary } = useParams();
	const dispatch = useDispatch();
	const { searchCard, isLoading } = useSelector((state) => state.search);

	const getSearchedCard = async () => {
		dispatch(searchCardStart());

		try {
			const key = quary.split("-").join(" ");

			const responce = await CardSevice.searchCards(key);

			dispatch(searchCardSuccess(responce.results));
		} catch (error) {
			dispatch(searchCardFailore(error.message));
		}
	};

	useEffect(() => {
		getSearchedCard();
	}, [quary]);

	return (
		<>
			<Navbar />
			<div
				className={
					searchCard.length !== 0 ? styles.wrapper : styles.unWrapper
				}>
				{isLoading ? (
					<div className={styles.loader}>
						<img src={loader} alt="loader" />
					</div>
				) : (
					<>
						<h1 className={styles.title}>
							{`${quary} qidiruvi bo'yicha ${searchCard.length} ta natija`}{" "}
						</h1>
						<div className={styles.cards}>
							{searchCard?.map((item, i) => (
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

export default Search;
