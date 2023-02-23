import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Navbar, Slider } from "../components";

import { BASE_URL } from "../constants";
import CardSevice from "../service/cardsApi";
import {
 
	getSingleCardFailore,
	getSingleCardStart,
	getSingleCardSuccess,
} from "../slice/cardsSlice";
import single from "../styles/single.module.css";

const SinglePage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { singleCard,popular } = useSelector((state) => state.cards);

	const getSingleHandler = async (id) => {
    const responce = await CardSevice.getSingleCard(id);
   

    

		dispatch(getSingleCardStart());

		try {
      dispatch(getSingleCardSuccess(responce));
      
		} catch (error) {
			dispatch(getSingleCardFailore(error.message));
		}
	};

	useEffect(() => {
		getSingleHandler(id);
	}, [id]);

	return (
		<>
			<Navbar />
			<div
				className={single.wrapper}
				style={{
					backgroundImage: `url(${BASE_URL}${singleCard?.poster_path})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					width: "100%",
				}}>
				<div
					style={{
						width: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.691)",
					}}>
					<div className={single.container}>
						<div className={single.singleproduct}>
							<div className={single.namefather}>
								<h3 className={single.title}>{singleCard?.title}</h3>
								<h3 className={single.like}>
									Maturity rating:{" "}
									<span>{singleCard?.vote_average}</span>|
									<span> {singleCard?.vote_count}+</span>|
									<span> {singleCard?.status} </span>|
									<span>{singleCard?.genres?.[2]?.name}</span>
								</h3>
								<p className={single.description}>
									{singleCard?.overview}
								</p>
								<p className={single.aktior}>
									<span>В ролях: </span> Антонио Бандерас, Сальма
									Хайек, Зак Галифианакис.
								</p>
								<p className={single.year}>
									<span>Movie year:</span> {singleCard?.release_date}
								</p>
								<p className={single.year}>
									<span>Popularity:</span> {singleCard?.popularity}
								</p>
							</div>

							<img
								src={
									"https://image.tmdb.org/t/p/w500" +
									singleCard?.poster_path
								}
								alt="img-banner"
							/>
						</div>

            <h2 style={{ color: '#a3a3a3', margin: '80px 0px 20px' }}>Other movies</h2>
            
						<Slider data={popular} delay={5000} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SinglePage;
