import axios from "axios";

const CardSevice = {
	async getCards(key, page = 1) {
		const responce = await axios.get(
			`https://api.themoviedb.org/3/movie/${key}?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&page=${page}`
		);

		return responce.data;
	},

	async getSingleCard(id) {
		const responce = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US`
		);

		return responce.data;
	},

	async searchCards(quary, page = 1) {
		const responce = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&query=${quary}&page=${page}&include_adult=false`
		);

		return responce.data;
	},

	async similarCards(id) {
		const responce = await axios.get(
			`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&page=1`
		);

		return responce.data;
	},
};

export default CardSevice;
